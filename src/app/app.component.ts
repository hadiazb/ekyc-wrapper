import { Component } from '@angular/core';
import { EkycComponent } from './components/ekyc/ekyc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EkycComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ekyc-wrapper';
}
