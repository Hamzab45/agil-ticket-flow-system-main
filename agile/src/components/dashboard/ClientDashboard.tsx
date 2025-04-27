
import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { Region, Ticket, TicketType, getRegionById, getTicketTypeById, tickets } from '../../utils/mockData';
import { Button } from '@/components/ui/button';
import RegionSelector from '../regions/RegionSelector';
import TicketList from '../tickets/TicketList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCheck, Clock } from 'lucide-react';

const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [showBookingInterface, setShowBookingInterface] = useState(false);
  
  // Filter tickets for current user
  const userTickets = tickets.filter(ticket => ticket.userId === user?.id);
  
  const handleSelectRegion = (region: Region) => {
    setSelectedRegion(region);
    setShowBookingInterface(true);
  };
  
  const handleNewBooking = () => {
    setSelectedRegion(null);
    setShowBookingInterface(true);
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  
  const getStatusBadgeClass = (status: Ticket['status']) => {
    switch (status) {
      case 'booked':
        return 'bg-blue-100 text-blue-800';
      case 'used':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusIcon = (status: Ticket['status']) => {
    switch (status) {
      case 'booked':
        return <Clock size={16} />;
      case 'used':
        return <CheckCheck size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>
        <Button 
          className="agil-button-primary"
          onClick={handleNewBooking}
        >
          {showBookingInterface ? 'Continue Booking' : 'Book New Ticket'}
        </Button>
      </div>
      
      {showBookingInterface ? (
        <div>
          {!selectedRegion ? (
            <RegionSelector 
              onSelectRegion={handleSelectRegion}
              selectedRegionId={selectedRegion?.id}
            />
          ) : (
            <>
              <Button 
                variant="outline" 
                className="mb-4"
                onClick={() => setSelectedRegion(null)}
              >
                ← Back to Regions
              </Button>
              <TicketList region={selectedRegion} />
            </>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Tickets</h2>
          
          {userTickets.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <h3 className="text-xl font-medium text-agil-gray-dark">No tickets yet</h3>
              <p className="mt-2 text-agil-gray">Book your first ticket to get started</p>
              <Button 
                className="agil-button-primary mt-4"
                onClick={() => setShowBookingInterface(true)}
              >
                Book Now
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userTickets.map((ticket) => {
                const ticketType = getTicketTypeById(ticket.ticketTypeId);
                const region = getRegionById(ticket.regionId);
                
                return (
                  <Card key={ticket.id} className="overflow-hidden">
                    <div className="bg-yellow-gradient p-3 text-agil-black font-medium">
                      Ticket #{ticket.ticketNumber}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{ticketType?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-agil-gray">Region:</span>
                          <span className="font-medium">{region?.name}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-agil-gray">Price:</span>
                          <span className="font-medium">${ticketType?.price.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-agil-gray">
                            <Calendar size={14} className="inline mr-1" />
                            Purchase Date:
                          </span>
                          <span className="font-medium">{formatDate(ticket.purchaseDate)}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm items-center">
                          <span className="text-agil-gray">Status:</span>
                          <span className={`font-medium px-2 py-0.5 rounded-full flex items-center ${getStatusBadgeClass(ticket.status)}`}>
                            {getStatusIcon(ticket.status)}
                            <span className="ml-1 capitalize">{ticket.status}</span>
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
