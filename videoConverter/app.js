// const { FFmpeg } = FFmpegWASM;
// const ffmpeg = new FFmpeg();

// const input = document.getElementById("videoInput");
// const button = document.getElementById("convertBtn");
// const status = document.getElementById("status");
// const preview = document.getElementById("preview");

// async function loadFFmpeg() {
//   if (!ffmpeg.loaded) {
//     status.textContent = "Loading FFmpeg...";
//     await ffmpeg.load({
//       coreURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/ffmpeg-core.js",
//     });
//   }
// }

// button.onclick = async () => {
//   if (!input.files.length) return;

//   await loadFFmpeg();

//   const file = input.files[0];
//   status.textContent = "Processing...";

//   const inputName = "input";
//   const outputName = "output.mp4";

//   await ffmpeg.writeFile(inputName, await fetchFile(file));

//   // Key part: quality-preserving settings
//   await ffmpeg.exec([
//     "-i", inputName,
//     "-c:v", "libx264",
//     "-preset", "slow",
//     "-crf", "18",
//     "-c:a", "aac",
//     "-b:a", "192k",
//     outputName
//   ]);

//   const data = await ffmpeg.readFile(outputName);
//   const videoURL = URL.createObjectURL(
//     new Blob([data.buffer], { type: "video/mp4" })
//   );

//   preview.src = videoURL;
//   preview.style.display = "block";
//   status.textContent = "Done!";
// };



const { FFmpeg } = FFmpegWASM;
const ffmpeg = new FFmpeg();

const input = document.getElementById("videoInput");
const button = document.getElementById("convertBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const preview = document.getElementById("preview");

async function loadFFmpeg() {
  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/ffmpeg-core.js",
    });
  }
}

// Progress listener
ffmpeg.on("progress", ({ progress }) => {
  const percent = Math.round(progress * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = percent + "%";
});

button.onclick = async () => {
  if (!input.files.length) return;

  progressBar.style.width = "0%";
  progressText.textContent = "0%";

  await loadFFmpeg();

  const file = input.files[0];
  const inputName = "input";
  const outputName = "output.mp4";

  await ffmpeg.writeFile(inputName, await fetchFile(file));

  await ffmpeg.exec([
    "-i", inputName,
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "18",
    "-c:a", "aac",
    "-b:a", "192k",
    outputName
  ]);

  const data = await ffmpeg.readFile(outputName);
  const videoURL = URL.createObjectURL(
    new Blob([data.buffer], { type: "video/mp4" })
  );

  preview.src = videoURL;
  preview.style.display = "block";
};
