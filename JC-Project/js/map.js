var fadetime = 0;
var selected = false;
var mapColor1 = null;
var mapColor2 = null;
var lat = 36.316462;
var lng = -82.352421;
var map;
var shopping;
var special;
var services;
var bars;
var food;
var rec;
var parking;
var locations;
var ids = [$('#shopping'), $('#special'), $('#services'), $('#bars'), $('#food'), $('#rec'), $('#parking')]; //remember to eventually add parking
var toggle = [false,false,false,false,false,false,false];
var count = 0;
var usedBars = false;

//show the map menu on startup
$(document).ready(function () {
  openClose();
  $('.mapinfo').click();
  $('.expand').data('open', true);
  count = 2;
});

//init function used to new up the map with initial settings
function initMap() {
        var jc = {lat: lat, lng: lng};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          disableDefaultUI: true,
          center: jc,
          clickableIcons: false,
          styles: [
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#555555"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "color": "#ffffff"
                },
                {
                  "weight": 1
                }
              ]
            }
            ],

        });
        map.setMapTypeId('roadmap');

        var imageBounds = {
            north: 36.320410000680331,
            south: 36.312237064559916,
            east: -82.34567485313415,
            west: -82.35653614686584,
          };

        shopping = new google.maps.GroundOverlay(
          'images/shopping.svg',
          imageBounds);

        special = new google.maps.GroundOverlay(
          'images/special.svg',
          imageBounds);

        services = new google.maps.GroundOverlay(
          'images/services.svg',
          imageBounds);

        bars = new google.maps.GroundOverlay(
          'images/bars.svg',
          imageBounds);

        food = new google.maps.GroundOverlay(
          'images/food.svg',
          imageBounds);

        rec = new google.maps.GroundOverlay(
          'images/rec.svg',
          imageBounds);

        parking = new google.maps.GroundOverlay(
          'images/parking.svg',
          imageBounds);

        locations = [shopping, special, services, bars, food, rec, parking]; //remember to add parking

        for (var i = locations.length - 1; i >= 0; i--) {
          locations[i].setMap(map);
        }
        createShopping();
        createSpecial();
        createServices();
        createBars();
        createFood();
        createRec();
}

//Building Constructor that also hands the click events
function Building(cords, color1, color2, html, index) {
  var self = this;
  this.coordinates = cords;
  this.polygon = new google.maps.Polygon({
    paths: this.coordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.0,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.0
      });
  this.polygon.setMap(map);
  this.listener = google.maps.event.addListener(this.polygon, 'click', function (event) {
        if (toggle[index] === false) {
          return;
        }
        selected = true;
        openClose();
        $('.expand').data('open', true);
        for (var i = toggle.length - 1; i >= 0; i--) {
          toggle[i] = false;
        }
        $('.mapinfo').click();
        $('.mapContent').html(html);
                    //background, Elements
        switchMapColor(color1, color2);
  });
}

//create the map
initMap();

//create shopping buildings
function createShopping() {

  var cords = [
          {lat: 36.316649, lng: -82.352106},
          {lat: 36.316617, lng: -82.352173},
          {lat: 36.316994, lng: -82.352443},
          {lat: 36.317025, lng: -82.352376}
        ];
  atomikComic = new Building(cords, '#000000','#FFC20F', atomikHTML(), 0);

  cords = [
          {lat: 36.316072, lng: -82.352751},
          {lat: 36.316004, lng: -82.352694},
          {lat: 36.315912, lng: -82.352863},
          {lat: 36.315998, lng: -82.352885}
        ];
  littleChiago = new Building(cords, '#fdfdfd', '#252223', genericHTML('littlechiago.jpg', 'https://goo.gl/maps/kzLFdFovyuN2'), 0);

  cords = [
          {lat: 36.316583, lng: -82.352492},
          {lat: 36.316488, lng: -82.352698},
          {lat: 36.316652, lng: -82.352816},
          {lat: 36.316748, lng: -82.352611}
        ];
   mels = new Building(cords, '#FFF', '#7d80c2', genericHTML('mels.svg', 'https://goo.gl/maps/tp6XG47rrrJ2'), 0);

   cords = [
          {lat: 36.316747, lng: -82.352612},
          {lat: 36.316500, lng: -82.352433},
          {lat: 36.316543, lng: -82.352338},
          {lat: 36.316794, lng: -82.352515}
        ];
  thefouledanchor = new Building(cords, '#000', '#FFF', genericHTML('thefouledanchor.svg', 'https://goo.gl/maps/ZK7PTGsJigG2'), 0);
}

