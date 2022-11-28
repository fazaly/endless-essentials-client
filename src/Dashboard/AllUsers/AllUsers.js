import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/UseTitle';
import ConfirmationModal from '../../Pages/Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    useTitle('All User');

    const [deleteUser, setDeleteUser] = useState(null)

    const closeModal = () => {
        setDeleteUser(null)
    }

    // Step:- 02(Admin)
    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    // Step- 03(Admin)
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',

            // Step- 16 (jwt)
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            // Step- 04(Admin)
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful.')
                refetch();
            }
        })
    }

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: bearer ${localStorage.getItem('accessToken')}
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <div>
                <h3 className='text-3xl text-black mt-10 mb-6'>All Users</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.user}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm border-none mt-2 bg-[#00b09b] text-white'>Make Admin</button>}</td>
                                <td><label onClick={() => setDeleteUser(user)} htmlFor="my-modal" className='btn btn-sm border-none mt-2 bg-gradient-to-r from-[#e52d27] to-[#b31217]'>delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.name} It cannot be undone.`}
                    successAction={handleDeleteUser}
                    closeModal={closeModal}
                    modalData={deleteUser}
                ></ConfirmationModal>}
        </div>
    );
};

export default AllUsers;