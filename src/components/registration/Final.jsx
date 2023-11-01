
import React from "react";
import Pdf from './Pdf';
import { PDFDownloadLink } from "@react-pdf/renderer";


const Final = () => {
  return (
    <div className="Final">
      <PDFDownloadLink document={<Pdf />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default Final;