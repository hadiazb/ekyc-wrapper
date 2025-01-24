import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-flow',
  standalone: true,
  imports: [],
  templateUrl: './end-flow.component.html',
  styleUrl: './end-flow.component.scss',
})
export class EndFlowComponent implements OnInit {
  public message: string = '';

  private router = inject(Router);

  ngOnInit(): void {
    this.message = localStorage.getItem('message') ?? '-o-';
  }

  onBack() {
    this.router.navigateByUrl('');
  }
}
