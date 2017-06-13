import { Component, OnInit } from '@angular/core';
import { IGroup } from "../condition";

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent implements OnInit {
  public query:IGroup={condition:'AND',rules:[],not:false};
  constructor() { }

  ngOnInit() {
  }

}
