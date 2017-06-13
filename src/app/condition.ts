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