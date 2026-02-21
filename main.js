const shareButton = document.querySelector('.share-button');
const shareOptions = document.querySelector('.share-options');
const shape = document.querySelector('.shape');

shareButton.addEventListener('click', function() {
  shareOptions.classList.toggle('hidden');
  shape.classList.toggle('hidden');
});