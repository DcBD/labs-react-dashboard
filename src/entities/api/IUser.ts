
import IAddresses from './IAddresses';
import IBaseApiEntity from './IBaseApiEntity'
import ICompany from './ICompany';

export default interface IUser extends IBaseApiEntity{

    name: string
    username: string
    email: string
    addresses : IAddresses
    phone: string
    website: string
    company: ICompany

}