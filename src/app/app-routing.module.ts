import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'references', loadChildren: () => import(`./references/references.module`).then(m => m.ReferencesModule) },
  { path: 'projects', loadChildren: () => import(`./projects/projects.module`).then(m => m.ProjectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // This will tell Angular to preload the lazy-loaded routes after the
    // application has been bootstrapped. This will extend to both top-level
    // and nested lazy-loaded modules.
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
