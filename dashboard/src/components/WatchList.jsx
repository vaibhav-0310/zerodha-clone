import React, {useState} from "react";
import {Tooltip, Grow, stepClasses} from "@mui/material";
import {watchlist} from "../data/data.js";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHorizOutlined} from "@mui/icons-material";
import { PieChart } from "./pieChart.jsx";

const WatchList = () => {

  const labels=watchlist.map((subArray)=>subArray["name"]);
  const data={
    labels,
    datasets:[{
      label: "price",
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.58)',
        'rgba(54, 162, 235, 0.58)',
        'rgba(255, 206, 86, 0.58)',
        'rgba(75, 192, 192, 0.58)',
        'rgba(153, 102, 255, 0.58)',
        'rgba(255, 159, 64, 0.58)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
  }]
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return <WatchListItem stock={stock} key={index}/>
        })}
      </ul>
      <PieChart data={data}/>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListAction uid={stock.name} />}
    </li>
  );
};


const WatchListAction=({uid})=>{
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
         <button className="action"> <BarChartOutlined className="icon"/></button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"> <MoreHorizOutlined className="icon"/></button>
        </Tooltip>
      </span>
    </span>
  )
}