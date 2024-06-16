import style from './slider.module.scss'
import { useState } from 'react'

type ImageListProp = {
    imageList: Array<string>
}

export const Slider = ({imageList}:ImageListProp ) => {
    const [index, setIndex] = useState<number>(0)

    const changeIndex = (i:number) => {
        if (i !==index) {
            setIndex(i)
        }
    }

    return (
        <div className={style.slider}>
            <div className={style.wrapper}>
                <img src={imageList[index]} width={520} height={421} alt='Большое изображение товара'></img>
            </div>

            <ul className={style.list}>
            {imageList.map((image, _i) => 
            <li 
            className={_i === index ? style.itemActive : style.item } 
            key={_i} 
            tabIndex={0} 
            onClick={() => changeIndex(_i)}>
                <img src={image} width={70} height={75} alt='изображение товара'></img>
                </li> )}
            </ul>
        </div>
    )
}