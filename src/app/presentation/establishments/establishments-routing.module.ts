import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentsComponent } from './establishments.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./establishment-list/establishment-list.module').then(m => m.EstablishmentListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentsRoutingModule { }
