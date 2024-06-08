import style from './faq.module.scss'
import { useState } from 'react'
import { Icon } from '../../ui/icon/Icon'

const faq = [
    {
    id: 1,
    title: 'Question 1',
    content: 'Long answer to the first question'},
    {
        id: 2,
        title: 'Question 2',
        content: 'Long answer to the first question'
    },
]

export const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState<number[]>([])

    const handleClick = (i:number) => {
        if (openQuestion.includes(i)) {
            setOpenQuestion([...openQuestion.filter(q => q !==i)])
        } else 
        setOpenQuestion([...openQuestion, i])
    }
    
    return (
        <section className={style.faq} id={'faq'}>
              <div className={style.accordion}>
            <h2>FAQ</h2>
            {faq.map(item => 
                <div className={openQuestion.includes(item.id) ? style.detailsActive : style.details} 
                tabIndex={0} 
                key={item.id} onClick={() => handleClick(item.id)}>
                <h3 className={style.title}> {item.title}</h3>
                <p className={style.content}> {item.content} </p>
                <button>
                    <Icon name='close' width={25} height={25}></Icon>
                </button>
            </div>
            )}
            
            
            </div>
           
        </section>
    )
}