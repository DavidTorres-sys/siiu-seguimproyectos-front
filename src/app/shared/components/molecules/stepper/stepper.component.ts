import { Component, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import { FormalStartGeneralInfoComponent } from '../formal-start-general-info/formal-start-general-info.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  isLinear = true;
  steps: any[] = [];

  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder) {
    this.initializeSteps();
  }

  initializeSteps() {
    this.steps = [
      { 
        label: 'Información general', 
        formGroup: this._formBuilder.group({ infoCtrl: ['', Validators.required] }),
        component: FormalStartGeneralInfoComponent,
      },
      { 
        label: 'Participantes', 
        formGroup: this._formBuilder.group({ participantsCtrl: ['', Validators.required] }),
        controlName: 'participantsCtrl' 
      },
      { 
        label: 'Compromisos', 
        formGroup: this._formBuilder.group({ commitmentsCtrl: ['', Validators.required] }),
        controlName: 'commitmentsCtrl' 
      },
      { 
        label: 'Etapas', 
        formGroup: this._formBuilder.group({ stagesCtrl: ['', Validators.required] }),
        controlName: 'stagesCtrl'
      },
      { 
        label: 'Generar acta de Inicio', 
        formGroup: this._formBuilder.group({ startDocCtrl: ['', Validators.required] }),
        controlName: 'startDocCtrl' 
      },
      { 
        label: 'Documento soporte', 
        formGroup: this._formBuilder.group({ supportDocCtrl: ['', Validators.required] }),
        controlName: 'supportDocCtrl' 
      },
      { 
        label: 'Cerrar Inicio Formal', 
        formGroup: this._formBuilder.group({ closeCtrl: ['', Validators.required] }),
        controlName: 'closeCtrl' 
      }
    ];
  }

  goToNextStep() {
    if (this.stepper) {
      this.stepper.next();
    }
  }

  goToPreviousStep() {
    if (this.stepper) {
      this.stepper.previous();
    }
  }
}
