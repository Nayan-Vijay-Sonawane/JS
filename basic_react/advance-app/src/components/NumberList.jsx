let NumberList = () => {
    const users = ["Nayan", "Kalyani", "Aboli", "Swaraj"];

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default NumberList;