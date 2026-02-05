// function Profile(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.role}</p>
//         </div>
//     );
// }

// export default Profile;

// Props with Destructuring (Professional Way)

function Profile({name, role}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    )
}

export default Profile;