// copied with permission from https://github.com/FearMichael/health-tracker/blob/main/client/src/app/global/global.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
  ]
})
export class GlobalModule { }
