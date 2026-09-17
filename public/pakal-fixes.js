(() => {
  const PRIMARY_MAPS_URL = "https://maps.app.goo.gl/ZLTyyf2BdJSRh7Tn7";
  const PRIMARY_MAP_EMBED =
    "https://www.google.com/maps?q=Av.%205%20de%20Mayo%2C%20entre%20Aldama%20y%20Abasolo%2C%20Palenque%2C%20Chiapas%2C%2029960%2C%20Mexico&z=18&output=embed";

  function ensureWhatsAppLogo(element) {
    if (!element) return;

    element.querySelectorAll("svg").forEach((svg) => {
      svg.style.display = "none";
    });

    let image = element.querySelector("img.whatsapp-logo-image");
    if (!image) {
      image = document.createElement("img");
      image.className = "whatsapp-logo-image";
      image.src = "/whatsapp-logo.svg";
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      element.appendChild(image);
    }
  }

  function applyFixes() {
    const primaryCard = document.getElementById("sucursal-cinco-mayo");

    if (primaryCard) {
      const mapButton = primaryCard.querySelector(".branch-map-button");
      const mapFrame = primaryCard.querySelector(".branch-map iframe");
      const branchLabel = primaryCard.querySelector(".branch-title-row small");

      if (mapButton) {
        mapButton.setAttribute("href", PRIMARY_MAPS_URL);
      }

      if (mapFrame && mapFrame.getAttribute("src") !== PRIMARY_MAP_EMBED) {
        mapFrame.setAttribute("src", PRIMARY_MAP_EMBED);
      }

      if (branchLabel) {
        branchLabel.textContent = "Laboratorio Pakal · Sucursal principal";
      }
    }

    document.querySelectorAll(".footer-branch").forEach((branch) => {
      const branchName = branch.querySelector("strong")?.textContent ?? "";
      if (branchName.includes("5 de Mayo")) {
        const link = branch.querySelector("a");
        if (link) link.setAttribute("href", PRIMARY_MAPS_URL);
      }
    });

    document
      .querySelectorAll(".floating-whatsapp, .branch-icon-whatsapp")
      .forEach(ensureWhatsAppLogo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyFixes, { once: true });
  } else {
    applyFixes();
  }

  window.addEventListener("load", applyFixes, { once: true });
  window.setTimeout(applyFixes, 500);
  window.setTimeout(applyFixes, 1500);
  window.setTimeout(applyFixes, 3000);
})();
