$('.home').css('height', $(window).height() - $('nav').innerHeight())

// progress section

let progressSection = document.querySelector('.progress-container')
let progressBar = document.querySelectorAll('.progress-bar')
let progressSpan = document.querySelectorAll('.progress-text b span')
let counterSection = document.querySelector('.counter')
let count = document.querySelectorAll('.counter .count')

ScrollOut({
  targets: '.progress-container, .counter',
})
window.addEventListener('scroll', function () {
  // counter progress
  if (progressSection.dataset.scroll == 'in') {
    progressBar.forEach((ele) => {
      let val = ele.getAttribute('aria-valuenow')
      ele.style.width = val + '%'
      let span = ele.parentElement.parentElement.querySelector('span')
      let countTimer = setInterval(() => {
        if (+span.textContent < val) {
          span.textContent = +span.textContent + 1
        } else {
          clearInterval(countTimer)
        }
      }, 300)
    })
  } else {
    progressBar.forEach((ele) => {
      ele.style.width = '0' + '%'
      ele.parentElement.parentElement.querySelector('span').textContent = 0
    })
  }

  // counter numbers
  if (counterSection.dataset.scroll == 'in') {
    count.forEach((ele) => {
      let counterVal = ele.dataset.counter
      let countTimer = setInterval(() => {
        if (+ele.textContent < counterVal) {
          ele.textContent = +ele.textContent + 1
        } else {
          clearInterval(countTimer)
        }
      }, counterVal / 1000)
    })
  } else {
    count.forEach((el) => {
      el.innerHTML = 0
    })
  }
})

// filter items
let filterListItems = document.querySelectorAll('.list-group li')
let filteredItems = document.querySelectorAll('.filtered-items a')

filterListItems.forEach((li) => {
  li.addEventListener('click', function () {
    document.querySelector('.list-group li.active').classList.remove('active')
    li.classList.add('active')
    let filteredClass = li.dataset.filter
    filteredItems.forEach((item) => {
      if (item.classList.contains(filteredClass)) {
        item.classList.remove('hidden')
        item.classList.add('active')
      } else {
        item.classList.remove('active')
        item.classList.add('hidden')
      }
    })
  })
})

// light gallery
lightGallery(document.getElementById('gallery'), {
  animateThumb: true,
  zoomFromOrigin: true,
  allowMediaOverlap: true,
  toggleThumb: true,
  mode: 'lg-fade',
})

// scroll to top
let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  this.scrollY >= 200
    ? (scrollBtn.style.right = '20px')
    : (scrollBtn.style.right = '-60px')
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// aos library
AOS.init()
