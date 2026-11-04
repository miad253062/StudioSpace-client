export interface StudioType {
  _id: string;
  name: string;
  email: string;
  title: string;
  category: string;
  rate: string;
  rating: string;
  deposit: string;
  capacity: string;
  location: string;
  imageURL: string;
  overview: string;
  amenities: string[];
}

export interface BookingType {
  _id: string;
  user: string;
  email: string;
  studio: StudioType;
  date: string;
  duration: string;
  totalCost: number;
  status: 'pending' | 'confirmed' | 'canceled' | 'completed'
}

export interface FormDataType {
  amenities: string[];
  capacity: string;
  category: string;
  deposit: string;
  imageURL: string;
  location: string;
  overview: string;
  rate: string;
  rating: string;
  title: string;
}