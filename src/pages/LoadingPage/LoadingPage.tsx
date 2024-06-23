import style from './Loading.module.scss'

export const LoadingPage = () =>  {
    return (
        <div  className={style.loading}>
     
        <header className={style.header}>
        </header>
          <main className={style.main}>
          <span className={style.loader}></span>
        </main>
  
        </div>
      
    )
   
}