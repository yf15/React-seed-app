import React, { Component } from "react";
import "./colors.css";

class Colors extends Component {
  render() {
    return (
      <div className="row colors">
        <div className="col s12 m6 l3">
          {blueGrayListItems}
        </div>

        <div className="col s12 m6 l3">
          {blueGrayListItems}
        </div>

        <div className="col s12 m6 l3">
          {blueGrayListItems}
        </div>


        <div className="col s12 m6 l3">
          <div className="blue-grey" colornumber="000">
            <label>#ECEFF1</label>
            <span> blue-grey-000 </span>
          </div>
          <div className="blue-grey" colornumber="100">
            <label>#CFD8DC</label>
            <span> blue-grey-100 </span>
          </div>
          <div className="blue-grey" colornumber="200">
            <label>#B0BEC5</label>
            <span> blue-grey-200 </span>
          </div>
          <div className="blue-grey" colornumber="300">
            <label>#90A4AE</label>
            <span> blue-grey-300 </span>
          </div>
          <div className="blue-grey" colornumber="400">
            <label>#78909C</label>
            <span> blue-grey-400 </span>
          </div>
          <div className="blue-grey" colornumber="500">
            <label>#607D8B</label>
            <span> blue-grey-500 </span>
          </div>
          <div className="blue-grey" colornumber="600">
            <label>#546E7A</label>
            <span> blue-grey-600 </span>
          </div>
          <div className="blue-grey" colornumber="700">
            <label>#455A64</label>
            <span> blue-grey-700 </span>
          </div>
          <div className="blue-grey" colornumber="800">
            <label>#37474F</label>
            <span> blue-grey-800 </span>
          </div>
          <div className="blue-grey" colornumber="900">
            <label>#263238</label>
            <span> blue-grey-900 </span>
          </div>
        </div>


      </div>
    );
  }
}


const blueGrayList = [{
  "color":"ECEFF1",
  "description": "000"
},{
  "color":"CFD8DC",
  "description": "100"
},{
  "color":"B0BEC5",
  "description": "200"
},{
  "color":"90A4AE",
  "description": "300"
},{
  "color":"78909C",
  "description": "400"
},{
  "color":"607D8B",
  "description": "500"
},{
  "color":"546E7A",
  "description": "600"
},{
  "color":"455A64",
  "description": "700"
},{
  "color":"37474F",
  "description": "800"
},{
  "color":"263238",
  "description": "900"
}];

const blueGrayListItems = blueGrayList.map((blueGrayList, index) =>
<div className="blue-grey" key={index} colorNumber={blueGrayList.description}>
  <label>#{blueGrayList.color}</label>
  <span> blue-grey-{blueGrayList.description} </span>
</div>
);

export default Colors;