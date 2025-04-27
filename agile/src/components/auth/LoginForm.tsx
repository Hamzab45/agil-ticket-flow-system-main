
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      
      if (success) {
        toast.success('Login successful! Redirecting to dashboard...');
        navigate('/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      toast.error('An error occurred during login');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <form onSubmit={handleSubmit} className="agil-card">
        <h2 className="text-2xl font-bold mb-6 yellow-gradient-text">AGIL Login</h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="agil-input"
              placeholder="email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="agil-input"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="agil-button-primary w-full mt-6"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        
        <p className="mt-4 text-center text-sm text-agil-gray">
          Don't have an account?{' '}
          <a href="/register" className="text-agil-yellow-dark hover:underline">
            Register
          </a>
        </p>

        <div className="mt-6 border-t border-agil-gray-light pt-4">
          <p className="text-sm text-center text-agil-gray">Test Accounts (Email / Password):</p>
          <ul className="text-xs text-center text-agil-gray mt-2 space-y-1">
            <li>Client: client@example.com / password123</li>
            <li>Operator: operator@example.com / password123</li>
            <li>Admin: admin@example.com / password123</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
