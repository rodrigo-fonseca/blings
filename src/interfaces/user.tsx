export interface RawUserI {
  _id: string;
  picture: string;
  birthday: string;
  name: string;
  address: string;
  phone_number: string;
}

export interface UserI {
  id: string;
  picture: string;
  birthday: string;
  name: string;
  address: string;
  phone: string;
  rawPhone: string;
  age: string;
  nameLowerCase: string;
}
