import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TryfreeComponent } from './tryfree/tryfree.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MiddleComponent } from './middle/middle.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FocusComponent } from './focus/focus.component';
import { ImprovementComponent } from './improvement/improvement.component';
import { HappinessComponent } from './happiness/happiness.component';
import { GratitudeComponent } from './gratitude/gratitude.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    FeedbackComponent,
    TryfreeComponent,
    GalleryComponent,
    MiddleComponent,
    FirstpageComponent,
    FocusComponent,
    ImprovementComponent,
    HappinessComponent,
    GratitudeComponent,
    SubscriptionComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
