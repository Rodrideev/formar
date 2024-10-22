import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    UserFullNamePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatTableModule, MatDialogModule, UserFullNamePipe]
})
export class SharedModule { }
