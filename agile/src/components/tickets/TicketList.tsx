
import React, { useState } from 'react';
import { 
  TicketType, 
  Region, 
  getAvailableTicketTypesByRegionId 
} from '../../utils/mockData';
import TicketCard from './TicketCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useAuth } from '../auth/AuthContext';

interface TicketListProps {
  region: Region;
}

const TicketList: React.FC<TicketListProps> = ({ region }) => {
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth();

  const availableTickets = getAvailableTicketTypesByRegionId(region.id);

  const handleBookTicket = (ticketType: TicketType) => {
    setSelectedTicket(ticketType);
    setIsDialogOpen(true);
  };

  const confirmBooking = () => {
    // In a real app, this would make an API call to book the ticket
    toast.success('Ticket booked successfully!');
    toast.success(`Confirmation email sent to ${user?.email}`);
    setIsDialogOpen(false);
    setSelectedTicket(null);
  };

  if (availableTickets.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <h3 className="text-xl font-semibold text-agil-gray-dark">No tickets available</h3>
        <p className="mt-2 text-agil-gray">There are currently no tickets available for this region.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Available Tickets for {region.name}</h2>
      <p className="text-agil-gray mb-6">Select a ticket type to book</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableTickets.map((ticketType) => (
          <TicketCard 
            key={ticketType.id}
            ticketType={ticketType}
            region={region}
            onBookTicket={handleBookTicket}
          />
        ))}
      </div>

      {/* Booking confirmation dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Booking</DialogTitle>
          </DialogHeader>
          
          {selectedTicket && (
            <div className="py-4">
              <div className="mb-4 p-4 bg-agil-yellow-light rounded-md">
                <h3 className="font-semibold text-lg">{selectedTicket.name}</h3>
                <p className="text-sm text-agil-gray-dark">{selectedTicket.description}</p>
                <div className="mt-2 flex justify-between">
                  <span>Region:</span>
                  <span className="font-medium">{region.name}</span>
                </div>
                <div className="mt-1 flex justify-between">
                  <span>Price:</span>
                  <span className="font-bold">${selectedTicket.price.toFixed(2)}</span>
                </div>
              </div>
              
              <p className="text-sm text-agil-gray">
                By confirming this booking, a ticket will be reserved for you and a confirmation
                email will be sent to your registered email address.
              </p>
            </div>
          )}
          
          <DialogFooter className="flex space-x-2 sm:space-x-4">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="agil-button-primary" onClick={confirmBooking}>
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TicketList;
