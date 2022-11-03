// the functions you wish to reuse can be exported using the named export syntax below:
export { resourceToExportA, resourceToExportB}

// In addition to the syntax above, in which all named exports are listed together, individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration. Here is the same example using this syntax:
export const resourceToExportA = (arg) => {
  // logic omitted
}
 
export const resourceToExportB = (arg) => {
  // logic omitted
}