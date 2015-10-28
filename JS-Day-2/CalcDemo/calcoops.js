/**
 * Created by arnav on 10/28/2015.
 */

// OOP Based

window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("subtract").addEventListener("click",subtract);
}

function add(){
    var firstNo = document.getElementById("firstNum").value;
    var secondNo = document.getElementById("secondNum").value;
    var result = parseInt(firstNo) + parseInt(secondNo);
    document.getElementById("result").innerHTML = result;
}

function subtract(){
    var firstNo = document.getElementById("firstNum").value;
    var secondNo = document.getElementById("secondNum").value;
    var result = firstNo - secondNo;
    document.getElementById("result").innerHTML = result;
}
