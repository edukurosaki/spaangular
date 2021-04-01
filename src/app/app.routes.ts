import { Routes } from '@angular/router';
import { FormationComponent } from './home/components/formation/formation.component';
import { ProjectComponent } from './home/components/project/project.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'project', component: ProjectComponent }
];
