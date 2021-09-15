import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { posts } from "../../content";

export default function PostPage({ source, frontMatter }) {
  return (
    <div>
      <p>{frontMatter.title}</p>
      <p>{frontMatter.date}</p>

      <MDXRemote {...source} lazy />
    </div>
  );
}

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join("posts"));
//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const markdownWithMeta = fs.readFileSync(
//     path.join("posts", `${slug}.md`),
//     "utf-8"
//   );

//   const { data: frontmatter, content } = matter(markdownWithMeta);

//   return {
//     props: {
//       frontmatter,
//       content,
//       slug,
//     },
//   };
// }

export async function getStaticPaths() {
  // Path from filesystem
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map((name) => {
    const filePath = path.join(postsDirectory, name);
    const file = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(file);
    return data;
  });
  // Don't get path from CMS let fallback handle
  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview }) {
  let post;

  try {
    // Posts from file system
    const postPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
    post = fs.readFileSync(postPath, "utf-8");
  } catch {
    // Posts from CMS
    const collection = preview ? posts.draft : posts.published;
    post = collection.find((p) => {
      const { data } = matter(p);
      return data.slug === params.slug;
    });
  }

  if (!post) {
    throw new Error("no post");
  }

  const { content, data } = matter(post);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
