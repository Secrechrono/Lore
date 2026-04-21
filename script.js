const texts = [
  {
    folder: "The Human Frequency",
    items: [
      { title: "Η Ανθρώπινη Συχνότητα", file: "Texts/Η Ανθρώπινη Συχνότητα", spotify: "5XaDhLfoLGPpIIlykywPmP" },
      { title: "Στιγμιαία Ταλάντωση", file: "Texts/Στιγμιαία Ταλάντωση.txt", spotify: "5XaDhLfoLGPpIIlykywPmP" }
    ]
  }
]

const main = document.querySelector(".main")
const sidebar = document.querySelector(".sidebar")

let spotifyHidden = false
document.querySelector(".hide-spotify-btn").addEventListener("click", function() {
  spotifyHidden = !spotifyHidden
  const wrapper = document.querySelector(".spotify-wrapper")
  wrapper.style.display = spotifyHidden ? "none" : "block"
  this.style.opacity = spotifyHidden ? "0.4" : "1"
})

document.querySelector(".hide-spotify").addEventListener("click", function() {
  spotifyHidden = !spotifyHidden
  const wrapper = document.querySelector(".spotify-wrapper")
  wrapper.style.display = "none"
  this.textContent = spotifyHidden ? "Show Music" : "Hide Music"
})
function revealWords(container) {
  const h1 = container.querySelector("h1")
  const paragraphs = container.querySelectorAll("p")
  let globalIndex = 0

  if (h1) {
    h1.style.opacity = "0"
    h1.style.animation = "fadeIn 1.6s ease forwards"
    h1.style.animationDelay = "0s"
    globalIndex = 10
  }

  const titleDelay = 0.6

  paragraphs.forEach(el => {
    if (el.innerHTML.trim() === "") return
    const words = el.innerHTML.split(" ")
    el.innerHTML = words.map(word => {
      const groupIndex = Math.floor(globalIndex / 50)
      globalIndex++
      return `<span class="word-group" style="animation-delay: ${titleDelay + groupIndex * 0.3}s">${word} </span>`
    }).join("")
  })

  const totalDuration = titleDelay + Math.floor(globalIndex / 50) * 0.3 + 2
  const wrapper = document.querySelector(".spotify-wrapper")
  if (!spotifyHidden){
  wrapper.style.display = "block"
  wrapper.style.opacity = "0"
  wrapper.style.transition = "opacity 1s ease"
  setTimeout(() => { wrapper.style.opacity = "1" }, totalDuration * 1000)
  }
}

function loadText(item) {
  if (item.spotify) {
    document.querySelector(".spotify-player").src =
      `https://open.spotify.com/embed/track/${item.spotify}`
  }
  fetch(item.file)
    .then(response => response.text())
    .then(content => {
      content = content.replace(/\r\n/g, "\n")
      content = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      const paragraphs = content.split("\n\n")
      main.innerHTML = `
        <h1>${item.title}</h1>
        ${paragraphs.map(p => `<p>${p.replaceAll("\n", "<br>")}</p>`).join("")}
      `
      revealWords(main)
    })
}

texts.forEach(function(entry) {
  if (entry.folder) {
    const folder = document.createElement("div")
    folder.classList.add("folder")

    const title = document.createElement("span")
    title.classList.add("folder-title")
    title.innerHTML = `<span class="folder-arrow">›</span> ${entry.folder}`

    const contents = document.createElement("div")
    contents.classList.add("folder-contents")

    entry.items.forEach(function(item) {
      const link = document.createElement("a")
      link.href = "#"
      link.textContent = item.title
      link.addEventListener("click", function() { loadText(item) })
      contents.appendChild(link)
    })

    title.addEventListener("click", function() {
      contents.classList.toggle("open")
      folder.classList.toggle("open")
    })

    folder.appendChild(title)
    folder.appendChild(contents)
    sidebar.appendChild(folder)

  } else {
    const link = document.createElement("a")
    link.href = "#"
    link.textContent = entry.title
    link.addEventListener("click", function() { loadText(entry) })
    sidebar.appendChild(link)
  }
})