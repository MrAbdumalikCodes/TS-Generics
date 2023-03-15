//*********GENERICS***********/

interface User{
    name:string
    age:number
    email:string
    level:<T, G, I>(data: T) => G
}
function userInfo<T>(data: T): T{
    if(typeof data === 'string'){
        data.toLocaleLowerCase()
    }else if(typeof data === 'number'){
        data.toFixed()
    }
    return data
}

const user = {
    name:'John',
    age:24,
    email:'johncodes@gmail.com'
}
const student = userInfo<User>(user)