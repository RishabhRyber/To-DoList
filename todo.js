
let todoItems=[]
function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };
  
    todoItems.push(todo);
  
} 
let perm_storage;
let perm;
let s="";
var loc;
function add(){
    var x=document.getElementById("todo").value+"\n";
    addTodo(x);
    s = s+","+x;
    localStorage.setItem("task",s)
    loc=localStorage.getItem("task");
    //////console.log(s);
    // todoItems.push(x);
    document.getElementById("list").innerHTML=""
    todoItems.forEach(addNew);

}

function addNew(value,index){
    //s=s+","+value['text'];
  document.getElementById("list").innerHTML  +=`<hr><h4 align="center">`+value['text']+' <input type="button" value="remove" onclick="del('+index+')" id="check">';
  /* var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
  document.body.appendChild(value[text]);*/
}
function del(index){
  todoItems.splice(index,1);
  //loc.removeItem(index);
  console.log(s);
  document.getElementById("list").innerHTML=""
  todoItems.forEach(addNew);
  s="";
  loc="";
  todoItems.forEach(function(value){
    loc+=value;
    s+=","+value['text'];
  });
  localStorage.setItem("task",s);
}


function submitl(){
    perm=todoItems; 
    if(todoItems.length===0)
    {
        document.getElementById("list").innerHTML="<h1>Hurray!You have completed all tasks today</h1><br>"; 
    }
    else{
    document.getElementById("list").innerHTML="<h1>This is the list of tasks to be done</h1><br>";
    for (var i = 0; i < todoItems.length; i++) {
        document.getElementById("list").innerHTML += '<h3 align="center" style="color:#ff3342">'+(i+1)+")"+todoItems[i].text+ "</h3>";
    }
    //document.getElementsByID("button").style.color='plum';
    s=" ";
    todoItems=[];
    perm_storage.push(perm); 
    localStorage.clear();
    
}
    
}

k = localStorage.getItem("task").split(",");
//////console.log(s);
k.forEach(function(value){
    if(value!=""){
        addTodo(value);
        s+=","+value;
        console.log(value);
    }
})
todoItems.forEach(addNew);