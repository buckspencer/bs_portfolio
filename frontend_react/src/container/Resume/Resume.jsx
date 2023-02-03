import "./Resume.scss";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import { Document, Page, pdfjs } from "react-pdf";

import React from "react";
import { images } from "../../constants";

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <>
      <div>
        <Document
          file={images.resume}
          onLoadError={console.error}
          style={{ width: "100vw", height: "auto" }}
        >
          <Page pageIndex={0} />
        </Document>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Resume, "app__resume"),
  "resume",
  "app__whitebg"
);
