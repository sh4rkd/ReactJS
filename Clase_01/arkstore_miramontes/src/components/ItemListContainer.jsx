import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className='text-3xl text-blue-900 font-bold mb-3'>{greeting}</div>
        <ItemCount stock="5" initial="1"/>
        </>
    )
}

export default ItemListContainer