


// ZOEKMENU SHOW EN HIDE

var searchButton = document.querySelector('section.searching button.open_searchbox');
var form = document.querySelector('section.searching form');
var backArrow = document.querySelector('section.searching div button:first-of-type');

function openSearchBox() {
  form.classList.toggle('toon_searchbox');
}

searchButton.addEventListener("click", openSearchBox);
backArrow.addEventListener("click", openSearchBox);



// FOOTER UITKLAP MENU'S

var footerBoodschappen = document.querySelector('h4:nth-of-type(1)');
var footerBoodschappenArrowSvg = document.querySelector('h4:nth-of-type(1) svg');
var footerBoodschappenArrowPath = document.querySelector('h4:nth-of-type(1) path');
var footerBoodschappenUl = document.querySelector('section.root_links ul:nth-of-type(1)');

footerBoodschappen.addEventListener('click', inEnUitklappenBoodschappen);

function inEnUitklappenBoodschappen() {
  footerBoodschappen.classList.toggle('change_first_footer_header');
  footerBoodschappenArrowSvg.classList.toggle('change_first_arrow_svg');
  footerBoodschappenArrowPath.classList.toggle('change_first_arrow_path');
  footerBoodschappenUl.classList.toggle('change_first_ul');
}
