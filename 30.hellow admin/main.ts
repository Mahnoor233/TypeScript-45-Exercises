let username:string[] =['admin','usera','userb','userc'];
username.forEach(username=> {
    if(username == "admin"){
        console.log("hellow admin would you like to see status report?");
    }else{
        console.log(`hellow ${username} ,thank you for logining`);
    }

});