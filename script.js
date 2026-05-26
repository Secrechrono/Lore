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
    className:"Roisin-Folder",
    items: [                                                                                    //Ντροπή που ήρθες για τον κωδικό
      { title: "Case File/Victim", file: "Texts/Testing.txt",  folder: "roisin", spotify: "7uRGUYUj3oquFQAflWrwR8", password: ["0d521c012e88586975fa1681b5055ed0e6787d621ecb5e03f019e648494c0ef1"], riddle: "Η ***** αλήθεια είναι πάντα η πιο αηδιαστική, η ***** σάρκα η πιο δελεαστική",locked:true,faketitle:"Classified",
        media:[
          { type: "image", src: "images/Rose.jpg",className:"Rose" }
        ]
       },
       {
         title: "Journal Entry", file: "Texts/Journal.txt", folder: "roisin", spotify: "2NHHKv9F4mYLSMfMl0jayB", password: ["e3b9a682efe9df925d1ac45a6354552daea2329aabcbf072add023f6c2ad8e38","f335fb846a57b59feb8ae3406b18a3f23c610b3360646f735d127047ea81173a"], riddle: "Tι είναι η Róisín? 3 121 19 21",locked:true,faketitle:"Evidence",
        media:[
          { type: "image", src: "images/image.png",className:"Butterfly" }
        ]
       },
              {
         title: "Sign of Life", file: "Texts/SheExists.txt", folder: "roisin", spotify: "0U0EuFlP1Wpp65Es8eCF6i", password: ["d272ecefb65ed28b2ce570c6315f63b2f5ecc959dda76cf7d51fe6ebd957af75"], riddle: "Welcome Detective",locked:true,faketitle:"Detective's Personal Notes",
        media:[
          { type: "image", src: "images/betternews.png",className:"News" },
          { type: "image", src: "images/badnews.jpg",className:"News" },
           { type: "image", src: "images/Bca.jpg",className:"Red" },
            { type: "image", src: "images/Roisin.jpg",className:"Rose" },
             { type: "image", src: "images/Eye.jpg",className:"Red" }
        ],
        type:"audio",
        audio:"audio/morse.wav"
       },
      {
        title:"Hard Drive of Roisin De Valognes",file:"Texts/HardDrive.txt", folder: "roisin",spotify:"4YMc3A256xFBS0xcT77Qce",password:["ef70578fa5a95f34d14eea0e7143d176d616cfff9e381009440969fb990cd8f7"], riddle:"Qj vwm'km vbivbvk qpal, blbv a aizb jwxv plal, iwwpqteg wrqublia, wj b kekvgm igzmkl uc eijweeom xhz ekg jxiwlv. A mzypb qhc afbz bb, xem htawtwjw qw bgwlblxbdbvkbz | Hint:All Left",locked:true,faketitle:"Computer"
        
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
  { title: "Read Me", file: "Texts/ReadMe.txt", spotify: "5KahLK67IOhTUSZzW8mb5h" },
  { title: "Privacy Policy", file: "Texts/privacy.txt"}
]

let particleColor = "220, 220, 220"
let particlesVisible = true
let dyslexiaMode = false

const main = document.querySelector(".main")
const sidebar = document.querySelector(".sidebar")
//Spotify shenanigans
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
//Reveal code for texts
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
    const html = el.innerHTML
    const result = html.replace(/(<span class="annotation"[^>]*>(?:(?!<\/span>).)*<\/span><\/span>)|(\S+)/g, (match, annotation, word) => {
      const groupIndex = Math.floor(globalIndex / 50)
      globalIndex++
      const content = annotation || word
      return `<span class="word-group" style="animation-delay: ${titleDelay + groupIndex * 0.3}s">${content} </span>`
    })
    el.innerHTML = result
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

//Link Creation
texts.forEach(function(entry) {
  if (entry.folder) {
    const folder = document.createElement("div")
    folder.classList.add("folder")
    if (entry.className) folder.classList.add(entry.className) //For later customisation
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

//Swipe code
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
//Load Text, contains the Check Answer, hashing easter eggs etc
function loadText(item) {
  const teasing = [
    "You could do Better",
    "You'll never find her like that",
    "Are we serious Detective",
    "Time is running out"
  ]

  async function checkAnswer() {
    const answer = document.querySelector(".riddle-input").value.toLowerCase()
    const encoder = new TextEncoder()
    const data = encoder.encode(answer+"sdjgvnsidkvbsadvjbuerigbd23n3fv74gh9802bf82o3ndf928ghf874")
    const hashBuffer = await crypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("")

    if (item.password.includes(hashHex)) {
      item.locked=false
      unlockSidebarItem(item)
      fetchAndLoad(item)
    }else if(item.password.includes("e3b9a682efe9df925d1ac45a6354552daea2329aabcbf072add023f6c2ad8e38")&&(hashHex==="cf5315b6322773cf0f93e7f79c576c8a636e37356c1a68a6483722cde4c0f7af" || hashHex==="0b44563f91b72d4805507115f3fb3a3ea6a083b6ddd23c7991d4b76b1188c5f2")){
      document.querySelector(".riddle-error").textContent = "Cute, but she is so much more than a Rose"
    }//Above is for text 2, a cool easter egg
     else {
      let i = Math.floor(Math.random() * teasing.length)
      document.querySelector(".riddle-error").textContent = teasing[i]
    }
  }

  if (item.password && item.locked===true) {

  let challengeHTML = `
    <input type="text" class="riddle-input" placeholder="Your answer...">
  `

  if (item.type === "audio") {

    const extension = item.audio.split('.').pop()

    challengeHTML = `
      <audio controls class="audio-player">
        <source src="${item.audio}" type="audio/${extension}">
      </audio>

      <input type="text" class="riddle-input" placeholder="Your answer...">
    `
  }

  main.innerHTML = `
    <div class="riddle">
      <h1>${item.riddle}</h1>

      ${challengeHTML}

      <button class="riddle-submit">Enter</button>
      <p class="riddle-error"></p>
    </div>
  `

  const input = document.querySelector(".riddle-input")
  const button = document.querySelector(".riddle-submit")

  button.addEventListener("click", checkAnswer)

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      checkAnswer()
    }
  })

  return
}

  fetchAndLoad(item)
}
let annotationLocked = false
function positionTip(tip, rect) {
  tip.style.position = "fixed"
  tip.style.display = "block"
  tip.style.zIndex = "9999"

  if ('ontouchstart' in window) {
    tip.style.maxWidth = (window.innerWidth - 40) + "px"
    tip.style.left = "50%"
    tip.style.transform = "translateX(-50%)"
    tip.style.top = (rect.bottom + 8) + "px"
    return
  }

  tip.style.maxWidth = Math.min(400, window.innerWidth * 0.4) + "px"
  tip.style.left = "0px"
  tip.style.top = "-9999px"
  void tip.offsetWidth
  const tipWidth = tip.offsetWidth
  const tipHeight = tip.offsetHeight
  let left = rect.left
  let top = rect.bottom + 8
  if (left + tipWidth > window.innerWidth - 10) left = window.innerWidth - tipWidth - 10
  if (left < 10) left = 10
  if (top + tipHeight > window.innerHeight) top = rect.top - tipHeight - 8
  tip.style.left = left + "px"
  tip.style.top = top + "px"
}
//Annotation Button, stack overflow  i understand half of this lowkey
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("annotation")) {
    annotationLocked = !annotationLocked
    const tip = e.target._tip || e.target.querySelector(".annotation-tip")
    if (annotationLocked) {
      e.target.style.opacity = "0.7"
      if (tip) {
        document.body.appendChild(tip)
        const rect = e.target.getBoundingClientRect()
        positionTip(tip,rect)
        e.target._tip = tip
        e.target._locked = true
      }
    } else {
      e.target.style.opacity = ""
      if (tip) {
        e.target.appendChild(tip)
        tip.style.display = "none"
        e.target._locked = false
      }
    }
  }
})
//Hover for annotations
document.addEventListener("mouseover", function(e) {
  if (e.target.classList.contains("annotation")) {
    const tip = e.target.querySelector(".annotation-tip")
    if (tip) {
      document.body.appendChild(tip)
      const rect = e.target.getBoundingClientRect()
      positionTip(tip,rect)
      e.target._tip = tip
    }
  }
})

