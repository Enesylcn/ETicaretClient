import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';

// Eğerki bir modul başka bir modulu kendi içinde beniseyecekse kendi içinde import etmesi gerekiyor.

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, ComponentsModule],
  exports: [LayoutModule, ComponentsModule],
})
export class AdminModule {}
