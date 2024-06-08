import logo from '../../shared/assets/img/logo.svg'
import style from './header.module.scss'
import { useLocation, Link } from 'react-router-dom'
import { Icon } from '../../ui/icon/Icon'


export const Header = () => {
    const location = useLocation();
 
    return (
        <header className={location.pathname !== '/' ? style.header : style.header__home}>
          {location.pathname !== '/' 
          ? <Link to={'/'}>  
          <img src={logo} width={162} height={40}></img>
          </Link>
          : <img src={logo} width={162} height={40}></img>
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
                    <Link to={'cart'}> Cart
                    <div className={style.link__cart}>
                        <Icon name={'cart'} width={20} height={18}/>
                        <span>1</span>
                    </div>
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}