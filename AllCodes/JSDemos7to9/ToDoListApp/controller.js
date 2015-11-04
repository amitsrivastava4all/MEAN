window.addEventListener("load",init);
function init(){
    document.getElementById("addTask").addEventListener("click",addTask);
    loadJSON();
}

function loadJSON(){
    if(localStorage){
        if(localStorage.taskjson){
            var json = localStorage.taskjson;
            var taskList = JSON.parse(json);
            taskOperations.taskList = taskList;
            taskOperations.taskList.forEach(loadTask);

        }
    }
}

function loadTask(taskObject,index){
    var ul = document.getElementsByTagName("fieldset")[1].children[1];
    var li = document.createElement("li");
    li.innerHTML= taskObject.id + " "+taskObject.name+" "+taskObject.desc;
    ul.appendChild(li);
    li.addEventListener("click",toggleTask);

}

var taskId = 0;
function addTask(){
    var taskName = document.getElementById("taskName");
    var taskDesc = document.getElementById("taskDesc");
    //console.log("TaskName ",taskName);
    if(taskName && taskDesc){
        taskName = taskName.value;
        taskDesc = taskDesc.value;
        taskId++;
        var ul = document.getElementsByTagName("fieldset")[1].children[1];
        var li = document.createElement("li");
        li.innerHTML= taskId + " "+taskName+" "+taskDesc;
        ul.appendChild(li);
        li.addEventListener("click",toggleTask);

        // Call to the Model
        taskOperations.addTask(taskId,taskName,taskDesc);
        var json =JSON.stringify(taskOperations.taskList);
        localStorage.taskjson=json;
    }
}

function toggleTask(event){
    event.srcElement.classList.toggle("completed");
}
