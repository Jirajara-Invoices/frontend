export enum AddressType {
  Personal = "personal",
  Clients = "clients",
}

export type Address = {
  id: string;
  type: AddressType;
  name: string;
  taxId?: string;
  email?: string;
  street?: string;
  number?: string;
  comment?: string;
  zipcode?: string;
  city?: string;
  state?: string;
  country: string;
};
