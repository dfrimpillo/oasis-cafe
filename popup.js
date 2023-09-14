var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');



//javascript for quick view button
var popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});


var closePopup = function() {
  popupViews.forEach((popupView) => {
    popupView.classList.remove('active');
  });
};

// Function to handle keydown event
var handleKeyDown = function(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
};

// Add event listener for the Esc keydown event
document.addEventListener('keydown', handleKeyDown);


