import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './projects.routing';
import {ProjectsComponent} from './projects.component';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from '../common/carousel/carousel.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    NgbCarouselModule,
    MatCardModule
  ],
  declarations: [ProjectsComponent, CarouselComponent]
})

export class ProjectsModule { }
