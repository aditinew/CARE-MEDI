import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TryfreeComponent } from './tryfree/tryfree.component';
import { OffersComponent } from './offers/offers.component';
import { MiddleComponent } from './middle/middle.component';
import { FocusComponent } from './focus/focus.component';
import { ImprovementComponent } from './improvement/improvement.component';
import { HappinessComponent } from './happiness/happiness.component';
import { GratitudeComponent } from './gratitude/gratitude.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'firstpage',component:FirstpageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'middle',component:MiddleComponent},
  {path:'focus',component:FocusComponent},
  {path:'improvement',component:ImprovementComponent},
  {path:'happiness',component:HappinessComponent},
  {path:'gratitude',component:GratitudeComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'tryfree',component:TryfreeComponent},
  {path:'offers',component:OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
