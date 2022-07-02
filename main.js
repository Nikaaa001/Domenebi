var a;
var b;

// domeinsfilter
const btns = document.querySelectorAll('.checkboxes');
const storeProducts = document.querySelectorAll('.gijashvili-domeins-container');
// domeinsfilter

//priceslider
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 50;
//priceslider

//priceslider2
const rangeInput2 = document.querySelectorAll(".range-input2 input"),
    priceInput2 = document.querySelectorAll(".price-input2 input"),
    range2 = document.querySelector(".slider2 .progress2");
let priceGap2 = 1;
//priceslider2

//counter
let counter = document.querySelector('.counter');
let count = 0;
//counter

// sort
var c;
const inputBtn = document.querySelector('.input-sort-mob-cont1');
const dropDown = document.querySelector('.sort-mob-img');
const dropDownAct = document.querySelector('.drop-down-act');
const dropMenu = document.querySelector('.sort-menu');
// sort


//domeinsfilter

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        storeProducts.forEach((product) => {
            if (filter === 'all') {
                product.style.display = 'flex'
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = 'flex'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

//domeinsfilter


//inbasket
function damatebulia(element) {
    if (a == 1) {
        element.querySelector('.domein-basket').style.display = "none"
        element.querySelector('.domein-is-in-basket').style.display = "flex"
        count++
        counter.textContent = `${count}`
        console.log(count)
        return a = 0;
    } else {
        element.querySelector('.domein-is-in-basket').style.display = "none"
        element.querySelector('.domein-basket').style.display = "block"
        return a = 1;
    }
};
//inbasket


// filtris gaxsna
function filteropen() {
    document.querySelector('.search-container').style = "display: block; position: absolute; background-color: #FFFFFF; width: 375px"
    document.querySelector('.search-container__inner').style = "width: 370px"
    return b = 1;
}
// filtris gaxsna


// filtris dacurva
function filterclose() {
    document.querySelector('.search-container').style = "display: none;";
    return b = 0;
}
// filtris dacurva


// Price Filter
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
// Price Filter


// Symbols Filter
priceInput2.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice2 = parseInt(priceInput2[0].value),
            maxPrice2 = parseInt(priceInput2[1].value);

        if ((maxPrice - minPrice2 >= priceGap2) && maxPrice2 <= rangeInput2[1].max) {
            if (e.target.className === "input-min2") {
                rangeInput2[0].value = minPrice2;
                range2.style.left = ((minPrice2 / rangeInput2[0].max) * 100) + "%";
            } else {
                rangeInput2[1].value = maxPrice2;
                range2.style.right = 100 - (maxPrice2 / rangeInput2[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput2.forEach(input => {
    input.addEventListener("input", e => {
        let minVal2 = parseInt(rangeInput2[0].value),
            maxVal2 = parseInt(rangeInput2[1].value);
        if ((maxVal2 - minVal2) < priceGap2) {
            if (e.target.className === "range-min2") {
                rangeInput2[0].value = maxVal2 - priceGap2
            } else {
                rangeInput2[1].value = minVal2 + priceGap2;
            }
        } else {
            priceInput2[0].value = minVal2;
            priceInput2[1].value = maxVal2;
            range2.style.left = ((minVal2 / rangeInput2[0].max) * 100) + "%";
            range2.style.right = 100 - (maxVal2 / rangeInput2[1].max) * 100 + "%";
        }
    });
});
// Symbols Filter

// sort
function sortopen() {
    if (c == 1) {
        dropDown.style.display = "block"
        dropDownAct.style.display = "none"
        dropMenu.style.display = "none"
        return c = 0;
    } else {
        dropDown.style.display = "none"
        dropDownAct.style.display = "block"
        dropMenu.style.display = "block"
        return c = 1;
    }
}
// sort