import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { UserContext } from '../contexts/UserContext';

const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);
  return (
    <div className='
    background-log-out bg-gradient-to-r from-black via-red-900 to-red-700'>
      <button
        className='"bg-red-500 text-white p-2 hover:bg-red-400 rounded'
        onClick={removeUser}
      >
        Log out
      </button>
      <Outlet />
    </div>
  );
};

export default PokedexLayout;
