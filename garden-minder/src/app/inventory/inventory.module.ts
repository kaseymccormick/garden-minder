import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule} from'./inentory-routing.module';
import { InventoryAllComponent } from './inventory-all/inventory-all.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryCreateComponent } from './inventory-create/inventory-create.component';


@NgModule({
  declarations: [InventoryComponent, InventoryAllComponent, InventoryDetailComponent, InventoryCreateComponent],
  imports: [CommonModule, InventoryRoutingModule],
})
export class InventoryModule {}
