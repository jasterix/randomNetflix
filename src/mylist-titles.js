//Print just the title
let titles= document.querySelectorAll("p.fallback-text")
titles.forEach(title=> console.log(tittle["innerText"]))

// print the watch link for a title
let titles = document.querySelectorAll(".ptrack-content a")
titles.forEach(title => console.log(title.href))

//print title's image link
let images = document.querySelectorAll("img.boxart-image")
images.forEach(image=> console.log(image.currentSrc))

// print both title, image link and watch link
titles.forEach(title => console.table(title.ariaLabel, title.firstChild.firstChild.src, title.href))
