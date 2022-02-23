import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    // { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            errorHandler(...arg) {
                console.log('errorHandler', ...arg);
            },
            // @ts-ignore
            malformedUriErrorHandler(...arg) {
                console.log('malformedUriErrorHandler', ...arg);
            },
        }),
    ],
    exports: [RouterModule],
    // @ts-ignore
    // providers: [{ provide: APP_BASE_HREF, useValue: window['__POWERED_BY_QIANKUN__'] ? '/app1' : '/' }]
})
export class AppRoutingModule { }
