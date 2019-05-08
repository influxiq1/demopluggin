import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoplugginComponent } from './demopluggin.component';
import { HeaderComponent } from './header/header.component';
import {DemoMaterialModule} from './materialmodules';
import { ButtonComponent} from './button.component';
import {CheckboxComponent} from './checkbox.component';
import {DateComponent} from './date.component';
import {DynamicFieldDirective} from './dynamic-field.directive';
import {InputComponent} from './input.component';
import {SelectComponent} from './select.component';
import {RadiobuttonComponent} from './radiobutton.component';

@NgModule({
  declarations: [DemoplugginComponent,
    HeaderComponent, ButtonComponent,
    CheckboxComponent, DateComponent, DynamicFieldDirective, InputComponent, SelectComponent, RadiobuttonComponent],
  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule,
  ],
  exports: [DemoplugginComponent, HeaderComponent]
})
export class DemoplugginModule { }
