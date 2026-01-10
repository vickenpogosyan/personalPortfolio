const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xpqwvgkr", {
    method: "POST",
    body: new FormData(form),
    headers: {
      "Accept": "application/json"
    }
  });

  if (response.ok) {
    window.location.href = "thankYou.html";
  } else {
    alert("Submission failed");
  }
});