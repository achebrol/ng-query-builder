import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from 'ngx-bootstrap';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { AppComponent } from './app.component';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { QueryGroupComponent } from './query-group/query-group.component';
import { QueryConditionComponent } from './query-condition/query-condition.component';
import * as $ from 'jquery';
@NgModule({
  declarations: [
    AppComponent,
    QueryBuilderComponent,
    QueryGroupComponent,
    QueryConditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NKDatetimeModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
