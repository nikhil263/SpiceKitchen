import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav.component';
import { FooterComponent } from './footer.component';
import { WelcomeComponent} from './welcome.component';
import { MenuComponent} from './menu.component';
import { AboutComponent} from './about.component';

import { ContactComponent} from './contact.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
       {path: 'home',component: WelcomeComponent},
       {path: 'contact',component: ContactComponent},
       {path: 'about',component: AboutComponent},       
       {path: 'menu',component: MenuComponent},      
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, FooterComponent]

})
export class AppModule { }
