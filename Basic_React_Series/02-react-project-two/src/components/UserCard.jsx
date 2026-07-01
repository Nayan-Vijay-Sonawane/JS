import picture from '../assets/Shri_Ratan_Naval_Tata.jpg'
import './Usercard.css';

const UserCard = (props) => {
    return (
        <div className="user-container">
            <img id="user-img" src={picture} alt={props.name}></img>
            <h2 id="user-name">{props.name}</h2>
            <p id="user-desc">{props.desc}</p>
            <button  id="btn">View Profile</button>
        </div>
    )
};

export default UserCard;