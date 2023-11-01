import React, { useContext, useEffect, useState } from 'react'
import { images } from '../../images'
import { DataContext } from '../../Context/DataContext'

function Header() {
    const [menuToggle, setMenuToggle] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const {state} = useContext(DataContext)

    const cartItems = state.cart.length

    useEffect(()=>{
        if(menuToggle){
            document.body.classList.add('open-nav')
        }else {
            document.body.classList.remove('open-nav')
        }

        if(showCart){
            document.body.classList.add('show_cart')
        }else {
            document.body.classList.remove('show_cart')
        }
    },[menuToggle, showCart])
  return (
    <header>
        <div className="menu" onClick={()=>setMenuToggle(!menuToggle)}>
            <div className="menu-icon">
        { !menuToggle ?
            <img src={images.menu} alt="menu" className='menu_open' /> : <img src={images.close} alt='close' className='menu_close' />
        }
            </div>
        <a className='logo' href="#"><img src={images.logo} alt="logo" /></a>
        </div>
        <nav>
            <ul>
                <li>Collections </li>
                <li>Men </li>
                <li>Women </li>
                <li>About </li>
                <li>contact </li>
            </ul>
            <div className="profile">
                <button onClick={()=>setShowCart(!showCart)}><img src={images.cart} alt="cart" /> { cartItems === 0 ? null : <span className='dot'>{cartItems}</span>}</button>
                <button className='avatar'><img src={images.avatar} alt="avatar" /></button>
            </div>
        </nav>
    </header>
  )
}

export default Header