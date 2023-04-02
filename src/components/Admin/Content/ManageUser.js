import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
<<<<<<< HEAD
import TableUser from "./TableUser";
=======
<<<<<<< HEAD
import TableUser from "./TableUser";
=======
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
>>>>>>> e64ec704df586cf1601cf7575bc9a34ee2e40883

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
<<<<<<< HEAD
                    <TableUser/>
=======
                    table users
>>>>>>> 7d9caa718caf1c4f0a97338adcbfc20ed5b5bda2
>>>>>>> e64ec704df586cf1601cf7575bc9a34ee2e40883
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