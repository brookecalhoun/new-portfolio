import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/resume.pdf";

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div className="main">
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          className="resume-pdf"
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <div className="pagec">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </div>
          <div className="buttonc">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="Pre"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="Post"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import {
//   pdf,
//   Document,
//   Page,
//   Text,
// } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import resume from '../assets/resume.pdf'

// const DocumentPdf = ({ someString }) => (
//   <Document>
//     <Page>
//       <Text>Hey look at this string: {someString}</Text>
//     </Page>
//   </Document>
// );

// const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

// async function getProps() {
//   await delay(1_000);
//   return ({
//     someString: 'You waited 1 second for this',
//   });
// }

// export const Resume = () => (
//   <button
//     onClick={async () => {
//       const props = await getProps();
//       const doc = <DocumentPdf {...props} />;
//       const asPdf = pdf(); // {} is important, throws without an argument
//       asPdf.updateContainer(doc);
//       const blob = await asPdf.toBlob();
//       saveAs(blob, 'document.pdf');
//     }}
//   >
//     Download PDF
//   </button>
// );
// export default Resume
