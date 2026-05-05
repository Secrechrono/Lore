const texts = [ //Ελπίζω να μην ψάχνεις για κωδικούς, αδύναμε, κατι γρίφοι είναι, λύστους
  {
    folder: "The Human Frequency",
    items: [
      { title: "Η Ανθρώπινη Συχνότητα", file: "Texts/Anthopini.txt", spotify: "5XaDhLfoLGPpIIlykywPmP" },
      { title: "Στιγμιαία Ταλάντωση", file: "Texts/Talantosi.txt", spotify: "5XaDhLfoLGPpIIlykywPmP" }
    ]
  }, 

    {
    folder: "Róisín",
    items: [                                                                                    //Ντροπή που ήρθες για τον κωδικό
      { title: "Case File/Victim", file: "Texts/Testing.txt", spotify: "7uRGUYUj3oquFQAflWrwR8", password: "γυμνή", riddle: "Η ***** αλήθεια είναι πάντα η πιο αηδιαστική, η ***** σάρκα η πιο δελεαστική",locked:true,faketitle:"Classified",
        media:[
          { type: "image", src: "images/Rose.jpg",className:"Rose" }
        ]
       }

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
      { title: "The Leythafer", file: "Texts/TheLeythafer.txt", spotify: "7bRuu4oZs91UiNOj1cBAvj" },
      {title: "The Pact",file:"Texts/Thepact.txt", spotify:"2OCheuqRCvchFZ12tvfMqb"},
      {title: "The Tool",file:"Texts/TheTool.txt", spotify:"4ndzCwHkjo9fkN6jbSqNlB"},
      {title: "Mireborn",file:"Texts/Mireborn.txt", spotify:"6XydPDin3lvWsT1tJI4QdL"},
      {title: "To Find Purpose One Must Eat",file:"Texts/ToFindPurposeOneMustEat.txt", spotify:"30c5iFJK2xkw6gwENm2Stx"},
    ]
  },
  {
    folder: "Everwilts",
    items:[
      {title:"Her Testimonial",file:"Texts/AWitch.txt",spotify:"1kwQ2WKfs5apzQ1GT3sjUI"},
      {title:"Aoife", file:"Texts/Aoife.txt",spotify:"7tcDyhwJRiKN8O9ZzPoZAr"},
      {title:"Y2", file:"Texts/Y2.txt",spotify:"64oUwqQEttPUs4Sp73b9Le"},
      {title:"Esteemed Guests", file:"Texts/EsteemedGuests.txt",spotify:"3pY5GH7NgOs6RnEclGg9JN"},
      {title:"Aziza", file:"Texts/Aziza.txt",spotify:"4ZZsSnVQXTMfYB2unKx7me"},
      {title:"Lorcán", file:"Texts/Lorcan.txt",spotify:"73ZlmJxexVebFozgZhEhkd"},

    ]
  },
  {
    folder:"Erev",
    items:[
      {title:"Felt and Iskalia", file:"Texts/FeltAndIskalia.txt",spotify:"69ynWi60mH6oj2EYCL1yng"},
      {title:"Old Friend", file:"Texts/OldFriend.txt",spotify:"7r9VE9hlSBjBS8OOigp42f"},
      {title:"Of Eternal Love", file:"Texts/OfEternalLove.txt",spotify:"53bdM8Zo8cyGqaAtkie1aO"},
      {title:"A Hearth in the Dark", file:"Texts/AhearthintheDark.txt",spotify:"1idpYB5o0hqqTIXr1KbFxS"},
      {title:"They who control the seas", file:"Texts/Theywhocontrolthesea.txt",spotify:"21B9uYkOU8YNeEoT1MAThK"},
      {title:"Death", file:"Texts/Death.txt",spotify:"1veWIDwshv259zwmIbO3Yh"},


    ]
  },
  { title: "Read Me", file: "Texts/ReadMe.txt", spotify: "5KahLK67IOhTUSZzW8mb5h" }
  
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

//old place for loadText
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
      link.dataset.original = item.title
      if (item.locked) {
        link.classList.add("locked")
        link.textContent = item.faketitle
      } else {
        link.textContent = item.title
      }

      link.addEventListener("click", function() {
        loadText(item)
        if ('ontouchstart' in window) {
          document.querySelector(".sidebar").classList.remove("open")
        }
      })
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
    link.addEventListener("click", function() {
      loadText(entry)
      if ('ontouchstart' in window) {
        closeSidebar()
      }
    })
    sidebar.appendChild(link)
  }
})

let touchStartX = 0

document.addEventListener("touchstart", function(e) {
  touchStartX = e.touches[0].clientX
}, { passive: true })

document.addEventListener("touchend", function(e) {
  const touchEndX = e.changedTouches[0].clientX
  const diffX = touchEndX - touchStartX
  const spotifyWrapper = document.querySelector(".spotify-wrapper")

  if (diffX > 50) {
    openSidebar()
    spotifyWrapper.style.opacity = "0"
  } else if (diffX < -50) {
    closeSidebar()
    setTimeout(() => { spotifyWrapper.style.opacity = "0.7" }, 300)

  }
}, { passive: true })

function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("open")
}

function openSidebar() {
  document.querySelector(".sidebar").classList.add("open")
}

function loadText(item) {
  const teasing = [
    "You could do Better",
    "You'll never find her like that",
    "Are we serious Detective",
    "Time is running out"
  ]

  function checkAnswer() {
    const answer = document.querySelector(".riddle-input").value

    if (answer.toLowerCase() === item.password.toLowerCase()) {
      unlockSidebarItem(item)
        fetchAndLoad(item)
    } else {
      let i = Math.floor(Math.random() * teasing.length)
      document.querySelector(".riddle-error").textContent = teasing[i]
    }
  }

  if (item.password) {
    main.innerHTML = `
      <div class="riddle">
        <h1>${item.riddle}</h1>
        <input type="text" class="riddle-input" placeholder="Your answer...">
        <button class="riddle-submit">Enter</button>
        <p class="riddle-error"></p>
      </div>
    `

    const input = document.querySelector(".riddle-input")
    const button = document.querySelector(".riddle-submit")

    // button click
    button.addEventListener("click", checkAnswer)

    // ENTER key goes here 
    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        checkAnswer()
      }
    })

    return
  }

  fetchAndLoad(item)
}

function fetchAndLoad(item) {
  if (item.spotify) {
    document.querySelector(".spotify-player").src =
      `https://open.spotify.com/embed/track/${item.spotify}`
  }

  fetch(item.file)
    .then(r => r.text())
    .then(content => {
      content = content.replace(/\r\n/g, "\n")

      const blocks = content.split("\n\n")

      let html = ""

      blocks.forEach(block => {
        const imgMatch = block.match(/\[image:(.*?)\]/)

        if (imgMatch) {
          const parts = imgMatch[1].split("|")

          const src = (parts[0] || "").trim()
          const position = (parts[1] || "center").trim()
          const size = (parts[2] || "medium").trim()

          html += `<img src="${src}" class="content-image ${position} ${size}">`
        }
        else {
          let text = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

          html += `<p class="reveal">${text.replaceAll("\n", "<br>")}</p>`
        }
      })

      main.innerHTML = `
        <h1>${item.title}</h1>
        ${html}
      `

      revealWords(main)
    })
}
function unlockSidebarItem(item) {
  document.querySelectorAll(".sidebar a.locked").forEach(el => {
    if (el.dataset.original === item.title) {
      el.textContent = el.dataset.original
      el.classList.remove("locked")
    }
  })
}