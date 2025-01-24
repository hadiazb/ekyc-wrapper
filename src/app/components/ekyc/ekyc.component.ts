import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-ekyc',
  standalone: true,
  imports: [],
  templateUrl: './ekyc.component.html',
  styleUrl: './ekyc.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EkycComponent implements OnInit {
  wcData = {};

  ngOnInit(): void {
    this.setToken(
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9Ld1dUZnBHX2Y4Vm9pRVZTSURRRiJ9.eyJodHRwczovL2lkLnRpZ28uY29tL2N1c3RvbTpVVUlEIjoiZDM0YWI5NGYtMDIwZS00OWEzLTg1MWItY2I2NzEzM2RlMmU5IiwiaXNzIjoiaHR0cHM6Ly9taXRpZW5kYS1zc28tc3RnLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJzbXN8NjcwZmZlOWI1Y2FiYjI5YzA4NjhmYmQyIiwiYXVkIjpbImh0dHBzOi8vbWl0aWVuZGEtc3NvLXN0Zy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vbWl0aWVuZGEtc3NvLXN0Zy51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzM3NzM4MjMxLCJleHAiOjE3Mzc4MjQ2MzEsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgcmVhZDpjdXJyZW50X3VzZXIgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJOYW5wZTF2RXo0UXNaOEZZZzF3UXNXN2JhNnR1aHZteiJ9.J92uauLHnQDxtZixHJr4t6Bf-1ErVEc-2j9ux_G6X3C6Xs1ZWl2ytxaegZm2PVq9h-NeWTadtKOzwFA8BqxFe3LUGHsIKYpYJ0dcd0PTkNxug_t3Ced7hZok_I9YukuMrUaRaQBWoaio9TpIh07ivxRd-Mxee-VHSnWluvTEzA4ReVatYF6Y_dgBAiK2Ec8wnjUqwVqBwj8AsYhLviNSh6bNM3mz1S4YM0RP4Ug_qyOY_bKR8UXW5m6S7MW8gDVbvS3XsQJfDMFMVityB-_u4j4z541hkwgY9avrVd8SKClB3ZnKb_vrCyHwH8JScDoKNKImnrfyFfkGhcSu20pQgg'
    );

    this.wcData = {
      channel: 'mitienda',
      country: 'co',
      journey: 'activation',
    };
  }

  setToken(token: string) {
    localStorage.setItem('IdToken', token);
  }
}
