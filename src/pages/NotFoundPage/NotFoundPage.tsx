import { Link } from "react-router-dom"
import style from './notFound.module.scss';

export const NotFoundPage = () => {
    return (
        <main className={style.notFound}>
            <h1>Такой страницы не существует </h1>
            <Link to ={'/'}>Вернуться на главную</Link>
        </main>
     
    )
}