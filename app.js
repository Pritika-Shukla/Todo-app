let task=document.querySelector("#task");
let btn=document.querySelector("#btn");
let list=document.querySelector("ul");

btn.addEventListener("click" ,function(){
    let newtask=document.createElement("li");
    newtask.innerText=task.value;
    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("btns" ,"delete");
    newtask.appendChild(del);
    list.appendChild(newtask)
    task.value = '';
});
list.addEventListener("click", function (event){
if (event.target.nodeName =="BUTTON"){
    let item=event.target.parentElement;
    item.remove();
    
}
});


