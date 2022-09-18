export type AuthUser = {
  id: string;
  email: string;
};

export type UserResponse = {
  token: string;
  user: AuthUser;
};
