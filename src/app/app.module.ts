import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavListenerComponent } from './components/nav-listener/nav-listener.component';
import { AboutMeHobbiesSkillsComponent } from './components/about-me-hobbies-skills/about-me-hobbies-skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorksProjectsComponent } from './components/works-projects/works-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListenerComponent,
    AboutMeHobbiesSkillsComponent,
    HomeComponent,
    ContactMeComponent,
    AboutMeComponent,
    HeroBannerComponent,
    NavbarComponent,
    WorksComponent,
    FooterComponent,
    WorksProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
