let NumberList = () => {
    const users = ["Nayan", "Kalyani", "Aboli", "Swaraj"];

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default NumberList;