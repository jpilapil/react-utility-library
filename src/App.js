import React from "react";
import "./style/master.scss"; // applies global scss
import { uiData } from "./data/ui"; // import array of objects from data/ui
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy"; // imports orderBy function from lodash

export default class App extends React.Component {
   // everything that the webpage needs
   // happens before page is rendered
   // constructor method is a function that exists in the class we named App
   constructor() {
      super(); // super() enables use of a top level this.
      console.log(uiData);
      // state object that stores property values that belong to the component
      // when state object changes, the component re-renders

      this.state = {
         // default state
         isFavoritesChecked: false,
         allFuncs: orderBy(uiData, "order", "desc"), // all/displayedFuncs = array of objects (uiData)
         displayedFuncs: orderBy(uiData, "order", "desc"),
         orderBy: '["order", "desc"]', // string of array
      };
   }

   filterFuncs(e) {
      // checks id of the radio button user clicked, true or false
      const favoritesRadioChecked = document.getElementById("viewModeFavorites")
         .checked;
      const searchInput = document // gets whatever user types into search field, converts to lowercase
         .getElementById("searchInput")
         .value.toLowerCase();
      // makes copy of uiData
      const allFuncs = [...this.state.allFuncs];
      if (favoritesRadioChecked) {
         this.setState({ isFavoritesChecked: true }); // if favorites is clicked, sets state of object to true
         const favoriteFuncs = allFuncs.filter((func) => {
            // filters through all function components and returns all that are favorited
            return func.isFavorite === true;
         });
         // console.log(favoriteFuncs);
         const searchedFuncs = favoriteFuncs.filter((func) => {
            // filters through each component in favorites and checks if there are any matches with whatever user searched in searchInput
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy); // sets orderBy to an array of strings
         const orderedFuncs = orderBy(searchedFuncs, ...orderArr); // array of components that follow the qualifications of the search and radio button
         this.setState({ displayedFuncs: orderedFuncs }); // display all searched funcitons
      } else {
         this.setState({ isFavoritesChecked: false }); // if favorites is not clicked, sets state to false
         const searchedFuncs = allFuncs.filter((func) => {
            // checks all components in search all (allFuncs), filters through and matches whatever user input in searchInput
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log(...orderArr);
         const orderedFuncs = orderBy(searchedFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs });
      }
   }

   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs();
      });
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
                        // in the event that show all radio button is clicked/changed, run filterFuncs function
                        onChange={(e) => {
                           this.filterFuncs(e);
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
                           this.filterFuncs(e);
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
                           onChange={(e) => {
                              // when there is a change in the input, calls an anonymous event and then calls filterFuncs
                              this.filterFuncs(e);
                           }}
                        />
                     </div>
                     {/* sort dropdown menu */}
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className=" form-control"
                           onChange={(e) => this.changeOrder(e)}
                        >
                           {/*targets order key sorts in descending order*/}
                           <option value='["order", "desc"]'>
                              Most recent
                           </option>
                           {/*targets order key sorts in ascending order*/}
                           <option value='["order", "asc"]'>Oldest</option>
                           {/*targets name key sorts in ascending order*/}
                           <option value='["name", "asc"]'>A - Z</option>
                           {/*targets name key sorts in descending order*/}
                           <option value='["name", "desc"]'>Z - A</option>
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
