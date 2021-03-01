import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  { path: '', redirectTo: '/establishments', pathMatch: 'full' },
  {

    path: '',
    component: PresentationComponent,
    children: [
      {
        path: 'establishments',
        loadChildren: () => import('./establishments/establishments.module').then(m => m.EstablishmentsModule)
      }
    ]
  },
  { path: '**', redirectTo: '/establishments', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
