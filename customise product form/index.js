//change invalide to valide icon
function myFunction(x) {
  x.classList.toggle("fa-check");
} 

// change background color when clicking on choice
let switchBackgroundColor = document.querySelectorAll('.checkbox');;
let switchBackgroundColor1 = document.querySelectorAll('.checkbox1');
let switchBackgroundColor2 = document.querySelectorAll('.checkbox2');
let switchBackgroundColor3 = document.querySelectorAll('.checkbox3');
let switchBackgroundColor4 = document.querySelectorAll('.checkbox4');
let switchBackgroundColor5 = document.querySelectorAll('.checkbox5');


function remove(position) {
  position.forEach((single) => {
    single.classList.remove('green')
  })
}

switchBackgroundColor.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor)
    box.classList.add('green')
  })
});
switchBackgroundColor1.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor1)
    box.classList.add('green')
  })
});
switchBackgroundColor2.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor2)
    box.classList.add('green')
  })
});
switchBackgroundColor3.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor3)
    box.classList.add('green')
  })
});
switchBackgroundColor4.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor4)
    box.classList.add('green')
  })
});
switchBackgroundColor5.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor5)
    box.classList.add('green')
  })
})


// carousel animation

const carousel = document.getElementById("item-carousel");
const carouselPrevious = document.getElementById("previous-carousel-button");
const carouselNext = document.getElementById("next-carousel-button");
const width = window.getComputedStyle(carousel).getPropertyValue("width");

const images = [
  { image: 'assets/toile/bleu_plain.jpg', type: 'plain' },
  { image: 'assets/toile/noir_plain.jpg', type: 'plain' },
  { image: 'assets/toile/beige_plain.jpg', type: 'plain' },
  { image: 'assets/toile/jaune_plain.jpg', type: 'plain' },
  { image: 'assets/toile/rouge_plain.jpg', type: 'plain' },
  { image: 'assets/toile/verte_plain.jpg', type: 'plain' },
  { image: 'assets/toile/white_plain.jpg', type: 'plain' },
  { image: 'assets/toile/amande_plain.jpg', type: 'plain' },
  { image: 'assets/toile/cassis_plain.jpg', type: 'plain' },
  { image: 'assets/toile/marron_plain.jpg', type: 'plain' },
  { image: 'assets/toile/menthe_plain.jpg', type: 'plain' },
  { image: 'assets/toile/orange_plain.jpg', type: 'plain' },
  { image: 'assets/toile/bordeaux_plain.jpg', type: 'plain' },
  { image: 'assets/toile/jaune-thw_plain.jpg', type: 'plain' },
  { image: 'assets/toile/vermillon_plain.jpg', type: 'plain' },
  { image: 'assets/toile/ivoire-thw_plain.jpg', type: 'plain' },
  { image: 'assets/toile/marron-ble_plain.jpg', type: 'plain' },
  { image: 'assets/toile/vert-foret_plain.jpg', type: 'plain' },
  { image: 'assets/toile/bleue-clair_plain.jpg', type: 'plain' },
  { image: 'assets/toile/grise-noire_plain.jpg', type: 'plain' },
  { image: 'assets/toile/orange-zoom_plain.jpg', type: 'plain' },
  { image: 'assets/toile/blanche-beige_plain.jpg', type: 'plain' },
  { image: 'assets/toile/violette-rose_plain.jpg', type: 'plain' },
  { image: 'assets/toile/piment_pique-thw_plain.jpg', type: 'plain' },
  { image: 'assets/toile/titane_pique-thw_plain.jpg', type: 'plain' },
  { image: 'assets/toile/capri_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/davos_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/boston_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/sienne_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/sydney_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/hardelot_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/manosque_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/vancouver_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/woodstock_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/blanc-vert_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/yellow-thw_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/baden-baden_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/blanc-jaune_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/creme-bruyere_stripe.jpg', type: 'stripe' },
  { image: 'assets/toile/naples_dark_grey-thw_stripe.jpg', type: 'stripe' },
];


carouselNext.onclick = () => {
  carousel.scrollLeft += parseInt(width)
}
carouselPrevious.onclick = () => {
  carousel.scrollLeft -= parseInt(width)
}


// clear out the content initially
carousel.innerHTML = ""

function chunkArray(arr, size) {
  const chunkedArr = [];
  
  for(let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  
  return chunkedArr;
}

const chunkedImages = chunkArray(images, 3);

for (const track of chunkedImages) {
	const ul = document.createElement('ul');
  ul.className = 'carousel__track';
    
	for (const { image } of track) {
  	const li = document.createElement('li');
    const img = document.createElement('img');

    img.height = "100";
    img.width = "100";
    img.alt = "slide"
    img.src = image;

		li.append(img);
    ul.append(li);
  }
  
  carousel.append(ul);
}


// tab animation code
function openCity(evt, cityName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

