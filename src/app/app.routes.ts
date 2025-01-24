import { Routes } from '@angular/router';
import { EkycComponent } from './components/ekyc/ekyc.component';
import { StartFlowComponent } from './components/start-flow/start-flow.component';
import { EndFlowComponent } from './components/end-flow/end-flow.component';

export const routes: Routes = [
  { path: '', component: StartFlowComponent },
  { path: 'ekyc', component: EkycComponent },
  { path: 'end', component: EndFlowComponent },
];
