import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { PipelineNewComponent } from "./pipeline-new/pipeline-new.component";
const routes: Routes = [
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'decorator', component: DecoratorComponent },
  {path:'pipelinenew',component:PipelineNewComponent},
  { path: '', redirectTo: '/directives', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
