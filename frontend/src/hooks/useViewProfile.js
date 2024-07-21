import React, { useState } from 'react'

const useViewProfile = () => {
  
    const [viewProfile, setViewProfile] = useState(false);

    return {viewProfile, setViewProfile};

}

export default useViewProfile