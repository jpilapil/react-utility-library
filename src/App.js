import React from "react";
import "./style/master.scss"; // applies global scss
import { uiData } from "./data/ui"; // import uiData from data/ui
import FunctionUI from "./components/FunctionUI";

export default class App extends React.Component {
   // everything that the webpage needs
   // happens before page is rendered
   // constructor method is a function that exists in the class we named App
   constructor() {
      super();
      console.log(uiData);
      this.state = {
         isFavoritesChecked: false,
         allFuncs: uiData,
         displayedFuncs: uiData,
      };
   }

   toggleFavorites(e) {
      this.setState({ isFavoritesChecked: !this.state.isFavoritesChecked });
      const userInput = e.target.id; // checks id of the radio button user clicked, viewModeFavorites or viewModeAll
      console.log(userInput);
      const allFuncs = [...this.state.allFuncs];
      if (userInput === "viewModeFavorites") {
         const filteredFuncs = allFuncs.filter((func) => {
            return func.isFavorite === true;
         });
         console.log(filteredFuncs);
         this.setState({ displayedFuncs: filteredFuncs }); // display all filtered funcitons
      } else {
         this.setState({ displayedFuncs: allFuncs }); // display all functions
      }
   }

   // render things in constructor
   // render method is a function that exists in the class we named App
   render() {
      const getFunctionsNum = () => {
         // gets the number of functions from uiData array
         return uiData.length;
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Function Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()} functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewModeAll"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        // in the event that show all radio button is clicked, run toggleFavorites function
                        onChange={(e) => {
                           this.toggleFavorites(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewModeAll"
                     >
                        Show All
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewModeFavorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewModeFavorites"
                     >
                        Favorites
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="searchInput"
                           id="searchInput"
                        />
                     </div>
                     <div className="col-6">
                        <select className=" form-control">
                           <option>Most recent</option>
                           <option>Oldest</option>
                           <option>A - Z</option>
                           <option>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>

               {this.state.displayedFuncs.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;
                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
               <h1 className="text-primary">carne</h1>
            </div>
         </div>
      );
   }
}
