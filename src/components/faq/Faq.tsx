import style from './faq.module.scss'
import { useState } from 'react'
import IconClose from '../../shared/assets/svg/close.svg?react'
import { IconButton } from '../../atoms/IconButton/IconButton'

const faq = [
    {
        id: 1,
        title: 'Question 1',
        content: 'Long answer to the first question'},
    {
        id: 2,
        title: 'Question 2',
        content: 'Long answer to the second question'
    },
]

export const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState<number[]>([1])

    const handleClick = (i:number) => {
        if (openQuestion.includes(i)) {
            setOpenQuestion([...openQuestion.filter(q => q !==i)])
        } else 
        setOpenQuestion([...openQuestion, i])
    }

    return (
        <section className={style.faq} id={'faq'} aria-label={'faq'}>
              <div className={style.accordion}>
            <h2>FAQ</h2>
            {faq.map(item => 
                <div className={style.details} 
                tabIndex={0} 
                key={item.id} onClick={() => handleClick(item.id)}>
                <h3 className={style.title}> {item.title}</h3>
                <p className={openQuestion.includes(item.id)? style.contentActive : style.content}> 
                {item.content} </p>
             <IconButton primary={false}  disabled={false}
             aria={'Открыть или закрыть описание'}>
             <IconClose className={openQuestion.includes(item.id) ? style.svgActive : style.svg} />
             </IconButton>
            </div>
            )}
            </div>
           
        </section>
    )
}