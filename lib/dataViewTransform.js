// TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
export var DataViewTransform;
(function (DataViewTransform) {
    // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
    function createValueColumns(values = [], valueIdentityFields, source) {
        let result = values;
        setGrouped(result);
        if (valueIdentityFields) {
            result.identityFields = valueIdentityFields;
        }
        if (source) {
            result.source = source;
        }
        return result;
    }
    DataViewTransform.createValueColumns = createValueColumns;
    function setGrouped(values, groupedResult) {
        values.grouped = groupedResult
            ? () => groupedResult
            : () => groupValues(values);
    }
    DataViewTransform.setGrouped = setGrouped;
    /** Group together the values with a common identity. */
    function groupValues(values) {
        let groups = [], currentGroup;
        for (let i = 0, len = values.length; i < len; i++) {
            let value = values[i];
            if (!currentGroup || currentGroup.identity !== value.identity) {
                currentGroup = {
                    values: []
                };
                if (value.identity) {
                    currentGroup.identity = value.identity;
                    let source = value.source;
                    // allow null, which will be formatted as (Blank).
                    if (source.groupName !== undefined) {
                        currentGroup.name = source.groupName;
                    }
                    else if (source.displayName) {
                        currentGroup.name = source.displayName;
                    }
                }
                groups.push(currentGroup);
            }
            currentGroup.values.push(value);
        }
        return groups;
    }
    DataViewTransform.groupValues = groupValues;
})(DataViewTransform || (DataViewTransform = {}));
//# sourceMappingURL=dataViewTransform.js.map