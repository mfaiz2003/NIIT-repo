// CARD SLIDER
const track = document.getElementById("cardTrack");
const leftBtn = document.getElementById("slideLeft");
const rightBtn = document.getElementById("slideRight");

let scrollAmount = 0;
const cardWidth = 420;

rightBtn.addEventListener("click", () => {
  track.scrollBy({ left: cardWidth, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  track.scrollBy({ left: -cardWidth, behavior: "smooth" });
});


// LOGO SLIDER//

const logoTracks = document.querySelectorAll("[id^='logoTrack']");
const speed = 0.8;

logoTracks.forEach((track, index) => {
  track.innerHTML += track.innerHTML;

  let x = 0;
  const direction = (index % 2 === 0) ? -1 : 1;

  function animate() {
    x += direction * speed;
    const width = track.getBoundingClientRect().width / 2;
      if (direction === -1 && x <= -width + 1) x = 0;
      if (direction === 1 && x >= 1) x = -width;


      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });

  document.getElementById("openPopup").addEventListener("click", function() {
      
      if (!document.getElementById("otpModal")) {
        fetch("popup.html")
          .then(response => response.text())
          .then(html => {

            document.getElementById("popupContainer").innerHTML = html;
            const modal = new bootstrap.Modal(document.getElementById("otpModal"));
            modal.show();
          })
          .catch(err => console.error("Failed to load popup:", err));
      } else {

        const modal = new bootstrap.Modal(document.getElementById("otpModal"));
        modal.show();
      }
    });

  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
      // Close all others
      faqs.forEach((item) => {
        if (item !== faq) {
          item.classList.remove("active");
          item.querySelector(".faq-toggle").textContent = "+";
        }
      });

      // Toggle current
      faq.classList.toggle("active");
      const toggleBtn = faq.querySelector(".faq-toggle");
      toggleBtn.textContent = faq.classList.contains("active") ? "−" : "+";
    });
  });