//create Special Buildings
function createSpecial() {
  var cords = [
          {lat: 36.316423, lng: -82.351494},
          {lat: 36.316386, lng: -82.351576},
          {lat: 36.316628, lng: -82.351751},
          {lat: 36.316665, lng: -82.351674}
        ];
  willowTree = new Building(cords, '#f4f4f4', '#473556', willowHTML(), 1);

  cords = [
          {lat: 36.316749, lng: -82.352610},
          {lat: 36.316872, lng: -82.352699},
          {lat: 36.316961, lng: -82.352507},
          {lat: 36.316837, lng: -82.352418}
        ];
  fizz = new Building(cords, '#0e99d3', '#65666a', genericHTML('fizz.png', 'https://goo.gl/maps/Mg3KL4aiMJK2'), 1);
}

//create service buildings
function createServices() {
  var cords = [
          {lat: 36.316154, lng: -82.351737},
          {lat: 36.316220, lng: -82.351773},
          {lat: 36.316080, lng: -82.352100},
          {lat: 36.316029, lng: -82.352045}
        ];
  crownCutz = new Building(cords, '#FFF','#d82206', genericHTML('crown.png', 'https://goo.gl/maps/arDVS2UyzYL2'), 2);

  cords = [
          {lat: 36.315511, lng: -82.352023},
          {lat: 36.315462, lng: -82.352104},
          {lat: 36.315610, lng: -82.352247},
          {lat: 36.315660, lng: -82.352166}
        ];
  urbane = new Building(cords, '#000','#FFF', genericHTML('urban.png', 'https://goo.gl/maps/v6MGE2ueJnD2'), 2);

  cords = [
          {lat: 36.316794, lng: -82.352512},
          {lat: 36.316545, lng: -82.352330},
          {lat: 36.316588, lng: -82.352238},
          {lat: 36.316837, lng: -82.352419}
        ];
  csmcculloughs = new Building(cords, '#FFF', '#000', genericHTML('csmcculloughs.jpg', 'https://goo.gl/maps/WE3nbsuLoCF2'), 2);
}

//create bar buildings
function createBars() {
  var cords = [
          {lat: 36.315633, lng: -82.351824},
          {lat: 36.315571, lng: -82.351925},
          {lat: 36.315721, lng: -82.352067},
          {lat: 36.315782, lng: -82.351968}
        ];
  lit = new Building(cords, '#FFF','#000', genericHTML('lit.jpg', 'https://goo.gl/maps/Fobby9niwJ12'), 3);

  cords = [
          {lat: 36.315486, lng: -82.352475},
          {lat: 36.315267, lng: -82.352262},
          {lat: 36.315144, lng: -82.352449},
          {lat: 36.315366, lng: -82.352663}
        ];
  tipton = new Building(cords, '#015737', '#e1e1d2', genericHTML('tipton.png', 'https://goo.gl/maps/bCYSGXgWfnw'), 3);

  cords = [
          {lat: 36.316853, lng: -82.351634},
          {lat: 36.316766, lng: -82.351821},
          {lat: 36.317153, lng: -82.352098},
          {lat: 36.317239, lng: -82.351911}
        ];
  numans = new Building(cords, '#1b5e20', '#FFF', genericHTML('numans.png', 'https://goo.gl/maps/VBPASaBYxW42'), 3);

  cords = [
          {lat: 36.317171, lng: -82.351633},
          {lat: 36.317138, lng: -82.351714},
          {lat: 36.317110, lng: -82.351698},
          {lat: 36.317077, lng: -82.351771},
          {lat: 36.316868, lng: -82.351638},
          {lat: 36.316932, lng: -82.351482}
  ];
  capones = new Building(cords, '#FFF', '#000', genericHTML('capones.gif', 'https://goo.gl/maps/kpWAwGpUBbU2'), 3);

  cords = [
          {lat: 36.317234, lng: -82.351478},
          {lat: 36.317203, lng: -82.351554},
          {lat: 36.316951, lng: -82.351395},
          {lat: 36.316983, lng: -82.351320}
        ];
  hideaway = new Building(cords, '#050409', '#FFF', genericHTML('hideaway.jpg', 'https://goo.gl/maps/D1htjccL2zR2'), 3);
}

