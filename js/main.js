let asideBar = document.querySelector(".nav-menu-top"),
    menuToggle = document.querySelector(".nav-toggle-btn"),
    menuToggleIcon = document.querySelector(".nav-toggle-btn i"),
    menuLogo = document.querySelector(".logo"),
    totalMenuToggle = menuToggle.lenth;

    menuToggle.addEventListener("click", ()=>{
        asideSectionToggleBtn();
    });

    function asideSectionToggleBtn() {
        asideBar.classList.toggle("open");
        menuLogo.classList.toggle("logo-hide");
        menuToggleIcon.classList.toggle("fa-xmark");
        menuToggle.classList.toggle("menu-btn-active");
    }

// Portfolio Filtering

let filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns      = filterContainer.children,
    totalFilterBtns = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-box-item"),
    totalPortfolioItems = portfolioItems.length;

    for (let i = 0; i < totalFilterBtns; i++) {
        filterBtns[i].addEventListener('click', function () {
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add('active');

               // Target filter contents
        let filterValue = this.getAttribute("data-filter");
        for (let k=0; k<totalPortfolioItems; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            } else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            
        }
        });
        
    };

// Portfolio LightBox

let mainPortfolioItems = document.querySelector(".portfolio-box"),
    lightbox = mainPortfolioItems.querySelectorAll(".portfolio-box-item"),
    totallightboxItem = lightbox.length;

    for(let i = 0; i<totallightboxItem; i++){
       let mLightbox = lightbox[i].querySelector(".portfolio-contents");
       mLightbox.addEventListener("click", function () {
        for(let j= 0; j<totallightboxItem; j++){
           lightbox[j].querySelector(".portfolio-contents").parentElement.lastElementChild.classList.remove("open");
        }
        this.parentElement.lastElementChild.classList.add("open");
       })
    };

// Lightbox Close

let lightboxClose = document.querySelector(".lightbox-close"),
    portfolioLightbox = document.querySelectorAll(".portfolio-box-item .portfolio-lightbox"),
    totalPortfolioLightbox = portfolioLightbox.length;

    for(let i=0; i<totalPortfolioLightbox; i++){
        let lightboxCloseBtn = portfolioLightbox[i].querySelector(".lightbox-close");
        lightboxCloseBtn.addEventListener("click", function(){
            for(let j=0; j<totalPortfolioLightbox; j++){
                portfolioLightbox[j].querySelector(".lightbox-contents").parentElement.classList.remove("open");
            }
        })
    }




/*===================================== Contac Js ==================================*/

// const inputs = document.querySelectorAll(".input");


// function focusFunc() {
//     let parent = this.parentNode;
//     parent.classList.add("focus");
// }

// function blurFunc() {
//     let parent = this.parentNode;
//     if (this.value == "") {
//         parent.classList.remove("focus");
//     }
// }


// inputs.forEach((input) =>{
//     input.addEventListener("focus", focusFunc);
//     input.addEventListener("blur", blurFunc);
// })