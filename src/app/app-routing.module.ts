import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GitProfileComponent} from './Components/git-profile/git-profile.component';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import {GithubSearchComponent} from './Components/github-search/github-search.component';

const routes: Routes = [
  { path: 'home', component: GitProfileComponent},
  { path: 'search', component: GithubSearchComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
