import React from "react";
const ResumeBtn = () => {
    // Handler for PDF download
    const downloadPDF = () => {
      const link = document.createElement("a");
      link.href = "Shubham.pdf"; // PDF file imported in the project
      link.download = "Shubham.pdf"; // The name of the downloaded file
      link.click(); // Programmatically click the link to trigger download
    };
    return (

        <div className="">
        <button
          onClick={downloadPDF}
          className="px-4 py-[0.2rem] bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg shadow-blue-700/50 hover:bg-blue-600 focus:outline-none transform transition-all duration-200 active:translate-y-1 active:shadow-sm tracking-wider  "
        >
          Resume
        </button>
      </div>
    );
  };
export default ResumeBtn;