document.addEventListener("mouseout", function(e) {
  if (e.target.classList.contains("annotation") && e.target._tip && !e.target._locked) {
    e.target.appendChild(e.target._tip)
    e.target._tip.style.display = "none"
    e.target._tip = null
  }
})
//My own Overleaf style image input, now handles annotations too
function fetchAndLoad(item) {
  particleColor = item.folder === "roisin" ? "231, 0, 18" : "220, 220, 220"
  if (item.spotify) {
    document.querySelector(".spotify-player").src =
      `https://open.spotify.com/embed/track/${item.spotify}`
  }
  else{
    document.querySelector(".spotify-player").src="";
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
          text = text.replace(/\{\{(.*?)\|(.*?)\|(.*?)\}\}/g, '<span class="annotation" style="border-bottom: none; text-decoration: none; color: $3">$1<span class="annotation-tip">$2</span></span>')
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
//Mobile Button
if ('ontouchstart' in window) {
  document.querySelector(".sidebar-indicator").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar")
    if (sidebar.classList.contains("open")) {
      closeSidebar()
    } else {
      openSidebar()
    }
  })
}
//Visitor
document.querySelector(".visitor-count").addEventListener("load", function() {
  this.classList.add("loaded")
})

function easterEgg(){
  console.log("%c Data is poisoned", "background: #000; color: #e0e0e0; font-size: 20px; font-family: serif; padding: 10px 20px; border: 1px solid #e0e0e0;")
  console.log("%c All artificial inteligence has been halted, manual navigation is needed Detective ", "background: #000; color: #e0e0e0; font-size: 20px; font-family: serif; padding: 10px 20px; border: 1px solid #e0e0e0;")
  console.log("%c Roisin was a tech genius, but some doors are better left closed than open", "background: #000; color: #e0e0e0; font-size: 20px; font-family: serif; padding: 10px 20px; border: 1px solid #e0e0e0;")
  console.log("%c Perhaps the key to the cipher must be somewhere here", "background: #000; color: #e0e0e0; font-size: 20px; font-family: serif; padding: 10px 20px; border: 1px solid #e0e0e0;")
}
easterEgg()
//Dyslexia
document.querySelector(".Dyslexic-Mode").addEventListener("click", function() {
  dyslexiaMode = !dyslexiaMode
  document.body.style.fontFamily = dyslexiaMode ? "OpenDyslexic, serif" : ""
  document.body.style.letterSpacing = dyslexiaMode ? "0.05em" : ""
  document.body.style.lineHeight = dyslexiaMode ? "2" : ""
  this.textContent = dyslexiaMode ? "Default Mode" : "Dyslexic Mode"
})
//Snow button
document.querySelector(".hide-snow").addEventListener("click", function() {
  particlesVisible = !particlesVisible
  canvas.style.display = particlesVisible ? "block" : "none"
  this.textContent = particlesVisible ? "Hide Snow" : "Show Snow"
})

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const particles = Array.from({ length: 240 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 1.5 + 0.5,
  speed: Math.random() * 0.4 + 0.1,
  opacity: Math.random() * 0.4 + 0.1,
  drift: (Math.random() - 0.5) * 0.3
}))
//Animations
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach(p => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`
    ctx.fill()
    p.y += p.speed
    p.x += p.drift
    if (p.y > canvas.height) {
      p.y = 0
      p.x = Math.random() * canvas.width
    }
    if (p.x > canvas.width || p.x < 0) {
      p.x = Math.random() * canvas.width
    }
  })
  requestAnimationFrame(animate)
}

animate()

