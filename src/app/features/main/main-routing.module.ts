import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHome } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: MainHome } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
