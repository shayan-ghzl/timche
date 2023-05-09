let filterQuery = {};
let objIds = [];
$(document).ready(function () {
    document.querySelectorAll("aside .card input").forEach((Element) => {
        Element.addEventListener("change", (e) => {
            getFilterContent(e.currentTarget);
        });
        var objDataId = Element.getAttribute("data-id").split("_");
        if (Element.checked) {
            if (!objIds.includes(objDataId[0])) {
                objIds.push(objDataId[0]);
                filterQuery[objDataId[0]] = {};
            }
            filterQuery[objDataId[0]][objDataId[1]] = 'true';
        }
    });
    // this block should set for every single ui-slider  ------  start
    var objDataId = document.querySelector("#slider-3").getAttribute("data-id").split("_");
    if (!objIds.includes(objDataId[0])) {
        objIds.push(objDataId[0]);
        filterQuery[objDataId[0]] = {};
        filterQuery[objDataId[0]][objDataId[1]] = {};
    }
    filterQuery[objDataId[0]][objDataId[1]]['min'] = document.querySelector("#slider-3 .ui-slider-handle:first-of-type").getAttribute("data-val");
    filterQuery[objDataId[0]][objDataId[1]]['max'] = document.querySelector("#slider-3 .ui-slider-handle:last-of-type").getAttribute("data-val");
    // this block should set for every single ui-slider  ------  end
    console.log(filterQuery);
});
function getFilterContent(that, sliderUi) {
    var objDataId = that.getAttribute("data-id").split("_");
    if (that.classList.contains("ui-slider")) {
        filterQuery[objDataId[0]][objDataId[1]]['min'] = sliderUi.values[0];
        filterQuery[objDataId[0]][objDataId[1]]['max'] = sliderUi.values[1];
    } else {
        if (that.checked) {
            if (that.type == "radio")
                delete filterQuery[objDataId[0]][objDataId[1]];
            if (!objIds.includes(objDataId[0])) {
                objIds.push(objDataId[0]);
                filterQuery[objDataId[0]] = {};
            }
            filterQuery[objDataId[0]][objDataId[1]] = 'true';
        } else {
            delete filterQuery[objDataId[0]][objDataId[1]];
            if (Object.keys(filterQuery[objDataId[0]]).length == 0) {
                delete filterQuery[objDataId[0]];
                var index = objIds.indexOf(objDataId[0]);
                if (index !== -1) {
                    objIds.splice(index, 1);
                }
            }
        }
    }
    console.log(filterQuery);
}