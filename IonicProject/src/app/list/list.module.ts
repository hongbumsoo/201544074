import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
