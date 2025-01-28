import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

interface SetTokenForm {
  idToken: FormControl<string | null>;
}

@Component({
  selector: 'app-start-flow',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './start-flow.component.html',
  styleUrl: './start-flow.component.scss',
})
export class StartFlowComponent implements OnInit {
  public form!: FormGroup<SetTokenForm>;

  private token: string =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9Ld1dUZnBHX2Y4Vm9pRVZTSURRRiJ9.eyJodHRwczovL2lkLnRpZ28uY29tL2N1c3RvbTpVVUlEIjoiZDM0YWI5NGYtMDIwZS00OWEzLTg1MWItY2I2NzEzM2RlMmU5IiwiaXNzIjoiaHR0cHM6Ly9taXRpZW5kYS1zc28tc3RnLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJzbXN8NjcwZmZlOWI1Y2FiYjI5YzA4NjhmYmQyIiwiYXVkIjpbImh0dHBzOi8vbWl0aWVuZGEtc3NvLXN0Zy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vbWl0aWVuZGEtc3NvLXN0Zy51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzM4MDcxODc4LCJleHAiOjE3MzgxNTgyNzgsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgcmVhZDpjdXJyZW50X3VzZXIgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJOYW5wZTF2RXo0UXNaOEZZZzF3UXNXN2JhNnR1aHZteiJ9.Sq1nGQCpAmMnBZTuJD9C4Lkxc7EnAwMPZ7O597gpleuAzf3dQu_7Ngkcjb8WQe25htKKI9W1UT_7pCZVCGG9i5psxObjis4y54T0YTSssQg1mz5t29QjKksehHWuqMGqZ6mFTrwkc2aQSbuxHNPPfvsawu2lp8Kx9QqPVsRlZ1A2Pw8zszB4LrMWDqFVqbFE3SxHE6s5w83oYZA1iRCDyVEk6gMPRx-T_vkQyWRwOSNjthMBp1aw7_ryHbxT3U1IzU-k78r25bDSU4PFGfW9_sZK_AoP5yE2t74wvXN6mzbqte7ZajXB9taQ_e0gFpMA4uMSk0t6Y_-rmoE202B9jg';

  private router = inject(Router);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.buildForm();
  }
  onRedirect() {
    if (this.form?.valid) {
      this.setToken(this.form?.controls?.idToken?.value!);

      this.router.navigateByUrl('ekyc');
    }
  }

  buildForm() {
    this.form = this.fb.group({
      idToken: [this.token, [Validators.required]],
    });
  }

  setToken(token: string) {
    localStorage.setItem('IdToken', token);
  }
}
