import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./employee/employee.html`,
})
export class AppComponent implements  OnInit  {
  name: string = 'this is om ';


// ngOnInit() { 
  

//   alert(12);
//  }


 public getUserName():string{
  alert(123);
  return '';

 }

}
