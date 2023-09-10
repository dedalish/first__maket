let counterVal = 0,
    total = 1.15, 
    price = 0.05,
    max = Math.round(total / price),
    nft_count = 463;

function IncrementClick() {
    if (counterVal < max)
    updateDisplay(++counterVal);
}

function DecrementClick() {
    if(counterVal > 0) {
        updateDisplay(--counterVal);
    }
}

function setMax() {
    counterVal = max;
    updateDisplay(counterVal);
}

function updateDisplay(counterVal) {
    document.getElementById("count__id").innerHTML = counterVal;
}

function updateMint(nft_count) {
    document.getElementById("js-mint").innerHTML = nft_count;
}

function updateTotal(total) {
    document.getElementById("total-eth").innerHTML = total;
}

function mint() {
    if (nft_count - counterVal >= 0 && (total - (price * counterVal)).toFixed(3) >= 0) {
        nft_count = nft_count - counterVal;
        total = (total - (price * counterVal).toFixed(3)).toFixed(2);
        console.log(price * counterVal);
        updateMint(nft_count);
        updateTotal(total);
        max = Math.round(total / price);
    }
}
