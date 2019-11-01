import React, { Component } from "react";
import "./colors.css";
import Lists from "./colors.json";

class Colors extends Component {
  
  render() {
    return (
      <div className="row colors">
        <div className="col s12 m6 l3">
          {blueGrayListItems}
        </div>

        <div className="col s12 m6 l3">
          {grayListItems}
        </div>

        <div className="col s12 m6 l3">
          {brownListItems}
        </div>

        <div className="col s12 m6 l3">
          {deepOrangeListItems}
        </div>

      </div>
    );
  }
}

const generateListItems = (list, className, ) =>
  list.map((list, index) => 
  <div className={className} key={index} colornumber={list.description}>
    <label>#{list.color}</label>
    <span> {className}-{list.description} </span>
  </div>
  );

const blueGrayListItems = generateListItems(Lists.blueGrayList, "blue-grey");
const grayListItems = generateListItems(Lists.greyList, "grey");
const brownListItems = generateListItems(Lists.greyList, "brown");
const deepOrangeListItems = generateListItems(Lists.greyList, "deep-orange");

export default Colors;