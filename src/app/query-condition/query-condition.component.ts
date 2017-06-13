import { Component, OnInit, Input } from '@angular/core';
import { IRule } from "../condition";

@Component({
  selector: 'app-query-condition',
  templateUrl: './query-condition.component.html',
  styleUrls: ['./query-condition.component.css']
})
export class QueryConditionComponent implements OnInit {
@Input() rule:IRule;
  constructor() { }

  ngOnInit() {
  }

}
