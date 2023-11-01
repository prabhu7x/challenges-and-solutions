import React, { useState } from "react";

export const DataContext = React.createContext();

function reducer(state, action) {
  let { type, payload } = action;
  switch (type) {
    case "addToCart":
      const itemExists = state.cart.some(item=> item.id === payload.id)
      
      if(!itemExists){
        return { ...state, cart: [...state.cart, payload]};
      }
      return state

    case "removeFromCart":
        const updatedCart = state.cart.filter(item => item.id !== payload.id)
        return {...state, cart: updatedCart}

    case "increaseQuantity" : 
        return({...state, payload: payload.quantity += 1}) 

    case "decreaseQuantity" : 
        if(payload.quantity > 1){
          return({...state, quantity: payload.quantity -= 1})
        }
  }
  return state;
}

export function DataProvider({ children }) {


  const initialState = {
    cart: [],
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addToCart = (item) => {
        dispatch({type: 'addToCart', payload: item})
  };

  const removeFromCart = (item) => {
        dispatch({ type: "removeFromCart", payload: item });
  };

  const increase_quantity = (item) => {
    dispatch({type: 'increaseQuantity', payload: item})
  }

  const decrease_quantity = (qnt) => {
    dispatch({type: 'decreaseQuantity', payload: qnt})
  }

  const value = {
    state,
    addToCart,
    removeFromCart,
    increase_quantity,
    decrease_quantity,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContext;
