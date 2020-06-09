import React from "react";
import utils from "../utils/utils";
import { convertDataType } from "../utils/helpers";

export default class FunctionUI extends React.Component {
   constructor() {
      super();
      // default state
      this.state = {
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "",
      };
   }

   toggleCodeDisplay() {
      // shows code if it is hidden, hides if it is shown
      if (this.state.isCodeDisplayed === false) {
         this.setState({ isCodeDisplayed: true });
      } else {
         this.setState({ isCodeDisplayed: false });
      }
   }

   getUserInput() {
      const props = this.props;
      // console.log(props.name);
      const inputValues = [];
      for (let i = 0; i < props.inputs; i++) {
         // loop through the input of each prop
         const element = document.getElementById(`input-${props.name}-${i}`); // get the id of each input property name "input-(name of function)-(input number)"
         const value = element.value;
         const convertedValue = convertDataType(value);
         inputValues.push(convertedValue);
      }
      console.log(inputValues);
      const result = utils[props.name](...inputValues);
      console.log(result);
      this.setState({
         result: JSON.stringify(result),
         isResultDisplayed: true,
      });
   }

   render() {
      const props = this.props;
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

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <p className="name" onClick={() => this.toggleCodeDisplay()}>
               <b>{props.name}</b> - {props.desc}
            </p>
            {this.state.isCodeDisplayed && (
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )}
            <div className="actions float-right">
               {/* input fields */}
               {/* render array of elements */}
               {renderInputs(props.inputs)}
               <button
                  className="btn btn-primary inline-action"
                  onClick={() => this.getUserInput()} // runs getUserInput function when button is clicked
               >
                  Run
               </button>
            </div>
            <div className="clearfix mb-3"></div>
            {this.state.isResultDisplayed && (
               <div className="alert alert-primary">{this.state.result}</div>
            )}
         </div>
      );
   }
}
