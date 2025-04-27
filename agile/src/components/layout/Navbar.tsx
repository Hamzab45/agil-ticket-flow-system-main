
import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-agil-gray-light sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/15d1b968-9d76-4292-8e4c-f597f55bf6aa.png" 
            alt="AGIL Logo" 
            className="h-10 mr-2" 
          />
          <span className="text-agil-black">Ticket System</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/dashboard" className="text-agil-gray-dark hover:text-agil-black">
                  Dashboard
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/dashboard/admin" className="text-agil-gray-dark hover:text-agil-black">
                    Admin Panel
                  </Link>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="hidden md:block text-sm text-right">
                  <span className="text-agil-gray">Logged in as</span>
                  <div className="font-medium text-agil-black">{user?.name}</div>
                  <div className="text-xs text-agil-yellow-dark capitalize">{user?.role}</div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-agil-gray-dark hover:text-agil-black"
                  onClick={logout}
                  title="Logout"
                >
                  <LogOut size={20} />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost" className="text-agil-black hover:text-agil-yellow-dark">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="agil-button-primary">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
