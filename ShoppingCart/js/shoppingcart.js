/*
let favIcons = Array.from(document.getElementsByClassName("fa-heart"));
for (let fav of favIcons) {
  fav.addEventListener("click", function () {
    if (fav.style.color == "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}
*/
function add(btn) {
  btn.previousElementSibling.value++;
  sumTot();
}
function substraction(btn) {
  if (btn.nextElementSibling.value > 0) {
    btn.nextElementSibling.value--;
    sumTot();
  }
}

function like(favIcon) {
  if (favIcon.style.color == "black") {
    favIcon.style.color = "red";
  } else {
    favIcon.style.color = "black";
  }
}
function deleteItem(delIcon) {
  delIcon.parentNode.remove();
  sumTot();
}
function sumTot() {
  var qte = Array.from(
    document.getElementsByClassName("QuantitySelector__CurrentQuantity")
  );
  var price = Array.from(document.getElementsByClassName("price"));
  var summ = 0;
  for (var i = 0; i < qte.length; i++) {
    summ += qte[i].value * price[i].innerHTML;
  }
  document.getElementById("total").innerHTML =
    "Shopping Bag Total : " + summ + "$";
}
