
var calc={
    add:function(x,y){
        return x + y;
    },
    subtract:function(x,y){
        return x - y;
    }


}
var e = {id:1001}
var namespace={
    calculator:calc,
    m:e
}
module.exports.glob=namespace;

module.exports.calcobj=calc;
module.exports.m=e;
