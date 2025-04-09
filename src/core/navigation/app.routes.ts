import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('../../app/features/main/main.module').then(m => m.MainModule) },
  { path: 'students', loadChildren: () => import('../../app/features/alumn/alumn.module').then(m => m.AlumnModule) },
  { path: 'teachers', loadChildren: () => import('../../app/features/teacher/teacher.module').then(m => m.TeacherModule) },
  { path: '**', component: ErrorPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
