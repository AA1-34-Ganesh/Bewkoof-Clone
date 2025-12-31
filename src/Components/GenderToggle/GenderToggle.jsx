import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './GenderToggle.css';

const GenderToggle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('men');

    useEffect(() => {
        if (location.pathname.includes('women')) {
            setActiveTab('women');
        } else {
            setActiveTab('men');
        }
    }, [location]);

    const handleToggle = (gender) => {
        setActiveTab(gender);
        if (gender === 'men') {
            navigate('/men');
        } else {
            navigate('/women');
        }
    };

    return (
        <div className="gender-toggle-container">
            <div
                className={`toggle-option ${activeTab === 'men' ? 'active' : ''}`}
                onClick={() => handleToggle('men')}
            >
                MEN
            </div>
            <div
                className={`toggle-option ${activeTab === 'women' ? 'active' : ''}`}
                onClick={() => handleToggle('women')}
            >
                WOMEN
            </div>
        </div>
    );
};

export default GenderToggle;
