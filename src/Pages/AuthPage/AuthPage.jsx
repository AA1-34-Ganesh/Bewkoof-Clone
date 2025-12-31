import React, { useState } from 'react';
import './AuthPage.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, signupSuccess } from '../../Redux/User/userSlice';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'text' && !isLogin ? 'name' : e.target.type]: e.target.value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            console.log('Logging in with:', formData);
            dispatch(loginSuccess({ email: formData.email, name: 'Test User' }));
            alert('Login Successful');
        } else {
            console.log('Signing up with:', formData);
            dispatch(signupSuccess({ email: formData.email, name: formData.name }));
            alert('Signup Successful');
        }
        navigate('/');
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
                <div className="auth-tabs">
                    <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required={!isLogin}
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="auth-btn">
                        {isLogin ? 'LOGIN' : 'REGISTER'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
