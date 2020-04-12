

function myFunction() {
  console.log("haan");  
  var box = document.getElementById("color");
  box.select();
  document.execCommand("copy");
  
}

function nofunc(){
  console.log("hello");
}

document.getElementById("mybtn").addEventListener("click",myFunction());
console.log("hello");


