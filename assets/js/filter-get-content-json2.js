let filterQuery = {};
let objIds = [];
let ArrayParameterIds = [];
$(document).ready(function () {
    document.querySelectorAll("aside .card input").forEach((Element) => {
        Element.addEventListener("change", (e) => {
            getFilterContent(e.currentTarget);
        });
        var objDataId = Element.getAttribute("data-id").split("_");
        if (!objIds.includes(objDataId[0])) {
            objIds.push(objDataId[0]);
            if (objDataId[0] != "Sort") {
                filterQuery[objDataId[0]] = [];
            }
        }
        if (Element.checked) {
            if (objDataId[0] == "ArrayParameters") {
                if (!ArrayParameterIds.includes(objDataId[1])) {
                    filterQuery[objDataId[0]].push({ "Id": parseInt(objDataId[1]), "Values": [objDataId[2]] });
                    ArrayParameterIds.push(objDataId[1]);
                } else {
                    filterQuery[objDataId[0]].forEach((Element) => {
                        if (Element['Id'] == objDataId[1]) {
                            Element['Values'].push(objDataId[2]);
                        }
                    });
                }
            } else if (objDataId[0] == "Brands" || objDataId[0] == "LogicalParameters") {
                filterQuery[objDataId[0]].push(parseInt(objDataId[1]));
            } else if (objDataId[0] == "Sort") {
                filterQuery[objDataId[0]] = parseInt(objDataId[1]);
            }
        }
    });
    document.querySelectorAll(".slider_input").forEach((Element) => {
        var objDataId = Element.getAttribute("data-id").split("_");
        if (!objIds.includes(objDataId[0])) {
            objIds.push(objDataId[0]);
            filterQuery[objDataId[0]] = [];
        }
        filterQuery[objDataId[0]].push({ "Id": objDataId[1], "Min": parseFloat(Element.querySelector(".ui-slider-handle:first-of-type").getAttribute("data-val")), "Max": parseFloat(Element.querySelector(".ui-slider-handle:last-of-type").getAttribute("data-val")) });
    });
    console.log(filterQuery);
});
function getFilterContent(that) {
    var objDataId = that.getAttribute("data-id").split("_");
    if (that.checked) {
        if (objDataId[0] == "ArrayParameters") {
            if (!ArrayParameterIds.includes(objDataId[1])) {
                filterQuery[objDataId[0]].push({ "Id": parseInt(objDataId[1]), "Values": [objDataId[2]] });
                ArrayParameterIds.push(objDataId[1]);
            } else {
                filterQuery[objDataId[0]].forEach((Element) => {
                    if (Element['Id'] == objDataId[1]) {
                        Element['Values'].push(objDataId[2]);
                    }
                });
            }
        } else if (objDataId[0] == "Brands" || objDataId[0] == "LogicalParameters") {
            filterQuery[objDataId[0]].push(parseInt(objDataId[1]));
        } else if (objDataId[0] == "Sort") {
            filterQuery[objDataId[0]] = parseInt(objDataId[1]);
        }
    } else {
        if (objDataId[0] == "ArrayParameters") {
            filterQuery[objDataId[0]].forEach((Element, index) => {
                if (Element['Id'] == objDataId[1]) {
                    Element['Values'].forEach((Element2, index2) => {
                        if (Element2 == objDataId[2]) {
                            Element['Values'].splice(index2, 1);
                            if (Element['Values'].length == 0) {
                                var index3 = ArrayParameterIds.indexOf(`${Element['Id']}`);
                                if (index3 !== -1) {
                                    ArrayParameterIds.splice(index3, 1);
                                }
                                filterQuery[objDataId[0]].splice(index, 1);
                            }
                        }
                    });

                }
            });
        } else if (objDataId[0] == "Brands" || objDataId[0] == "LogicalParameters") {
            var index = filterQuery[objDataId[0]].indexOf(parseInt(objDataId[1]));
            if (index !== -1) {
                filterQuery[objDataId[0]].splice(index, 1);
            }
        }
    }
    if (window.matchMedia("(min-width: 993px)").matches) {
        console.log(filterQuery);
    }
}
//this is go filter in mobile version
document.querySelector(".search-page-content > aside .overlay-footer button").addEventListener("click", (e) => {
    modifyRange();
});
//this is button go for each range
document.querySelectorAll(".search-page-content > aside .sidebar-accordion-menu .rang-card-body button").forEach((Element) => {
    Element.addEventListener("click", (e) => {
        modifyRange();
    });
});
function modifyRange() {
    document.querySelectorAll(".slider_input").forEach((Element2) => {
        var objDataId = Element2.getAttribute("data-id").split("_");
        filterQuery[objDataId[0]].forEach((Element) => {
            if (Element['Id'] == objDataId[1]) {
                Element['Min'] = parseFloat(Element2.querySelector(".ui-slider-handle:first-of-type").getAttribute("data-val"));
                Element['Max'] = parseFloat(Element2.querySelector(".ui-slider-handle:last-of-type").getAttribute("data-val"));
            }
        });
    });
    console.log(filterQuery);
}