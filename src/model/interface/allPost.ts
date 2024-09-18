export interface IPOST {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  

 export interface IModel{
  title:string;
  description:String;
 } 


 export interface ApiResponseModel {
  statusCode:number,
  data:string,
  message:string
 }