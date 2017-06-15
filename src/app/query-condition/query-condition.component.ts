import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRule, IFilter } from "../condition";

@Component({
  selector: 'app-query-condition',
  templateUrl: './query-condition.component.html',
  styleUrls: ['./query-condition.component.css']
})
export class QueryConditionComponent implements OnInit {
@Input() rule:IRule;
@Input() filters: IFilter[];
@Output() deleted: EventEmitter<IRule>= new EventEmitter<IRule>();
public currentFilter=null;
  constructor() { }

  ngOnInit() {
  }
  onFilterChange(event){
    const id=event.target.value;
    
    this.currentFilter = this.filters.find(f=>f.id==id);
  }
  get values(){
    if(!this.currentFilter){ return null};
    return Object.keys(this.currentFilter.values);
  }

}
