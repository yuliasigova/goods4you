export interface IUser {
    id: number ,
    accessToken: string 
  }
  
  export interface ILoginRequest {
    username: string,
    password: string,
    expiresInMins: number
  }