// components/ContactForm.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import L from 'leaflet';
import './styles/ContactForm.css'; // adjust path as needed
import './styles/shared.css';
import {Button} from './button'

const MotionButton = motion(Button);

const markerIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        alert('Message sent!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };


return (
        <div className="Port-Section">
            <div className="body-texts">
                <motion.h1
                    className="main-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                    Contact Us
                </motion.h1>
                <motion.p
                    className="description-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    >
                    Reach out to us using the form below. We’d love to hear from you.
                </motion.p>
            </div>

            <div className="contact-content">
                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                <div className="form-group">
                    <label htmlFor="name" className ="description-text">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className ="description-text">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group"> 
                    <label htmlFor="message" className ="description-text">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="hero-btns">
                        <MotionButton
                        className="btns"
                        buttonStyle="btn--secondary" 
                        buttonSize = "btn--large"
                        type="submit"
                        noLink={true} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        Submit
                    </MotionButton>
                </div>
                </motion.form>


                <motion.div
                className="contact-map"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                >
                <MapContainer 
                    center={[11.9895516, 8.5637992]}
                    zoom={20}
                    scrollWheelZoom={false}
                    dragging={false}
                    zoomControl={false}
                    doubleClickZoom={false}
                    touchZoom={false}
                    keyboard={false}
                    className="map-box">

                    <TileLayer
                        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[11.9895516, 8.5637992]} icon={markerIcon}>
                        <Popup>ElevateHer Innovation Hub, Kano</Popup>
                    </Marker>
                </MapContainer>
                </motion.div>
            </div>
        </div>
    );
    };

export default ContactForm;
