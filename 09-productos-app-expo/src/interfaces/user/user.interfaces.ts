export interface IUser {
  email: string;
  google: boolean;
  name: string;
  role: Roles;
  state: boolean;
  uid: string;
  image?: string;
}

type Roles = "USER_ROLE" | "ADMIN_ROLE";
