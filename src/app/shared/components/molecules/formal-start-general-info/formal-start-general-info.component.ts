import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formal-start-general-info',
  templateUrl: './formal-start-general-info.component.html',
  styleUrls: ['./formal-start-general-info.component.scss']
})
export class FormalStartGeneralInfoComponent {
  form!: FormGroup;
  
  constructor(
    @Inject('projectCode') public projectCode: string,
    private fb: FormBuilder) { 
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      internCode: ['', Validators.required],
      projectDuration: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      approvalDate: [null, Validators.required],
      downloadApprovalDocument: [false, Validators.required],
      infoApprovalDocument: [false, Validators.required],
    });
  }
}
