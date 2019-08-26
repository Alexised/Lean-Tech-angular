import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material//input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule, MatCheckboxModule, MatCardModule,
        MatToolbarModule, MatIconModule, MatDialogModule, MatDividerModule,
        MatTooltipModule, MatFormFieldModule, MatStepperModule,
        MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
        MatButtonToggleModule, MatSidenavModule, MatListModule, MatSlideToggleModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, MatCardModule,
        MatToolbarModule, MatIconModule, MatDialogModule, MatDividerModule,
        MatTooltipModule, MatFormFieldModule, MatStepperModule,
        MatInputModule, MatSelectModule, MatDatepickerModule,
        MatButtonToggleModule, MatNativeDateModule, MatSidenavModule, MatListModule, MatSlideToggleModule
    ],
})
export class MaterialModule { }
