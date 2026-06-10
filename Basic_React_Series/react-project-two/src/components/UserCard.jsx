import picture from '../assets/Shri_Ratan_Naval_Tata.jpg'
import './Usercard.css';

const UserCard = () => {
    return (
        <div className="user-container">
            <img id="user-img" src={picture} alt="Nayan"></img>
            <h2 id="user-name">Ratan Tata</h2>
            <p id="user-desc">Description of Ratan Tata</p>
            <button  id="btn">View Profile</button>
        </div>
    )
};

export default UserCard;