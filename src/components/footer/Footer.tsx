import logo from '../../shared/assets/img/logo.svg'
import style from './footer.module.scss'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <img src={logo} width={162} height={43} alt="Логотип: Goods4you"></img>
            <nav>
            <ul>
                <li>
                    <Link to={'/'}>Catalog</Link>
                </li>
                <li>
                    <Link to={'/'}>FAQ</Link>
                </li>
            </ul>
            </nav>
        </footer>
    )
}