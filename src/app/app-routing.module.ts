import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '**',
                component: EmptyContentComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
