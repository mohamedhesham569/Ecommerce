import { useState,createContext, useEffect } from "react";

const cartcontext=createContext();

export function Cartprovider({children}){
    const[CartItemsStore,setCartItemsStore]=useState([]); 
    const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const[Wishlist,setWishlist]=useState([]);
  const [isClicked, setIsClicked] = useState(false);



  function PopupMessage({ message, show }) {
    return show ? (
      <div className="popup">
        {message}
      </div>
    ) : null;
  }

    function handleAddToCart(product) {
      setShowPopup(true);
      setMessage('Item added to cart.');
  
      // Hide the pop-up after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
        setMessage('');
      }, 2000);

        const existingItemIndex = CartItemsStore.findIndex((item) => item.product.id === product.id);
        if (existingItemIndex >= 0) {
        const updatedItems = [...CartItemsStore];
        updatedItems[existingItemIndex].quantity += 1;
        setCartItemsStore(updatedItems);
        } else {
        setCartItemsStore([...CartItemsStore, { product, quantity: 1 }]);
        }
        
    }
    function HandelAddtoWishlist(product){
      const existingItemIndex = Wishlist.findIndex((item) => item.product.id === product.id);
      if (existingItemIndex >= 0){
        const updatedItems = [...Wishlist];
        updatedItems.splice(existingItemIndex,1)
        setWishlist(updatedItems);
      } else {
        setWishlist([...Wishlist, { product, quantity: 1 }]);
        }
        // setIsClicked(!isClicked);  // Toggle the state
        
    }
    function handleUpdateItemQuantity(product, quantity) {
        const existingItemIndex = CartItemsStore.findIndex((item) => item.product.id === product.id);
        if (existingItemIndex >= 0) {
          const updatedItems = [...CartItemsStore];
          if(quantity !== 0){
            updatedItems[existingItemIndex].quantity = quantity;
          setCartItemsStore(updatedItems);
          }else{
            const updatedItems = CartItemsStore.filter((item) => item.product.id !== product.id);
            setCartItemsStore(updatedItems);
          }
        }
        
      }

      function handleRemoveItem(product) {
        const updatedItems = CartItemsStore.filter((item) => item.product.id !== product.id);
        setCartItemsStore(updatedItems);
      }
      let count=0;
      let total_price=0;
      for(var i=0 ;i<CartItemsStore.length;i++){
        count=count+CartItemsStore[i].quantity
        total_price=total_price+CartItemsStore[i].quantity*CartItemsStore[i].product.price
      }
      
    return(
        <>
        <cartcontext.Provider value={{CartItemsStore,handleAddToCart,handleUpdateItemQuantity,handleRemoveItem,count,total_price,PopupMessage,showPopup,message,HandelAddtoWishlist,Wishlist,isClicked}}>
            {children}
        </cartcontext.Provider>
        </>
    )
    };

export default cartcontext;