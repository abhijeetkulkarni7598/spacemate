
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// Define the URL for the PDF
const url = 'http://localhost:8000/media/uploads/Insem.pdf';

export default function PdfViewer({item,data}) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1); // Remove state for pageNumber

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const docs = [
    { uri: data }, // Remote file
    // { uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  return (
    <>
      <div className="pdf-container">
      
      <DocViewer initialScale={10} style={{ width: "100%", height: 700 }} documents={docs} pluginRenderers={DocViewerRenderers} />
      </div>
    </>
  );
}

  

// const PdfViewer = () => {
//   const pdfURL = 'http://localhost:8000/media/uploads/emp-datademo4.pdf';
//   const handleSavePdf = async () => {
//     try {
//       const response = await fetch(pdfURL);
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(new Blob([blob]));
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'emp-datademo4.pdf';
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Error while saving PDF:', error);
//     }
//   };
//   return (
//     <div>
//       <iframe title="PDF Viewer" src={pdfURL} width="100%" height="600px" />
//       <button onClick={handleSavePdf}>Save PDF</button>
//     </div>
//   );
// };


// export default PdfViewer;
