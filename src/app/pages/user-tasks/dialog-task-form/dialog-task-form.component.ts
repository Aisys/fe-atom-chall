import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";


@Component({
    selector: 'app-dialog-task-form',
    templateUrl: 'dialog-task-form.component.html',
    styleUrls: ['dialog-task-form.component.scss']
})
export class DialogTaskFormComponent implements OnInit {

    taskForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', Validators.required),
    });

    constructor(
        public dialogRef: MatDialogRef<DialogTaskFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit(): void {
        if (this.data) {
            this.taskForm.get('title')?.setValue(this.data.title);
            this.taskForm.get('description')?.setValue(this.data.description);
        }
    }
}