import style from './slider.module.scss'

export const Slider = () => {
    const imageList = Array.from({length:6}, () => '/src/shared/assets/img/product-large.jpg')
  
    return (
        <div className={style.slider}>
            <div className={style.wrapper}>
                <img src={imageList[0]} width={520} height={421} alt=''></img>
            </div>

            <ul className={style.list}>
            {imageList.map((image, _i) => 
            <li className={style.item} key={_i} tabIndex={0}>
                <img src={image} width={70} height={75} alt=''></img>
                </li> )}
            </ul>
        </div>
    )
}