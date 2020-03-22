$(document).ready(function () {
    let loading_img = document.createElement('img');
    loading_img.src = "https://miro.medium.com/max/646/1*TW6dDGBgPuZyL19TVa2kUQ.gif";
    loading_img.classList.add("imgloading");
    $(".test").append(loading_img);
    currencies();
    inputstart();
});

function inputstart() {
    $(".mln").on("click", function () {
        var value = $("#search").val().toLowerCase();
        $(".test .card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#search").on("keydown", KeyCheck);
    $("#search").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".mln").click();
        }
    });
}

var counter = 0;
var checkboxarr = [];
var arraycounter = 0;
var arrforarraycounter = [];
var coins = [];
var coinsvaluearray = [];

function KeyCheck(event) {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
            var value = $("#search").val().toLowerCase();
            $(".test .card").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
            break;
        default:
            break;
    }
}

$("#home").on('click', function () {
    if (localStorage.getItem('cardarray')) {
        localStorage.clear();
        coins = [];
        checkboxarr = [];
    }
    console.clear();
    $(".test").html("");
    let loading_img = document.createElement('img');
    loading_img.src = "https://miro.medium.com/max/646/1*TW6dDGBgPuZyL19TVa2kUQ.gif";
    loading_img.classList.add("imgloading");
    $(".test").append(loading_img);
    currencies();
});

$("#live_reports").on('click', function () {
    if (localStorage.getItem('cardarray')) {
        // if (JSON.parse(localStorage.getItem('cardarray')).length > 4) {
        $(".test").html("");
        loadreportsfirstrun();
        // } else {
        //     alert("You Have to Pick at Least 5 Coins!");
        // }
    } else {
        alert("Coins Was Not Picked !");
    }
});

$("#about").on('click', function () {
    $(".test").html("");
    let div = $(`<div class="col-md-12 text-center fs">Eliran Biton</div>`);
    let div2 = $(`<div class="col-md-12 text-center mt-3">The project is importing coins from web-api, there is a button of more info
    under each coin and when you press it you will be provided with information about the specific coin.
    you have to option to choose up to 5 coins after that you can view their rate changes of every 2 seconds in a real time chart.</div>`);
    let div3 = $(`<img class="mt-3" src="https://static.thenounproject.com/png/17241-200.png" width="300" height="300"/>`);
    div.append(div2);
    div.append(div3);
    $(".test").append(div);
});

function currencies() {
    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/list",
        type: "GET",
        data: {},
        success: function (result) {
            console.log(result);
            let currencies_arr = result;
            createcard(currencies_arr);
        },
        error: function (xhr) {
            console.log("Error: ", xhr);
        }
    });
}

function createcard(currencies) {
    $(".test").html("");
    let parallex_scrolling = document.createElement('div');
    parallex_scrolling.classList.add("parallax");
    $(".test").append(parallex_scrolling);
    for (let i = 0; i < 100; i++) {
        createcard2(currencies[i]);
    }
}

