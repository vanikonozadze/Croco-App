import { UserCompany } from "./user-company.model";

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: any,
    phone: string,
    website: string,
    company: UserCompany
}