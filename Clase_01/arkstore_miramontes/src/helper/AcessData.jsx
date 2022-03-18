import { stock } from "../components/Data"
export const askData = () =>{
    let time = 500+(Math.floor(Math.random() * 1500) + 1);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },time)
    })
}