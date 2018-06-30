import { ChartBase } from './chart-base';
import { ChartConfigBase } from './chart-config-base';
import { ChartDefaults } from './chart-defaults';
import { DonutConfig } from './donut-chart/basic-donut-chart/donut-chart-config';
import { SparklineConfig } from './sparkline-chart/sparkline-chart-config';
import { SparklineData } from './sparkline-chart/sparkline-chart-data';
export { ChartBase, ChartConfigBase, ChartDefaults };
export { DonutConfig, SparklineConfig, SparklineData };
/**
 * A module containing objects associated with chart components
 *
 * @deprecated Use individual module imports
 *
 * import {
 *   DonutChartModule,
 *   SparklineChartModule
 * } from 'patterfnly/chart';
 */
export declare class ChartModule {
    constructor();
}