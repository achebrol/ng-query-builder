import { Component, OnInit, Input } from '@angular/core';
import { IGroup, IRule, IOptions } from "../condition";

@Component({
  selector: 'app-query-group',
  templateUrl: './query-group.component.html',
  styleUrls: ['./query-group.component.css']
})
export class QueryGroupComponent implements OnInit {
@Input() group: IGroup;
@Input() options:IOptions;

  constructor() { }

  ngOnInit() {
  }
addRule(){
this.group.rules.push(<IRule>{});
}
addGroup(){
this.group.rules.push(<IGroup>{condition:'AND',not:false,rules:[]});
}
onRuleDelete(rule:IRule){
  let idx = this.group.rules.indexOf(rule);
  this.group.rules.splice(idx,1);

}
}
