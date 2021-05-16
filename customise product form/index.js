// change background color when clicking on choice
let switchBackgroundColor = document.querySelectorAll('.checkbox')
let switchBackgroundColor1 = document.querySelectorAll('.checkbox1')
let switchBackgroundColor2 = document.querySelectorAll('.checkbox2')
let switchBackgroundColor3 = document.querySelectorAll('.checkbox3')
let switchBackgroundColor4 = document.querySelectorAll('.checkbox4')
let switchBackgroundColor5 = document.querySelectorAll('.checkbox5')

function remove(position) {
  position.forEach((single) => {
    single.classList.remove('green')
  })
}

function greenButton(greenButton) {
  greenButton.forEach((box) => {
    box.addEventListener('click', () => {
      remove(greenButton)
      box.classList.add('green')
      checker()
      checker1()
      checker2()
      checker3()
      checker4()
      checker5()
    })
  })
}

greenButton(switchBackgroundColor)
greenButton(switchBackgroundColor1)
greenButton(switchBackgroundColor2)
greenButton(switchBackgroundColor3)
greenButton(switchBackgroundColor4)
greenButton(switchBackgroundColor5)

// display valid and not valid choices
const checks = document.querySelectorAll('.checkbox')
const tick = document.querySelector('.tick-check')
console.log(checks, tick)
function checker() {
  checks.forEach((check) => {
    if (check.classList.contains('green')) {
      tick.classList.remove('fa-times')
      tick.classList.add('fa-check')
    }
  })
}

const checks1 = document.querySelectorAll('.checkbox1')
const tick1 = document.querySelector('.tick-check1')

function checker1() {
  checks1.forEach((check) => {
    if (check.classList.contains('green')) {
      tick1.classList.add('fa-check')
      tick1.classList.remove('fa-times')
    }
  })
}

const checks2 = document.querySelectorAll('.checkbox2')
const tick2 = document.querySelector('.tick-check2')

function checker2() {
  checks2.forEach((check) => {
    if (check.classList.contains('green')) {
      tick2.classList.add('fa-check')
      tick2.classList.remove('fa-times')
    }
  })
}
const checks3 = document.querySelectorAll('.checkbox3')
const tick3 = document.querySelector('.tick-check3')

function checker3() {
  checks3.forEach((check) => {
    if (check.classList.contains('green')) {
      tick3.classList.add('fa-check')
      tick3.classList.remove('fa-times')
    }
  })
}
const checks4 = document.querySelectorAll('.checkbox4')
const tick4 = document.querySelector('.tick-check4')

function checker4() {
  checks4.forEach((check) => {
    if (check.classList.contains('green')) {
      tick4.classList.add('fa-check')
      tick4.classList.remove('fa-times')
    }
  })
}
const checks5 = document.querySelectorAll('.checkbox5')
const tick5 = document.querySelector('.tick-check5')

function checker5() {
  checks5.forEach((check) => {
    if (check.classList.contains('green')) {
      tick5.classList.add('fa-check')
      tick5.classList.remove('fa-times')
    }
  })
}

// carousel animation

const carousel = document.getElementById('item-carousel')
const carouselPrevious = document.getElementById('previous-carousel-button')
const carouselNext = document.getElementById('next-carousel-button')
const width = window.getComputedStyle(carousel).getPropertyValue('width')
const plainFilter = document.getElementById('plain')
const stripeFilter = document.getElementById('stripe')

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
]

carouselNext.onclick = () => {
  carousel.scrollLeft += parseInt(width)
}
carouselPrevious.onclick = () => {
  carousel.scrollLeft -= parseInt(width)
}

function chunkArray(arr, size) {
  const chunkedArr = []

  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size))
  }

  return chunkedArr
}

// clear out the content initially
function displayItems(filters) {
  carousel.innerHTML = ''

  const filteredImages = images.filter((image) => filters.includes(image.type))
  const chunkedImages = chunkArray(filteredImages, 4)

  for (const track of chunkedImages) {
    const ul = document.createElement('ul')
    ul.className = 'carousel__track'

    for (const { image } of track) {
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.height = '100'
      img.width = '100'
      img.alt = 'slide'
      img.src = image
      li.append(img)
      ul.append(li)
    }
    carousel.append(ul)
  }
}

displayItems(['stripe', 'plain'])
stripeFilter.addEventListener('click', () => displayItems(['stripe']))
plainFilter.addEventListener('click', () => displayItems(['plain']))

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
