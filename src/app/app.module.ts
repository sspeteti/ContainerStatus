import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningComponent } from './planning/planning.component';
import { VesselplanningComponent } from './vesselplanning/vesselplanning.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    VesselplanningComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
