const UserList = () => {
    const numbers = [9, 12, 22, 23, 31];

return (
    <ul>
        {numbers.map((number) => (
            <li>{number}</li>
        ))}
    </ul>
)
}

export default UserList;