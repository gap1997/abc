import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerService } from './ser.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateService } from './update.service';

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [SerService, UserService, UpdateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
