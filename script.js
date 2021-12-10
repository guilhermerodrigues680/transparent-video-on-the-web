// https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/
// HEVC with alpha is supported ONLY on Safari >=13 / ios >=13
// previous versions also supported HEVC but WITHOUT alpha channel (video will play with black bg)
// Safari 13 is the first version to support mediaCapabilities
function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );
  const isSafari =
    ua.indexOf("safari") != -1 &&
    !(ua.indexOf("chrome") != -1) &&
    ua.indexOf("version/") != -1;

  return isSafari && hasMediaCapabilities;
}

function isIE11() {
  return !!window.navigator.userAgent.match(/Trident\/7\./, []);
}

if (!isIE11()) {
  const player = document.getElementById("player");
  player.src = supportsHEVCAlpha() ? "./video.mov" : "./video.webm";
  document.querySelector("#logs").innerHTML = `player.src: ${player.src}`;
}
