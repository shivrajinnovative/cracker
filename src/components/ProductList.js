import React from 'react'
import ProductGroup from './ProductGroup'
import products from '../data/productData'
import { useSelector } from 'react-redux'
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';



export default function ProductList() {
  const billData= useSelector((state)=>state.bill)
  // console.log(billData)

  const generatePDF = () => {
    const doc = new jsPDF();

    // Company Information
    doc.setFontSize(18);
    // doc.text('Your Company Name', 10, 10);
    // doc.setFontSize(11);
    // doc.text('Company Address Line 1', 10, 16);
    // doc.text('Company Address Line 2', 10, 22);
    // doc.text('Phone: (123) 456-7890', 10, 28);
    // doc.text('Email: info@company.com', 10, 34);

    // Add a separator line
    // doc.line(10, 40, 200, 40);

    // Customer Information
    // doc.setFontSize(14);
    // doc.text('Bill To:', 10, 50);
    // doc.setFontSize(11);
    // doc.text(`Name: ${billData.customerName}`, 10, 56);
    // doc.text(`Address: ${billData.customerAddress}`, 10, 62);
    // doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 68);

    // Add a separator line
    // doc.line(10, 74, 200, 74);

    // Items Table
    const tableColumn = ["id","Item", "Quantity", "Price", "Total"];
    const tableRows = [];
    let totalPrice=0
    billData.forEach(item => {
      const itemData = [
        item.id,
        item.name,
        item.quantity,
        `Rs. ${item.price}`,
        `Rs. ${item.total}`
      ];
      tableRows.push(itemData);
      totalPrice+=item.total
    });

    doc.autoTable({
      startY: 10,
      head: [tableColumn],
      body: tableRows,
    });

    // Total Amount
    const finalY = doc.lastAutoTable.finalY || 80;
    doc.setFontSize(12);
    doc.text(`Total: Rs. ${totalPrice}`, 10, finalY + 10);

    // Footer
    // doc.setFontSize(10);
    // doc.text('Thank you for your business!', 10, finalY + 30);

    // Save the PDF
    doc.save('bill.pdf');
  };


  return (
    <div>
      <div className="accordion" id="accordionExample">
        {
          products.map((product, index) => {
              return <ProductGroup product={product} id="1" key={index} />
          })
        }
      </div>
      <button className='position-fixed bottom-0 btn btn-warning end-0 m-5 shadow-lg' onClick={generatePDF} >Download Bill</button> 
    </div>
  )
}