import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formal-start',
  templateUrl: './formal-start.component.html',
  styleUrls: ['./formal-start.component.scss']
})
export class FormalStartComponent {
  id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }
}
