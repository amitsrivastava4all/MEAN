/**
 * Created by arnav on 7/10/2015.
 */
    //uses a namespace to encapsulate the database logic
    /*
     The Web Database support through HTML is transactional.
     It is not possible to execute SQL statements outside of a
     transaction.
      There are two types of transactions: read/write
      transactions(transaction()) and read only transactions
       (readTransaction()). Web DB is Asynchronous
     */
var todonamespace = {};
todonamespace.webdb = {};


todonamespace.webdb.db = null;

todonamespace.webdb.open = function() {
    var dbSize = 5 * 1024 * 1024; // 5MB
    todonamespace.webdb.db = openDatabase("Todo", "1", "Todo manager", dbSize);
}

todonamespace.webdb.onError = function(tx, e) {
    alert("There has been an error: " + e.message);
}

todonamespace.webdb.onSuccess = function(tx, r) {
    // re-render the data.
    // loadTodoItems is defined in Step 4a
    todonamespace.webdb.getAllTodoItems(loadTodoItems);
}

todonamespace.webdb.createTable = function() {
    var db = todonamespace.webdb.db;
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS " +
        "todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, added_on DATETIME)", []);
    });
}

// Insert
todonamespace.webdb.addTodo = function(todoText) {
    var db = todonamespace.webdb.db;
    db.transaction(function(tx){
        var addedOn = new Date();
        tx.executeSql("INSERT INTO todo(todo, added_on) VALUES (?,?)",
            [todoText, addedOn],
            todonamespace.webdb.onSuccess,
            todonamespace.webdb.onError);
    });
}

// Select
todonamespace.webdb.getAllTodoItems = function(renderFunc) {
    var db = todonamespace.webdb.db;
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM todo", [], renderFunc,
            todonamespace.webdb.onError);
    });
}

// Rendering Data
function loadTodoItems(tx, rs) {
    var rowOutput = "";
    var todoItems = document.getElementById("todoItems");
    for (var i=0; i < rs.rows.length; i++) {
        rowOutput += renderTodo(rs.rows.item(i));
    }

    todoItems.innerHTML = rowOutput;
}
function renderTodo(row) {
    return "<li>" + row.todo +
        " [<a href='javascript:void(0);' onclick=\'todonamespace.webdb.deleteTodo(" +
        row.ID +");\'>Delete</a>]</li>";
}

// Delete
todonamespace.webdb.deleteTodo = function(id) {
    var db = todonamespace.webdb.db;
    db.transaction(function(tx){
        tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
            todonamespace.webdb.onSuccess,
            todonamespace.webdb.onError);
    });
}


