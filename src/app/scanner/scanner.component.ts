import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html'
})
export class ScannerComponent {
  constructor(private router: Router) { }
  output(decoded: string, ref: any) {
    if (!decoded) {
      return
    }
    ref.stop()
    this.router.navigate(['/', 'view'], { queryParams: JSON.parse(decoded) })
  }
}
