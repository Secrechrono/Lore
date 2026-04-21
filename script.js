const texts = [
  {
    folder: "The Human Frequency",
    items: [
      { title: "Η Ανθρώπινη Συχνότητα", file: "Texts/Η Ανθρώπινη Συχνότητα", spotify: "5XaDhLfoLGPpIIlykywPmP" },
      { title: "Στιγμιαία Ταλάντωση", file: "Texts/Στιγμιαία Ταλάντωση.txt", spotify: "5XaDhLfoLGPpIIlykywPmP" }
    ]
  }, 
  {
    folder: "Small things",
    items: [
      {title:"Σμολλερ Θινγκζ",file:"Texts/Corpse.txt",spotify:"11YmlaVpAB0Y3vfe8JR4eY"},
    ]
  },
   {
    folder: "Leythafer's Last Afair",
    items: [
      { title: "The Leythafer", file: "Texts/The Leythafer.txt", spotify: "7bRuu4oZs91UiNOj1cBAvj" },
      {title: "The Pact",file:"Texts/The Pact.txt", spotify:"2OCheuqRCvchFZ12tvfMqb"},
      {title: "The Tool",file:"Texts/The Tool.txt", spotify:"4ndzCwHkjo9fkN6jbSqNlB"},
      {title: "Mireborn",file:"Texts/Mireborn.txt", spotify:"6XydPDin3lvWsT1tJI4QdL"},
      {title: "To Find Purpose One Must Eat",file:"Texts/To Find Purpose One Must Eat.txt", spotify:"30c5iFJK2xkw6gwENm2Stx"},
    ]
  },
  {
    folder: "Everwilts",
    items:[
      {title:"Her Testimonial",file:"Texts/A Witch.txt",spotify:"1kwQ2WKfs5apzQ1GT3sjUI"},
      {title:"Aoife", file:"Texts/Aoife.txt",spotify:"7tcDyhwJRiKN8O9ZzPoZAr"},
      {title:"Y2", file:"Texts/Y2.txt",spotify:"64oUwqQEttPUs4Sp73b9Le"},
      {title:"Esteemed Guests", file:"Texts/Esteemed Guests.txt",spotify:"3pY5GH7NgOs6RnEclGg9JN"},
      {title:"Aziza", file:"Texts/Aziza.txt",spotify:"3pY5GH7NgOs6RnEclGg9JN"},
      {title:"Lorcán", file:"Texts/Lorcan.txt",spotify:"3pY5GH7NgOs6RnEclGg9JN"},

    ]
  },
  {
    folder:"Erev",
    items:[
      {title:"Felt and Iskalia", file:"Texts/Felt And Iskalia.txt",spotify:"69ynWi60mH6oj2EYCL1yng"},
      {title:"Old Friend", file:"Texts/Old Friend.txt",spotify:"7r9VE9hlSBjBS8OOigp42f"},
      {title:"Of Eternal Love", file:"Texts/Of Eternal Love.txt",spotify:"53bdM8Zo8cyGqaAtkie1aO"},
      {title:"A Hearth in the Dark", file:"Texts/A hearth in the Dark.txt",spotify:"53bdM8Zo8cyGqaAtkie1aO"},
      {title:"They who control the seas", file:"Texts/They who control the sea.txt",spotify:"53bdM8Zo8cyGqaAtkie1aO"},
      {title:"Death", file:"Texts/Death.txt",spotify:"1veWIDwshv259zwmIbO3Yh"},


    ]
  },
  { title: "Read Me", file: "Texts/Read Me.txt", spotify: "5KahLK67IOhTUSZzW8mb5h" }
  
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