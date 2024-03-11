import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { ParentComponent } from './decorator/parent.component';
import { ChildComponent } from './decorator/child.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { PipelineNewComponent } from './pipeline-new/pipeline-new.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    PipelineComponent,
    DecoratorComponent,
    ParentComponent,
    ChildComponent,
    FilterProductsPipe,
    PipelineNewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
