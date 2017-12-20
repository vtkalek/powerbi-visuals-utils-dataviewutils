import DataViewCategorical = powerbi.DataViewCategorical;
import DataViewMetadataColumn = powerbi.DataViewMetadataColumn;
import PrimitiveValue = powerbi.PrimitiveValue;
import MiscellaneousTypeDescriptor = powerbi.MiscellaneousTypeDescriptor;
import DataView = powerbi.DataView;
export declare module converterHelper {
    function categoryIsAlsoSeriesRole(dataView: DataViewCategorical, seriesRoleName: string, categoryRoleName: string): boolean;
    function getSeriesName(source: DataViewMetadataColumn): PrimitiveValue;
    function isImageUrlColumn(column: DataViewMetadataColumn): boolean;
    function isWebUrlColumn(column: DataViewMetadataColumn): boolean;
    function getMiscellaneousTypeDescriptor(column: DataViewMetadataColumn): MiscellaneousTypeDescriptor;
    function hasImageUrlColumn(dataView: DataView): boolean;
}