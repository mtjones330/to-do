import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ProgressComponent } from './components/progress/progress.component';
import { InputComponent } from './components/input/input.component';
import { NgxsModule } from '@ngxs/store';
import { ToDoState } from './store/to-do.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProgressComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ToDoState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
