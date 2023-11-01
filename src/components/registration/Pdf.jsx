import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./style.css"
import { useSelector } from "react-redux";
const Pdf = () => {

  const{signupData} = useSelector((state)=>state.auth);
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then(async (data) => {
//         setData(data);
//       })
//       .then((json) => console.log(json));
//   }, []);

  const exportPdf = async () => {
    const doc = new jsPDF({ orientation: "landscape" });

    doc.autoTable({
      html: "#my-pdf",
      css:"#my-pdf"
    });

    doc.save("mypdf.pdf");
  };

  return (
    <div style={{ padding: "30px" }}>
      <button
        className="btn btn-primary float-end mt-2 mb-2"
        onClick={exportPdf}
      >
        Export
      </button>
     
      <table className="table table-bordered" id="my-pdf">
        <h1 id="my-pdf">heee</h1>
        <tbody style={{ background: "while" }}>
          <tr>
            <th  scope="col">Full Name</th>
            {/* <th scope="col">`{signupData.fullName}`</th> */}
          <th  scope="col"></th>
          <th  scope="col"></th>
          <th  scope="col"></th>

          
          </tr>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          
          </tr>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          
          </tr>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          
          </tr>
          <tr>
           
            <th colSpan={2} scope="col">Title</th>
          
          </tr>

        </tbody>
        {/* <tbody>
          {Array.isArray(data?.products) &&
            data?.products?.map((row) => (
              <tr>
                <td>{row?.id}</td>
                <td>{row?.title}</td>
                <td>{row?.brand}</td>
                <td>{row?.category}</td>
                <td>${row?.price}</td>
                <td>{row?.rating}/5</td>
              </tr>
            ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default Pdf;


