let imgcontainer = document.getElementById('image-container')
let input = document.getElementsByTagName('input')[0]
let btn = document.getElementsByTagName('button')[0]
let childs = document.getElementsByClassName('childs')
let innerHTML = ''
let numImg = 0
let random
let choosen = []
let images = [{
  src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80',
  text: 'landscape photography of mountain hit by sun rays',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1588099246635-d6868ab08b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
  text: 'green tree on brown field during daytime',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
  text: 'gray concrete bridge and waterfalls during daytime',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
  text: 'foggy mountain summit',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
  text: 'green grass field during sunset',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
  text: 'silhouette of trees near body of water during sunset',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
  text: 'landmark photography of trees near rocky mountain under blue skies daytime',
  tags: 'Nature'
},{
  src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
  text: 'silhouette photography of person',
  tags: 'Universe'
},{
  src: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuaXZlcnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
  text: 'purple and black galaxy illustration',
  tags: 'Universe Galaxy'
},{
  src: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
  text: 'a person standing on top of a sandy hill',
  tags: 'Hd Scenery Wallpapers Desert Images Hisma Hisma Desert Neom Travel Destination Saudi Arabia Landscape Images & Pictures Nature Images Outdoors Rock Hd Sky Wallpapers People Images & Pictures Coast Hd Water Wallpapers Shoreline Sea Beach Images & Pictures Photography Horizon Free Stock Photos'
},{
  src: 'https://images.unsplash.com/photo-1694309984301-60e69e095ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
  text: 'a woman laying on the ground next to flowers',
  tags: 'Girl Women Flowers Lying'
},{
  src: "https://images.unsplash.com/photo-1694587971464-0c03c44e2899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  text: 'a group of windmills are silhouetted against a sunset',
  tags: 'Windmills Sunset'
},{
  src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
  text: 'monitor showing Java programming',
  tags: 'Course Hack Hacker Hacking Editor Blur Backgrounds Bokeh Developers Hd Black Wallpapers Landscape Images & Pictures Typography Colour Text Words Gray Css Internet Webdesign Hd Red Wallpapers Hd White Wallpapers Hd Yellow Wallpapers Hd Green Wallpapers Creative Commons Images'
},{
  src: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
  text: 'brown tabby kitten sitting on floor',
  tags: "Cat Images Pictures Animals Images Pictures Pet Face Fur Sit Portrait Young Baby Images & Photos Feline 1,000,000+ Free Images Nature Images Hd Wallpapers Edgar Little Cat Brown Backgrounds Mammal Abyssinian Backgrounds"
},{
  src: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
  text: "polar bear on snow covered ground during daytime",
  tags: "Animals Images & Pictures Bear Pictures & Images Wildlife Brown Backgrounds Polar Bear Polar Nature Images Arctic Hi Reference Mammal Standing Free Stock Photos"
},{
  src: "https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  text: "polar bear on water during daytime",
  tags: "Animals Images & Pictures Bear Pictures & Images Wildlife Polar Bear Animals Images & Pictures Nature Images Arctic Polar Hd Grey Wallpapers Mammal Free Stock Photos"
},{
  src: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  text: "brown tiger walking on brown sand during daytime",
  tags: "Animals Images & Pictures Tiger Images & Pictures Wildlife Brown Backgrounds Animals Images & Pictures Nature Images India Kanha National Park Cat Images & Pictures Mammal Ground HD Wallpapers"
},{
  src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
  text: "panda eating bamboo",
  tags: "Animals Images & Pictures Panda Images & Pictures Panda Images & Pictures Wildlife Hungry Hunger Bear Pictures & Images Giant Panda Mammal Free Pictures"
},{
  src: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
  text: "blue and red bird during daytime",
  tags: "Birds Images Love Images Animallovers Cute Images & Pictures Pet Animals Images & Pictures Birdlovers Mothernature Twilight Nature Images Photooftheday Exposure Composition Birds Images Plumbeous Water Redstart Redstart Hd Water Wallpapers Jay Finch Blue Jay Backgrounds"
},{
  src : "https://images.unsplash.com/photo-1536514900905-0d5511b9d489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  text: "photo of blue and green peacock",
  tags: "Animals Images & Pictures Birds Images Peacock Images Greece Feather Hd Color Wallpapers Hd Blue Wallpapers Neck Close Up Detail Wildlife Beautiful Pictures & Images Hd Pretty Wallpapers Farm Animal Pet Tail Details Nikon Zoom Backgrounds Colours Creative Commons Images"
},{
  src: "https://images.unsplash.com/photo-1502031176098-2e91ccc16e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  text: "close up photography of blue peacock painting",
  tags: "Animals Images & Pictures Peacock Images Birds Images Hd Pattern Wallpapers Display Hq Background Images Animal Backgrounds Hd Blue Wallpapers Hd Animals Wallpapers Hd Wallpapers Birds Images Feathers Nature Images Symmetrical Symmetry Hd Turquoise Wallpapers Plumage Tail Backgrounds"
},{
  src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  text: "shallow focus photography of multi colored bird",
  tags: "Kenya Lewa Wildlife Conservancy Isiolo Reference Colourful Bird David Clode Roller Lewa Safari African Safari Lilac-Breasted Roller Animals Images & Pictures Macro Close Up African African Bird Lilac Breasted Roller Painting Inspiration Backgrounds"
},{
  src: "https://images.unsplash.com/photo-1603516863860-7d5c93a83fe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  text: "white and black skull on brown wooden surface",
  tags: "Halloween Images & Pictures Ghost Images Horror Spooky Light Backgrounds Skull Images & Pictures Hd Dark Wallpapers Sphere Hd Fire Wallpapers Bonfire Flame Free Images"
},{
  src: "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  text: "pumpkin -head Scarecrow decor",
  tags: "Halloween Images & Pictures Fall Images & Pictures Hd Autumn Wallpapers Autumnal Brown Backgrounds Pumpkin Images & Pictures Pumpkin Head Spooky Scary Images & Pictures Human People Images & Pictures Scarecrow Light Backgrounds Free Images"
},{
  src: "https://images.unsplash.com/photo-1592887714077-1c2ca9cdcf48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  text: "full moon covered by clouds",
  tags: "Halloween Images & Pictures Nature Images Fall Images & Pictures Hd Autumn Wallpapers Moon Images & Pictures Hd Wallpapers Autumnal Hd Sky Wallpapers Night Outdoors Astronomy Outer Space Pictures Space Images & Pictures Universe Eclipse Images & Pictures Lunar Eclipse Animals Images & Pictures HD Wallpapers"
}]
if (screen.width < 800) {
  let height = images.length * 100
height = height.toString()
imgcontainer.style.width = '100%'
imgcontainer.style.height = `${height}vw`
}
else{
  let height = images.length * 40
height = height.toString()
imgcontainer.style.width = '100%'
imgcontainer.style.height = `${height}vw`
}
window.addEventListener('load', ()=>{
  for (let i = 0; i < images.length; i++) {
  do {
    random = Math.floor(Math.random()*images.length)
  } while (choosen.includes(random) && choosen.length < (images.length+1));
  choosen.push(random)
  imgcontainer.innerHTML += `<div data-tags='${images[random].tags.toUpperCase()}' data-text='${images[random].text}' class="childs"><img src='${images[random].src}'></div>`
  }
  for (let i = 0; i < images.length; i++) {
  childs[i].addEventListener('click', () => {
    localStorage.setItem("src", event.currentTarget.firstElementChild.src)
    localStorage.setItem("text", event.currentTarget.dataset.text)
    location.href = 'details.html'
    for (let i = 0; i < childs.length; i++) {
    if (childs[i].dataset.tags.toUpperCase().includes(event.currentTarget.dataset.tags.toUpperCase()) || event.currentTarget.dataset.tags.toUpperCase().includes(childs[i].dataset.tags.toUpperCase())) {
      numImg++
      localStorage.setItem(`img${numImg}`, childs[i].firstElementChild.src)
      localStorage.setItem(`img${numImg}T`, childs[i].dataset)
    }
  }
  localStorage.setItem('images', numImg)
  })
}
})
input.addEventListener('input', ()=>{
  let numberImage = 0
  for (let i = 0; i < childs.length; i++) {
    childs[i].style.display = 'none'
  }
  for (let i = 0; i < childs.length; i++) {
    if (childs[i].dataset.tags.includes(input.value.toUpperCase())) {
      childs[i].style.display = 'flex'
      numberImage++
    }
  }
  if (screen.width < 800) {
imgcontainer.style.width = '100%'
imgcontainer.style.height = `${numberImage*100}vw`
}
else{
imgcontainer.style.width = '100%'
imgcontainer.style.height = `${numberImage*40}vw`
}
})
btn.addEventListener('click',()=>{
  event.preventDefault()
  input.value = ''
})