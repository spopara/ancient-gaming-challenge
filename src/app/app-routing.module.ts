import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailsComponent } from './components/box-details/box-details.component';
import { BoxListComponent } from './components/box-list/box-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoxListComponent,
  },
  {
    path: 'box-details',
    component: BoxDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
