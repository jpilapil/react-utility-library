import React, { Component } from "react";
import "./style/master.scss"; // applies global scss
import { uiData } from "./data/ui"; // import uiData from data/ui

export default class App extends Component {
   // everything that the webpage needs
   // happens before page is rendered
   // constructor method is a function that exists in the class we named App
   constructor() {
      super();
      console.log(uiData);
   }

   // render things in constructor
   // render method is a function that exists in the class we named App
   render() {
      // console.log(uiData);
      return (
         <div className="container">
            <div className="row">
               {uiData.map((component) => {
                  return (
                     <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                        <p className="name">
                           {/* &nbsp; adds white space */}
                           <b>{component.name}</b>&nbsp;-&nbsp;{component.desc}
                        </p>
                        <pre style={{ display: "none" }}>
                           <code></code>
                        </pre>
                        <div className="actions float-right">
                           <input
                              type="text"
                              className="form-control inline-action"
                           />
                           <input
                              type="text"
                              className="form-control inline-action"
                           />
                           <button className="btn btn-primary inline-action">
                              Run
                           </button>
                        </div>
                        <div className="clearfix mb-3"></div>
                        <div
                           className="alert alert-primary"
                           style={{ display: "none" }}
                        ></div>
                        <div
                           className="alert alert-danger"
                           style={{ display: "none" }}
                        ></div>
                     </div>
                  );
               })}
               <h1 className="text-primary">carne</h1>
            </div>
         </div>
      );
   }
}
