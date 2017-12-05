import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent }  from './app.component';
import { EmployeeDetails }  from './employee/employee-details';
import { EmployeeTask }  from './employee-task/employee.task';

const routerApp:Routes=[
  {path:'home',component:EmployeeDetails},
  {path:'employee-details',component:EmployeeDetails},
  {path:'employee-task',component:EmployeeTask},
  {path:'',redirectTo:'/home', pathMatch: 'full'}
];
@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routerApp) ],
  declarations: [ AppComponent,EmployeeDetails,EmployeeTask ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
