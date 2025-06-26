import React, { useState } from 'react';
import styles from './Form.module.css';

function Form({ onRegister }) {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        gender: '',
        phone: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullname, email, phone, gender } = data;
        if (!fullname || !email || !phone || !gender) return;
        if (onRegister) onRegister(data);
        alert('Registration successful!');
        // showToast('Registration successful!', 'success');
        setData({
            fullname: '',
            email: '',
            gender: '',
            phone: ''
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Register Here</h3>

                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    placeholder="Full Name"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email (e.g adelekealiyah@gmail.com)"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Phone Number (e.g. +2349159052549)"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Form;