import React, {useContext} from "react"
import { Scrollbars } from 'react-custom-scrollbars';
import Items from './Items';
import  {CartContext} from './Cart';

const ContextCart = () => {
    const {item, clearCart, totalItem, totalAmount} = useContext(CartContext)
  return (
    <> 
      <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' alt="image" className='arrow-icon' />          
            <h1>Continue Shopping</h1>
       </div>
       <div className='cart-icon'>
        <img src='./images/carts.png' alt='image'/>
        <p>{totalItem}</p>
       </div>
      </header>
      <section>
        <h1>Shopping Cart</h1>
        <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> items in your Cart</p>
        <div className='cart-items'>
            <div className='cart-items-container'>
            <Scrollbars>
                {

                
                item.map((curitem) => {
                    return(
                        <Items key={curitem.id} {...curitem}/>
                        
                        
                        
                    )

                })}
            
                </Scrollbars>
            </div> 
            </div>
            <div className='card-total'>
                <h1>Cart Total : <span>{totalAmount}</span></h1>
                <button>Checkout</button>
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
            </div>
       
      </section>


    </>
  )
}
export default ContextCart;