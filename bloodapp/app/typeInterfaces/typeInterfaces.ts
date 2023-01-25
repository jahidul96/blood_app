interface Nav {
  [x: string]: any;
  navigate: (value: string) => void;
  goBack: () => void;
}

export interface postInterface {
  caption: string;
  location: string;
  _id: string;
  phone: string;
  bloodgroup: string;
  createdAt: any;
  author: user;
  emergency: boolean;
}

export interface user {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  division: string;
  bloodGroup: string;
  lastdonatedate: string;
  newDonar: boolean;
  createdAt: any;
  updatedAt: any;
}
export { Nav };
