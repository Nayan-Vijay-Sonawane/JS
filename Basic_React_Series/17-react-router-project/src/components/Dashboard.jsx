import { Outlet } from 'react-router-dom'; 

const Dashboard = () => {
    return (
        <div className="text-2xl font-bold text-mist-300 p-10 flex justify-center items-center">
            Dashboard Page 
            <Outlet />
        </div> 
    )
};

export default Dashboard;
