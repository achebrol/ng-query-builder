export interface IRule{
    "id": string;
          "field": string;
          "type": string;
          "input"?: string;
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
        input?: string;
        values?:{[key:number]:string};
        operators?:string[];
        placeholder?:string;
        validation?:{[key:string]:any};
        optgroup?:string;
}

export interface IOptions{
    rules:IGroup;
    filters:IFilter[];
    optgroups:{[key:string]:any};

}
