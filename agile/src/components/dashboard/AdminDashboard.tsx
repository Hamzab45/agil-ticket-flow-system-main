
import React, { useState } from 'react';
import { 
  users, 
  regions, 
  ticketTypes, 
  tickets, 
  User, 
  Region as RegionType,
  TicketType 
} from '../../utils/mockData';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = {
    totalUsers: users.length,
    clients: users.filter(u => u.role === 'client').length,
    operators: users.filter(u => u.role === 'operator').length,
    admins: users.filter(u => u.role === 'admin').length,
    regions: regions.length,
    ticketTypes: ticketTypes.length,
    tickets: tickets.length,
    bookedTickets: tickets.filter(t => t.status === 'booked').length,
    usedTickets: tickets.filter(t => t.status === 'used').length,
  };
  
  // These functions would connect to an API in a real application
  const handleAddUser = () => {
    toast.info('In a real implementation, this would open a form to add a new user');
  };
  
  const handleEditUser = (user: User) => {
    toast.info(`In a real implementation, this would open a form to edit ${user.name}`);
  };
  
  const handleDeleteUser = (user: User) => {
    toast.info(`In a real implementation, this would display a confirmation dialog to delete ${user.name}`);
  };
  
  const handleAddRegion = () => {
    toast.info('In a real implementation, this would open a form to add a new region');
  };
  
  const handleEditRegion = (region: RegionType) => {
    toast.info(`In a real implementation, this would open a form to edit ${region.name}`);
  };
  
  const handleDeleteRegion = (region: RegionType) => {
    toast.info(`In a real implementation, this would display a confirmation dialog to delete ${region.name}`);
  };
  
  const handleAddTicketType = () => {
    toast.info('In a real implementation, this would open a form to add a new ticket type');
  };
  
  const handleEditTicketType = (ticketType: TicketType) => {
    toast.info(`In a real implementation, this would open a form to edit ${ticketType.name}`);
  };
  
  const handleDeleteTicketType = (ticketType: TicketType) => {
    toast.info(`In a real implementation, this would display a confirmation dialog to delete ${ticketType.name}`);
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
          <TabsTrigger value="tickets">Ticket Types</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>User account statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Total Users:</span>
                    <span className="font-bold">{stats.totalUsers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Clients:</span>
                    <span className="font-medium">{stats.clients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Operators:</span>
                    <span className="font-medium">{stats.operators}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Admins:</span>
                    <span className="font-medium">{stats.admins}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Regions & Tickets</CardTitle>
                <CardDescription>Configuration statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Total Regions:</span>
                    <span className="font-bold">{stats.regions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Ticket Types:</span>
                    <span className="font-medium">{stats.ticketTypes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bookings</CardTitle>
                <CardDescription>Ticket booking statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Total Tickets:</span>
                    <span className="font-bold">{stats.tickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Booked Tickets:</span>
                    <span className="font-medium">{stats.bookedTickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-agil-gray">Used Tickets:</span>
                    <span className="font-medium">{stats.usedTickets}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="agil-button-primary" onClick={() => setActiveTab('users')}>
                  Manage Users
                </Button>
                <Button className="agil-button-primary" onClick={() => setActiveTab('regions')}>
                  Manage Regions
                </Button>
                <Button className="agil-button-primary" onClick={() => setActiveTab('tickets')}>
                  Manage Ticket Types
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage system users</CardDescription>
              </div>
              <Button className="agil-button-primary" onClick={handleAddUser}>
                Add User
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell className="capitalize">{user.role}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditUser(user)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteUser(user)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="regions">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Region Management</CardTitle>
                <CardDescription>Manage service regions</CardDescription>
              </div>
              <Button className="agil-button-primary" onClick={handleAddRegion}>
                Add Region
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {regions.map(region => (
                    <TableRow key={region.id}>
                      <TableCell className="font-medium">{region.name}</TableCell>
                      <TableCell>{region.description}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditRegion(region)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteRegion(region)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tickets">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Ticket Type Management</CardTitle>
                <CardDescription>Manage available ticket types</CardDescription>
              </div>
              <Button className="agil-button-primary" onClick={handleAddTicketType}>
                Add Ticket Type
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Regions</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ticketTypes.map(ticketType => (
                    <TableRow key={ticketType.id}>
                      <TableCell className="font-medium">{ticketType.name}</TableCell>
                      <TableCell>${ticketType.price.toFixed(2)}</TableCell>
                      <TableCell>{ticketType.available}</TableCell>
                      <TableCell>
                        {ticketType.regionIds.map(id => {
                          const region = regions.find(r => r.id === id);
                          return region ? region.name : '';
                        }).join(', ')}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditTicketType(ticketType)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteTicketType(ticketType)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
