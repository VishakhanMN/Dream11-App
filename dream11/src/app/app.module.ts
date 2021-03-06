import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPopupComponent } from './components/details-popup/details-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SitoutPedaComponent } from './components/sitout-peda/sitout-peda.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPopupComponent,
    SitoutPedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents:[DetailsPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
