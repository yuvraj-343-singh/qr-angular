import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html'
})
export class GeneratorComponent implements OnInit {

  qr!: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  generateQr(name: string) {
    this.http.get<{ qr: string }>('http://192.168.1.100:3000', { params: { name } }).subscribe(res => this.qr = res.qr)
  }
}