function createcard2(currencies) {
    console.log(currencies);

    let div = document.createElement('div');
    div.classList.add("col-md-4", "card");
    div.style.width = "18rem";
    div.id = "false";

    let div_card_body = document.createElement("div");
    div_card_body.classList.add("card-body");

    let h4 = document.createElement("h4");
    h4.classList.add("card-title");
    h4.innerHTML = currencies.id;

    // let toggle_switch = document.createElement("div");
    // toggle_switch.classList.add("custom-control", "custom-switch");

    // let input_in_toggle = document.createElement("input");
    // input_in_toggle.type = "checkbox";
    // input_in_toggle.classList.add("custom-control-input");
    // input_in_toggle.id = `customSwitches${counter}`;

    // let label_in_toggle = document.createElement("label");
    // label_in_toggle.classList.add("custom-control-label");
    // label_in_toggle.setAttribute("for", `customSwitches${counter}`);
    // label_in_toggle.innerHTML = "";
    // label_in_toggle.addEventListener("click", function () {
    //     checkboxclick(div);
    // });

    let labelSwitch = document.createElement("label");
    labelSwitch.classList.add("switch");

    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = `customSwitches${counter}`;

    let slider = document.createElement("span");
    slider.classList.add("slider", "round");
    slider.addEventListener("click", function () {
        checkboxclick(div, col_md_12_inner_div);
    });

    let col_md_12_inner_div = document.createElement("div");
    col_md_12_inner_div.classList.add("card-subtitle", "mt-3");
    col_md_12_inner_div.innerHTML = currencies.symbol;

    let div_btn = document.createElement("div");
    div_btn.classList.add("btn", "btn-primary", "mt-3", "ajaxcall");
    div_btn.setAttribute("data-toggle", "collapse");
    div_btn.setAttribute("data-target", `#multiCollapseExample${counter}`);
    div_btn.setAttribute("aria-expanded", "false");
    div_btn.setAttribute("aria-controls", `multiCollapseExample${counter}`);
    div_btn.innerHTML = "More Info";
    div_btn.addEventListener("click", function () {
        moreinfo(currencies.id);
    });

    let div_more_info = document.createElement('div');
    div_more_info.classList.add('panel');
    div_more_info.id = `${currencies.id}btn`;

    // let div_collapse = document.createElement("div");
    // div_collapse.classList.add("collapse", "multi-collapse");
    // div_collapse.id = `multiCollapseExample${counter}`;

    // let div_collapse_inner_div = document.createElement("div");
    // div_collapse_inner_div.classList.add("card", "card-body", "innerdivtext");

    div.appendChild(div_card_body);
    div_card_body.appendChild(h4);
    div_card_body.appendChild(labelSwitch);
    labelSwitch.appendChild(inputCheckbox);
    labelSwitch.appendChild(slider);

    // div_card_body.appendChild(toggle_switch);
    // toggle_switch.appendChild(input_in_toggle);
    // toggle_switch.appendChild(label_in_toggle);

    div_card_body.appendChild(col_md_12_inner_div);
    div_card_body.appendChild(div_btn);
    div_card_body.appendChild(div_more_info);
    // div_card_body.appendChild(div_collapse);
    // div_collapse.appendChild(div_collapse_inner_div);

    $(".test").append(div);

    counter++;
}

function checkboxclick(e, card_title) {
    if (e.id == "true") {
        e.id = "false";
        for (let i = 0; i < checkboxarr.length; i++) {
            if (e.id == checkboxarr[i].id) {
                console.log(i);
                checkboxarr.splice(i, 1);
                coins.splice(i, 1);
                e.classList.remove(card_title.innerHTML);
                e.removeAttribute("name");
                localStorage.setItem('cardarray', JSON.stringify(coins));
                // arraycounter--;
                // arrforarraycounter.splice(i,1);
                // e.classList.remove(`counter${arraycounter}`);
            }
        }
    } else {
        e.id = "true";
        e.classList.add(card_title.innerHTML);
        e.setAttribute('name', card_title.innerHTML);
        checkboxarr.push(e);
        coins.push(card_title.innerHTML);
        localStorage.setItem('cardarray', JSON.stringify(coins));
        if (checkboxarr.length == 6) {
            checkboxarr.splice(checkboxarr.length - 1, 1);
            coins.splice(coins.length - 1, 1);

            $(".popup").html("");
            $(".gray").show();
            $(".popup").show();
            // $(".popup").html(checkboxarr);
            let popup = document.querySelector(".popup");

            let h1 = document.createElement("h1");
            h1.innerHTML = "Choose Coin To Switch With";
            h1.classList.add("mln2");

            let i = document.createElement("i");
            i.classList.add("fa", "fa-window-close");
            i.setAttribute("aria-hidden", "true");
            i.addEventListener("click", function () {
                closepopup(e);
            });

            let input = document.createElement("input");
            input.type = "number";
            input.classList.add("arraychecker");
            input.style.display = 'none';
            input.min = "0";
            input.max = "4";

            // let span = document.createElement("span");
            // span.innerHTML = " => Choose Coin Here";

            let namecounter = 0;

            for (let i = 0; i < coins.length; i++) {
                let div = document.createElement('div');
                div.classList.add("fs", "mln3", "popuphover");
                div.innerHTML = coins[i];
                div.setAttribute('name', `${namecounter}`);
                div.addEventListener('click', function () {
                    let alldivs = $('.popuphover')
                    for (let i = 0; i < alldivs.length; i++) {
                        alldivs[i].style.backgroundColor = "white";
                    }
                    div.style.backgroundColor = "steelblue";
                    input.value = div.getAttribute("name");
                });
                popup.append(div);
                popup.append(input);
                // popup.append(span);
                namecounter++;
            }

            let savebtn = document.createElement("div");
            savebtn.classList.add("btn", "btn-success", "save");
            savebtn.innerText = "Save Changes";
            savebtn.addEventListener("click", function () {
                if (input.value == "") {
                    alert("You Have To Choose A Coin OR Abort Your Action!");
                } else {
                    savechanges(input.value, e, card_title);
                }
            });

            popup.prepend(h1);
            popup.prepend(i);
            popup.appendChild(savebtn);
            document.body.style.overflowY = "hidden";
        }
        // arrforarraycounter.push(`counter${arraycounter}`);
        // arraycounter++;
    }
    // if (checkboxarr === undefined || checkboxarr.length == 0) {
    //     arraycounter = 0;
    // }
    // console.log(arrforarraycounter);
    console.log(e);
    console.log(coins);
    console.log(checkboxarr);
}


