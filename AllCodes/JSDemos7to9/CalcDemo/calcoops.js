/**
 * Created by arnav on 10/28/2015.
 */

// OOP Based
var e= 1000;
window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",doOperation);
    document.getElementById("subtract").addEventListener("click",doOperation);
}

function doOperation(event){
    //console.log("This is "+this);
    var result = 0;
    var opr = event.srcElement.getAttribute("data-operation");
    var firstNo = document.getElementById("firstNum").value;
    var secondNo = document.getElementById("secondNum").value;
    var expression = firstNo+ opr + secondNo;
    console.log("Expression is ",expression);
    result = eval(expression);
    /*result  = calc[value](firstNo,secondNo);*/
  /*  if(value=="Add"){
        result = calc.add(firstNo,secondNo);
    }
    else
    if(value=="Subtract")
    {
     result = calc.sub(firstNo,secondNo);
    }*/

    document.getElementById("result").innerHTML = result;
}

/*
var calc = {
    add:function(firstNo,secondNo){

        var result = parseInt(firstNo) + parseInt(secondNo);
        return result;

    },
    sub:function(firstNo,secondNo){

        var result = firstNo - secondNo;
       return result;
    }

};
*/

