import { IconButton } from "../../ui/IconButton/IconButton"
import { Icon } from "../../ui/icon/Icon"
import style from './count.module.scss'

export const Count = () => {
    return (
        <div className={style.count}>
            <IconButton>
                <Icon name={'minus'} width={18} height={3}/>
            </IconButton>
            <span>1</span>
            <IconButton>
            <Icon name={'plus'} width={18} height={18}/>
            </IconButton>
        </div>
    )
}