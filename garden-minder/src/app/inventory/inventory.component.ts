import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: 'inventory <router-outlet></router-outlet>',
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
