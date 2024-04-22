import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }
];
