
import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';
import ClientDashboard from '../components/dashboard/ClientDashboard';
import OperatorDashboard from '../components/dashboard/OperatorDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  const renderDashboard = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'operator':
        return <OperatorDashboard />;
      case 'client':
      default:
        return <ClientDashboard />;
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard;
