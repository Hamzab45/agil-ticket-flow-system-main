
import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import Navbar from '../components/layout/Navbar';

const Login: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-agil-gray-light">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
