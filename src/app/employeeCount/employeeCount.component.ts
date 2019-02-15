import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-count',
    templateUrl: './employeeCount.component.html',
})
export class EmployeeCountComponent {
   SelectedGender: string = 'All';
@Input() all: number;
@Input() male: number;
@Input() female: number;
@Output() GenderChanged: EventEmitter<string> = new EventEmitter<string>();
constructor() {
}
onRadioButtonSelectionChange() {
      this.GenderChanged.emit(this.SelectedGender);
      console.log(this.SelectedGender);
   }
}
