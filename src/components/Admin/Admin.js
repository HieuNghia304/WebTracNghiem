import React from 'react';

import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />

                </div>

                <div className="admin-main">

                   <Outlet />
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}
 
export default Admin;