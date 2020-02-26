import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from "./question-detail.component";
import { NotFoundComponent } from "./not-found.component";
// import more components here

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'questions/detail/:id', component: QuestionDetailComponent },
  // more routes are added here
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
