import { Component, OnInit } from '@angular/core';
import { IOptions, IGroup, IFilter } from "./condition";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public options:IOptions;
  ngOnInit(){
    
  let rules:IGroup={condition:'AND',rules:[],not:false};
  //http://querybuilder.js.org/#filters
  let filters:IFilter[]=[{
        id: 'name',
        label: 'Name',
        type: 'string',
        input:'string',
        optgroup:'general'
    },
    {
        id: 'ship_date',
        label: 'Shipping Date',
        type:'date',
        input: 'date',
        optgroup:'general'
    }, {
        id: 'category',
        label: 'Category',
        type: 'integer',
        input: 'select',
        optgroup:'cpcp',
        values: {
            1: 'Books',
            2: 'Movies',
            3: 'Music',
            4: 'Tools',
            5: 'Goodies',
            6: 'Clothes'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
    }, {
        id: 'in_stock',
        label: 'In stock',
        type: 'integer',
        input: 'radio',
        optgroup:'cpcp',
        values: {
            1: 'Yes',
            0: 'No'
        },
        operators: ['equal']
    }, {
        id: 'price',
        label: 'Price',
        type: 'double',
        optgroup:'cpcp',
        validation: {
            min: 0,
            step: 0.01
        }
    }, {
        id: 'id',
        label: 'Identifier',
        type: 'string',
        optgroup:'cpcp',
        placeholder: '____-____-____',
        operators: ['equal', 'not_equal'],
        validation: {
            format: /^.{4}-.{4}-.{4}$/
        }
    }];

    this.options= {
      filters:filters,
      rules:rules,
      optgroups:{
        'general':'General Section',
        'cpcp':'CPCP Section'
      }
    };

}
}
