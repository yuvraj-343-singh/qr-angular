import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    ScannerComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxScannerQrcodeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
