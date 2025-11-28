// Get query params (video + title)
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get("video");
const title = urlParams.get("title");

// Update title and video dynamically
const workoutTitle = document.getElementById("workoutTitle");
const workoutVideo = document.getElementById("workoutVideo");

if (title) {
  workoutTitle.textContent = decodeURIComponent(title);
}

if (videoId) {
  workoutVideo.src = `https://www.youtube.com/embed/${videoId}`;
}
