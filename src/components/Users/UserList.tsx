import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { fetchUsers } from '../../store/userSlice';
import AddUserModal from './AddUserModal';
import { User } from '../../types';  // User tipini import ediyoruz

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <span className="text-xl">+</span>
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user: User) => (  // User tipini açıkça belirtiyoruz
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{user.username}</h3>
            <p className="text-gray-600">{user.email}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-gray-500">{user.role}</span>
              <span className="text-gray-400">{user.createdAt}</span>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AddUserModal
          onClose={() => setIsModalOpen(false)}
          onAdd={() => {
            setIsModalOpen(false);
            dispatch(fetchUsers());
          }}
        />
      )}
    </div>
  );
};

export default UserList;