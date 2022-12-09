import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './component/tasks/tasks.component';
import { AddTaskComponent } from './component/add-task/add-task.component';

const routes: Routes = [

  {path:"", component: TasksComponent},
  // {path:"", component: TasksComponent},
  // {path:"", component: TasksComponent},
  // {path:"", component: TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
