var a;
var x = document.querySelector('.counter');

function damatebulia(element) {
    if (a == 1) {
        element.querySelector('.domein-basket').style.display = "none"
        element.querySelector('.domein-is-in-basket').style.display = "flex"
        return a = 0;
    } else {
        element.querySelector('.domein-is-in-basket').style.display = "none"
        element.querySelector('.domein-basket').style.display = "block"
        return a = 1;
    }
};

function burgermenuopen() {
    // document.querySelector('.burger-btn').style = "display: none"
    document.querySelector('.search-container').style = "display: inline-block; margin-top: -140px; background-color: solid #FFFFFF; z-index: 2; opacity: 3;"
};


const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;
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



function burgeropen() {
    document.querySelector('.search-container').style = "display: block; position: absolute; opacity: 1; background-color: white; margin-top: -230px;";
}