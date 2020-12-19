import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowseComponent } from './books/browse/browse.component';
import { DetailsComponent } from './books/details/details.component';
import { HistoryComponent } from './books/history/history.component';
import { InterestsComponent } from './books/interests/interests.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'books', component: BrowseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books/:id', component: DetailsComponent },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'interests', component: InterestsComponent, canActivate: [AuthGuard] },
  { path: '**', component: BrowseComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
