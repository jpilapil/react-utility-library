export default class utils {
   // add funciton
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   }

   // subtract function
   static subtract(input1, input2) {
      return input1 - input2;
   }

   // mulitply function
   static multiply(input1, input2) {
      return input1 * input2;
   }

   // division function
   static divide(input1, input2) {
      return input1 / input2;
   }

   // increment by 1
   static increment(input1) {
      input1++;
      return input1;
   }

   // decrement by 1
   static decrement(input1) {
      input1--;
      return input1;
   }

   // multiply decimal
   static multiplyDecimal(input1, input2) {
      return input1 * input2;
   }

   // divide decimal
   static divideDecimal(input1, input2) {
      return input1 / input2;
   }

   // remainder
   static remainder(input1, input2) {
      return input1 % input2;
   }

   // concatenate strings with + operator
   static concatenatePlus(input1, input2) {
      return input1 + " " + input2;
   }

   // concatenate strings using +=
   static concatenatePlusEquals(input1, input2) {
      return (input1 += input2);
   }

   // construct strings + variables
   static constructStringVariables(input1, input2) {
      var yourName = input1 + " " + input2;
      var greeting = "Hello " + yourName + ", nice to meet you";
      return greeting;
   }

   // find length of a string
   static findLength(input1) {
      return input1.length;
   }

   // find first character of string
   static firstCharacter(input1) {
      return input1[0];
   }

   // find nth character in string
   static nthCharacter(input1, input2) {
      // input1 = String
      // input2 = number (nth you're searching for)
      return input1[input2];
   }

   // find last character
   static lastCharacter(input1) {
      // notice input1 inside []
      return input1[input1.length - 1];
   }

   // find nth to last character
   static nthToLast(input1, input2) {
      // example: suh dude[suh dude - 6] = h
      return input1[input1.length - [input2]];
   }

   // .push()
   static arrayWithPush(input1) {
      // creates array with "Water", pushes input1 to the end of array
      let myArray = ["Water"];
      myArray.push([input1]);
      return myArray;
   }

   //.pop()
   static arrayWithPop(input1) {
      // takes input and pops it out of the end of old array, returns new array which is your input
      let oldArray = ["Cat", "Dog", [input1]];
      let newArray = oldArray.pop();
      return newArray;
   }

   static arrayWithShift() {
      // removes the first item in array (Pink in this case) with .shift() and displays it when pressing Run
      let myArray = ["Pink", "Red", "Purple"];
      let removedFromArray = myArray.shift();
      return removedFromArray;
   }

   static addAlbum(album) {
      //A1: frank ocean album
      // unshift adds (album) to beginnning of array
      // returns [(album), nostalgia ultra, channel orange]
      let frankOceanAlbums = ["Nostalgia Ultra", "Channel Orange"];
      return frankOceanAlbums.unshift(album);
   }

   static shoppingList(item, num) {
      // input item and number of items.
      // .push() adds item and number of items to end of existing array
      // returns updated list
      let myList = [
         ["Beef ", 2],
         ["Chicken ", 4],
         ["Fish ", 3],
         ["Candy ", 10],
         ["Water ", 5],
      ];
      myList.push(item, num);
      return myList;
   }

   static standInLine(name) {
      let line = ["Wendla", "Melchior", "Moritz", "Haunshcen", "Ilsa", "Ernst"];
      let backOfLine = line.push(name);
      let firstInLine = line.shift();

      return firstInLine + " is next in line, " + backOfLine + "is at the end.";
   }

   // cardCount

   // card count number is set to 0 (new game)

   // cardCount takes value of card
   static cardCount(card) {
      let count = 0;
      switch (card) {
         // if card is 2-6, increase the count by 1
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;

         // if card is 7-9, the count does not change

         // if card is 10-Ace, decrease the count by 1
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            return;
      }

      // this variable below is if count < 0, hold
      let holdCard = " Hold";
      // but if count is > 0, bet
      if (count > 0) {
         holdCard = " Bet";
      }

      // returns the count number + whether or not you should hold or bet based on how low or high the count is
      return count + holdCard;
   }

   // PROFILE LOOKUP

   // creates function called lookUpProfile which takes 2 inputs, name and prop
   static lookUpProfile(name, prop) {
      //creates list of arrays with contacts
      let contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];
      // loops through array, starting at the 0 array which is the first array, and ends at the last array. keeps running and returns each array one by one
      for (var i = 0; i < contacts.length; i++) {
         // enter array (contacts), get the index of the array [i], then get the property firstName.
         // if the property firstName is equal to the name you input, returns the property of the index youre in, which is in the contacts array.
         // if the name you input does not equal to any of the names in firstName, it returns "No such property"
         if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
         }
      }

      // if you enter a name or a property that does not exist in the contact array, returns "No such contact"
      return "No such contact";
   }

   // GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

   // creates function called randomRange which takes 2 inputs, a minimum number and a maximum number
   static randomRange(minNum, maxNum) {
      // generate a random number between 2 given numbers
      // Math.random() generates a random number 0-.99
      // take generated number and multiply it by the two numbers given (maxNum and minNum + 1)
      // you +1 at the end of maxNum - minNum because if you generate the number it will give you 0, you want to be above 0
      // +min means you add you minimum number in so it doesnt pass 0
      return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
   }

   // parseInt function
   // creates function called convertToInteger and takes an input of a "string"
   static convertToInteger(str) {
      // parseInt takes the string and returns/converts it into an integer
      return parseInt(str);
   }

   // REMOVE ITEMS USING SPLICE
   static spliceRemove(num1, num2) {
      const arr = [2, 4, 5, 1, 7, 5, 2, 1];
      // .splice(num1, num2) takes 2 inputs.
      // num1 = index item to start on
      // num2 = number of items to be deleted
      arr.splice(num1, num2);
      return arr;
   }

   // ADD ITEMS USING SPLICE
   static spliceAdd(color1, color2) {
      const arr = [
         "DarkGoldenRod",
         "WhiteSmoke",
         "LavenderBlush",
         "PaleTurquoise",
         "FireBrick",
      ];
      arr.splice(0, 2, color1, color2);

      return arr;
   }

   // CHECK FOR PRESENCE OF AN ELEMENT WITH indexOf()
   static quickCheck(elem) {
      var frankOceanSongs = [
         "futura free",
         "solo",
         "pilot jones",
         "chanel",
         "novacane",
      ];

      if (frankOceanSongs.indexOf(elem) < 0) {
         // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
         return "this is not on the song list";
      } else {
         return "this is on the song list";
      }
   }

   // TYPEOF
   // creates function that takes an input
   static checkType(input1) {
      // returns the typeof for whatever you input
      // 7 = number
      // '7' = string
      // true = bool
      return typeof input1;
   }

   // RETURN PART OF AN ARRAY USING SLICE METHOD ------
   // .slice() method returns a COPY of the sliced elements in an array, does not mutate original array

   static sliceMethod(input1, input2) {
      // creates function that takes an array and 2 user inputs
      let animalArray = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; // create default array which is passed into function argument

      let slicedArray = animalArray.slice(input1, input2); // creates variable that slices the given array based on user inputs
      return slicedArray; // returns new sliced array
   }

   // RETURN PART OF AN ARRAY USING SPLICE METHOD ------
   // .splice() method splices given inputs out of an array, mutates the arrary and returns the spliced array
   // takes 2 arguments. where to start splice (in the index) and how many items to remove

   static spliceMethod(input1, input2) {
      let animalArray = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
      let splicedArray = animalArray.splice(input1, input2); // creates a variable that holds the spliced items. input1 = which index to start, input2 = how many items to remove
      return splicedArray; // returns mutated array with items spliced
   }

   // COMBINE TWO ARRAYS USING THE CONCAT METHOD ------
   // for arrays, .concat() is called on one array then the array that is wished to be concated to the end is called in

   static nonMutatingConcat(input1, input2) {
      return input1.concat(input2); // takes the first input and concatenates the second input onto the end
      // returns new concatenated inputs
   }

   // ADD ELEMENTS TO THE END OF AN ARRAY USING CONCAT INSTEAD OF PUSH ------
   // .push() mutates the original array it is pushed onto
   // .concat() is imutable

   static nonMutatingPush(newName) {
      let array = ["justin", "lance", "ralph", "attapon"];
      return array.concat(newName); // pushes new name onto the end of the existing array and returns updated array
   }

   // // USE THE REDUCE METHOD TO ANALYZE DATA
   // // more on map filter and reduce: https://www.youtube.com/watch?v=UXiYii0Y7Nw
   // let numbers = [5, 38, 57, 22, 12, 1];
   // // reduce passes in 2 arguments, accumulator and current value
   // // current value is the value of the current item in the array
   // // accumulator is the item + current value
   // // acc = 0 + cur = 5 -> acc = 5 + cur = 38 -> acc = 43 + cur = 57 -> acc = 100 cur = 22 -> acc = 122 cur = 12 -> acc = 134 curr = 1 -> result should be 135
   // let reducedValue = numbers.reduce((acc, cur) => acc + cur);
   // console.log(reducedValue);
   // // function getRating(watchList) {
   // //    var count = 0;
   // //    var averageRating =
   // //       watchList.reduce((sum, movie) => {
   // //          if (movie.Director == "Christopher Nolan") {
   // //             count += 1;
   // //             return sum + parseFloat(movie.imdbRating);
   // //          }
   // //          return sum;
   // //       }, 0) / count;

   // //    return averageRating;
   // // }

   // USE HIGHTER-ORDER FUNCTIONS MAP, FILTER, OR REDUCE TO SOLVE A COMPLEX PROBLEM ------

   static squareList(inputNumber) {
      // create funciton that takes a number as an input
      let numberList = [inputNumber]; // sets an array with the value of the input number to a variable numberList
      let positiveIntegers = numberList.filter(
         // loops through the given number (in this case there is only one number)
         (num) => Number.isInteger(num) && num > 0 // checks if number is a whole number (no decimal) && if number is > 0 (no negative numbers)
      );
      let squaredNumbers = positiveIntegers.map((num) => num * num); // if the inputNumber meets reqs above, maps through the input (1 number in this case). multiplies the inputNumber * inputNumber to get square root
      return squaredNumbers;
   }
   // const squareList = (arr) => {
   //    let positiveIntegers = arr.filter((num) => Number.isInteger(num) && num > 0);

   //    let squaredNumbers = positiveIntegers.map((num) => num * num);

   //    return squaredNumbers;
   // };

   // SORT AN ARRAY ALPHABETICALLY USING THE SORT METHOD -----
   // .sort() mutates the order of the original array
   static sortMethod(letter) {
      // user input is a letter
      let arr = ["a", letter, "z", "j", "h", "b"]; // creates array with random letters as well as users letter input above
      return arr.sort(); // sorts the array from a-z
   }

   // RETURN A SORTED ARRAY WITHOUT CHANGING THE ORIGINAL ARRAY -----
   static nonMutatingSort(num) {
      // user input needs to be a number
      var globalArray = [5, 6, 3, 2, 9, num]; // adds input number to the given array
      return globalArray.slice().sort(); // takes the array, slices (creates a new array, did not mutate original global array), sorts new array

      // shorter version
      //return [...arr].sort()
   }

   // SPLIT A STRING INTO AN ARRAY USING SPLIT METHOD
   // .split() splits a string into a new array of strings, does not mutate, takes delimeter as argument
   // delimiter can be a character to use to break up the string. space = array of words, empty string = array for each character in string
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   static splitMethod(input1) {
      // takes multiple words
      let newString = input1.split(" "); // creates a new array of the input words
      return newString;
   }

   // COMBINE AN ARRAY INTO A STRING USING THE JOIN METHOD
   // .join() joins elements of an array together to make a string. does not mutate original array
   static joinMethod(input1) {
      let string = input1; // creates variable called string which takes the user input
      let disectedString = string.split(/\W/); // return array of strings from input
      // split() splits the given input into an array of strings, the delimiter (/\W/) is a regular expression which filters non alpha-numeric characters out
      let sentenceString = disectedString.join(" "); // .join() takes the elements of the array above and creates a new string. the delimiter (" ") spaces the string. notice the space in between quotes
      return sentenceString;
   }

   // APPLY FUNCITONAL PRORAMMING TO CONVERT STRINGS TO URL SLUGS
   static urlSlug(input1) {
      // takes any input
      return input1
         .split(/\W/) // splits the input into a new array of strings and removes all non alpha numeric characters with the (/\W/) delimitor
         .filter((word) => {
            // filters through each word in the input and returns every array that does not contain an empty string
            return word !== "";
         })
         .join("-") // joins each element in array with -
         .toLowerCase(); // converst the array to all lowercase letters
   }

   // USE EVERY MOTHOD TO CHECK THAT EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA
   // .every() works with arrays to check if ALL elements pass a particular test
   static everyMethod(input) {
      let number = [input]; // creates variable that turns input into an array
      let result = number.every(function (num) {
         // takes number variable and checks to see if all numbers are > 0
         return num > 0; // particular test
      });
      return result; // returns true if > 0, false if < 0
   }

   // USE THE SOME METHOD TO CHECK THAT ANY ELEMENTS IN AN ARRAY MEET A CRITERIA
   // .some() works with arrays to check if AT LEAST ONE of the elements pass a particular test
   static someMethod(input) {
      let number = [input]; // creates variable that turns input into an array
      let result = number.every(function (num) {
         // takes number variable and checks to see one of the numbers are > 0
         return num > 0; // particular test
      });
      return result; // returns true if > 0, false if < 0
   }

   // CONVERT CELSUIS TO FAHRENHEIT
   static convertToF(celsius) {
      // takes user input of celsuis temp
      let fahrenheit = (celsius * 9) / 5 + 32; // multiplies user input by 9/5 then adds 32
      return `${fahrenheit}F`; // returns result
   }

   // REVERSE A STRING
   static reverseString(str) {
      //takes user input
      let splitString = str.split(""); // splits the input into an array of individual letters. no space between "" gives each letter into an array, adding a space " " will return the entire string into an array.
      let reverseString = splitString.reverse(); // takes the split letters and reverses them with the reverse method
      let joinArray = reverseString.join(""); // takes the reversed array and uses the join method to return a string, not an array. no space "" returns string with no spaces, " " with space, spaces out the contents
      console.log(joinArray);
      return joinArray;
   }

   // FACTORALIZE A NUMBER
   static factorialize(num) {
      // takes number as input
      let total = 1; // set total to 1, if you input 0, the loop below will not run and it will return 1 by defualt
      for (var i = 1; i <= num; i += 1) {
         // creates variable called i, starts at 1
         // start loop at 1, increment loop by 1, end loop when the value of i is <= number that was input
         total = total * i; // takes the current todal and multiplies by the current i iteration
      }
      return total;
   }

   // FIND THE LONGEST WORD IN A STRING
   static findLongestWordLength(str) {
      // takes user input of a string
      let words = str.split(" "); // takes the string input from the user and converts it into an array with individual words
      let maxLength = 0; // creates variable that keeps track of the maximum length
      for (let i = 0; i < words.length; i += 1) {
         // loops through the array of words
         if (words[i].length > maxLength) {
            // if the current word.length is greater than the current maxLength value, push it to the maxLength. keeps going until it finds the highest length.
            maxLength = words[i].length;
         }
      }
      return maxLength;
   }

   // RETURN LARGEST NUMBER IN ARRAY

   static findLargestNumber(input) {
      let array = [3, 6, 2, 56, 32, 5, 89, 32, input];
      let largest = 0;
      // loop through array
      for (let i = 0; i < array.length; i++) {
         if (array[i] > largest) {
            // if current index of array is greater than largest, largest = current index
            largest = array[i];
         }
      }
      return largest;
   }

   // CONFIRM LAST CHARACTER OF STRING
   static confirmEnding(str, target) {
      // slice the given string to return a new string.
      // check the length of the given string
      // check the length of the given target letter
      // compare the result of slice to the target and check if they have the same characters
      return str.slice(str.length - target.length) === target;
   }

   // REPEAT A STRING REPEAT A STRING

   static repeatStringNumTimes(str, num) {
      let accumulatedStr = "";

      while (num > 0) {
         accumulatedStr += str;
         num--;
      }

      return accumulatedStr;
   }

   // static repeatStringNumTimes(str, num) {
   //    // enter a random string, and a number of times you want to repeat string
   //    if (num <= 0) {
   //       // if user inputs a negative number or 0, result will return an empty string
   //       return "";
   //    } else if (num == 1) {
   //       // if user input 1 for the number of times to repeat it will just return the string
   //       return str;
   //    } else {
   //       return str + repeatStringNumTimes(str, num - 1);

   /* 
    First Part of the recursion method
    Remember that user won’t have just one call, you’ll have several nested calls
                     times       string + repeatStringNumTimes(string, times - 1)
      1st call         3                 "abc" + ("abc", 3 - 1)
      2nd call         2                 "abc" + ("abc", 2 - 1)
      3rd call         1                 "abc" => if (times === 1) return string;
      4th call         0                  ""   => if (times <= 0) return "";
    Second part of the recursion method
      4th call will return      ""
      3rd call will return     "abc"
      2nd call will return     "abc"
      1st call will return     "abc"
    The final call is a concatenation of all the strings
    return "abc" + "abc" + "abc"; // return "abcabcabc";
  */
   //    }
   // }

   // TRUNCATE A STRING
   static truncateString(str, num) {
      if (str.length > num) {
         // if the sting is bigger than the given number
         return str.slice(0, num) + "..."; // slice the string from the beginning letter and end at the given number, adds "..." to the end
      } else {
         return str; // if the number is bigger than the amount of characters in the string, return the whole string
      }
   }

   // FINDERS KEEPERS
   static findElement(input) {
      let divisible = [];
      for (var i = 0; i < input.length; i++) {
         // loops through the user input list of numbers
         if (input[i] % 2 === 0) {
            // if one of the numbers input is divisible by 2 and has 0 remainder, push that number to the empty array (divisible) up top
            divisible.push(input[i]);
         }
      }
      if (divisible.length > 0) {
         // if the array is populated, return the numbers in the array
         return divisible;
      } else {
         return "undefined"; // if array is empty, return undefined
      }
   }

   // BOO WHO
   static booWho(input) {
      if (typeof input === "boolean") {
         return true;
      } else {
         return false;
      }
   }

   // TITLE CASE A SENTENCE
   static titleCase(str) {
      var words = str
         .toLowerCase() // sets the input string to all lowercase letters
         .split(" ") // splits the string, returning an array of words, all lowercased still
         .map(function (word) {
            // map through array and finding each individual word
            return word[0].toUpperCase() + word.slice(1); // takes the first word and the first letter([0]) and changes it to upper case. then splices the word from the 0 index and adds it to the uppercase letter at 0 index
         });
      return words.join(" "); // converts the array into a string
   }

   // SLICE AND SPLICE
   static frankenSplice(arr1, arr2, n) {
      // Input 1: Array of numbers
      // Input 2: Array of Numbers to be put into Array 1
      // Input 3: Index of where to splice the Array 1 and insert Input 2

      let array1 = [arr1];
      let array2 = [arr2];
      // takes 2 arrays and a number for the index you wish to splice the first array
      let slicedArr = array2.slice(); // creates a copy of array 2
      slicedArr.splice(n, 0, ...array1); // slices array 2 at the index of whatever user input for n, deletes 0 elements, then adds the input for the first array.
      return slicedArr;
   }

   // FALSY BOUNCER

   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
   static bouncer(arr) {
      let result = arr.filter(Boolean); // filters through given array and removes all false values
      return result;
   }

   // WHERE DO I BELONG
   static getIndexToIns(arr, num) {
      let myArr = [arr];
      // sort array
      // the returned value should be the index#
      // push num into array, sort array, find index of pushed num, return index
      // https://www.freecodecamp.org/forum/t/arr-sort-a-b-a-b-explanation/167677
      myArr.push(num); // push num into array
      myArr.sort(function (a, b) {
         // sorts the array numerically
         return a - b;
      });

      return myArr.indexOf(num); // finds the index value of num and returns it
   }

   // MUTATIONS
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
   static mutation(word1, word2) {
      // convert all letters to lowercase to prevent casing issues
      let firstWord = word1.toLowerCase(); // sets first word to lower case
      let secondWord = word2.toLowerCase(); // sets second word to lower case

      for (var i = 0; i < secondWord.length; i++) {
         // loop through each letter in second word
         if (firstWord.indexOf(secondWord[i]) === -1) return false; // if the current index (letter) of the second word does not exist in the first word, return false. (if indexOf returns -1, it means it does not exist)
      }
      return true;
   }
}
