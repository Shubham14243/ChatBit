import React, { useState } from 'react'

const useViewProfile = () => {
  
    const [viewProfile, setViewProfile] = useState(false);

    console.log(viewProfile);

    return {viewProfile, setViewProfile};

}

export default useViewProfile