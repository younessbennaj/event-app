export interface Avatar {
  url: string;
}
export interface Booking {
  id: number;
  user: User;
  numberOfTickets: number;
  userId: number;
}

export interface User {
  firstName: string;
  lastName: string;
  avatar: Avatar;
  id: number;
  color: string;
}
