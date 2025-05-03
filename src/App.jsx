import friends from './friends.json';
import './App.css';
import FriendList from './FriendsList/FriendList';

export default function App () {

  return (

    <FriendList friends = {friends} />
  )
}