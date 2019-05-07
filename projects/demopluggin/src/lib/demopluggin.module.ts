import { NgModule } from '@angular/core';
import { DemoplugginComponent } from './demopluggin.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [DemoplugginComponent, HeaderComponent],
  imports: [
  ],
  exports: [DemoplugginComponent, HeaderComponent]
})
export class DemoplugginModule { }
