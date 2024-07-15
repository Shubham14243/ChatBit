import React from 'react';
import Searchinput from './Searchinput';
import Chatlist from './Chatlist';
import Logoutbtn from './Logoutbtn';

const Sidebar = ({ setViewProfile }) => {
    return (
        <>
            <div className='border-r border-slate-500 p-4 flex flex-col'>
                <Searchinput />
                <div className='divider px-3'></div>
                <Chatlist setViewProfile={setViewProfile}  />
                <Logoutbtn setViewProfile={setViewProfile} />
            </div>
        </>
    )
}

export default Sidebar