//create food buildings
function createFood() {
  var cords = [
          {lat: 36.316860, lng: -82.352432},
          {lat: 36.316588, lng: -82.352238},
          {lat: 36.316616, lng: -82.352175},
          {lat: 36.316890, lng: -82.352370}
        ];
  holyTaco = new Building(cords, '#ffa42e', '#972d20', tacoHTML(), 4);

  cords = [
          {lat: 36.316058, lng: -82.352776},
          {lat: 36.316006, lng: -82.352869},
          {lat: 36.316033, lng: -82.352900},
          {lat: 36.316157, lng: -82.352859}
        ];
  koreanTacoHouse = new Building(cords, '#2B355B','#FFF', koreanTacoHouseHTML(), 4);

  cords = [
          {lat: 36.315242, lng: -82.352240},
          {lat: 36.315330, lng: -82.352094},
          {lat: 36.315417, lng: -82.352175},
          {lat: 36.315461, lng: -82.352103},
          {lat: 36.315509, lng: -82.352149},
          {lat: 36.315469, lng: -82.352216},
          {lat: 36.315579, lng: -82.352322},
          {lat: 36.315486, lng: -82.352475}
        ];  
  label = new Building(cords, '#8ea185', '#f9faf8', genericHTML('label.png', 'https://goo.gl/maps/CLQUYGh86LN2'), 4);

  cords = [
          {lat: 36.317172, lng: -82.351634},
          {lat: 36.317138, lng: -82.351716}, 
          {lat: 36.317282, lng: -82.351806},
          {lat: 36.317316, lng: -82.351725}
        ];
  sharps = new Building(cords, '#2E2E2E', '#FFF', genericHTML('sharps.svg', 'https://goo.gl/maps/sDawCPTQkTk'), 4);

  cords = [
          {lat: 36.316500, lng: -82.352433},
          {lat: 36.316584, lng: -82.352493}, 
          {lat: 36.316489, lng: -82.352699},
          {lat: 36.316404, lng: -82.352638}
        ];
  freibergs = new Building(cords, '#272727', '#d4ad54', genericHTML('freibergs.png', 'https://goo.gl/maps/fi4x67MLSMP2'), 4);

  cords = [
          {lat: 36.316240, lng: -82.351906},
          {lat: 36.316148, lng: -82.352197}, 
          {lat: 36.316376, lng: -82.352412},
          {lat: 36.316501, lng: -82.352088}
        ];
  sabores = new Building(cords, '#cc9999', "#FFF", genericHTML('sabores.svg', 'https://goo.gl/maps/shGCbegi4gy'), 4);
}

