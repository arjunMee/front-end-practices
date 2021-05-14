// change background color when clicking on
let switchBackgroundColor = document.querySelectorAll('.desc')

function remove() {
  switchBackgroundColor.forEach((single) => {
    single.classList.remove('green')
  })
}

switchBackgroundColor.forEach((e) => {
  e.addEventListener('click', () => {
    remove()
    e.classList.add('green')
  })
})

// tab animation code
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();