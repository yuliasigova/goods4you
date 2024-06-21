export interface IUser {
    id: number ,
    token: string 
  }
  
  export interface ILoginRequest {
    username: string,
    password: string,
    expiresInMins: number
  }