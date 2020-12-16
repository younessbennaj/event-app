export interface Avatar {
  url: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  color: string;
  avatar: Avatar;
}

export interface Booking {
  id: number;
  user: User;
  numberOfTickets: number;
  userId: number;
}