import classes from './friends.module.css';


export default function FriendListItem (props) {
    
    return (

        <li className={classes.item}>
            <span className={props.isOnline ? `${classes.status} ${classes.active}` : classes.status}></span>
            <img className={classes.avatar} src={props.avatar} alt="User avatar" width="48" />
            <p className={classes.name}>{props.name}</p>
        </li>
    )
}