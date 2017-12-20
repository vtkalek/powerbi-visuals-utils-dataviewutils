// powerbi.extensibility.utils.dataview
import { DataRoleHelper } from "./dataRoleHelper";
export var converterHelper;
(function (converterHelper) {
    function categoryIsAlsoSeriesRole(dataView, seriesRoleName, categoryRoleName) {
        if (dataView.categories && dataView.categories.length > 0) {
            // Need to pivot data if our category soure is a series role
            let category = dataView.categories[0];
            return category.source &&
                DataRoleHelper.hasRole(category.source, seriesRoleName) &&
                DataRoleHelper.hasRole(category.source, categoryRoleName);
        }
        return false;
    }
    converterHelper.categoryIsAlsoSeriesRole = categoryIsAlsoSeriesRole;
    function getSeriesName(source) {
        return (source.groupName !== undefined)
            ? source.groupName
            : source.queryName;
    }
    converterHelper.getSeriesName = getSeriesName;
    function isImageUrlColumn(column) {
        let misc = getMiscellaneousTypeDescriptor(column);
        return misc != null && misc.imageUrl === true;
    }
    converterHelper.isImageUrlColumn = isImageUrlColumn;
    function isWebUrlColumn(column) {
        let misc = getMiscellaneousTypeDescriptor(column);
        return misc != null && misc.webUrl === true;
    }
    converterHelper.isWebUrlColumn = isWebUrlColumn;
    function getMiscellaneousTypeDescriptor(column) {
        return column
            && column.type
            && column.type.misc;
    }
    converterHelper.getMiscellaneousTypeDescriptor = getMiscellaneousTypeDescriptor;
    function hasImageUrlColumn(dataView) {
        if (!dataView || !dataView.metadata || !dataView.metadata.columns || !dataView.metadata.columns.length) {
            return false;
        }
        return dataView.metadata.columns.some((column) => isImageUrlColumn(column) === true);
    }
    converterHelper.hasImageUrlColumn = hasImageUrlColumn;
})(converterHelper || (converterHelper = {}));
//# sourceMappingURL=converterHelper.js.map