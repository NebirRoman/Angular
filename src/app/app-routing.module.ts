import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { WordslistComponent } from './works/wordslist/wordslist.component';
import { TaskslistComponent } from './works/taskslist/taskslist.component';
import { UserslistComponent } from './works/userslist/userslist.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorksComponent, children: [
    {path: 'wordslist', component: WordslistComponent},
    {path: 'taskslist', component: TaskslistComponent},
    {path: 'userslist', component: UserslistComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
