import picture from '../assets/Shri_Ratan_Naval_Tata.jpg'
import './Usercard.css';

const UserCard = () => {
    return (
        <div className="user-container">
            <p id="user-name">Ratan Tata</p>
            <img id="user-img" src={picture} alt="Nayan"></img>
            <p id="user-desc">Description of Ratan Tata</p>
        </div>
    )
};

export default UserCard;