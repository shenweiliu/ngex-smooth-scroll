import { ModuleWithProviders, NgModule } from '@angular/core';

import { PageScrollService } from './providers/ngx-page-scroll.service';
import { NGXPS_CONFIG } from './providers/config.provider';
import { PageScrollConfig } from './types/page-scroll.config';

@NgModule({
  providers: [
    PageScrollService,
    {provide: NGXPS_CONFIG, useValue: {}},
  ],
})
export class NgxPageScrollCoreModule {
  static forRoot(config?: PageScrollConfig): ModuleWithProviders<NgxPageScrollCoreModule> {
    return {
      ngModule: NgxPageScrollCoreModule,
      providers: [PageScrollService, {provide: NGXPS_CONFIG, useValue: config}],
    };
  }
}
