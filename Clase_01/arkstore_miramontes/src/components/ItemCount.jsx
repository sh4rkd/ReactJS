import React,{ useState } from 'react'

const ItemCount = ({stock,initial}) => {
    const onAdd = (stock,initial) =>{
        return initial < stock ? setCount(initial+=1) : setCount(count)
    }

    const substract = (stock,initial) =>{
        return initial > 1 ? setCount(initial-=1) : setCount(count)
    }

    const [count,setCount] = useState(initial)
    return (
        <>
            <div className='p-20'>
                <div className="w-48 h-64 shadow-md rounded-lg">
                    
                    <div className="w-full h-4/6 bg-black flex flex-col justify-center items-center rounded-t-lg">
                        <img src="https://static.invenglobal.com/img/lostark/dataninfo/itemicon/bk_item_01_163.png" alt="Berserker Sidereal Greatsword image" />
                        
                        <div className='flex flex-row p-2'>
                            <svg onClick = {()=>{substract(parseInt(stock),parseInt(count))}} className="fill-current text-yellow-300 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>

                            <div className="mx-2 border text-center w-8 text-yellow-300">{count}</div>

                            <svg onClick = {()=>{onAdd(parseInt(stock),parseInt(count))}} className="fill-current text-yellow-300 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                        </div>
                        <div className='mx-5 text-yellow-300 p-3'>
                            Stock: {stock}
                        </div>
                    </div>
                    <div className="bg-yellow-300 flex flex-col justify-center items-center h-2/6 rounded-b-lg ">
                        <p className="text-black text-xl font-semibold">Sidereal Greatsword</p>
                        <p className='text-sm'>Item Level 1100 ~ 1645 (Tier 3)</p>
                        <p className='text-sm'>Quality(Unidentified)</p>                        
                    </div>
                </div>
            </div>        
        </>
    )
}

export default ItemCount