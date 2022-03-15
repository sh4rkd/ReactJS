import React from 'react'
import ItemCount from './ItemCount'

export const Item = ({itemName,level,atkPower,additionalDamage,characterClass,img}) => {
    return (
        <div className='p-20'>
                <div className="w-64 h-64 shadow-md rounded-lg">                    
                    <div className="w-full h-4/6 bg-black flex flex-col justify-center items-center rounded-t-lg">
                        <img src={img} alt={itemName}/>
                    </div>
                    <div className="bg-yellow-300 flex flex-col justify-center items-center h-5/6 rounded-b-lg text-center">
                        <ItemCount stock="5" initial="1"/>
                        <p className="text-black text-xl font-semibold">{itemName}</p>
                        <p className='text-sm'>level: {level}</p>
                        <p className='text-sm'>atk power: {atkPower}</p> 
                        <p className='text-sm'>aditional damage: {additionalDamage}%</p>
                        <button className="border-2 border-gray-300 text-yellow-300 bg-black font-semibold mx-10 rounded-2xl my-1 hover:bg-yellow-500 hover:text-black hover:border-black text-base px-1">Item stats</button>
                    </div>
                </div>
            </div>
    )
}