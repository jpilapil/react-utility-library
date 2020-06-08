import React from "react";
import utils from "../utils/utils";
import { convertDataType } from "../utils/helpers";

export default class FunctionUI extends React.Component {
   constructor() {
      super();
      this.state = {
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "",
      };
   }

   render() {
      const props = this.props;
      console.log(utils.add(4, 5));
      // props = each individual function component from ui.js
      // create function to render inputs
      // loops through each number of inputs, push html input into empty input array
      function renderInputs(num) {
         const inputs = [];
         for (let i = 0; i < num; i++) {
            // creates an id which contains the prop name and the current number input
            const id = `input-${props.name}-${i}`;
            inputs.push(
               // push input elements into inputs array
               <input
                  key={id}
                  // shows the function name + input number as an id
                  id={id}
                  type="text"
                  className="form-control inline-action"
               />
            );
         }
         return inputs;
      }

      function getUserInput() {
         console.log(props.name);
         const inputValues = [];
         for (let i = 0; i < props.inputs; i++) {
            // loop through the input of each prop
            const element = document.getElementById(`input-${props.name}-${i}`); // get the id of each input property name
            const value = element.value;
            const convertedValue = convertDataType(value);
            inputValues.push(convertedValue);
         }
         console.log(inputValues);
         const result = utils[name](...inputValues);
      }

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <p className="name">
               {/* &nbsp; adds white space */}
               <b>{props.name}</b>&nbsp;-&nbsp;{props.desc}
            </p>
            <pre style={{ display: "none" }}>
               <code></code>
            </pre>
            <div className="actions float-right">
               {/* input fields */}
               {/* render array of elements */}
               {renderInputs(props.inputs)}
               <button
                  className="btn btn-primary inline-action"
                  onClick={() => getUserInput()}
               >
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
   }
}
