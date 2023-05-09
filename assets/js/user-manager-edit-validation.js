document.getElementById('fileSelect').addEventListener('change', function (e) {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        document.getElementById('preview').src = this.result;
    };
    reader.readAsDataURL(file);
});

document.querySelectorAll("input[type=number]").forEach((Element) => {
    Element.addEventListener("paste", (e) => {
        e.preventDefault();
        return false;
    });
})
// all requir field 
let allRequiredInp = document.querySelectorAll(".user-manager-edit .require input");
document.getElementById("user-manager-form").addEventListener("submit", (e) => {
    var indexStatus = [];
    allRequiredInp.forEach((Element, index) => {
        if (Element.value.trim() == '') {
            Element.nextElementSibling.style.display = "block";
            indexStatus.push(index);
            e.preventDefault();
        }
        if (Element.classList.contains("email-input") && !Element.value.match(mailformat)) {
            Element.nextElementSibling.style.display = "block";
            indexStatus.push(index);
            e.preventDefault();
        }
        if (Element.classList.contains("phone-input")) {
            var inpVal = Element.value.trim();
            if (inpVal.length != 11 || inpVal[0] != "0" || inpVal[1] != "9") {
                Element.nextElementSibling.style.display = "block";
                indexStatus.push(index);
                e.preventDefault();
            }
        }
        if (Element.classList.contains("bank-input") && Element.value.trim().length != 16) {
            Element.nextElementSibling.style.display = "block";
            indexStatus.push(index);
            e.preventDefault();
        }
        Element.addEventListener('input', () => {
            Element.nextElementSibling.style.display = "none";
        });
        if (indexStatus.length != 0) {
            indexStatus.sort();
            allRequiredInp[indexStatus[0]].focus();
        }
    });

});
