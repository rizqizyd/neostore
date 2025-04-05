import { DefaultSession } from "next-auth";

// The default session user type with next-auth only has like the name, id, and email.
// So if we want to include the 'role', then we have to add that we have to extend the next-auth session user type.
// We're not going to change any of the other properties or overwrite them.
// Just building upon it, extending that user object to include the 'role'.
declare module "next-auth" {
  export interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}
