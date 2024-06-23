let displayHomeEl = document.getElementById("displayHome")
let displayGuestEl = document.getElementById("displayGuest")
let plus1 = 0
let plus11 = 0

function add1(){
    plus1 += 1
    displayHomeEl.textContent = plus1
}
function add2(){
    plus1 += 2
    displayHomeEl.textContent = plus1
}
function add3(){
    plus1 += 3
    displayHomeEl.textContent = plus1
}

// function for the guest
function add11(){
    plus11 += 1
    displayGuestEl.textContent = plus11
}
function add22(){
    plus11 += 2
    displayGuestEl.textContent = plus11
}
function add33(){
    plus11 += 3
    displayGuestEl.textContent = plus11
}