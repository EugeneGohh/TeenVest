import React, { FC, useState, useEffect, useRef } from "react";
import { Spinner, Text, Tabs } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import EditorJS from "@editorjs/editorjs";
import { useThrottleCallback } from "@react-hook/throttle";

// Remove input image feature

const saveEditor = async (docId: string, data: any) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/doc/${docId}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

const Editor: FC<{ docId: string; content: any }> = ({ content, docId }) => {
  const editor = useRef(null);
  const [saving, setSaving] = useState(false);
  const [doneSaving, setDoneSaving] = useState(false);

  const save = useThrottleCallback(async () => {
    if (editor.current) {
      const data = await editor.current;

      setSaving(true);
      setDoneSaving(false);

      await saveEditor(docId, { content: data });

      setTimeout(() => {
        setSaving(false);
        setDoneSaving(true);

        setTimeout(() => {
          setDoneSaving(false);
        }, 3000);
      }, 2500);
    }
  }, 30);

  useEffect(() => {
    const editorJs = new EditorJS({
      tools: EDITOR_JS_TOOLS,
      holder: "editorjs",
      data: content,
      autofocus: true,
      placeholder: "Write your notes here",
      onChange: save,
    });

    return () => {
      if (editor.current) {
        try {
          editor.current;
        } catch {
          console.warn("error destroying editor");
        }
      }
    };
  }, [save, content]);

  return (
    <Tabs width="100%" position="relative">
      <div id="editorjs" style={{ width: "100%" }} />
      {saving || doneSaving ? (
        <Tabs
          position="fixed"
          top={220}
          right={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
          elevation={1}
          zIndex={9999}
          background="white"
          padding={2}
          borderRadius={4}
        >
          <Tabs mr={2}>{saving ? <Spinner /> : <CheckIcon />}</Tabs>

          <Text>{saving ? "...auto saving" : "saved"}</Text>
        </Tabs>
      ) : null}
    </Tabs>
  );
};

Editor.defaultProps = {
  content: {},
};

export default Editor;
