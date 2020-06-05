import React from "react";

// stateless UI, not rendered
export default function FunctionUI(props) {
   // props = each individual function component from ui.js
   // create function to render inputs
   // loops through each number of inputs, push html input into empty input array
   function renderInputs(num) {
      const inputs = [];
      for (let i = 0; i < num; i++) {
         const id = `${props.name}, ${i}`;

         inputs.push(
            // push input elements into inputs array
            <input
               key={id}
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
            <button className="btn btn-primary inline-action">Run</button>
         </div>
         <div className="clearfix mb-3"></div>
         <div className="alert alert-primary" style={{ display: "none" }}></div>
         <div className="alert alert-danger" style={{ display: "none" }}></div>
      </div>
   );
}
