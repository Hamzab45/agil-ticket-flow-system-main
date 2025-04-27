
import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';
import { Ticket, Calendar, User, Settings } from 'lucide-react';
import Navbar from './Navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-agil-gray-light flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-agil-gray-light hidden md:block">
          <div className="p-4">
            <div className="text-sm text-agil-gray">Logged in as</div>
            <div className="font-medium text-agil-black">{user?.name}</div>
            <div className="text-xs text-agil-yellow-dark capitalize">{user?.role} Account</div>
          </div>
          
          <nav className="mt-6">
            <ul className="space-y-1">
              <li>
                <a 
                  href="/dashboard" 
                  className="flex items-center px-4 py-3 text-agil-black hover:bg-agil-yellow-light"
                >
                  <Ticket size={18} className="mr-3" />
                  <span>My Tickets</span>
                </a>
              </li>
              
              {(user?.role === 'operator' || user?.role === 'admin') && (
                <li>
                  <a 
                    href="/dashboard/tickets" 
                    className="flex items-center px-4 py-3 text-agil-black hover:bg-agil-yellow-light"
                  >
                    <Calendar size={18} className="mr-3" />
                    <span>All Tickets</span>
                  </a>
                </li>
              )}
              
              {user?.role === 'admin' && (
                <>
                  <li>
                    <a 
                      href="/dashboard/users" 
                      className="flex items-center px-4 py-3 text-agil-black hover:bg-agil-yellow-light"
                    >
                      <User size={18} className="mr-3" />
                      <span>Users</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/dashboard/settings" 
                      className="flex items-center px-4 py-3 text-agil-black hover:bg-agil-yellow-light"
                    >
                      <Settings size={18} className="mr-3" />
                      <span>Settings</span>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
