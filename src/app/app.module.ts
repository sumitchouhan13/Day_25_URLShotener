import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GenerateUrlComponent } from './generate-url/generate-url.component';
import { TotalUrlComponent } from './total-url/total-url.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
    LoginSectionComponent,
    RegisterSectionComponent,
    DashBoardComponent,
    MainPageComponent,
    GenerateUrlComponent,
    TotalUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
