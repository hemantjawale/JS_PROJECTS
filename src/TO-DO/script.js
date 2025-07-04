document.addEventListener("DOMContentLoaded",()=>{
    let input = document.querySelector(".InputTask");
let AddBtn=document.querySelector(".AddBtn");
let displayTask=document.querySelector(".displayTask")
let allTasks=JSON.parse(localStorage.getItem("tasks"))||[];
allTasks.forEach(task => renderTaskLoocal(task));

AddBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    let taskTest=input.value.trim();

    if(taskTest ==="") return;
    let newTask = {
        id:Date.now(),
        taksname:taskTest,
        isCompleted:false
    };
    allTasks.push(newTask);
    saveTaskLocal();
     renderTaskLoocal(newTask); 
    taskTest="";
})
function saveTaskLocal(){
    localStorage.setItem("tasks",JSON.stringify(allTasks))
}
function renderTaskLoocal(task){
    let li=document.createElement("li");
    li.setAttribute("data-id",task.id);

    li.innerHTML=`
    <span>${task.taksname}</span>
    <button id = "delete">-</button>`
    displayTask.appendChild(li)
    if(task.isCompleted) li.classList.add("completed")
    li.addEventListener("click",(e)=>{
        if(e.target.tagName=="BUTTON") return;
        task.isCompleted=(!task.isCompleted);
        li.classList.toggle("completed");        
        saveTaskLocal()

    })
   li.querySelector("#delete").addEventListener("click",(e)=>{
        e.stopPropagation();
        allTasks=allTasks.filter((t)=> t.id!=task.id)
        li.remove();
        saveTaskLocal()
    })
}
})