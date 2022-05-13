/*
 * Public API Surface of ngx-page-scroll-core
 */

export { NgxPageScrollCoreModule } from './ngx-page-scroll-core.module';

export { defaultPageScrollConfig, NGXPS_CONFIG } from './providers/config.provider';
export { PageScrollService } from './providers/ngx-page-scroll.service';

export { EasingLogic } from './types/easing-logic';
export { PageScrollInstance, InterruptReporter, PageScrollOptions } from './page-scroll-instance';
export { PageScrollTarget } from './types/page-scroll-target';
export { PageScrollViews } from './types/page-scroll-view';
export { PageScrollConfig } from './types/page-scroll.config';
