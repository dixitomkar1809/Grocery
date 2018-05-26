import * as commonModule from "./ui-gauge.common";
export declare class RadRadialGauge extends commonModule.RadRadialGauge {
    private _android;
    readonly nativeObject: any;
    readonly _nativeView: any;
    createNativeView(): com.telerik.widget.gauge.RadRadialGaugeView;
}
export declare class RadialScale extends commonModule.RadialScale {
    private _android;
    readonly android: com.telerik.widget.scales.GaugeRadialScale;
    readonly nativeObject: any;
    owner: commonModule.RadGauge;
    private updateNativeRadialScale();
    protected _onStartAnglePropertyChanged(oldValue: number, newValue: number): void;
    protected _onSweepAnglePropertyChanged(oldValue: number, newValue: number): void;
    protected _onRadiusPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class ScaleStyle extends commonModule.ScaleStyle {
    protected _onLineColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onLineThicknessPropertyChanged(oldValue: number, newValue: number): void;
    protected _onTicksVisiblePropertyChanged(oldValue: boolean, newValue: boolean): void;
    protected _onMajorTicksCountPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMinorTicksCountPropertyChanged(oldValue: number, newValue: number): void;
    protected _onТicksOffsetPropertyChanged(oldValue: number, newValue: number): void;
    protected _onTicksLayoutModePropertyChanged(oldValue: string, newValue: string): void;
    protected _onMajorTicksWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMinorTicksWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMajorTicksLengthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMinorTicksLengthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMajorTicksStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onМinorTicksStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onMajorTicksFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onMinorTicksFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onМajorTicksStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onМinorTicksStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onLabelsVisiblePropertyChanged(oldValue: boolean, newValue: boolean): void;
    protected _onLabelsCountPropertyChanged(oldValue: number, newValue: number): void;
    protected _onLabelsLayoutModePropertyChanged(oldValue: string, newValue: string): void;
    protected _onLabelsOffsetPropertyChanged(oldValue: number, newValue: number): void;
    protected _onLabelsSizePropertyChanged(oldValue: number, newValue: number): void;
    protected _onLabelsColorPropertyChanged(oldValue: string, newValue: string): void;
}
export declare class TitleStyle extends commonModule.TitleStyle {
    protected _onTextSizePropertyChanged(oldValue: number, newValue: number): void;
    protected _onTextColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onHorizontalOffsetPropertyChanged(oldValue: number, newValue: number): void;
    protected _onVerticalOffsetPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class SubtitleStyle extends commonModule.SubtitleStyle {
    protected _onTextSizePropertyChanged(oldValue: number, newValue: number): void;
    protected _onTextColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onHorizontalOffsetPropertyChanged(oldValue: number, newValue: number): void;
    protected _onVerticalOffsetPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class RadialNeedle extends commonModule.RadialNeedle {
    private _android;
    private _androidViewId;
    initNativeView(): void;
    readonly android: any;
    owner: commonModule.GaugeScale;
    readonly nativeObject: any;
    protected _onValuePropertyChanged(oldValue: number, newValue: number): void;
}
export declare class NeedleStyle extends commonModule.NeedleStyle {
    protected _onLengthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onBottomWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onTopWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onCircleRadiusPropertyChanged(oldValue: number, newValue: number): void;
    protected _onCircleInnerRadiusPropertyChanged(oldValue: number, newValue: number): void;
    protected _onOffsetPropertyChanged(oldValue: number, newValue: number): void;
    protected _onCircleFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onCircleStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onCircleStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class RadialBarIndicator extends commonModule.RadialBarIndicator {
    private _android;
    private _androidViewId;
    initNativeView(): void;
    owner: commonModule.GaugeScale;
    readonly android: com.telerik.widget.indicators.GaugeRadialBarIndicator;
    readonly nativeObject: any;
}
export declare class BarIndicatorStyle extends commonModule.BarIndicatorStyle {
    protected _onCapPropertyChanged(oldValue: string, newValue: string): void;
    protected _onBarWidthPropertyChanged(oldValue: number, newValue: number): void;
    protected _onFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
}
