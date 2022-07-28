import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent
  },
  {
    path: 'scanner',
    component: ScannerComponent
  },
  {
    path: 'view',
    component: ViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
