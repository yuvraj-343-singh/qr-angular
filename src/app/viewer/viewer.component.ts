import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html'
})
export class ViewerComponent implements OnInit {
  data!: {
    id: number,
    name: string,
  }
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.data = {
        id: res['id'],
        name: res['name'],
      }
    });
  }

  ngOnInit(): void {
  }

}
