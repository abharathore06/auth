import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';

import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, TodosComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
