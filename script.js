// swiper
if (window.innerWidth > 850) {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: "auto", // Ekranda 5 resim görünecek
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000, // 2 saniyede bir kaydır
      disableOnInteraction: false, // Kullanıcı müdahale etse bile devam et

    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,                // Döndürme açısı
      stretch: -100,
      depth: 300,                // Derinlik
      modifier: 1,
      slideShadows: false,        // Slide gölgeleri

    },

  });
} else {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: "auto", // Ekranda 5 resim görünecek
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000, // 2 saniyede bir kaydır
      disableOnInteraction: false, // Kullanıcı müdahale etse bile devam et

    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,                // Döndürme açısı
      stretch: -20,
      depth: 300,                // Derinlik
      modifier: 1,
      slideShadows: false,        // Slide gölgeleri

    },

  });
}



// reviews

let reviewsData = [
  {
    header: "Lorem Ipsum1",
    content: "1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, ab architecto quisquam vero perferendis ducimus ut facilis! Quos aspernatur dolorum optio eius nemo quo, necessitatibus perspiciatis minima laudantium voluptatem?"
  },
  {
    header: "Lorem Ipsum2",
    content: "2.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, ab architecto quisquam vero perferendis ducimus ut facilis! Quos aspernatur dolorum optio eius nemo quo, necessitatibus perspiciatis minima laudantium voluptatem?"
  },
  {
    header: "Lorem Ipsum3",
    content: "3.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, ab architecto quisquam vero perferendis ducimus ut facilis! Quos aspernatur dolorum optio eius nemo quo, necessitatibus perspiciatis minima laudantium voluptatem?"
  },
  {
    header: "Lorem Ipsum4",
    content: "4.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, ab architecto quisquam vero perferendis ducimus ut facilis! Quos aspernatur dolorum optio eius nemo quo, necessitatibus perspiciatis minima laudantium voluptatem?"
  },
  {
    header: "Lorem Ipsum5",
    content: "5.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, ab architecto quisquam vero perferendis ducimus ut facilis! Quos aspernatur dolorum optio eius nemo quo, necessitatibus perspiciatis minima laudantium voluptatem?"
  },
  {
    header: "Lorem Ipsum6",
    content: "6.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae, ab architecto quisquam vero perferendis ducimus ut facilis! Quos aspernatur dolorum optio eius nemo quo, necessitatibus perspiciatis minima laudantium voluptatem?"
  }
]

let reviewCont = document.querySelector(".review-container");

let section7Cont = document.querySelector(".section7 .container")
let modal = document.createElement("div");
modal.classList = "review-modal";
let modalHeader = document.createElement("h2");
modal.appendChild(modalHeader)
let fullContent = document.createElement("p");
modal.appendChild(fullContent);
let modalCloseBtn = document.createElement("span");
modalCloseBtn.innerText = "✖";
modalCloseBtn.classList = "modal-close-btn"
modal.appendChild(modalCloseBtn);
section7Cont.appendChild(modal);

modalCloseBtn.addEventListener("click", (e) => {
  e.target.parentElement.classList.remove("show");
  reviewCont.classList.remove("paused");
})
for (let i = 0; i < 2; i++) {
  for (let i = 0; i < reviewsData.length; i++) {
    let review = document.createElement("div");
    review.classList = "review";
    reviewCont.appendChild(review);
    let reviewHeader = document.createElement("h2");
    reviewHeader.innerText = reviewsData[i].header;
    let reviewContent = document.createElement("p");
    reviewContent.innerText = reviewsData[i].content;
    review.appendChild(reviewHeader)
    review.appendChild(reviewContent)
    let showMoreBtn = document.createElement("button");
    showMoreBtn.classList = "show-more-button";
    showMoreBtn.innerHTML = `Show more
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5068 4.61235C5.2974 4.81018 4.96999 4.81018 4.76059 4.61235L0.951155 1.01337C0.59388 0.67583 0.832758 0.0751411 1.32426 0.0751411L8.94313 0.0751418C9.43463 0.0751418 9.67351 0.675831 9.31624 1.01337L5.5068 4.61235Z" fill="black"/>
                                </svg>`
    review.appendChild(showMoreBtn)

    review.addEventListener("click", () => {
      modal.classList.remove("show");
      reviewCont.classList.remove("paused");
    })
    showMoreBtn.addEventListener("click", (e) => {
      event.stopPropagation();
      reviewCont.classList.add("paused");
      modal.classList.add("show");
      fullContent.innerText = e.target.previousSibling.innerText;
      modalHeader.innerText = e.target.previousSibling.previousSibling.innerText;
    })
  }

}

