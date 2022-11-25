import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({booking, setBooking}) => {
    // console.log(booking);
    // const {user} = useContext(AuthContext);
    const handleSubmit = () => {
        setBooking(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{booking.model}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" onClick={handleSubmit} className="btn w-full border-none bg-gradient-to-r from-[#F44369] to-[#D64270] text-white">Submit</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;