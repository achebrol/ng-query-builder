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

export interface IFilter{
    id: string;
        label:string;
        type: string;
        input: string;
        values?:{key:number};
        operators?:string[];
}
