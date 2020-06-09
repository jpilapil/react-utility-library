// application wide helper funcitons

function safelyParseJSON(str) {
   // parse user input, if there is an error, return string. if no error, return parsed user input
   try {
      JSON.parse(str);
   } catch (error) {
      return str;
   }
   return JSON.parse(str);
}

// test is user input is an object
function isObject(value) {
   if (
      typeof value === "object" &&
      value !== null &&
      Array.isArray(value) === false
   ) {
      return true;
   } else {
      return false;
   }
   //    return typeof yourVariable === 'object' && yourVariable !== null
}

function convertDataType(str) {
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false;
   // eslint-disable-next-line
   if (str == Number(str)) return Number(str); // converts "5" -> 5
   const parsedJSON = safelyParseJSON(str);
   if (Array.isArray(parsedJSON)) return parsedJSON;
   if (isObject(parsedJSON)) return parsedJSON;
   return str;
}

export { isObject, convertDataType, safelyParseJSON };
