import React, { useState } from 'react'

const InfoModal = ({ data }) => {

    return (
        <>
            <div className="modal" role="dialog" id="infoModalOpen">
                <div className="modal-box border-2 border-yellow-500">
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                            <div className="avatar">
                                <div className="w-full h-auto rounded">
                                    <img src={data.picture} />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-7'>
                            <h1 className='text-2xl py-3 font-semibold text-center text-gray-300'>
                                <span className='text-yellow-400'>{data.name}</span>
                            </h1>
                            <h2 className='text-2xl py-3 font-semibold text-center text-gray-300'>
                                <span className='text-yellow-400'>{data.email}</span>
                            </h2>
                        </div>
                        <div className='col-span-1'>
                            <div className="modal-action w-full flex justify-center mt-0">
                                <a href="#" className="btn btn-sm btn-outline btn-warning">X</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoModal