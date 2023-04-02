import React from 'react';
<<<<<<< HEAD
import  './Admin.scss';
=======
import './Admin.scss';
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
=======
import { ToastContainer, toast } from 'react-toastify';
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
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
<<<<<<< HEAD
                   <Outlet />
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
=======
                    <Outlet />
                </div>
            </div>
            <ToastContainer
                position="bottom-left"
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
<<<<<<< HEAD
                />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}
 
=======
            />
        </div>
    )
}

>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
export default Admin;