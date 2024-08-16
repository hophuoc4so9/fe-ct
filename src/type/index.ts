export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
        lat: string;
        Ing: string;
        };
    };
    phone: string;
    website: string;
    company: {
    name: string;
    catchPhrase: string;
    bs: string;
}};
export interface User{
    name?: string;
    address?: string;
    password?: string;
    role?: string;
}