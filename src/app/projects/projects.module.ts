import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './projects.routing';
import {ProjectsComponent} from './projects.component';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule
  ],
  declarations: [ProjectsComponent]
})

export class ProjectsModule { }
