var a = 2;

(function foo(){
  var a = 3;
  console.log(a);
})();

console.log(a);


// UMD project pattern
var a = 2;

(function IIFE(def){
  def(window);
})(function def(global) {
  var a = 3;
  console.log(a)
  console.log(global.a)
})