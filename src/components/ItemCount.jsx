import React from 'react'

const ItemCount = ({stock,count, setCount, handleAdd}) => {

    const onAdd = (stock,initial)=>{
        return initial<stock ? setCount(initial + 1) : setCount(initial);
    }
    const substract = (initial)=>{
        return initial>0 ? setCount(initial - 1) : setCount(initial);
    }
    
    return (
        <>
            <div className='flex flex-row p-2'>
                <button>
                    <svg onClick = {()=>{substract(parseInt(count))}} className="fill-current text-black w-3" viewBox="0 0 448 512">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>                
                    </svg>
                </button>

            <div className="mx-2 border text-center w-8 text-black">{count}</div>
                <button className="fill-current text-black w-3">
                    <svg onClick = {()=>{onAdd(parseInt(stock),parseInt(count))}} viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                </button>
            </div>
            <div className='mx-5 text-black p-3'>
                Stock: {stock}
            </div>  
            <button className="text-lg font-medium border-2 w-full border-black bg-yellow-300 rounded-full" onClick={handleAdd}>Add to cart</button>
        </>
    )
}

export default ItemCount