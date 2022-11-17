let star = "*";
let body = document.body

for (let i = star; i.length != 6; ) {
  console.log(i);
  document.write(`<h1>${i}</h1>`);
  if (i.length == 1) {
    body.firstElementChild.nextElementSibling.style.color= 'red'
  } if (i.length == 2) {
    body.firstElementChild.nextElementSibling.nextElementSibling.style.color= 'orange'
  } if (i.length == 3) {
    body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.color= 'yellow'
  } if (i.length == 4) {
    body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color= 'green'
  } if (i.length == 5) {
    body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color= 'blue'
  }
  i += star;
}
