import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  // { path: '', component: ContentComponent },
  // { path: 'imprint', component: ImprintComponent },
  { path: '', component: ImprintComponent },
];
