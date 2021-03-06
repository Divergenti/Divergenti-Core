import { TestBed, async } from '@angular/core/testing';
import { RootComponent } from './root.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { DetailsModule } from '../details/details.module';
import { ViewAreaModule } from 'src/app/shared/view-area/view-area.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            CommonModule,
            RouterModule,
            MaterialModule,
            AppSharedModule,
            DetailsModule,
            ViewAreaModule,
            RouterTestingModule.withRoutes([]),
        ],
      declarations: [
        RootComponent
      ],
    }).compileComponents();
  }));

});
