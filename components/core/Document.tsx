import React, { FC } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./Editor"), { ssr: false });

const DocumentPanel: FC<{ doc: any }> = ({ doc }) => {
  return (
    <div>
      <Editor content={doc} docId={doc} />
    </div>
  );
};

export default DocumentPanel;
