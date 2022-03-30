import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../helper/Button';
import ItemCount from './ItemCount';
import { CartContext } from './context/CartContext';


export const ItemDetail = ({id,itemName,level,atkPower,additionalDamage,characterClass,img,stock,initial,price}) => {
    const [count,setCount] = useState(0);
    const { addToCart, isInCart } = useContext(CartContext)
    const handleAdd = () => {
        if (count === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id,
                itemName,
                level,
                atkPower,
                additionalDamage,
                characterClass,
                img,
                price,
                count
            }
            addToCart(addItem)
        }
    }

    return (
        <div className='p-20'>
                <div className="w-64 h-64 shadow-md rounded-lg">                    
                    <div className="w-full h-4/6 bg-black flex flex-col justify-center items-center rounded-t-lg">
                        <img src={img} alt={itemName}/>
                    </div>
                    <div className="bg-yellow-300 flex flex-col justify-center items-center h-5/6 rounded-b-lg text-center">
                        <p className="text-black text-xl font-semibold">{itemName}</p>
                        <p className='text-sm'>level: {level}</p>
                        <p className='text-sm'>atk power: {atkPower}</p> 
                        <p className='text-sm'>aditional damage: {additionalDamage}%</p>
                        <p className='text-sm'>price: ${price}</p>
                        <Link to={`/`}><Button>Return</Button></Link>                     
                        {
                            isInCart(id)
                            ? <div className="flex justify-center"><Link to="/cart"><Button>Proceed to checkout</Button></Link></div>
                            :<>
                                <ItemCount stock={stock} initial={initial} count={count} setCount={setCount} handleAdd={handleAdd} />
                            </>                            
                        }
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;