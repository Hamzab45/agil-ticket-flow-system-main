
import React from 'react';
import { TicketType, Region } from '../../utils/mockData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';
import { toast } from 'sonner';

interface TicketCardProps {
  ticketType: TicketType;
  region: Region;
  onBookTicket: (ticketType: TicketType) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ 
  ticketType, 
  region,
  onBookTicket 
}) => {
  const handleBooking = () => {
    if (ticketType.available > 0) {
      onBookTicket(ticketType);
    } else {
      toast.error('No tickets available for this service');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <Card className="animate-fade-in overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="bg-yellow-gradient p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Ticket className="mr-2 text-agil-black" size={24} />
          <h3 className="font-bold text-agil-black">{ticketType.name}</h3>
        </div>
        <div className="text-xl font-bold text-agil-black">
          {formatPrice(ticketType.price)}
        </div>
      </div>
      
      <CardContent className="pt-4">
        <p className="text-agil-gray-dark">{ticketType.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium">Availability:</span>
            <span className={`ml-2 text-sm ${
              ticketType.available > 5 ? 'text-green-600' : 
              ticketType.available > 0 ? 'text-amber-600' : 
              'text-red-600'
            }`}>
              {ticketType.available > 0 ? `${ticketType.available} tickets` : 'Sold Out'}
            </span>
          </div>
          
          <div className="text-sm text-agil-gray">
            <span>Region: </span>
            <span className="font-medium">{region.name}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <Button 
          className={ticketType.available > 0 ? "agil-button-primary w-full" : "bg-agil-gray text-white w-full cursor-not-allowed"}
          onClick={handleBooking}
          disabled={ticketType.available <= 0}
        >
          {ticketType.available > 0 ? 'Book Now' : 'Unavailable'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
