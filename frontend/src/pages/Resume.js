import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdf from "../assets/felix_chen_resume.pdf";
import React from "react";
import { Box } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  return (
    <Box sx={{ mb: "120px" }}>
      <Box sx={{ mx: "auto", width: "600px" }}>
        <Document file={pdf}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Box>
    </Box>
  );
};

export default Resume;
