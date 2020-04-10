
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
    todoItems.text=x;
    todoItems.push(x);

    document.getElementById("list").innerHTML   =todoItems;

}


  
   