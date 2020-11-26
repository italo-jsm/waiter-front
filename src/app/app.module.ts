import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConsumingUnitListComponent } from './views/consuming-unit-list/consuming-unit-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { TableFormDialogComponent } from './views/home/table-form-dialog/table-form-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsumingUnitDetailComponent } from './views/consuming-unit-list/consuming-unit-detail/consuming-unit-detail.component';
import { CommandItemDialogComponent } from './views/consuming-unit-list/consuming-unit-detail/command-item-dialog/command-item-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginComponent } from './views/login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from 'src/app/shared/interceptor/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsumingUnitListComponent,
    TableFormDialogComponent,
    ConsumingUnitDetailComponent,
    CommandItemDialogComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
