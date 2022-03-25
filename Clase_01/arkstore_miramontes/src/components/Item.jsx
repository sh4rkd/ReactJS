import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { Button } from '../helper/Button'

export const Item = ({id,itemName,level,atkPower,additionalDamage,characterClass,img}) => {
    return (
        <div className='p-20'>
                <div className="w-64 h-64 shadow-md rounded-lg">                    
                    <div className="w-full h-3/6 bg-black flex flex-col justify-center items-center rounded-t-lg">
                        <img src={img} alt={itemName}/>
                    </div>
                    <div className="bg-yellow-300 flex flex-col justify-center items-center h-5/6 rounded-b-lg text-center">
                        <p className="text-black text-xl font-semibold">{itemName}</p>
                        <p className='text-sm'>level: {level}</p>
                        <p className='text-sm'>atk power: {atkPower}</p> 
                        <p className='text-sm'>aditional damage: {additionalDamage}%</p>
                        <Link to={`/details/${id}`}><Button>Item stats</Button></Link>
                    </div>
                </div>
            </div>
    )
}