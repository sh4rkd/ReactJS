import { stock } from "../components/Data"
export const askData = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },500+(Math.floor(Math.random() * 1500) + 1))
    })
}