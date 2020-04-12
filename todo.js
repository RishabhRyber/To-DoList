
let todoItems=[]
function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };
  
    todoItems.push(todo);
  
} 
let s;
var loc;
function add(){
    var x=document.getElementById("todo").value+"\n";
    addTodo(x);
    s=s+","+x;
    localStorage.setItem("task",s)
    loc=localStorage.getItem("task");
    console.log(s);
    // todoItems.push(x);
    document.getElementById("list").innerHTML=""
    todoItems.forEach(addNew);

}

function addNew(value,index){
    //s=s+","+value['text'];
  document.getElementById("list").innerHTML  +=`<br><hr>`+value['text']+' <input type="button" value="remove" onclick="del('+index+')" id="check">';
    loc=localStorage.getItem("task");
  /* var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
  document.body.appendChild(value[text]);*/
}
function del(index){
  todoItems.splice(index,1);
  //loc.removeItem(index);
  document.getElementById("list").innerHTML=""
  todoItems.forEach(addNew);


}

function submitl(){
    
    document.getElementById("list").innerHTML="<h1>This is the list</h1><br>"+loc;
    s=" ";
    localStorage.clear();
    todoItems=[];
    
}