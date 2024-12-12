const likeButton = document.querySelector('#like-button')
const heartContoured = likeButton.querySelector('.heart-contoured')
const heartFilled = likeButton.querySelector('.heart-filled')

var isClickedButton = false

likeButton.addEventListener('click', () => {
  if (!isClickedButton) {
    isClickedButton = true

    likeButton.classList.add('active')

    likeButton.insertAdjacentHTML(
      'beforeend',
      `
      <lottie-player
        src="./assets/lotties/confetti.json"
        class="confetti-animation"
        background="transparent"
        speed="1"
        autoplay
      ></lottie-player>  
    `,
    )
  } else {
    likeButton.classList.remove('active')
    likeButton.classList.add('reverse')
    document.querySelector(".confetti-animation").remove();

    isClickedButton = false

    setTimeout(() => {
      likeButton.classList.remove('reverse')
    }, 400)
  }
})
