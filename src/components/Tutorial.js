import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import VideoList from './VideoList';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { Document, Page } from 'react-pdf';


const Tutorial = (props) => {

    if (props.location.content != null) sessionStorage.setItem('content', JSON.stringify(props.location.content));
    var content = JSON.parse(sessionStorage.getItem('content'));

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Container fluid>
            <NavBar title="Tech Teacher" displaySearch={false} />
            {content.pdfData != null &&
                <embed className="m-3" title="scamPdf" src={content.pdfData} width="80%" height={window.innerHeight / 1.2} scrolling="auto" frameBorder="0" type="application/pdf" ></embed>
            }`
            {content.videos != null && <Container className="my-3"><Row><VideoList videos={content.videos} /></Row></Container>}
        </Container>
    );

}

export default Tutorial;