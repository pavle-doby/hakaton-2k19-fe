import { User } from "./user";

export class UserAuth {
  constructor(
    public accessToken: string,
    public refreshToken: string,
    public user: User
  ) {}
}
