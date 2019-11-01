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
          {grayListItems}
        </div>

        <div className="col s12 m6 l3">
          {brownListItems}
        </div>

        <div className="col s12 m6 l3">
          {blueGrayListItems}
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


const blueGrayListItems = blueGrayList.map(
  (blueGrayList, index) => 
  <div className="blue-grey" key={index} colornumber={blueGrayList.description}>
  <label>#{blueGrayList.color}</label>
  <span> blue-grey-{blueGrayList.description} </span>
</div>
);



const greyList = [{
  "color":"FAFAFA",
  "description": "000"
},{
  "color":"F5F5F5",
  "description": "100"
},{
  "color":"EEEEEE",
  "description": "200"
},{
  "color":"E0E0E0",
  "description": "300"
},{
  "color":"BDBDBD",
  "description": "400"
},{
  "color":"9E9E9E",
  "description": "500"
},{
  "color":"757575",
  "description": "600"
},{
  "color":"616161",
  "description": "700"
},{
  "color":"424242",
  "description": "800"
},{
  "color":"212121",
  "description": "900"
}];

const grayListItems = greyList.map(
  (greyList, index) => 
  <div className="grey" key={index} colornumber={greyList.description}>
  <label>#{greyList.color}</label>
  <span> grey-{greyList.description} </span>
</div>
);




const brownList = [{
  "color":"EFEBE9",
  "description": "000"
},{
  "color":"D7CCC8",
  "description": "100"
},{
  "color":"BCAAA4",
  "description": "200"
},{
  "color":"A1887F",
  "description": "300"
},{
  "color":"8D6E63",
  "description": "400"
},{
  "color":"795548",
  "description": "500"
},{
  "color":"6D4C41",
  "description": "600"
},{
  "color":"5D4037",
  "description": "700"
},{
  "color":"4E342E",
  "description": "800"
},{
  "color":"3E2723",
  "description": "900"
}];

const brownListItems = brownList.map(
  (brownList, index) => 
  <div className="brown" key={index} colornumber={brownList.description}>
  <label>#{brownList.color}</label>
  <span> grey-{brownList.description} </span>
</div>
);



export default Colors;