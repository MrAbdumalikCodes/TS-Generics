//*********GENERICS***********/
interface ICar{
    name:string
}
function logger<T extends ICar>(data : T): T{
    return data
}
logger<string>('Generic')