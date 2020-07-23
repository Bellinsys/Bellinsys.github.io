import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { SidenavService } from './services/sidenav.service';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    BlogComponent,
    CareersComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
