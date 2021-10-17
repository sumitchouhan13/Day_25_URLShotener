import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { GenerateUrlComponent } from './generate-url/generate-url.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { TotalUrlComponent } from './total-url/total-url.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginSectionComponent,
  },
  {
    path: 'register',
    component: RegisterSectionComponent,
  },
  {
    path: 'dashboard',
    component: DashBoardComponent,
  },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'generateUrl',
    component: GenerateUrlComponent,
  },
  {
    path: 'totalUrl',
    component: TotalUrlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