//create Recreation buildings
function createRec() {
  var cords = [
          {lat: 36.316568, lng: -82.351890},
          {lat: 36.316539, lng: -82.351957},
          {lat: 36.316296, lng: -82.351787},
          {lat: 36.316325, lng: -82.351721}
        ];
  energyFitness = new Building(cords,'#0d0d0d','#78be68', energyFitnessHTML(), 5);

  cords = [
          {lat: 36.315512, lng: -82.352022},
          {lat: 36.315572, lng: -82.351927},
          {lat: 36.315720, lng: -82.352069},
          {lat: 36.315660, lng: -82.352165}
        ];
  yoga = new Building(cords, '#FFF','#75939e', genericHTML('yoga.svg', 'https://goo.gl/maps/AtBfnsQD64G2'), 5);

}

//Willow Tree Page HTML
function willowHTML() {
  html =  '<img class="wLogo" src="images/willow.png">' +
          '<h1 class="willow">COFFEHOUSE & MUSIC ROOM</h1>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/NRij2U6aTsF2" target="_blank"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Holy Taco Page HTML
function tacoHTML() {
  html =  '<div class="tContainer">' + 
          '<div class="lines"></div><span class="the"> The </span><div class="lines"></div>' +
          '</div>' +
          '<p class="tTitle">HOLY TACO</p>' +
          '<p class="tCantina">CANTINA</p>' + 
          '<p class="the2">Food <br> & <br> Drinks</p>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/71ApwVXtswP2" target="_blank"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Atomik Comik HTML
function atomikHTML() {
  html =  '<img class="aLogo" src="images/atomik.png">' +
          '<h1 class="aText">THE LARGEST COMIC SHOP IN TENNESSEE!</h1>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/TEPwzGMj2vy" target="_blank"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Korean Taco House HTML
function koreanTacoHouseHTML() {
  html =  '<img class="kTaco" src="images/korean.svg">' +
          '<img class="kTaco" src="images/butter.svg">' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/uPva9xTDGeJ2" target="_blank"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Energy Fitness HTML
function energyFitnessHTML() {
  html =  '<img class="kTaco" src="images/energy.png">' +
          '<p class="energyF">BE MORE.<br>DO MORE.</p>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/YiKs7TSVHQp" target="_blank"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//generic HTML
function genericHTML(image, link)
{
  html =  '<img class="generic" src="images/' + image + '">' +
          '<div class="compassCont">' +
          '<a href="' + link + '" target="_blank"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//handel map interaction with map menu display
$('#map').click(function () {
  if ($('.expand').data('open') === false) {
    return;
  }
  count ++;
  if ($('.expand').data('open') === true && count > 1) {
    openClose();
    $('.expand').data('open', false);

    for (var i = toggle.length - 1; i >= 0; i--) {
      toggle[i] = true;
    }
    removeOverlays();
    count = 0;
  }
});

//menu about function
$('.about').click(function () {
  $('.aboutContent').fadeIn(fadetime);
  $('.eventsContent').fadeOut(fadetime);
  $('.mapContent').fadeOut(fadetime);
  switchColor($('.about'), $('.mapinfo'), $('.events'));
});

//menu mapinfo function
$('.mapinfo').click(function () {
  $('.aboutContent').fadeOut(fadetime);
  $('.eventsContent').fadeOut(fadetime);
  $('.mapContent').fadeIn(fadetime);
  if (selected === false) {
    switchColor($('.mapinfo'), $('.about'), $('.events'));
  }
  else {
    switchColorM($('.mapinfo'), $('.about'), $('.events'));
  }
});

//menu events function
$('.events').click(function () {
  $('.aboutContent').fadeOut(fadetime);
  $('.eventsContent').fadeIn(fadetime);
  $('.mapContent').fadeOut(fadetime);
  switchColor($('.events'), $('.mapinfo'), $('.about'));
});

//function to switch the menu colors
function switchColor(current, tab1, tab2) {
  current.css('color', '#505086');
  current.css('background-color', '#d0d0d0');
  tab1.css('color', '#d0d0d0');
  tab1.css('background-color', '#505086');
  tab2.css('color', '#d0d0d0');
  tab2.css('background-color', '#505086');
}

//change the menu colors
function switchColorM(current, tab1, tab2) {
  current.css('color', mapColor2);
  current.css('background-color', mapColor1);
  tab1.css('color', '#d0d0d0');
  tab1.css('background-color', '#505086');
  tab2.css('color', '#d0d0d0');
  tab2.css('background-color', '#505086');
}

//change the map info colors
function switchMapColor(color1, color2) {
  $('.mapinfo').css('color', color2);
  $('.mapinfo').css('background-color', color1);
  $('.mapContent').css('background-color', color1);
  $('.compass').css('color', color1);
  $('.compass').css('background-color', color2);
  mapColor1 = color1;
  mapColor2 = color2;
}

//expand function used for sidebar
$('.expand').click(function () { 
  if ($('.expand').data('open') === true) {
    openClose();
    $('.expand').data('open', false);

    for (var i = toggle.length - 1; i >= 0; i--) {
      toggle[i] = true;
    }
    removeOverlays();
    count = 0;
  }
  else {
    count = 1;
    openClose();
    $('.expand').data('open', true);
  }
});

function openClose() {
  $('#capture').toggle(300);
  $('.menu').fadeIn(300);
  if ($('.expand').data('rotate') === true) {
    $('.fa-bars').css({'-webkit-transform' : 'rotate('+ 0 +'deg)'});
    $('.expand').data('rotate', false);
  }
  else {
    $('.fa-bars').css({'-webkit-transform' : 'rotate('+ 90 +'deg)'});
    $('.expand').data('rotate', true);
  }

  if (selected === false) {
    $('.about').click();
  }
}

//expand function for category sidebar
$('.category').click(function () {
  $('#categories').toggle(300);
  if($('.category').data('status') === true) {
    $('.category').css('left', '80px');
    $('.category').data('status', false);
  }
  else {
    $('.category').css('left', '0px');
    $('.category').data('status', true);
  }
});

//shopping button
$('#shopping').click(function () {
  var id = $('#shopping');
  catClicked(id, '#f8f8f8', '#84a5f6');
});

//special button
$('#special').click(function () {
  var id = $('#special');
  catClicked(id, '#f8f8f8', '#7bd57b');
});

//services button
$('#services').click(function () {
  var id = $('#services');
  catClicked(id, '#f8f8f8', ' #f3b979');
});

//bars button
$('#bars').click(function () {
  var id = $('#bars');
  catClicked(id, '#f8f8f8', '#fa7974');
});

//food button
$('#food').click(function () {
  var id = $('#food');
  catClicked(id, '#f8f8f8', '#cf79f4');
});

//rec button
$('#rec').click(function () {
  var id = $('#rec');
  catClicked(id, '#f8f8f8', '#e0ec5a');
});

//parking button
$('#parking').click(function () {
  var id = $('#parking');
  catClicked(id, '#f8f8f8', '#444');
});

//category has been clicked
function catClicked(id, color1, color2) {
  if(id.data('clicked') === true) {
    swapCatColor(id, color1, color2);
    id.data('clicked', false);

    removeOverlays();
  }

  else {
    swapCatColor(id, color2, color1);
    id.data('clicked', true);
    removeOverlays();
  }
}

//change Category Colors
function swapCatColor(id, color1 , color2) {
  id.css('background-color', color1);
  id.css('color', color2);
}

//change which overlays are showing
function removeOverlays() {
  var all = 0;

  for (var i = locations.length - 1; i >= 0; i--) {
          if (ids[i].data('clicked') === false) {
            locations[i].setMap(map);
            toggle[i] = true;
          }
          else {
            locations[i].setMap(null);
            toggle[i] = false;
            all ++;
          } 
        }

  if (all === locations.length) {
    for (var i = locations.length - 1; i >= 0; i--) {
          locations[i].setMap(map);
          toggle[i] = true;
        }
  }
}