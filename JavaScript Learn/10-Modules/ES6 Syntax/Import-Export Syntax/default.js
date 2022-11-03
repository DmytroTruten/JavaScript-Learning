// Every module also has the option to export a single value to represent the entire module called the default export. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

// The syntax for exporting a default object looks like this:
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };

// You may also see this shorthand syntax where the value follows export default is the default value to be exported:
// const resources = {
//   valueA,
//   valueB
// }
// export default resources;

// The syntax for importing default exports looks like this:
import importedResources from 'module.js';

// It should be noted that if the default export is an object, the values inside cannot be extracted until after the object is imported, like so:
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'