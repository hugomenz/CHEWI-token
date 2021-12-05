import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatIconModule} from '@angular/material/icon';


@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
