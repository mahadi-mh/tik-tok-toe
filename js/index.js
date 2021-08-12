let c = 1;

function attemptFill(e) {

    if (c <= 9) {
        if (c % 2 != 0) {
            document.getElementById(e.id).innerText = "X";
        } else {
            document.getElementById(e.id).innerText = "0";
        }
        c++;
        if (checkWin()) {
            alert("You WIN")
            resetAll()
        } else { "You Loss" }
    } else {
        resetAll()
        alert("Match Draw")

    }

}

function resetAll() {
    location.reload();
}

function checkWin() {
    if (checkCondition('div1', 'div2', 'div3') || checkCondition('div1', 'div5', 'div9') || checkCondition('div1', 'div4', 'div7') || checkCondition('div3', 'div6', 'div9') || checkCondition('div3', 'div5', 'div7') || checkCondition('div7', 'div8', 'div9') || checkCondition('div4', 'div5', 'div6') || checkCondition('div2', 'div5', 'div8'))
        return true;
}

function checkCondition(div1, div2, div3) {


    if (getData(div1) != "" && getData(div2) != "" && getData(div3) != "" && getData(div1) == getData(div2) && getData(div2) == getData(div3))

        return true
}

function getData(div) {
    return document.getElementById(div).innerText;
}