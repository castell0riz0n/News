import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { BodyComponent } from './body/body.component';
import { NewsBodyComponent } from './body/news-body/news-body.component';
import { SideBarComponent } from './body/side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'topbar', component: TopBarComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'newsslider', component: NewsSliderComponent },
  { path: 'body', component: BodyComponent },
  { path: 'newsbody', component: NewsBodyComponent },
  { path: 'sidebar', component: SideBarComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), NgxSelectModule],
  declarations: [
    HeaderComponent,
    TopBarComponent,
    NavBarComponent,
    NewsSliderComponent,
    BodyComponent,
    NewsBodyComponent,
    SideBarComponent,
    FooterComponent,
LandingComponent
  ],
  exports: [RouterModule]
})
export class LandingModule {}
