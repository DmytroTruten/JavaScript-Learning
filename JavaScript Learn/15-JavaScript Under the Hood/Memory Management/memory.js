/*The stack is used for static storage, where the size of an object is known when the code is compiled. Since the size is known, a fixed amount of data is reserved for the object, and the stack remains ordered. The stack has a finite amount of space provided by the operating system, which you typically only exceed when you have problems in your code, like infinite recursion or memory leaks.

Primitive values, references to non-primitive values, and function call frames are stored in the stack. You can think of references as a parking space number in a massive (but disordered) parking garage telling JavaScript where to find objects and functions.

The heap provides dynamic memory allocation at runtime for data types that don’t have a fixed size, like objects and functions. These are reference values and we keep track of where to find them in the unstructured heap using a fixed-size reference in the stack. If you modify an object, you are modifying a reference to the object and not the object itself.*/

const cat = {
    name: "Jupiter"
}
 
const pets = ["Jupiter", "Moshi", "Hercules"]

/*In the example, cat is stored in the heap, a reference to cat is stored in the stack, and the property name is stored in the stack. The pets array is stored in the heap, while a reference to it is stored in the stack.*/

let object = new Object();
let object2 = object;
object.greeting = "Hello, world";
 
console.log(object2); // { greeting: 'Hello, world' }

/*In the example, object and object2 are pointing to the same object in memory in the heap, but with different variables that are saved in the stack.*/


let aaliyah = {
  name: "Aaliyah"
}

function nameObjectModification(obj, name) {
  obj.name = name;
  return obj;
}

let sarah = nameObjectModification(aaliyah, "Sarah");

console.log(aaliyah); // { name: 'Sarah' }
console.log(sarah); // { name: 'Sarah' }

/* In the example, we created an aaliyah object, which JavaScript saved in the heap with a reference to it in the stack. Then we called the nameObjectModification() function and assigned it to the variable sarah.

When we created the sarah object using the nameObjectModification() function, we used a copy of the reference to the aaliyah object. In the function call, the object we use and create still references the aaliyah object, even though we’re assigning the return value to a new variable. So in the end, both variables reference the same object, and the name is updated on both the aaliyah object and the new sarah object. */