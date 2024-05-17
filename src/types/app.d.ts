export interface IErrorObj {
   [key: string]: { statusCode: number; message: string };
}

export interface IProfile {
   bio?: string;
   username?: string;
   avatar?: string;
   cover?: string;
   userId?: string;
}