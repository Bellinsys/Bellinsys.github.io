import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';



const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'careers' , component: CareersComponent},
  {path: 'contact' , component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
