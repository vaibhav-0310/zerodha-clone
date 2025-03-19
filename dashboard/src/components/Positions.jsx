import React, {useState,useEffect} from "react";
import axios from "axios";
const Positions = () => {
   
  const [positions,setPositions]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allPositions")
    .then((res)=>{
      setPositions(res.data);
    })
    .catch((e)=>{
      console.log(e);
    });
  },[])

  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index)=>{
             const currVal=stock.price * stock.qty;
             const isProfit= currVal-stock.avg*stock.qty  >= 0.0;
             const profClass=isProfit ? "profit":"loss";
             const dayChange= stock.isLoss ? "loss":"profit";

             return(
              <tr key={index} >
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td className={profClass}>{(currVal-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={dayChange }>{stock.day}</td>
            </tr>
             );
           })}

        </table>
      </div>
    </>
  );
};

export default Positions;
