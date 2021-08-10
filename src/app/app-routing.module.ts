import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { VesselplanningComponent } from './vesselplanning/vesselplanning.component';

const routes: Routes = [
  { path: 'planning', component: PlanningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
