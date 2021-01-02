


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

  //Boodschappen


  var footerBoodschappen = document.querySelector('footer h5:nth-of-type(1)');
  var footerBoodschappenArrowSvg = document.querySelector('footer h5:nth-of-type(1) svg');
  var footerBoodschappenArrowPath = document.querySelector('footer h5:nth-of-type(1) path');
  var footerBoodschappenUl = document.querySelector('section.root_links ul:nth-of-type(1)');

  footerBoodschappen.addEventListener('click', inEnUitklappenBoodschappen);

  function inEnUitklappenBoodschappen() {
    footerBoodschappen.classList.toggle('change_footer_header');
    footerBoodschappenArrowSvg.classList.toggle('change_arrow_svg');
    footerBoodschappenArrowPath.classList.toggle('change_arrow_path');
    footerBoodschappenUl.classList.toggle('change_ul');
  }


  //Allerhande

  var footerAllerhande = document.querySelector('h5:nth-of-type(2)');
  var footerAllerhandeArrowSvg = document.querySelector('h5:nth-of-type(2) svg');
  var footerAllerhandeArrowPath = document.querySelector('h5:nth-of-type(2) path');
  var footerAllerhandeUl = document.querySelector('section.root_links ul:nth-of-type(2)');

  footerAllerhande.addEventListener('click', inEnUitklappenAllerhande);

  function inEnUitklappenAllerhande() {
    footerAllerhande.classList.toggle('change_footer_header');
    footerAllerhandeArrowSvg.classList.toggle('change_arrow_svg');
    footerAllerhandeArrowPath.classList.toggle('change_arrow_path');
    footerAllerhandeUl.classList.toggle('change_ul');
  }


  //Services

  var footerServices = document.querySelector('h5:nth-of-type(3)');
  var footerServicesArrowSvg = document.querySelector('h5:nth-of-type(3) svg');
  var footerServicesArrowPath = document.querySelector('h5:nth-of-type(3) path');
  var footerServicesUl = document.querySelector('section.root_links ul:nth-of-type(3)');

  footerServices.addEventListener('click', inEnUitklappenServices);

  function inEnUitklappenServices() {
    footerServices.classList.toggle('change_footer_header');
    footerServicesArrowSvg.classList.toggle('change_arrow_svg');
    footerServicesArrowPath.classList.toggle('change_arrow_path');
    footerServicesUl.classList.toggle('change_ul');
  }


  //Albert Heijn

  var footerAlbertHeijn = document.querySelector('h5:nth-of-type(4)');
  var footerAlbertHeijnArrowSvg = document.querySelector('h5:nth-of-type(4) svg');
  var footerAlbertHeijnArrowPath = document.querySelector('h5:nth-of-type(4) path');
  var footerAlbertHeijnUl = document.querySelector('section.root_links ul:nth-of-type(4)');

  footerAlbertHeijn.addEventListener('click', inEnUitklappenAlbertHeijn);

  function inEnUitklappenAlbertHeijn() {
    footerAlbertHeijn.classList.toggle('change_footer_header');
    footerAlbertHeijnArrowSvg.classList.toggle('change_arrow_svg');
    footerAlbertHeijnArrowPath.classList.toggle('change_arrow_path');
    footerAlbertHeijnUl.classList.toggle('change_ul');
  }




// DETAILPAGINA EXTRA INFO UITKLAPMENU'S

  //Gebruik

var extraInfoGebruik = document.querySelector('section.extra_info h4:nth-of-type(1)');
var divGebruik = document.querySelector('section.extra_info div:nth-of-type(1)');
var arrowGebruik = document.querySelector('section.extra_info h4:nth-of-type(1) img');

extraInfoGebruik.addEventListener('click', inEnUitKlappenGebruik);

function inEnUitKlappenGebruik() {
  divGebruik.classList.toggle('uitgeklapt');
  arrowGebruik.classList.toggle('gedraaid');
}


  //Bewaren

var extraInfoBewaren = document.querySelector('section.extra_info h4:nth-of-type(2)');
var divBewaren = document.querySelector('section.extra_info div:nth-of-type(2)');
var arrowBewaren = document.querySelector('section.extra_info h4:nth-of-type(2) img');

extraInfoBewaren.addEventListener('click', inEnUitKlappenBewaren);

function inEnUitKlappenBewaren() {
  divBewaren.classList.toggle('uitgeklapt');
  arrowBewaren.classList.toggle('gedraaid');
}


  //Contactgegevens

var extraInfoContactgegevens = document.querySelector('section.extra_info h4:nth-of-type(3)');
var divContactgegevens = document.querySelector('section.extra_info div:nth-of-type(3)');
var arrowContactgegevens = document.querySelector('section.extra_info h4:nth-of-type(3) img');

extraInfoContactgegevens.addEventListener('click', inEnUitKlappenContactgegevens);

function inEnUitKlappenContactgegevens() {
  divContactgegevens.classList.toggle('uitgeklapt');
  arrowContactgegevens.classList.toggle('gedraaid');
}
