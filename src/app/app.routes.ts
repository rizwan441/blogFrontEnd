import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UsersComponent } from './component/users/users.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './component/update-user-profile/update-user-profile.component';
import { authGuard } from './guards/auth.guard';
import { AuthanticationService } from './service/authantication.service';

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
        children:[
            {
                path:'',
                component:UsersComponent
            },
            {
                path:':id',
                component:UserProfileComponent
            },
          

        ]
    },
   
    {
        path:'updateprofile',
        component:UpdateUserProfileComponent,
        canActivate:[authGuard]
    }
];
