export interface IReaction {
    [key: string]: number;
  }
  export interface IComment {
    created_time:"string",
    id:string,
    message:string,
    [key: string | number]: any;
  }
  export interface ITag {
    [key: string | number]: any;
  }
  export interface IApprover{
    _id:string,
    name:string,
  }
  export interface ISender{
    _id:string,
    name:string,
  }
  export interface IConfession {
    id: string;
    tags: ITag[];
    comments: IComment[];
    reactions: IReaction[];
    reaction_total: number;
    view: number;
    share: number;
    content:string;
    updatedAt:string;
    createdAt:string;
    status:number;
    title?: string;
    approver?:IApprover;
    cfsID?:string;
    reason?:string;isModalRejectOpen
    sender?:ISender;
    vipham?:string;
  }
