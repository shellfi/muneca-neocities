const button = document.getElementById("ligbutton");
const fonts = document.querySelectorAll("section, section *");

let allFonts = document.querySelectorAll(".font-name");

document.getElementById("amount").innerText = `${allFonts.length}`;

button.addEventListener("click", (event) => {
  let text = button.innerText;

  button.innerText =
    text == "enable font features"
      ? "disable font features"
      : "enable font features";

  for (let i = 0; i < fonts.length; i++) {
    if (
      fonts[i].style.fontVariant ===
      "common-ligatures discretionary-ligatures historical-ligatures contextual"
    ) {
      fonts[i].style.fontVariant =
        "no-common-ligatures no-discretionary-ligatures no-historical-ligatures no-contextual";
    } else {
      fonts[i].style.fontVariant =
        "common-ligatures discretionary-ligatures historical-ligatures contextual";
    }
    if (fonts[i].style.fontFeatureSettings === '"ss01", "liga", "salt"') {
      fonts[i].style.fontFeatureSettings = '"liga" off, "salt" off';
    } else {
      fonts[i].style.fontFeatureSettings = '"ss01", "liga", "salt"';
    }
  }
});