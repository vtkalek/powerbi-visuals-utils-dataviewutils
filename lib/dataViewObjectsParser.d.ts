import DataViewObjectPropertyIdentifier = powerbi.DataViewObjectPropertyIdentifier;
import DataView = powerbi.DataView;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
export interface DataViewProperty {
    [propertyName: string]: DataViewObjectPropertyIdentifier;
}
export interface DataViewProperties {
    [propertyName: string]: DataViewProperty;
}
export declare class DataViewObjectsParser {
    private static InnumerablePropertyPrefix;
    static getDefault(): DataViewObjectsParser;
    private static createPropertyIdentifier(objectName, propertyName);
    static parse<T extends DataViewObjectsParser>(dataView: DataView): T;
    private static isPropertyEnumerable(propertyName);
    static enumerateObjectInstances(dataViewObjectParser: DataViewObjectsParser, options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    getProperties(): DataViewProperties;
}