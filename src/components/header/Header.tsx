import logo from '../../shared/assets/img/logo.svg'
import style from './header.module.scss'
import { useLocation, Link } from 'react-router-dom'
import CartIcon  from '../../shared/assets/svg/cart.svg?react'


export const Header = () => {
    const location = useLocation();
 
    return (
        <header className={location.pathname !== '/' ? style.header : style.header__home}>
          {location.pathname !== '/' 
          ? <Link to={'/'}>  
          <img src={logo} width={162} height={40} alt="Логотип: Goods4you"></img>
          </Link>
          : <img src={logo} width={162} height={40} alt="Логотип: Goods4you"></img>
          }
           
            <nav className={style.nav}>
            <ul >
                <li>
                    <Link to={'/'}>Catalog</Link>
                </li>
                <li>
                    <Link to={'/'}> FAQ</Link>
                </li>
                <li>
                    <Link to={'cart'} className={style.link}> Cart
                    <div className={style.cart}>
                        <CartIcon/>
                        <span>1</span>
                    </div>
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}