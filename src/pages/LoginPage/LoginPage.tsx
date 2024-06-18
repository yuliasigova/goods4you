import { useState, FormEvent} from "react"
import { Input } from "../../atoms/Input/Input"
import { Button } from "../../atoms/Button/Button"
import style from './Login.module.scss'

interface ILoginRequest {
    username: string
    password: string,
    expiresInMins: number
  }

export const LoginPage = () => {
    const [formState, setFormState] = useState<ILoginRequest>({
        username: '',
        password: '',
        expiresInMins: 5,
      })

    const handleChange = ({
        target: { name, value },
      }: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({ ...prev, [name]: value }))
   
      const handleFormSubmit = (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(formState)
      };

    return (
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
    )
}