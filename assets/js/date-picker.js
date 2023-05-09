var picker = document.querySelectorAll('.picker');
var inpMonth, inpDay, inpYear, initVal;
var numPerio = [];
for (var t = 0; t < picker.length; t++) {
    initVal = picker[t].getAttribute('data-value');
    if (initVal)
        initVal = initVal.split('/');
    else
        initVal = ['0000', '01', '01'];
    picker[t].innerHTML = `<div class="div_pick_year"><input type="text" maxlength="4" class="date_picker_year" value="${initVal[0]}"></div><span>/</span><div class="div_pick_month"><input type="text" maxlength="2" class="date_picker_month" value="${initVal[1]}"></div><span>/</span><div class="div_pick_day"><input type="text" maxlength="2" class="date_picker_day" value="${initVal[2]}"></div>`;
    // ---------------------------------------------------------------------
    inpYear = picker[t].querySelector('.date_picker_year');
    inpYear.addEventListener("keydown", (e) => {
        var yearElemD = e.target;
        var keyCodeY = e.keyCode;
        if (!((keyCodeY >= 48 && keyCodeY <= 57) || (keyCodeY >= 96 && keyCodeY <= 105) || (keyCodeY < 10 && keyCodeY > 7))) {
            e.preventDefault();
            return false;
        }

        if (keyCodeY < 10 && keyCodeY > 7)
            return false;
        var lastNumY;

        if (keyCodeY >= 48 && keyCodeY <= 57)
            lastNumY = keyCodeY - 48;
        if (keyCodeY >= 96 && keyCodeY <= 105)
            lastNumY = keyCodeY - 96;

        numPerio.push(lastNumY);

        if (numPerio[0] != 1 && numPerio.length == 1) {
            yearElemD.value = '1';
            numPerio[0] = 1;
            numPerio.push(lastNumY);
        }
        if ((numPerio[1] > 4 || numPerio[1] < 3) && numPerio.length == 2) {
            yearElemD.value = '13';
            numPerio[1] = 3;
        }
        if (yearElemD.value.length == 3) {
            setTimeout(() => {
                yearElemD.parentElement.parentElement.querySelector('.date_picker_month').focus();
            });
        }
    });
    inpYear.addEventListener("keyup", (e) => {
        if (e.keyCode == 8) {
            e.target.value = '1300';
            e.target.select();
            numPerio = [];
        }
    });
    inpYear.addEventListener("paste", (e) => {
        e.preventDefault();
        return false;
    });
    inpYear.addEventListener("focus", (e) => {
        e.target.select();
        numPerio = [];
    });
    inpYear.addEventListener("blur", (e) => {
        numPerio = [];

        var yearElemB = e.target;
        var inpYearVal = yearElemB.value;

        if (inpYearVal.length != 4 || inpYearVal == '0000') {
            yearElemB.value = '1300';
            yearElemB.select();
        }
        else if (inpYearVal.trim() === "") {
            yearElemB.value = '1300';
            yearElemB.select();
        }
        var monval = yearElemB.parentElement.parentElement.querySelector('.date_picker_month').value;
        var dayval = yearElemB.parentElement.parentElement.querySelector('.date_picker_day').value;

        if (`${yearElemB.value}${monval}${dayval}`.replace(/[^0-9]/g, "").length == 6)
            yearElemB.parentElement.parentElement.setAttribute('data-date', `${yearElemB.value}/${monval}/${dayval}`);
        else
            yearElemB.parentElement.parentElement.setAttribute('data-date', '');
    });
    // ---------------------------------------------------------------------
    inpMonth = picker[t].querySelector('.date_picker_month');
    inpMonth.addEventListener("keydown", (e) => {
        var keyCode = e.keyCode;
        if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || (keyCode < 10 && keyCode > 7))) {
            e.preventDefault();
            return false;
        }
        if (keyCode < 10 && keyCode > 7)
            return false;
        var lastNum;
        var monthElemD = e.target;
        var inpMonValLen = monthElemD.value.length;
        if (keyCode >= 48 && keyCode <= 57)
            lastNum = keyCode - 48;
        if (keyCode >= 96 && keyCode <= 105)
            lastNum = keyCode - 96;
        numPerio.push(lastNum);
        if (lastNum > 1 && lastNum < 10 && inpMonValLen != 1) {
            monthElemD.value = `0${lastNum}`;
            numPerio = [];
            setTimeout(() => {
                monthElemD.parentElement.parentElement.querySelector('.date_picker_day').focus();
            });
        }
        else if (numPerio[0] == 0 && inpMonValLen == 1) {
            if (lastNum == 0)
                monthElemD.value = '01';
            setTimeout(() => {
                monthElemD.parentElement.parentElement.querySelector('.date_picker_day').focus();
            });
        }
        else if (numPerio[0] == 1 && inpMonValLen == 1) {
            if (lastNum > 2)
                monthElemD.value = '12';
            setTimeout(() => {
                monthElemD.parentElement.parentElement.querySelector('.date_picker_day').focus();
            });
        }
    });
    inpMonth.addEventListener("keyup", (e) => {
        if (e.keyCode == 8) {
            e.target.value = '00';
            e.target.select();
            numPerio = [];
        }
    });
    inpMonth.addEventListener("paste", (e) => {
        e.preventDefault();
        return false;
    });
    inpMonth.addEventListener("focus", (e) => {
        e.target.select();
        numPerio = [];
    });
    inpMonth.addEventListener("blur", (e) => {
        numPerio = [];
        var monthElemB = e.target;

        var inpMonVal = monthElemB.value;
        if (inpMonVal == '0' || inpMonVal == '00')
            monthElemB.value = '01';
        else if (inpMonVal.length == 1)
            monthElemB.value = `0${inpMonVal}`;
        else if (inpMonVal.trim() === "") {
            monthElemB.value = '00';
            monthElemB.select();
        }
        var yearVal = monthElemB.parentElement.parentElement.querySelector('.date_picker_year').value;
        var dayVal = monthElemB.parentElement.parentElement.querySelector('.date_picker_day').value;

        if (`${yearVal}${monthElemB.value}${dayVal}`.replace(/[^0-9]/g, "").length == 6)
            monthElemB.parentElement.parentElement.setAttribute('data-date', `${yearVal}/${monthElemB.value}/${dayVal}`);
        else
            monthElemB.parentElement.parentElement.setAttribute('data-date', '');
    });
    // ---------------------------------------------------------------------
    inpDay = picker[t].querySelector('.date_picker_day');
    inpDay.addEventListener("keydown", (e) => {
        var keyCodeD = e.keyCode;
        if (!((keyCodeD >= 48 && keyCodeD <= 57) || (keyCodeD >= 96 && keyCodeD <= 105) || (keyCodeD < 10 && keyCodeD > 7))) {
            e.preventDefault();
            return false;
        }
        if (keyCodeD < 10 && keyCodeD > 7)
            return false;
        var lastNumD;
        var dayElemD = e.target;
        var inpDayValLen = dayElemD.value.length;
        if (keyCodeD >= 48 && keyCodeD <= 57)
            lastNumD = keyCodeD - 48;
        if (keyCodeD >= 96 && keyCodeD <= 105)
            lastNumD = keyCodeD - 96;
        numPerio.push(lastNumD);
        if (lastNumD > 3 && lastNumD < 10 && inpDayValLen != 1) {
            dayElemD.value = `0${lastNumD}`;
            numPerio = [];
            setTimeout(() => {
                dayElemD.blur();
            });
        }
        else if ((numPerio[0] == 1 || numPerio[0] == 2) && inpDayValLen == 1) {
            setTimeout(() => {
                dayElemD.blur();
            });
        }
        else if (numPerio[0] == 3 && inpDayValLen == 1) {
            var monthElementD = parseInt(dayElemD.parentElement.parentElement.querySelector('.date_picker_month').value);
            if (lastNumD > 1 && monthElementD < 7)
                dayElemD.value = '31';
            else if (lastNumD > 1 && monthElementD > 6 && monthElementD != 12)
                dayElemD.value = '30';
            else if (lastNumD > 0 && monthElementD == 12 && (parseInt(dayElemD.parentElement.parentElement.querySelector('.date_picker_year').value) - 1390) % 4 == 0)
                dayElemD.value = '29';
            else
                dayElemD.value = '30';
            numPerio = [];
            setTimeout(() => {
                dayElemD.blur();
            });
        }
        else if (numPerio[0] == 0 && inpDayValLen == 1) {
            if (lastNumD == 0)
                dayElemD.value = '01';
            numPerio = [];
            setTimeout(() => {
                dayElemD.blur();
            });
        }
    });
    inpDay.addEventListener("keyup", (e) => {
        if (e.keyCode == 8) {
            e.target.value = '00';
            e.target.select();
            numPerio = [];
        }
    });
    inpDay.addEventListener("paste", (e) => {
        e.preventDefault();
        return false;
    });
    inpDay.addEventListener("focus", (e) => {
        e.target.select();
        numPerio = [];
    });
    inpDay.addEventListener("blur", (e) => {
        numPerio = [];
        var dayElemB = e.target;

        var inpDayVal = dayElemB.value;
        if (inpDayVal == '0' || inpDayVal == '00')
            dayElemB.value = '01';
        else if (inpDayVal.length == 1)
            dayElemB.value = `0${inpDayVal}`;
        else if (inpDayVal.trim() === "") {
            dayElemB.value = '01';
            dayElemB.select();
        }
        var yearVal = dayElemB.parentElement.parentElement.querySelector('.date_picker_year').value
        var monVal = dayElemB.parentElement.parentElement.querySelector('.date_picker_month').value;

        if (`${yearVal}${monVal}${dayElemB.value}`.replace(/[^0-9]/g, "").length == 6)
            dayElemB.parentElement.parentElement.setAttribute('data-date', `${yearVal}/${monVal}/${dayElemB.value}`);
        else
            dayElemB.parentElement.parentElement.setAttribute('data-date', '');

    });
    // ---------------------------------------------------------------------
    picker[t].querySelector('.div_pick_month').addEventListener('click', (e) => {
        e.currentTarget.children[0].focus();
    });
    picker[t].querySelector('.div_pick_day').addEventListener('click', (e) => {
        e.currentTarget.children[0].focus();
    });
    picker[t].querySelector('.div_pick_year').addEventListener('click', (e) => {
        e.currentTarget.children[0].focus();
    });
}