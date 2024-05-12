"use strict";
let current_users = ['userA', 'userB', 'admin', 'userC', 'userD'];
let new_users = ['userE', 'userF', 'admin', 'userA', 'userG'];
new_users.forEach(newname => {
    let lowerCase = newname.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`the username ${newname} is not available.please write a different user name`);
    }
    else {
        console.log(` The user name ${newname}is available.`);
    }
});
