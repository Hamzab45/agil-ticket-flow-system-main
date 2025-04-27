
import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import { Navigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import Navbar from '../components/layout/Navbar';

const Register: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-agil-gray-light">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
