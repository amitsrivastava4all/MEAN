/**
 * Created by arnav on 10/26/2015.
 */
window.addEventListener("load",init);
function init(){
document.getElementById("bt").addEventListener("click",displayMessage);
}
    function displayMessage(){
    var u = document.getElementById("uname").value;
    //document.getElementById("msg").innerHTML="<b>"+u+"</b>";
   // document.getElementById("msg").innerText="<b>"+u+"</b>";
    var d =document.getElementsByTagName("div");
    d[1].children[0].children[0].innerHTML=u;
    d[1].children[1].children[0].innerHTML=u;
    //alert("U Click on Button");
}