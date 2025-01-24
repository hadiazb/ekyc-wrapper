import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ekyc',
  standalone: true,
  imports: [],
  templateUrl: './ekyc.component.html',
  styleUrl: './ekyc.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EkycComponent implements OnInit, OnDestroy {
  wcData = {};

  private router = inject(Router);

  ngOnInit(): void {
    this.wcData = {
      channel: 'mitienda',
      country: 'co',
      journey: 'activation',
    };

    this.endSuccessEvent();
    this.endFailedEvent();
  }

  ngOnDestroy(): void {
    window.removeEventListener('wcEkycSuccess', () => {
      console.log('wcEkycSuccess removido');
    });
    window.removeEventListener('wcEkycFailed', () => {
      console.log('wcEkycFailed removido');
    });
  }

  endSuccessEvent() {
    window.addEventListener('wcEkycSuccess', (event: any) => {
      this.setToken('wcEkycSuccess  ' + event.detail.sessionId);
      if (event?.detail?.sessionId) {
        this.router.navigateByUrl('end');
      }
    });
  }

  endFailedEvent() {
    window.addEventListener('wcEkycFailed', (event: any) => {
      this.setToken('wcEkycFailed  ' + event.detail.sessionId);
      if (event?.detail?.sessionId) {
        this.router.navigateByUrl('end');
      }
    });
  }

  setToken(message: string) {
    localStorage.setItem('message', message);
  }
}
