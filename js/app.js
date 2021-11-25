document.getElementById("translate-button").onclick = showLangChooser;
const langChooserElement = document.getElementById("lang-chooser");
langChooserElement.onclick = hideLangChooser;

function showLangChooser(event) {
  event.stopPropagation();
  langChooserElement.hidden = false;
  document.addEventListener("click", hideLangChooser);
}

function hideLangChooser(event) {
  event.stopPropagation();
  langChooserElement.hidden = true;
  document.removeEventListener("click", hideLangChooser);
}

function hideDownloadApp() {
  const downloadApp = document.getElementById("download-app");
  downloadApp.remove();
}
