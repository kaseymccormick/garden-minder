import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryAllComponent } from './inventory-all/inventory-all.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryAllComponent,
  },
  {
    path: 'create',
    component: InventoryDetailComponent,
  },
  {
    path: ':id',
    component: InventoryDetailComponent,
  },

  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
