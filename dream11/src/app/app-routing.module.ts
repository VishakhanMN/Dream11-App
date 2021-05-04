import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitoutPedaComponent } from './components/sitout-peda/sitout-peda.component';

const routes: Routes = [
  {path:'sitoutPeda', component:SitoutPedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
