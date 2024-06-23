import { Header } from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { ScrollRestoration } from "react-router-dom"
import { useGetCartByUserQuery } from '../../shared/api/goodsApi'
import { useSelector } from 'react-redux'
import { selectUser } from '../../shared/slice/UserSlice'

export const Layout = () => {
    const userId = useSelector(selectUser)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data} = useGetCartByUserQuery(userId)

    return  (
        <>
        <Header/>
        <ScrollRestoration />
        <Outlet/>
        <Footer/>
         </>
      ) 
}
