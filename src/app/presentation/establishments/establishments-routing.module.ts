import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentsComponent } from './establishments.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./establishment-list/establishment-list.module').then(m => m.EstablishmentListModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./establishment-form/establishment-form.module').then(m => m.EstablishmentFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentsRoutingModule { }
