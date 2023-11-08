import React, { createContext, useEffect, useReducer, useState } from 'react';
import cart from "./cart.css"
// import { Scrollbars } from 'react-custom-scrollbars';
import ContextCart from './ContextCart';
import {Product} from './Product';
import {reducer} from './reducer';
export const CartContext = createContext();


const initialState = {
    item: Product, 
    totalAmount : 0,   
    totalItem :0,    
};
 

const Cart = () => {

    // const [item, setItem] = useState(Product)
const [state, dispatch] = useReducer(reducer, initialState);
    const removeItem = (id)=>{
        return dispatch({ 
        type :"REMOVE_ITEM",
        payload: id,
    });
    };
    const clearCart =()=>{
        return dispatch({
            type: 'Clear_Cart',
        });
    };

    const addItem = (id)=>{
        return dispatch({
            type: "INCREMENT",
            payload : id,
        });
    };
    const deleteItem = (id)=>{
        return dispatch({
            type: 'DECREMENT',
            payload:id,
        })
    }
    useEffect(()=>{
        dispatch({ type: 'GET_TOTAL' });
        console.log("All Good");
    }, [state.item]);
    
    return (
        <>
      
             <CartContext.Provider value={{ ...state, removeItem, clearCart, addItem, deleteItem}}>
    <ContextCart />
    </CartContext.Provider>
          
       
    </>
  
         );    
    
    
     
    };

export default Cart;
