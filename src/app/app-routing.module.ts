import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SkillsComponent } from './components/skills/skills.component'
import { HomeComponent } from './components/home/home.component'
import { ProjectsComponent } from './components/projects/projects.component'

const routes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
