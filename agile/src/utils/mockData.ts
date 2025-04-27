export type UserRole = 'client' | 'operator' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password: string; // In a real app, we'd never store plain text passwords
}

export interface Region {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface TicketType {
  id: string;
  name: string;
  description: string;
  price: number;
  regionIds: string[]; // Regions where this ticket is valid
  available: number; // Number of available tickets
}

export interface Ticket {
  id: string;
  ticketTypeId: string;
  ticketNumber: string;
  regionId: string;
  userId: string;
  purchaseDate: Date;
  status: 'booked' | 'used' | 'expired' | 'cancelled';
}

// Mock Users
export const users: User[] = [
  {
    id: '1',
    name: 'Client User',
    email: 'client@example.com',
    role: 'client',
    password: 'password123'
  },
  {
    id: '2',
    name: 'Operator User',
    email: 'operator@example.com',
    role: 'operator',
    password: 'password123'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    password: 'password123'
  }
];

// Mock Regions
export const regions: Region[] = [
  {
    id: '1',
    name: 'Tunis',
    description: 'Gas stations in the Tunis area',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Sousse',
    description: 'Gas stations in the Sousse area',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Sfax',
    description: 'Gas stations in the Sfax area',
    imageUrl: '/placeholder.svg'
  }
];

// Mock Ticket Types
export const ticketTypes: TicketType[] = [
  {
    id: '1',
    name: 'Carte Pétrolière',
    description: 'Carte de paiement pour carburant',
    price: 20.00,
    regionIds: ['1', '2', '3'], // Available in all regions
    available: 100
  },
  {
    id: '2',
    name: 'Carte de Bon',
    description: 'Carte prépayée pour services',
    price: 50.00,
    regionIds: ['1', '2', '3'], // Available in all regions
    available: 50
  },
  {
    id: '3',
    name: 'Bon Valeur',
    description: 'Bon à valeur fixe pour tout achat',
    price: 30.00,
    regionIds: ['1', '2', '3'], // Available in all regions
    available: 75
  }
];

// Mock Tickets
export const tickets: Ticket[] = [
  {
    id: '1',
    ticketTypeId: '1',
    ticketNumber: 'TKT-001-2025',
    regionId: '1',
    userId: '1',
    purchaseDate: new Date(2025, 3, 15), // April 15, 2025
    status: 'booked'
  },
  {
    id: '2',
    ticketTypeId: '2',
    ticketNumber: 'TKT-002-2025',
    regionId: '3',
    userId: '1',
    purchaseDate: new Date(2025, 3, 18), // April 18, 2025
    status: 'used'
  }
];

// Helper functions
export const getTicketTypeById = (id: string): TicketType | undefined => {
  return ticketTypes.find(type => type.id === id);
};

export const getRegionById = (id: string): Region | undefined => {
  return regions.find(region => region.id === id);
};

export const getTicketsByUserId = (userId: string): Ticket[] => {
  return tickets.filter(ticket => ticket.userId === userId);
};

export const getAvailableTicketTypesByRegionId = (regionId: string): TicketType[] => {
  return ticketTypes.filter(type => 
    type.regionIds.includes(regionId) && type.available > 0
  );
};
