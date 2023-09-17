let srcI = localStorage.getItem("src")
let numImgs = localStorage.getItem('images')
numImgs = Number.parseInt(numImgs)
let text = localStorage.getItem("text")
let imgH = document.getElementsByClassName("img-holder")[0]
let relatedIMG = document.getElementsByClassName('relatedIMG')
let related = document.querySelector('.related')
let img = document.createElement("img")
let h4 = document.getElementsByTagName("h4")[0]
img.style.width= '100%'
img.src = srcI
imgH.append(img)
let loadImg = async ()=>{
  let apiLoad = await fetch(srcI)
  let response = await apiLoad.blob()
  let href = URL.createObjectURL(response)
  let anchor = document.getElementsByTagName("a")[1]
  anchor.href = href
  anchor.innerHTML = 'Download'
  anchor.download = 'image'
  anchor.classList.add("a")
  h4.innerHTML = text
}
loadImg()
for (let i = 1; i <= numImgs; i++) {
    let img = document.createElement('img')
    img.src = localStorage.getItem(`img${i}`)
    img.style.width = '47%'
    img.classList.add('relatedIMG')
    related.append(img)
}
for (let i = 0; i < numImgs; i++) {
  relatedIMG[i].addEventListener('click', ()=>{
    localStorage.setItem('src', event.currentTarget.src)
    localStorage.setItem('text', localStorage.getItem(`img${i+1}T`))
    localStorage.setItem('src', relatedIMG[i].src)
    location.href = 'details.html'
  })
}