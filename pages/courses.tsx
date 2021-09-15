import * as React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { posts as postsFromCMS } from "../content";

function Courses({ posts }) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "auto",
          display: "grid",
          columnGap: "1",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts.map((post) => (
            <Grid item xs={12} md={6}>
              <CardActionArea component="a">
                <Card sx={{ display: "flex" }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Posted on: {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.summary}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      <Link href={`/blog/${post.slug}`}>
                        Continue reading...
                      </Link>
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                    image={post.image}
                    alt={post.imageLabel}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Courses;

// export async function getStaticProps() {
//   // Get files from posts directory
//   const files = fs.readdirSync(path.join("posts"));

//   // Get slug and frontmatter from posts
//   const posts = files.map((filename) => {
//     // Create slug
//     const slug = filename.replace(".md", "");

//     // Get frontmatter
//     const markdownWithMeta = fs.readFileSync(
//       path.join("posts", filename),
//       "utf-8"
//     );

//     const { data: frontmatter } = matter(markdownWithMeta);

//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getStaticProps(ctx) {
  // Posts from CMS
  const cmsPosts = (ctx.preview ? postsFromCMS.draft : postsFromCMS.published).map((post) => {
    const { data } = matter(post); // Convert to JSON
    return data;
  });

  // Posts from File System
  const postPath = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postPath); // Read directory
  const filePosts = filenames.map((name) => {
    const fullPath = path.join(process.cwd(), "posts", name);
    const file = fs.readFileSync(fullPath, "utf-8"); // Read file
    const { data } = matter(file);
    return data;
  });

  const posts = [...cmsPosts, ...filePosts];

  return {
    props: { posts },
  };
}