// Scroll function
var scrollContainer = document.querySelector(".scroll-container");
var section3 = document.querySelector(".section3");
var section4 = document.querySelector(".section4");
var section5 = document.querySelector(".section5");
var section7 = document.querySelector(".section7");
var games = document.querySelectorAll(".gamesContainer .game");
var slot = document.querySelector(".slot-machine");
var section3Ticket = document.querySelector(".section3 .ticket3");
var section3Coin = document.querySelector(".section3 .coin3");
var section3Card = document.querySelector(".section3 .card");
var section3SevenIcon = document.querySelector(".section3 .seven-icon-2");
var section3GoldCard = document.querySelector(".section3 .gold-card");
var section4GamesIcons = document.querySelector(".section4 .games-icons");
var section4Girl = document.querySelector(".section4 .girl2");
var section4CashBag = document.querySelector(".section4 .cash-bag");
var pragmaticPlay = document.querySelector(".section4 .pragmatic-play");
var hacksaw = document.querySelector(".section4 .hacksaw");
var evoplay = document.querySelector(".section4 .evoplay");
var playngo = document.querySelector(".section4 .playn-go");
var relaxGaming = document.querySelector(".section4 .relax-gaming");
var orangeMap = document.querySelector(".section6 .orange-map");
var section6Girl = document.querySelector(".section6 .girl3");
var section6Coin1 = document.querySelector(".section6 .coin1");
var section6Coin2 = document.querySelector(".section6 .coin2");
var section6SevenIcon = document.querySelector(".section6 .seven-icon");
var section6Ticket = document.querySelector(".section6 .ticket");


let elementsTop = {
  "0": [
    {
      element: section3,
      positions: section3.getBoundingClientRect(),
      action: scrollFunction
    },
    {
      element: section4,
      positions: section4.getBoundingClientRect(),
      action: scrollFunction2
    },
    {
      element: section5,
      positions: section5.getBoundingClientRect(),
      action: scrollFunction3
    },
    {
      element: section7,
      positions: section7.getBoundingClientRect(),
      action: scrollFunction4
    }
  ]
}
scrollElement = (page, pageElement) => {
  let i = 0;
  do {
    if (elementsTop[page][i].positions.y < document.scrollingElement.clientHeight) {
      elementsTop[page][i].action()
    }

    i++
  } while (i < elementsTop[page].length);

  pageElement.addEventListener("scroll", () => {
    let toplam = document.scrollingElement.clientHeight + pageElement.scrollTop;
    let i = 0;
    do {
      if ((elementsTop[page][i].positions.y - 300) < toplam) {
        elementsTop[page][i].action()
      }
      i++

    } while (i < elementsTop[page].length);

  })


}

scrollElement(0, scrollContainer);


function scrollFunction() {
  games.forEach(game => {
    game.classList.add("game-anim")
  });
}

function scrollFunction2() {
  slot.classList.add("slot-anim");
  section3Ticket.classList.add("ticket3-anim");
  section3Coin.classList.add("coin3-anim");
  section3Card.classList.add("card-anim");
  section3SevenIcon.classList.add("seven-icon-2-anim");
  section3GoldCard.classList.add("gold-card-anim");
}

function scrollFunction3() {
  section4GamesIcons.classList.add("games-icons-anim");
  section4Girl.classList.add("girl2-anim")
  pragmaticPlay.classList.add("pragmatic-play-anim")
  hacksaw.classList.add("hacksaw-anim")
  evoplay.classList.add("evoplay-anim")
  playngo.classList.add("playn-go-anim")
  relaxGaming.classList.add("relax-gaming-anim")
  section4CashBag.classList.add("cash-bag-anim");

}

function scrollFunction4() {
  orangeMap.classList.add("orange-map-anim");
  section6Girl.classList.add("girl3-anim");
}



/* glitter effect */
$(function () {
  var body = $("#starshine"),
    template = $(".template.shine"),
    stars = 500,
    sparkle = 20;

  var size = "small";
  var createStar = function () {
    template
      .clone()
      .removeAttr("id")
      .css({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        webkitAnimationDelay: Math.random() * sparkle + "s",
        mozAnimationDelay: Math.random() * sparkle + "s"
      })
      .addClass(size)
      .appendTo(body);
  };

  for (var i = 0; i < stars; i++) {
    if (i % 2 === 0) {
      size = "small";
    } else if (i % 3 === 0) {
      size = "medium";
    } else {
      size = "large";
    }

    createStar();
  }
});

// modal
const popupModal = document.getElementById("popupModal");
const closeModalBtn = document.getElementById("closeModal");
window.onload = () => {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
  setTimeout(() => {
    popupModal.classList.add("show");
    document.body.classList.add("show");
    stickyBottom.classList.remove("show");
  }, 5000);
};
closeModalBtn.addEventListener("click", () => {
  popupModal.classList.remove("show");
  document.body.classList.remove("show");
  scrollFunctionStart();
})

// sticky bottom scroll
function scrollFunctionStart() {
  document.querySelector(".scroll-container").addEventListener("scroll",()=>{
    scrollFunction1();
  })
  // window.onscroll = function () { scrollFunction1(); scrollFunction2() };
}
if (popupModal.style.display != "flex") {
  scrollFunctionStart();
}

const stickyBottom = document.getElementById("stickyBottom");

function scrollFunction1() {
  if ((document.querySelector(".scroll-container").scrollTop > 200) && !popupModal.classList.contains("show")) {

    stickyBottom.classList.add("show")

  } else {
    stickyBottom.classList.remove("show")
  }
}