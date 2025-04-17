
export interface IService {
    bikeId: string;
    serviceDate: Date;
    description: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}
