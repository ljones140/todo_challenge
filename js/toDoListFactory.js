toDoList.factory('ToDoListFactory', function() {

  var tasks = []

  return {
    taskList: function() {
      return tasks;
    },
    enterTask: function(task) {
      tasks.push( { task: task, complete: false, active: false } );
    },
    removeTask: function(task) {
      var index = tasks.indexOf(task);
      tasks.splice(index,1)
    },
    taskComplete: function(task) {
      (task.complete === false) ? task.complete = true : task.complete = false;
    }
  }
});