
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
function addNew(value,index){
  document.getElementById("list").innerHTML  +="<br><hr>"+value['text']+' <input type="checkbox" onclick="del('+index+')" id="check">';

}
function del(index){
  todoItems.splice(index,1);
  document.getElementById("list").innerHTML=""
  todoItems.forEach(addNew);

}