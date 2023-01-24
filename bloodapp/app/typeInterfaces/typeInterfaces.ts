interface Nav {
  [x: string]: any;
  navigate: (value: string) => void;
  goBack: () => void;
}

export interface postInterface {
  caption: string;
  address: string;
  _id: string;
  phone: string;
  createdAt: any;
  author: user;
}

export interface user {
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
