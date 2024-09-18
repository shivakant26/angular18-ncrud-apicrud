export class ITodos {
  _id?: string;
  title: string;
  description: string;
  isComplete?: boolean;
  createdAt?:string;
  updatedAt?:string;
  __v?:number
  constructor() {
    this._id = '';
    this.title = '';
    this.description = '';
    this.isComplete = false;
    this.__v = 0;
    this.createdAt="",
    this.updatedAt=""
  }
}


export interface ApiResponseModel {
    statusCode: number;
    data: ITodos[];
    message:string;
    success :boolean;
  }