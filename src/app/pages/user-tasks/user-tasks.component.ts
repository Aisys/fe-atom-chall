import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { firstValueFrom } from 'rxjs';
import { TaskService } from '../../shared/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTaskFormComponent } from './dialog-task-form/dialog-task-form.component';

export interface TasksElement {
  id: string;
  title: string;
  description: string;
  creation: Date;
  complete: boolean;
}


@Component({
  selector: 'app-user-tasks',
  templateUrl: 'user-tasks.component.html',
  styleUrls: ['user-tasks.component.scss']
})

export class UserTasksComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'title', 'description', 'creation', 'complete', 'actions'];
  dataSource = new MatTableDataSource<TasksElement>([]);
  selection = new SelectionModel<TasksElement>(true, []);
  loadingStatus = false;

  constructor(
    private router: Router, private taskService: TaskService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    await this.upgradeTable();
  }

  async upgradeTable() {
    this.loadingStatus = true;
    this.dataSource.data = [];
    this.selection.clear();
    await firstValueFrom(this.taskService.getAllTasks()).then(resp => {
      if (resp) {
        this.dataSource.data.push(...resp);
        this.dataSource.data = [...this.dataSource.data]
      }
    }).catch(err => {
      console.warn(err);
    });
    this.loadingStatus = false;
  }

  async change() {
    this.loadingStatus = true;
    const ids: string[] = this.selection.selected.map(element => element.id);
    await firstValueFrom(this.taskService.putChangeStates(ids)).then();
    await this.upgradeTable();

  }

  add(): void {
    const dialogRef = this.dialog.open(DialogTaskFormComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        this.loadingStatus = true;
        await firstValueFrom(this.taskService.postTask(result.title, result.description)).then();
        await this.upgradeTable();
      }
    });
  }

  edit(element: TasksElement) {
    const dialogRef = this.dialog.open(DialogTaskFormComponent, {
      data: element,
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        this.loadingStatus = true;
        await firstValueFrom(this.taskService.putTask(element.id, result.title, result.description)).then();
        await this.upgradeTable();
      }
    });
  }
  async delete(element: TasksElement) {
    this.loadingStatus = true;
    await firstValueFrom(this.taskService.deleteTask(element.id)).then();
    await this.upgradeTable();
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  checkboxLabel(row?: TasksElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title}`;
  }


  statusClass(complete: boolean): string {
    return complete ? 'celd-complete' : 'celd-pending';
  }
  isLoading(): string {
    return this.loadingStatus ? 'flex' : 'none';
  }
}
