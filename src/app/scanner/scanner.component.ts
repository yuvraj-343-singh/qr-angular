import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html'
})
export class ScannerComponent {

  result!: string;
  output(decoded: string) {
    this.result = decoded;
  }
}
