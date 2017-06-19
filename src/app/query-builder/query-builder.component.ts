import { Component, OnInit, Input } from '@angular/core';
import { IGroup, IOptions, IFilter } from "../condition";

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent implements OnInit {
  @Input() options:IOptions;
  public rules:IGroup={condition:'AND',rules:[],not:false};
  public filters:IFilter[];
  //http://querybuilder.js.org/#filters
  
  constructor() { }

  ngOnInit() {
      this.rules = this.options.rules;
      this.filters = this.options.filters;

  }

}
