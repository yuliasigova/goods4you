import style from './Loading.module.scss'

export const LoadingPage = () =>  {
    return (
        <div  className={style.loading}>
    
          <span className={style.loader}></span>
  
        </div>
      
    )
   
}