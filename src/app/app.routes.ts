import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UsersComponent } from './component/users/users.component';

export const routes: Routes = [
    {
        path:'admin',
        loadChildren:()=>import ('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'user',
        component:UsersComponent
    }
];
