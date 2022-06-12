const grind = document.createElement("div");
grind.style.cssText = `background-color:gray; width:400px; height:400px;
position:fixed; top:50%; left:50%;`;

grind.innerText = "I am a grind div";
document.body.appendChild(grind);

let somethingArray = ["string", "integer", "float", "double", "boolean", "number", "big int", "null", "undefined", "object", "symbol"];

// for(let i = 0; i < somethingArray.length; i++){
//     alert(somethingArray[i]);
// }


// function evenOrOdd(inputNum){
//     if(inputNum%2==0){
//         alert("isEven");
//     }else{
//         alert("isOdd");
//     }
// }

// evenOrOdd(3);

let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert(this.name);
  };
  
  user.sayHi(); // Hello!
