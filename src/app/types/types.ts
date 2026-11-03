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

export type BookingType = {
    _id: string;
    user: string;
    email: string;
    studio: StudioType;
    date: string;
    duration: string;
    totalCost: number;
    status: string
};