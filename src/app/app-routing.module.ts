import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './components/app1/app1.component';
import { App2Component } from './components/app2/app2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'app1', component: App1Component },
    { path: 'app2', component: App2Component },
    // { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
