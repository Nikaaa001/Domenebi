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
let priceGap = 1000;
//priceslider


//counter
let counter = document.querySelector('.counter');
let count = 0;
//counter


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
    document.querySelector('.search-container').style = "display: block; position: absolute; background-color: #FFFFFF;"
    return b = 1;
}
// filtris gaxsna


// filtris dacurva
function filterclose() {
    document.querySelector('.search-container').style = "display: none;";
    return b = 0;
}
// filtris dacurva


// 
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