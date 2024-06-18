import { useState, ChangeEvent, FormEvent} from "react"
import { Input } from "../../atoms/Input/Input"
import { Button } from "../../atoms/Button/Button"
import style from './Login.module.scss'

export const LoginPage = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleInputChangeLogin = (evt:ChangeEvent<HTMLInputElement>) => {
        setLogin(evt.target.value);
      };
    
      const handleInputChangePassword = (evt:ChangeEvent<HTMLInputElement>) => {
        setPassword(evt.target.value);
      };

      const handleFormSubmit = (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(login, password)
      };

    return (
        <main className={style.login}>
            <h1 className={style.loginTitle}>Login</h1>
            <form className={style.loginForm} method="post" action="#" onSubmit={handleFormSubmit}>
                <Input  value={login} onChange={handleInputChangeLogin} 
                    placeholder={'Login'} 
                    aria={'Enter a login'}/>
                <Input  value={password} onChange={handleInputChangePassword} 
                    placeholder={'Password'} 
                    aria={'Enter a password'}/>
                <Button type="submit"> Login </Button>
            </form>
        </main>
    )
}