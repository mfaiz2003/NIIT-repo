 const track = document.getElementById("cardTrack");
  const leftBtn = document.getElementById("slideLeft");
  const rightBtn = document.getElementById("slideRight");

  let scrollAmount = 0;
  const cardWidth = 440; // Card width + margin

  rightBtn.addEventListener("click", () => {
    track.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    track.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });