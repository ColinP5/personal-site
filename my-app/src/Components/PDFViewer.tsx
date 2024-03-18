import React from 'react';

const PDFViewer: React.FC = () => {
    return (
        <div>
            <iframe id='Resume'
            width="100%" 
            height="500px"
            src='./src/Images/Colin_Parsons_Resume.pdf' >
            </iframe>
        </div>
    )
}

export default PDFViewer;