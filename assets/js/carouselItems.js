
function createCarouselElement(product) {
  var { id, title, tags, price, image } = product;
  var tagsString = tags.reduce((acc, currentTag) => `${acc} #${currentTag}`, '');
  return `
  <div data-order=${id} class="card">
      <div class="card-body">
          <div class="card-actions">
              <svg id="favorite-filled" width="2.5vh" height="2.5vh" viewBox="0 0 16 16">
                  <g id="FavoriteOutlined16" stroke="none" strokeWidth="1" fill={color}
                      fillRule="evenodd">
                      <path
                          d="M8.12204619,2.65249118 C8.82172069,1.85371296 9.72946073,1.39867031 11.0018315,1.39867031 C13.4466642,1.39867031 15.1195133,2.98205009 15.1195133,5.9988901 C15.1195133,6.05765207 15.1182902,6.11655168 15.1158543,6.17558281 C15.0374871,8.07473299 13.7489799,10.0099127 11.6670871,11.9304569 C10.9347083,12.6060756 10.1522645,13.2324706 9.36986664,13.7952267 C9.09590511,13.9922792 8.84118632,14.1675271 8.61201796,14.3190545 C8.47302612,14.4109567 8.37234469,14.4751895 8.31629939,14.5098062 L8.001,14.7045531 L7.68570061,14.5098062 L7.66339157,14.4958879 L7.6050871,14.4589695 C7.54269327,14.4191635 7.47072816,14.3724443 7.38998204,14.3190545 C7.16081368,14.1675271 6.90609489,13.9922792 6.63213336,13.7952267 C5.84973555,13.2324706 5.06729167,12.6060756 4.33491292,11.9304569 C2.25302009,10.0099127 0.964512928,8.07473299 0.886145719,6.17558281 C0.883709837,6.11655168 0.882486716,6.05765207 0.882486716,5.9988901 C0.882486716,2.98205009 2.55533581,1.39867031 5.00016845,1.39867031 C6.27253927,1.39867031 7.18027931,1.85371296 7.87995381,2.65249118 C7.9118325,2.68888524 7.95376898,2.74079183 8.001,2.80133352 C8.04823102,2.74079183 8.0901675,2.68888524 8.12204619,2.65249118 Z M8.66916876,12.8210488 C9.4145475,12.2849195 10.1598802,11.6882343 10.8534262,11.0484388 C12.7215294,9.32511531 13.855123,7.62259682 13.9168746,6.12610768 C13.9186327,6.08350283 13.9195133,6.0410976 13.9195133,5.9988901 C13.9195133,3.65999006 12.7982234,2.59867031 11.0018315,2.59867031 C10.093684,2.59867031 9.50670769,2.89291674 9.02472167,3.44317251 C8.8694473,3.62044034 8.31571269,4.40066839 8.48356801,4.17348695 L8.001,4.82661189 L7.51843199,4.17348695 C7.68628731,4.40066839 7.1325527,3.62044034 6.97727833,3.44317251 C6.49529231,2.89291674 5.90831597,2.59867031 5.00016845,2.59867031 C3.20377664,2.59867031 2.08248672,3.65999006 2.08248672,5.9988901 C2.08248672,6.0410976 2.08336731,6.08350283 2.08512537,6.12610768 C2.14687703,7.62259682 3.28047059,9.32511531 5.1485738,11.0484388 C5.84211983,11.6882343 6.5874525,12.2849195 7.33283124,12.8210488 C7.57335959,12.9940539 7.79776303,13.1490281 8.001,13.2843492 C8.20423697,13.1490281 8.42864041,12.9940539 8.66916876,12.8210488 Z"
                          id="🎨IconColor" fill={color} fillRule="nonzero"></path>
                  </g>
              </svg>
              <svg id="favorite-outline" width="2.5vh" height="2.5vh" viewBox="0 0 32 32">
                  <g id="FavoriteFilled32" stroke="none" strokeWidth="1" fill={color}
                      fillRule="evenodd">
                      <path
                          d="M16.3168804,5.63791065 C17.6503983,4.11550979 19.3769571,3.25 21.804884,3.25 C26.4748034,3.25 29.6602571,6.26508552 29.6602571,12.0388069 C29.6602571,12.1509604 29.6579225,12.2633857 29.6532726,12.3760716 C29.5031998,16.0129336 27.0248762,19.7350717 23.0172031,23.4321463 C21.6040301,24.7357971 20.0938521,25.9447886 18.5837547,27.0309579 C18.0550064,27.4112712 17.5634552,27.749461 17.1213132,28.0418078 C16.8534175,28.218942 16.659609,28.3425879 16.5521319,28.4089719 L16,28.75 L15.4478681,28.4089719 L15.4356079,28.4013624 L15.4053745,28.3824598 C15.3605463,28.3542645 15.3605463,28.3542645 15.293285,28.3114844 C15.1730865,28.2348002 15.0343771,28.1447512 14.8786868,28.0418078 C14.4365448,27.749461 13.9449936,27.4112712 13.4162453,27.0309579 C11.9061479,25.9447886 10.3959699,24.7357971 8.98279685,23.4321463 C4.97512378,19.7350717 2.49680018,16.0129336 2.34672741,12.3760716 C2.3420775,12.2633857 2.33974285,12.1509604 2.33974285,12.0388069 C2.33974285,6.26508552 5.52519662,3.25 10.195116,3.25 C12.6230429,3.25 14.3496017,4.11550979 15.6831196,5.63791065 C15.7625374,5.72857735 15.8749203,5.87004281 16,6.03304802 C16.1250797,5.87004281 16.2374626,5.72857735 16.3168804,5.63791065 Z"
                          id="🎨IconColor" fill={color} fillRule="nonzero"></path>
                  </g>
              </svg>
          </div>
          <div class="card-img">
              <img src="./assets/images/${image}" />
          </div>
          <div class="card-price">
              <span>${price}</span>
          </div>
          <div class="card-tags">
              <span>${tagsString}</span>
          </div>
          <div class="card-title">
              <span>${title}</span>
          </div>
      </div>
  </div>
  `;
}

function createGroupItem(group) {
  var { id, name, image } = group;
  return `
  <div class="group-container" id="group-${id}">
      <div id="${id}" class="circle" style="background-image: url('./assets/images/${image}');"></div>
      <div class="mini-circle"></div>
      <span>${name}</span>
  </div>
  `;
}

function actionGroups() {
  data.groups.forEach(({id}) => {
    document.getElementById(`group-${id}`).addEventListener('click', () => {
      carouselElements(id);
    });
  });
}

function carouselElements(currentGroup = null) {
  var carousel = document.getElementById('carrousel-items');
  const dataFiltered = currentGroup ? 
    data.products.filter((product) => product.groups.includes(currentGroup)) :
    data.products;
  var products = dataFiltered.reduce((acc, currentProduct) => `${acc} ${createCarouselElement(currentProduct)}`, '');
  carousel.innerHTML = products;
}

function groupElements() {
  var groups = document.getElementById('group-list');
  var items = data.groups.reduce((acc, currentItem) => `${acc} ${createGroupItem(currentItem)}`, '');
  groups.innerHTML = items;
  actionGroups();
}