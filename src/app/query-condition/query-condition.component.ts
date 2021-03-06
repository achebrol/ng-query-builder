import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRule, IFilter, IOptions } from "../condition";
let sequence_number=0;
@Component({
  selector: 'app-query-condition',
  templateUrl: './query-condition.component.html',
  styleUrls: ['./query-condition.component.css']
})
export class QueryConditionComponent implements OnInit {
@Input() rule:IRule;
@Input() options:IOptions;
@Output() deleted: EventEmitter<IRule>= new EventEmitter<IRule>();
public currentFilter=null;
  public uniqueId = `query_condition_${sequence_number++}`;
  constructor() { }

  ngOnInit() {
  }
  onFilterChange(event){
    const id=event.target.value;
    
    this.currentFilter = this.options.filters.find(f=>f.id==id);
  }
  get optgroups(){
    return Object.keys(this.options.optgroups);
  }
  get values(){
    if(!this.currentFilter){ return null};
    return Object.keys(this.currentFilter.values);
  }
  getFilters(optGroup:string){
    return this.options.filters.filter(f=>f.optgroup==optGroup);
  }

}
