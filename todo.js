
let todoItems=[]
function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };
  
    todoItems.push(todo);
  
}  
function add(){
    var x=document.getElementById("todo").value+"\n";
    addTodo(x);
    // todoItems.push(x);
    document.getElementById("list").innerHTML=""
    todoItems.forEach(addNew);

}
function addNew(value){
  document.getElementById("list").innerHTML  +="<br><hr>"+value['text']+' <input type="checkbox" id="check">';

}


  
   