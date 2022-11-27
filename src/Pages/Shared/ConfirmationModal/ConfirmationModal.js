import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-gray-700">{title}</h3>
                    <p className="py-4 text-gray-600">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="my-modal" className="btn border-none bg-[#e52d27]">Confirm</label>
                        <button onClick={closeModal} className='btn border-none bg-[#f46b45]'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;