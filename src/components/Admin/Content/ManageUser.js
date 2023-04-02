import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
<<<<<<< HEAD
import TableUser from "./TableUser";
=======
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> Add new user</button>
                </div>
                <div className="table-users-container">
<<<<<<< HEAD
                    <TableUser/>
=======
                    table users
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}

                />
            </div>

        </div>
    )
}

export default ManageUser;