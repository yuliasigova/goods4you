import logo from '../../shared/assets/img/logo.svg'
import style from './header.module.scss'
import { useLocation, Link } from 'react-router-dom'
import CartIcon  from '../../shared/assets/svg/cart.svg?react'
import { selectTotal } from '../../shared/slice/CartSlice'
import { useSelector } from 'react-redux'

export const Header = () => {
    const location = useLocation();
    const total = useSelector(selectTotal)

    const isTotalValue = total > 0 ? 1 : 0

    return (
        <header className={location.pathname !== '/' ? style.header : style.headerHome}>
          {location.pathname !== '/' 
          ? <Link to={'/'}>  
          <img src={logo} width={162} height={40} alt="Логотип: Goods4you"></img>
          </Link>
          : <img src={logo} width={162} height={40} alt="Логотип: Goods4you"></img>
          }
            <nav className={style.nav}>
            <ul >
                <li>
                    <Link to={'/#catalog'}>Catalog</Link>
                </li>
                <li>
                    <Link to={'/#faq'}> FAQ</Link>
                </li>
                <li>
                    <Link to={'cart'} className={style.link}> Cart
                    <div className={style.cart}>
                        <CartIcon/>
                        {isTotalValue ? <span>{total}</span> : <></> }
                    </div>
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}