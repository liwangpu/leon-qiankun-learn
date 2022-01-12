import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './components/app1/app1.component';
import { App2Component } from './components/app2/app2.component';

const routes: Routes = [
    { path: 'app1', component: App1Component },
    { path: 'app2', component: App2Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