function moreinfo(currencey_id) {

    document.getElementById(`${currencey_id}btn`).classList.toggle('show');
    document.getElementById(`${currencey_id}btn`).classList.toggle('active');

    if (localStorage.getItem(`${currencey_id}`) === null) {
        console.log("call ajax");

        let imgg = document.createElement("img");
        imgg.src = "https://miro.medium.com/max/646/1*TW6dDGBgPuZyL19TVa2kUQ.gif";

        $(`#${currencey_id}btn`).html(imgg);

        $.ajax({
            url: `https://api.coingecko.com/api/v3/coins/${currencey_id}`,
            type: "GET",
            data: {},
            success: function (result) {
                console.log(result);

                infoCoin = {
                    id: result.id,
                    img: result.image.large,
                    priceUsd: result.market_data.current_price.usd,
                    priceEur: result.market_data.current_price.eur,
                    priceIls: result.market_data.current_price.ils
                }

                let wrapper = document.createElement("div");

                let img = document.createElement("img");
                img.classList.add("col-md-12");
                img.src = infoCoin.img;
                img.height = "400";

                let euro = document.createElement("div");
                euro.classList.add("col-md-12");
                euro.innerHTML = "Euro: " + infoCoin.priceEur + "€";

                let dollar = document.createElement("div");
                dollar.classList.add("col-md-12");
                dollar.innerHTML = "Dollar: " + infoCoin.priceUsd + "$";

                let ils = document.createElement("div");
                ils.classList.add("col-md-12");
                ils.innerHTML = "ILS: " + infoCoin.priceIls + "₪";

                wrapper.appendChild(img);
                wrapper.appendChild(euro);
                wrapper.appendChild(dollar);
                wrapper.appendChild(ils);

                localStorage.setItem(`${infoCoin.id}`, JSON.stringify(infoCoin));

                $(`#${currencey_id}btn`).html(wrapper);
            },
            error: function (xhr) {
                console.log("Error: ", xhr);
            }
        });
    }

    if (localStorage.getItem(`${currencey_id}`) !== null) {
        console.log("not ajax call");
        setTimeout(() => {
            console.log("Ls Cleaned");
            localStorage.removeItem(`${currencey_id}`);
            $(`#${currencey_id}btn`).html("");
        }, 5000);
    }


}

function closepopup(e) {
    if (JSON.parse(localStorage.getItem('cardarray').length > 4)) {
        e.id = "false";
        e.classList.remove(e.attributes.name.nodeValue);
        e.removeAttribute("name");
        e.firstChild.children[1].children[0].checked = false;
        closepopuptext();
    } else {
        closepopuptext();
    }
    // location.reload();
}

function closepopup2(element, card_title) {
    if (JSON.parse(localStorage.getItem('cardarray').length > 4)) {
        element.id = "true";
        element.classList.add(element.attributes.name.nodeValue);
        element.setAttribute('name', card_title);
        element.firstChild.children[1].children[0].checked = true;
        closepopuptext();
    } else {
        closepopuptext();
    }
    // location.reload();
}

function closepopuptext() {
    $(".gray").hide();
    $(".popup").hide();
    $(".popup").html("");
    document.body.style.overflowY = "auto";
}

