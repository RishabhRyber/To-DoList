
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
  loc.removeItem("task");


}
let perm_storage;
let perm;

function submitl(){
    perm=todoItems; 
    document.getElementById("list").innerHTML="<h1>This is the list</h1><br>";
    for (var i = 0; i < todoItems.length; i++) {
        document.getElementById("list").innerHTML += '<h3 align="center" style="color:#ff3342">'+(i+1)+")"+todoItems[i].text+ "</h3>";
    }
    //document.getElementsByID("button").style.color='plum';
    s=" ";
    todoItems=[];
    perm_storage.push(perm); 
    localStorage.clear();
    
   
    
}
function check(){
    if(perm_storage.length===0){
    document.getElementById("list").innerHTML='<h3 align="center">No lists are added here</h3>';
    }
    else{
       
        let j=0;
        
        while(j<perm_storage.length){
            document.getElementById("list").innerHTML="<h1>List "+(j+1)+"</h1>";
        for (var i = 0; i < perm_storage[j].length; i++) {
            document.getElementById("list").innerHTML += '<h3 align="center" style="color:#ff1242">'+(i+1)+")"+perm_storage[j[i]].text+ "</h3>";
        }
        j++
    }
    }
}

