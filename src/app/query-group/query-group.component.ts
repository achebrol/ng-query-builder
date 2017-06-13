import { Component, OnInit, Input } from '@angular/core';
import { IGroup, IRule } from "../condition";

@Component({
  selector: 'app-query-group',
  templateUrl: './query-group.component.html',
  styleUrls: ['./query-group.component.css']
})
export class QueryGroupComponent implements OnInit {
@Input() condition="AND";
@Input() rules:Array<IRule|IGroup>=[];
@Input() not:boolean=false;
  constructor() { }

  ngOnInit() {
  }
addRule(){
this.rules.push(<IRule>{});
}
addGroup(){
this.rules.push(<IGroup>{condition:'AND',not:false,rules:[]});
}
}
