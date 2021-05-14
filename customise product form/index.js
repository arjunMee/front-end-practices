// change background color when clicking on
let switchBackgroundColor1 = document.querySelectorAll('.desc1')
let switchBackgroundColor2 = document.querySelectorAll('.desc2')
let switchBackgroundColor3 = document.querySelectorAll('.desc3')

function remove(position) {
  position.forEach((single) => {
    single.classList.remove('green')
  })
}

switchBackgroundColor1.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor1)
    box.classList.add('green')
  })
})
switchBackgroundColor2.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor2)
    box.classList.add('green')
  })
})
switchBackgroundColor3.forEach((box) => {
  box.addEventListener('click', () => {
    remove(switchBackgroundColor3)
    box.classList.add('green')
  })
})

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

// Get the element with id="defaultOpen" and click on it
// document.getElementById('defaultOpen').click()
