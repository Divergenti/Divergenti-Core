import { NgModule } from '@angular/core';
import { UpdateComponent } from './update.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
    ],
    declarations: [
        UpdateComponent,
    ],
    exports: [
        UpdateComponent,
    ],
})
export class UpdateModule {
}
