import React from 'react';
import {Document, Page} from 'react-pdf';

export const PDFViewer = () => {
    return (
        <div>
            <iframe src='./src/Images/Colin_Parsons_Resume.pdf' width="100%" height="500px"/>
        </div>
    )
}

export default PDFViewer;