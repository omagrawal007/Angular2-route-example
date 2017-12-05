import {Component} from '@angular/core';
@Component({
    selector:'employee-task',
    templateUrl:'./employee-task.html'


})
export class EmployeeTask{
    
    public tasks:any=[{'task':'task1'},{'task':'task2'},{'task':'task3'},{'task':'task4'},{'task':'task5'}];

}