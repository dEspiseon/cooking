/* кнопка Заказать делает Плавный скролл на каталог */

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("catalog").scrollIntoView({behavior: "smooth"})
};

/* Навигация делает плавный скролл */

const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    };
}

/* В печенье кнопка заказать делает скролл на обратную связь */

const buttons = document.querySelectorAll(".catalog-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    };
}

/* Изменение валюты и пересчет */

const prices = document.getElementsByClassName("catalog-item-price")
document.getElementById("change-currency").onclick = function (e) {
    const currentСurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentСurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentСurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentСurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentСurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    };
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}

/* Валидация */

const cata = document.getElementById("cata");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [cata, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [cata, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ!");
    }

}