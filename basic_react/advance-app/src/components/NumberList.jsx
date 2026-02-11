let NumberList = () => {
    const users = ["Nayan", "Kalyani", "Aboli", "Swaraj"];
    const listItems = users.map((user) => {
    <li key={user}>{user}</li>
    });

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default NumberList;