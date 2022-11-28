import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/UseTitle';


const AddProducts = () => {
    useTitle('Add Product');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_Key;

    const handleAddProducts = event => {
        event.preventDefault()
        const form = event.target;
        const data = new Date()
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
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);


        const url = (`https://api.imgbb.com/1/upload?key=${imageHostKey}`)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
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
                        details,
                        image: imgData.data.url,
                        time: data.getTime()
                    }
                    fetch('http://localhost:5000/addProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProducts)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Products Successfully Added');
                                form.reset()
                                navigate('/dashboard/myProducts')
                            }
                            else {
                                toast.error(data.message);
                            }
                        })
                }
            })
    }

    return (
        <section>
            <div>
                <h3 className='text-3xl text-black mt-10 mb-6'>Add Your Products</h3>
            </div>
            <div className='w-100 p-5 shadow bg-[#78909C] rounded-lg'>
                <form onSubmit={handleAddProducts} className='grid grid-cols-2 gap-5 mt-10'>
                    <input name="username" type="text" defaultValue={user?.displayName} readOnly className="input  input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} readOnly className="input  input-bordered" />
                    <input name="name" type="text" placeholder="Your Products Name" className="input  input-bordered" />
                    <input name="price" type="text" placeholder="Products Price" className="input input-bordered" />
                    <input type="file" name='image' className="input input-bordered p-2 w-full"/>
                    <select name='condition' className="select select-bordered">
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                    <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered" />
                    <input name="address" type="text" placeholder="Meeting Location" className="input  input-bordered" />
                    <input name='year' type="text" placeholder='Year of Used' className="input  input-bordered " />
                    <select name='category' className="select select-bordered">
                        <option value='excellent'>Iphone</option>
                        <option value='fair'>Xiaomi</option>
                        <option value='good'>Oppo</option>
                    </select>
                    <textarea className='p-3 border rounded' name="description" placeholder='Add Your Products description'></textarea>
                    <br />
                    <input className="btn w-full border-none bg-gradient-to-r from-[#F44369] to-[#D64270] text-white" type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default AddProducts;