import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const handleAddProducts = event => {
        event.preventDefault()
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.address.value;
        const year = form.year.value;
        const category = form.category.value;
        const details = form.description.value;

        const addProducts = {
            seller: username,
            email,
            productName: name,
            price,
            condition,
            phone,
            location,
            year,
            category,
            details
        }
        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Products Succesfully Added');

                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <section>
            <div>
                <h3 className='text-3xl text-black mt-10 mb-6'>Add Your Products</h3>
            </div>
            <div className='w-96 p-5 shadow bg-[#78909C] rounded-lg'>
                <form onSubmit={handleAddProducts} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name="username" type="text" defaultValue={user?.displayName} readOnly className="input  input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} readOnly className="input  input-bordered" />
                    <input name="name" type="text" placeholder="Your Products Name" className="input  input-bordered" />
                    <input name="price" type="text" placeholder="Products Price" className="input input-bordered" />
                    <select name='condition' className="select select-bordered">
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                    <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered" />
                    <input name="address" type="text" placeholder="Meeting Location" className="input  input-bordered" />
                    <input name='year' type="text" placeholder='Year of Purchase' className="input  input-bordered " />
                    <select name='category' className="select select-bordered">
                        <option value='excellent'>Iphone</option>
                        <option value='fair'>Xiaomi</option>
                        <option value='good'>Oppo</option>
                    </select>
                    <textarea name="description" placeholder='Add Your Products description'></textarea>
                    <input className="btn w-full border-none mt-2 bg-gradient-to-r from-[#F44369] to-[#D64270] text-white" type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default AddProducts;