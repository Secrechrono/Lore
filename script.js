const texts = [
  {
    folder: "The Human Frequency",
    items: [
      { title: "Η Ανθρώπινη Συχνότητα", file: "Texts/Η Ανθρώπινη Συχνότητα" },
      { title: "Στιγμιαία Ταλάντωση", file: "Texts/Στιγμιαία Ταλάντωση.txt" }
    ]
  },
  //{ title: "Standalone Text", file: "Texts/standalone.txt" }
]

const main = document.querySelector(".main")
const sidebar = document.querySelector(".sidebar")

function loadText(item) {
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