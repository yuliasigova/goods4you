import { useState, FormEvent} from "react"
import { Input } from "../../atoms/Input/Input"
import { Button } from "../../atoms/Button/Button"
import style from './Login.module.scss'
import { ILoginRequest } from "../../shared/types/UserTypes"
import logo from '../../shared/assets/img/logo.svg'
import headerStyle from '../../components/header/header.module.scss'
import { useLoginMutation } from "../../shared/api/userApi"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const LoginPage = () => {
    const [login] = useLoginMutation()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
   
    useEffect(() => {
         if (token) {
        navigate('/')
    }
    }, [token])
        
    

    const [formState, setFormState] = useState<ILoginRequest>({
        username: 'chloem',
        password: 'chloempass',
        expiresInMins: 1,
      })

    const handleChange = ({
        target: { name, value },
      }: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({ ...prev, [name]: value }))
   
      const handleFormSubmit = async (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
     
        try {
            await login(formState).unwrap()
            navigate('/');
            
          } catch (err) {
            console.log(err)
          } 
      };

     

    return (
        <>
          <header className={headerStyle.header}>
        <img src={logo} width={162} height={40} alt="Логотип: Goods4you"></img>
        </header>
        <main className={style.login}>
            <h1 className={style.loginTitle}>Login</h1>
            <form className={style.loginForm} method="post" action="#" onSubmit={handleFormSubmit}>
                <Input  value={formState.username} 
                onChange={handleChange} 
                    placeholder={'Login'} 
                    aria={'Enter username'}
                    name={'username'}/>
                <Input  value={formState.password} onChange={handleChange} 
                    placeholder={'Password'} 
                    aria={'Enter password'}
                    name={'password'}/>
                <Button type="submit"> Login </Button>
            </form>
        </main>
        </>
      
    )
}