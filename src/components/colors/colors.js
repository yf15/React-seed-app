import React, { Component } from "react";
import "./colors.css";
import Lists from "./colors.json";

class Colors extends Component {

  render() {
    return (
      <div className="row colors">

        <div className="col s12 m6 l3">
          {greenListItems}
        </div>

        <div className="col s12 m6 l3">
          {cyanListItems}
        </div>

        <div className="col s12 m6 l3">
          {blueListItems}
        </div>

        <div className="col s12 m6 l3">
          {darkBlueListItems}
        </div>



        <div className="col s12 m6 l3">
          {yellowListItems}
        </div>

        <div className="col s12 m6 l3">
          {orangeListItems}
        </div>


        <div className="col s12 m6 l3">
          {deepOrangeListItems}
        </div>

        <div className="col s12 m6 l3">
          {brownListItems}
        </div>

        <div className="col s12 m6 l3">
          {grayListItems}
        </div>

        <div className="col s12 m6 l3">
          {blueGrayListItems}
        </div>

      </div>
    );
  }
}

const generateListItems = (list, className) =>
  list.map((list, index) =>
    <div className={className} key={index} colornumber={list.description}>
      <label> #{list.color} </label>
      <span> {className}-{list.description} </span>
    </div>
  );

const blueGrayListItems = generateListItems(Lists.blueGrayList, "blue-grey");
const grayListItems = generateListItems(Lists.greyList, "grey");
const brownListItems = generateListItems(Lists.brownList, "brown");
const deepOrangeListItems = generateListItems(Lists.deepOrangeList, "deep-orange");
const orangeListItems = generateListItems(Lists.orangeList, "orange");
const yellowListItems = generateListItems(Lists.yellowList, "yellow");
const greenListItems = generateListItems(Lists.greenList, "green");
const cyanListItems = generateListItems(Lists.cyanList, "cyan");
const blueListItems = generateListItems(Lists.blueList, "blue");
const darkBlueListItems = generateListItems(Lists.darkBlueList, "dark-blue");

export default Colors;