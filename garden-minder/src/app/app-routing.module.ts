import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then((m) => m.InventoryModule),
  },

  // {
  //   path: 'user-profile',
  //   loadChildren: () => import('@my-streetparking-nx/xplat/web/features').then((m) => m.UserProfileModule),
  // },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
