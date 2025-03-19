import React, {useState,useEffect} from "react";
import axios from "axios";
import {VerticalGraph} from "./verticalGraph.jsx";

const Holdings = () => {
  
  const [holdings,setHoldings]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allHoldings")
    .then((res)=>{
      setHoldings(res.data);
      console.log("holdings updated");
    })
    .catch((e)=>{
      console.log(e);
    });
  },[]);

  const labels = holdings.map((subArray)=>subArray["name"]);

  const data = {
  labels,
  datasets: [
    {
      label: 'Stock price',
      data: holdings.map((stock)=>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      <hr style={{height:"1px",color:"gray"}}></hr>

      <div className="row" style={{marginBottom:"30px"}}>
        <div className="col">
          <p>Total investment</p>
          <h5 style={{fontSize:"20px"}}>
            29,875.55
          </h5>
          
        </div>
        <div className="col">
        <p>Current value</p>
          <h5 style={{fontSize:"20px"}}>
            31,428.95
          </h5>
          
        </div>
        <div className="col">
        <p>P&L</p>
          <h5 style={{fontSize:"20px"}}>1,553.40 (+5.20%)</h5>
          
        </div>
      </div>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
           
           {holdings.map((stock, index)=>{
             const currVal=stock.price * stock.qty;
             const isProfit= currVal-stock.avg*stock.qty  >= 0.0;
             const profClass=isProfit ? "profit":"loss";
             const dayChange= stock.isLoss ? "loss":"profit";

             return(
              <tr key={index} >
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currVal.toFixed(2)}</td>
            <td className={profClass}>{(currVal-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayChange }>{stock.day}</td>
            </tr>
             );
           })}

        </table>
      </div>
    <VerticalGraph data={data}/>
    
    </>
  );
};

export default Holdings;
