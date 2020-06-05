import React from "react";
import "./style/master.scss"; // applies global scss
import { uiData } from "./data/ui"; // import array of objects from data/ui
import FunctionUI from "./components/FunctionUI";

export default class App extends React.Component {
   // everything that the webpage needs
   // happens before page is rendered
   // constructor method is a function that exists in the class we named App
   constructor() {
      // super() enables use of a top level this.
      super();
      console.log(uiData);
      // state object that stores property values that belong to the component
      // when state object changes, the component re-renders
      this.state = {
         isFavoritesChecked: false,
         // all/displayedFuncs = array of objects (uiData)
         allFuncs: uiData,
         displayedFuncs: uiData,
      };
   }

   toggleFavorites(e) {
      // targets state object and changes isFavoritesChecked property value to opposite of its current value
      this.setState({ isFavoritesChecked: !this.state.isFavoritesChecked });
      // checks id of the radio button user clicked, viewModeFavorites or viewModeAll
      const userInput = e.target.id;
      console.log(userInput);
      // makes copy of uiData
      const allFuncs = [...this.state.allFuncs];
      if (userInput === "viewModeFavorites") {
         // filters through all function components and returns all that are favorited
         const filteredFuncs = allFuncs.filter((func) => {
            return func.isFavorite === true;
         });
         console.log(filteredFuncs);
         // display all filtered funcitons
         this.setState({ displayedFuncs: filteredFuncs });
      } else {
         // display all functions
         this.setState({ displayedFuncs: allFuncs });
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
                  {/* show all radio input */}
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewModeAll"
                        name="viewMode"
                        className="custom-control-input"
                        // if favorites radio is not checked, then this input is checked
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
                  {/* favorites radio input */}
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewModeFavorites"
                        name="viewMode"
                        className="custom-control-input"
                        // if favorites radio is checked, == true
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
                     {/* search bar */}
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
                     {/* sort dropdown menu */}
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
                  const { name, desc, inputs } = functionUI; // object is functionUI, we are pulling out keys (name, desc, inputs) -- destructuring
                  return (
                     // return a component
                     <FunctionUI
                        // key is similar to id in which it needs to be unique. since all function names are unique, set key={name} (function name)
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
