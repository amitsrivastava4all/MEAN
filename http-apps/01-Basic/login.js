function checkLogin(userid, password){
    if(userid===password){
        return {"msg":"Welcome User","user":userid};
    }
    else{
        return {"msg":"Invalid User","user":userid};
    }

}

module.exports=checkLogin;