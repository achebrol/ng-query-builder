export interface IRule{
    "id": string;
          "field": string;
          "type": string;
          "input": string;
          "operator": string;
          "value": string;

}
export interface IGroup{
    condition:string; //AND | OR
    rules : Array<IRule | IGroup>;
    not:boolean;  //TODO
}
/*
export enum DataType{
    Integer=1,
    Date=2,
    String=3,
    Boolean=4
}
export interface ILookup{
    id:number|string;
    description:string;

}
export enum InputType{
    TextBox=1,
    Select=2
}
*/
export interface IFilter{
    id: string,
        label:string,
        type: string,
        input: string,
        values?:{[key:number]:string};
}
