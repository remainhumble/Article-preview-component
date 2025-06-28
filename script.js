const shareBtn = document.getElementById("share-button");
const socials = document.getElementById("socials");


shareBtn.addEventListener("click", () => {
  socials.classList.toggle("show");
  shareBtn.classList.toggle("active");

});
