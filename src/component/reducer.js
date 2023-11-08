export const reducer = (state, action) =>{
 if(action.type==="REMOVE_ITEM"){
    return {
        ...state,
        item : state.item.filter((curElem)=>{
            return curElem.id !== action.payload;

        }),
    };
 }
if(action.type==='Clear_Cart'){
    return {
        ...state, item:[]  
    };
}
  

   if(action.type==='INCREMENT'){
    

        let updateCart = state.item.map((curElem)=>{
            if(curElem.id===action.payload){
               
                return {...curElem, quantity : curElem.quantity+1}
            }
            return curElem;
        });
   
      
    
        return {...state, item:updateCart}
    }
   if(action.type==='DECREMENT')
   {
    let removedUpdate = state.item.map((curElem)=>{
        if(curElem.id===action.payload){
            return {...curElem, quantity: curElem.quantity-1}
                           
         }

        
            // return {...state, item:removeEl}
         
        return curElem;

        }).filter((curElem)=>{
            if(curElem.quantity<1){
                   return curElem.id!==action.payload
            }
            return curElem;
  
              });  

        return {...state, item:removedUpdate}

   
}

if(action.type==='GET_TOTAL'){
    
    let {totalItem,totalAmount} = state.item.reduce((accum,curval)=>{
     let   {price, quantity} = curval;
     let  updatedprice = price*quantity;
     accum.totalAmount +=updatedprice;
     accum.totalItem += quantity;

     return accum;
    },
     {
        totalItem : 0,
        totalAmount : 0,
    });

    return{...state, totalItem, totalAmount};
} 

   return state;
}