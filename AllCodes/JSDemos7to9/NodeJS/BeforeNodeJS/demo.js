doProcess();
function doProcess(){
    start();
    setTimeout(doWork,0);
    end();
}

function start(){
    console.log("Start Call....");
}

function doWork(){
    console.log("File Read Work Start...");
    for(var i = 1; i<=1000000; i++){
        for(var j = 1; j<=10000; j++){

        }
    }
    console.log("File Read Work End");
}

function end(){
    console.log("End Call");
}