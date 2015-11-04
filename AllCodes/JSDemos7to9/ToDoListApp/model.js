/**
 * Created by arnav on 11/4/2015.
 */

function Task(id , name, desc){
    this.id = id;
    this.name = name;
    this.desc = desc;

}

var taskOperations= {
    taskList:[],
    addTask:function(id,name,desc){
        var task = new Task(id,name,desc);
        this.taskList.push(task);
    }
}
