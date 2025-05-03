import FriendListItem from "./FriendListItem"
import classes from './friends.module.css';


export default function FriendList (props) {

    return (

        <ul className={classes['friend-list']}>

            {props.friends.map(item => {

                return <FriendListItem key = {item.id} {...item} />
            })}
        </ul>
    )
}