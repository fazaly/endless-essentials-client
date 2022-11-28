import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { FaUsers } from "react-icons/fa";
import { MdAddComment, MdAddCircle, MdOutlineSupervisedUserCircle } from "react-icons/md";
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useTitle from '../hooks/UseTitle';

const DashboardLayout = () => {
    useTitle('Dashboard');

    const {user} = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    // console.log(isAdmin);

    return (
        <div>
            <Navbar/>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li className='text-black mb-2'><Link to='/dashboard/myOrder'><MdAddComment className='text-[#e52d27] w-[25px] h-[25px]'/>My Orders</Link></li>
                            {
                                isAdmin && <>
                                    <li className='text-black mb-2'><Link to='/dashboard/allUsers'><FaUsers className='text-[#e52d27] w-[25px] h-[25px]'/>All Users</Link></li>
                                </>
                            }
                            <li className='text-black mb-2'><Link to='/dashboard/addProduct'><MdAddCircle className='text-[#e52d27] w-[25px] h-[25px]'/>Add Products</Link></li>
                            <li className='text-black'><Link to='/dashboard/myProducts'><MdOutlineSupervisedUserCircle className='text-[#e52d27] w-[25px] h-[25px]'/>My Products</Link></li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default DashboardLayout;