import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Messagebox from '../../components/messages/Messagebox';

const Home = () => {
  return (
    <>
      <div className='flex sm:h-[450px] md:h-[600px] rounded-md overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <Sidebar />
        <Messagebox />
      </div>
    </>
  )
}

export default Home;