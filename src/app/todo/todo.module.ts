import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../service/todo/todo.service';
import { RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { AuthGuard } from '../service/guards/auth.guard';
import { TodoresolveGuard } from '../service/todo/todoresolve.guard';
import { TodoeditComponent } from './todoedit/todoedit.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: TodoComponent, canActivate: [AuthGuard],
        resolve: {
          todList: TodoresolveGuard
        },
        canActivateChild: [AuthGuard],
        children: [
          { path: ':id', component: TodoDetailsComponent },
          { path: ':id/edit', component: TodoeditComponent }
        ]
      },
      // { path: 'todo/:id', component: TodoDetailsComponent }
    ])
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoeditComponent
  ],
  providers: [TodoService, TodoresolveGuard]
})
export class TodoModule { }
