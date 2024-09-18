import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { EmployeeformComponent } from '../component/employeeform/employeeform.component';
import { EmployeeTableComponent } from '../component/employee-table/employee-table.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"employee-form",
        component:EmployeeformComponent
    },
    {
        path:"employee-table",
        component:EmployeeTableComponent
    },
    {
        path:"employee-form/:id",
        component:EmployeeformComponent
    }
];
