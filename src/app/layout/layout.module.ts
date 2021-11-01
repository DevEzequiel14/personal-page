import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        outlet: 'header',
        component: HeaderComponent,
      },
      {
        path: '',
        outlet: 'footer',
        component: FooterComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
