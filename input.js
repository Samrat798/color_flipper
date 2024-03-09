const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const input = document.querySelector('.input-color');

btn.addEventListener('click', function () {
  // e.preventDefault();
  let inputColor = input.value;
  // console.log(inputColor);
  document.body.style.backgroundColor = inputColor;
  color.innerHTML = inputColor;
});
