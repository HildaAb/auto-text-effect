const containerEl = document.querySelector("#container");

const careers = ["Web developer", "YouTuber", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  containerEl.innerHTML = `
  <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
`;

  characterIndex++;
  setTimeout(updateText, 400);
}
