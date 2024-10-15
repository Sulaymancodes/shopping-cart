import Navbar from "./Navbar";
import DefaultShop from "./DefaultShop";
import Cart from "./Cart";
import { useProductURL } from "../hook/UseProductURL";
import { useParams } from "react-router-dom"
import { Minus, Plus } from "lucide-react"
import { useState, useEffect } from "react";

export default function Shop () {
    const { loading, shopItems, error} = useProductURL('https://fakestoreapi.com/products')
    const [count, setCount] = useState([])
    const [cartMsg, setCartMsg] = useState(false)
    const [cartArr, setCartArr] = useState([])
    const [cartArrCount, setCartArrCount] = useState([])
    
    useEffect(() => {
        setCount(Array(shopItems.length).fill(0))
    },[shopItems])
  
    function addCount (index) {
        const newCount = [...count];
        newCount[index] += 1;
        setCount(newCount)
    }

    function minusCount (index) {
        const newCount = [...count];
        if (newCount[index] > 0) {
            newCount[index] -= 1
        }
        setCount(newCount)
    }
   
    function handleAddtoCart (index) {
        if (count[index] > 0) {
            setCartArr([...cartArr, shopItems[index]])
            setCartArrCount([...cartArrCount, count[index]])
            setCartMsg(true)
            setTimeout(() => {
                setCartMsg(false)
            }, 1000);
        } 
    }

    function updateQuantity(index, change) {
        const newCartArrCount = [...cartArrCount];
        newCartArrCount[index] += change;
        if (newCartArrCount[index] <= 0) {
            // Remove item from cart if quantity becomes 0 or negative
            setCartArr(cartArr.filter((_, i) => i !== index));
            setCartArrCount(cartArrCount.filter((_, i) => i !== index));
        } else {
            setCartArrCount(newCartArrCount);
        }
    }


    const { name } = useParams()

     return (
       
        <>
            <Navbar itemCount={cartArr.length} />
            {name === 'cart' ? (
                <Cart cartArr={cartArr} cartArrCount={cartArrCount} updateQuantity={updateQuantity}/>
            ) :
            <DefaultShop 
                cartMsg={cartMsg} 
                loading={loading}
                error={error}
                shopItems={shopItems}
                count={count}
                Minus={Minus}
                Plus={Plus}
                addCount={addCount}
                minusCount={minusCount}
                handleAddtoCart={handleAddtoCart}
            />}
        </>
         
     
     )
 }
 
 