function savechanges(input_value, element, card_title) {
    console.log(input_value);
    console.log(checkboxarr);
    for (let i = 0; i < checkboxarr.length; i++) {
        if (checkboxarr[input_value].attributes.name.nodeValue == coins[i]) {
            console.log(checkboxarr[input_value]);
            if (checkboxarr[input_value].id == "true") {
                checkboxarr[input_value].id = "false";
                checkboxarr[input_value].classList.remove(checkboxarr[input_value].attributes.name.nodeValue);
                checkboxarr[input_value].removeAttribute("name");
                checkboxarr[input_value].firstChild.children[1].children[0].checked = false;
            }
            checkboxarr.splice(input_value, 1);
            coins.splice(input_value, 1);
            // arrforarraycounter.push(`counter${arraycounter}`);
            // e.classList.add(`counter${arraycounter}`)
            checkboxarr.push(element);
            coins.push(card_title.innerHTML);
            // arraycounter++;
            alert("Element " + i + " Has Been Removed!");
            closepopup2(element, card_title.innerHTML);
            localStorage.setItem('cardarray', JSON.stringify(coins));
            // location.reload();
        }
    }
    console.log(coins);
    console.log(checkboxarr);
    // console.log(arrforarraycounter);
}

function loadreportsfirstrun() {
    var lspast = localStorage.getItem('cardarray');

    lspast2 = lspast.replace(/["']/g, "");

    console.log(lspast2);

    var lspast3 = lspast2.replace(/[\[\]']+/g, '');
    var lspast4 = lspast3.toUpperCase();
    console.log(lspast4);

    var coinsarray = lspast4.split(',');
    console.log(coinsarray);

    $.ajax({
        url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${lspast4}&tsyms=USD`,
        type: "GET",
        data: {},
        success: function (result) {
            console.log(result);
            if(result.Response == "Error"){
                alert("None of The Coins you Choose Are Working!");
                $("#home").click();
            }else{
                loadreports(result);
            }
        },
        error: function (xhr) {
            console.log("Error: ", xhr);
        }
    });
}

function loadreports(res) {
    var div = $('<div id="chartContainer" style="height: 300px; width: 100%;"></div>');
    $(".test").append(div);

    var dataPoints1 = [];
    var dataPoints2 = [];
    var dataPoints3 = [];
    var dataPoints4 = [];
    var dataPoints5 = [];

    var lspast = localStorage.getItem('cardarray');

    lspast2 = lspast.replace(/["']/g, "");

    console.log(lspast2);

    var lspast3 = lspast2.replace(/[\[\]']+/g, '');
    var lspast4 = lspast3.toUpperCase();
    console.log(lspast4);

    var coinsarray = lspast4.split(',');
    console.log(coinsarray);

    colors = ["red", "blue", "green", "black", "grey"];
    dataPoints = [];

    for (let i = 0; i < coinsarray.length; i++) {
        dataPoints.push([]);
    }

    var chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        title: {
            text: lspast2 + " to USD"
        },
        axisX: {
            title: "chart updates every 2 secs"
        },
        axisY: {
            prefix: "$",
            includeZero: false
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            fontSize: 22,
            fontColor: "dimGrey",
            itemclick: toggleDataSeries
        },
        data: []
    });

    let i = 0;
    let date = new Date();
    date.setHours(date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(), date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(), date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());

    $.each(res, function (key, value) {

        console.log("key: " + key + ", value:" + JSON.stringify(value));

        dataPoints[i].push({ x: date, y: value["USD"] });

        console.log(dataPoints);
        chart.options.data.push(
            {
                type: "line",
                name: key,
                color: colors[i],
                axisYType: "secondary",
                showInLegend: true,
                dataPoints:
                    dataPoints[i]

            }
        );

        i++;
    });

    chart.render();


    updateGraph(res, chart);
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
}



function updateGraph(res, chart) {
    console.log(chart.options)
    let i = 0;
    let date = new Date();
    date.setHours(date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(), date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(), date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());

    $.each(res, function (key, value) {
        dataPoints[i].push({ x: date, y: value["USD"] });
        chart.options.data[i]["dataPoints"] = dataPoints[i];
        i++;
    });
    chart.render();
    console.log(chart)

    graphData(chart);
}

function graphData(chart) {
    var lspast = localStorage.getItem('cardarray');

    lspast2 = lspast.replace(/["']/g, "");

    console.log(lspast2);

    var lspast3 = lspast2.replace(/[\[\]']+/g, '');
    var lspast4 = lspast3.toUpperCase();
    console.log(lspast4);

    var coinsarray = lspast4.split(',');
    console.log(coinsarray);
    $.ajax({
        url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${lspast4}&tsyms=USD`,
        type: "GET",
        data: {},
        success: function (result) {
            console.log(result);

            let delay = setTimeout(() => {
                updateGraph(result, chart);
            }, 2000);
        },
        error: function (xhr) {
            console.log("Error: ", xhr);
        }
    });
}