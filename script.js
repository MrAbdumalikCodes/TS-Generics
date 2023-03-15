"use strict";
//*********GENERICS***********/
function userInfo(data) {
    if (typeof data === 'string') {
        data.toLocaleLowerCase();
    }
    else if (typeof data === 'number') {
        data.toFixed();
    }
    return data;
}
const user = {
    name: 'John',
    age: 24,
    email: 'johncodes@gmail.com'
};
const student = userInfo(user);
