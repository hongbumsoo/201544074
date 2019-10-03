import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'todo-details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'todo-details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
