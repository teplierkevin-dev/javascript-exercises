const removeFromArray = function(Array1, ...TheArgs) {
    
        let args = Array.from(Array1)
        
        return args.filter(val => !TheArgs.includes(val));
    }

// Do not edit below this line
module.exports = removeFromArray;

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }