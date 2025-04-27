
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../components/auth/AuthContext';
import Navbar from '../components/layout/Navbar';
import { Ticket, MapPin, User, Calendar } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-yellow-gradient-vertical relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-agil-black mb-4 animate-fade-in">
              AGIL Gas Station Ticket Booking System
            </h1>
            <p className="text-xl text-agil-black mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Book your tickets for gas station services by region. Simple, fast, and convenient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {isAuthenticated ? (
                <Button 
                  className="agil-button-secondary"
                  size="lg"
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    className="agil-button-secondary"
                    size="lg"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-white text-agil-black hover:bg-agil-gray-light"
                    size="lg"
                    onClick={() => navigate('/register')}
                  >
                    Create Account
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="agil-card flex flex-col items-center text-center">
            <div className="bg-agil-yellow-light p-4 rounded-full mb-4">
              <User size={32} className="text-agil-yellow-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p className="text-agil-gray">Sign up with your email to create your AGIL account</p>
          </div>
          
          <div className="agil-card flex flex-col items-center text-center">
            <div className="bg-agil-yellow-light p-4 rounded-full mb-4">
              <MapPin size={32} className="text-agil-yellow-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Select Region</h3>
            <p className="text-agil-gray">Choose the gas station region you'd like to visit</p>
          </div>
          
          <div className="agil-card flex flex-col items-center text-center">
            <div className="bg-agil-yellow-light p-4 rounded-full mb-4">
              <Ticket size={32} className="text-agil-yellow-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Ticket</h3>
            <p className="text-agil-gray">Book the type of service ticket you need</p>
          </div>
          
          <div className="agil-card flex flex-col items-center text-center">
            <div className="bg-agil-yellow-light p-4 rounded-full mb-4">
              <Calendar size={32} className="text-agil-yellow-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Station</h3>
            <p className="text-agil-gray">Use your ticket at the gas station on your scheduled time</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-agil-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ticket?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who use AGIL to streamline their gas station visits.
          </p>
          <Button 
            className="bg-yellow-gradient text-agil-black hover:shadow-lg"
            size="lg"
            onClick={() => navigate(isAuthenticated ? '/dashboard' : '/register')}
          >
            {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-8 border-t border-agil-gray-light">
        <div className="container mx-auto px-4 text-center">
          <p className="text-agil-gray">
            © {new Date().getFullYear()} AGIL Gas Station Ticket Booking System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
