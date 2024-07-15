import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Messagebox from '../../components/messages/Messagebox';
import Profile from '../../components/profile/Profile';
import useViewProfile from '../../hooks/useViewProfile';

const Home = () => {

  const { viewProfile, setViewProfile } = useViewProfile();

  return (
    <>
      <div className='flex sm:h-[450px] md:h-[600px] rounded-md overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <Sidebar setViewProfile={setViewProfile} />
        {viewProfile ? (
          <Profile setViewProfile={setViewProfile} />
        ) : (
          <Messagebox />
        )}

      </div>
    </>
  )
}

export default Home;