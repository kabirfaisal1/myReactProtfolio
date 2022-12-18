import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumepdf from "../../assets/KabirFaisal.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function Resume() {
  const [width, setWidth] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber =>prevPageNumber + offSet);
  }

  function changePageBack(offSet){
    changePage(-1);
  }

  function changePageForward(offSet){
    changePage(+1);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumepdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      
        <Row className="resume">
        
          <Document file={resumepdf} className="d-flex justify-content-center" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          {/* {pageNumber >1 &&
          <Button data-test-id="previous-page-button" onClick={changePageBack()}>Previous Page 
          </Button>
          }
          {pageNumber < numPages &&
          <Button data-test-id="forward-page-button" onClick={changePageForward(numPages)}>Next Page 
          </Button>
          } */}
        
        </Row>
     
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumepdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
