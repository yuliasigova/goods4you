import logo from '../../shared/assets/img/logo.svg'
import style from './footer.module.scss'
import { Link } from 'react-router-dom'
import nav from '../header/header.module.scss'
import { useLocation } from 'react-router-dom'

export const Footer = () => {
    const location = useLocation();
    return (
        <footer className={style.footer}>
             {location.pathname !== '/' 
          ? <Link to={'/'}>  
          <img src={logo} width={162} height={43} alt="Логотип: Goods4you"></img>
          </Link>
          : <img src={logo} width={162} height={43} alt="Логотип: Goods4you"></img>
          }
          <div className={nav.nav}>
          <ul>
                <li>
                    <Link to={'/'}>Catalog</Link>
                </li>
                <li>
                    <Link to={'/'}>FAQ</Link>
                </li>
            </ul>
          </div>
          
          
        </footer>
    )
}