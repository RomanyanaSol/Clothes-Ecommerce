import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amount = cart.reduce((acc, currentItem) => acc + currentItem.amount, 0);
        setItemAmount(amount);
    }, [cart]);

    useEffect(() => {
        const total = cart.reduce((acc, currentItem) => acc + currentItem.amount * currentItem.price, 0);
        setTotal(total);
    }, [cart]);


    const addToCart = (item, id) => {
        const target = cart.find(item => item.id === id);
        if (target === undefined) {
            setCart([...cart, { ...item, amount: 1 }]);
        } else {
            target.amount++
            setCart([...cart])
        };
    };


    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };


    const clearCart = () => {
        setCart([]);
    };


    const increaseAmount = (id) => {
        const target = cart.find(item => item.id === id);
        target.amount++
        setCart([...cart])
    };


    const decreaseAmount = (id) => {
        const target = cart.find(item => item.id === id);
        if (target.amount === 1) {
            setCart(cart.filter(item => item.id !== id))
        } else {
            target.amount--
            setCart([...cart])
        };
    };



    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                total
            }}>
            {children}
        </CartContext.Provider>
    )

}
