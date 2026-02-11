let NumberList = () => {
    const users = ["Nayan", "Kalyani", "Aboli", "Swaraj"];
    const listItems = users.map((user) => {
    <li>{user}</li>
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