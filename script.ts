//*********GENERICS***********/

function loggerTime<T>(number: T): T{
    console.log(new Date());
    return number
}
loggerTime<number>(9)
loggerTime<string>('John Smith')