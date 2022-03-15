import React from 'react'
import { Item } from './Item'

export const ItemList = ({products}) => {
    return (
        <div className="grid grid-cols-4">
            {products.map( (ele)=> <Item key={ele.id} {...ele} />)}
        </div>
    )
}