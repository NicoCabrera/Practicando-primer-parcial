import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from "app/services/app.service";
import { GridComponent } from './grid/grid.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [{
  component: GridComponent,
  path: "grid"
},
{
  component: RegisterComponent,
  path: "register"
}];

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
