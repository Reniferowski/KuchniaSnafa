import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

const routes: Routes = [
  { path: '', component: OfferListComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: EditProfileComponent },
  { path: ':offer', component: OfferDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
