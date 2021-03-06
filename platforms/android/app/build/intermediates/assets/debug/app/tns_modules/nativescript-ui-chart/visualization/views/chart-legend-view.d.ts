import * as legendViewCommonModule from './chart-legend-view.common';
import * as chartModule from "../../ui-chart.common";
export declare class RadLegendView extends legendViewCommonModule.RadLegendView {
    private _android;
    private _chart;
    private _legendItemSelectedListener;
    readonly android: com.telerik.widget.primitives.legend.RadLegendView;
    updateLegendView(chartView: chartModule.RadChartBase): void;
    private getFloatingPositionParams();
    protected onTitleChanged(oldValue: string, newValue: string): void;
    private updateLegendTitle();
    protected onPositionChanged(oldValue: string, newValue: string): void;
    protected onOffsetOriginChanged(oldValue: string, newValue: string): void;
    protected onHorizontalOffsetChanged(oldValue: number, newValue: number): void;
    protected onVerticalOffsetChanged(oldValue: number, newValue: number): void;
}
