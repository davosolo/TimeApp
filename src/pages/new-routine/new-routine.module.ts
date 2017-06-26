import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRoutinePage } from './new-routine';

@NgModule({
  declarations: [
    NewRoutinePage,
  ],
  imports: [
    IonicPageModule.forChild(NewRoutinePage),
  ],
  exports: [
    NewRoutinePage
  ]
})
export class NewRoutinePageModule {}
