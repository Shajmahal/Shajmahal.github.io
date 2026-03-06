const year=document.getElementById("year")
if(year)year.textContent=new Date().getFullYear()

const navToggle=document.getElementById("navToggle")
const navLinks=document.getElementById("navLinks")

navToggle?.addEventListener("click",()=>{
navLinks.classList.toggle("open")
})

const statusText=document.getElementById("statusText")
const statusDot=document.getElementById("statusDot")

if(statusText){
statusText.textContent="Open to internships • 2026"
statusDot.style.background="#22c55e"
}

const lines=[
"Amala Shaji — Computer Engineering portfolio",
"Hardware • Embedded Systems • Software",
"Building projects and documenting results"
]

const ids=["typeLine1","typeLine2","typeLine3"]

async function type(){
for(let i=0;i<lines.length;i++){
const el=document.getElementById(ids[i])
if(!el)continue
for(let c of lines[i]){
el.textContent+=c
await new Promise(r=>setTimeout(r,20))
}
await new Promise(r=>setTimeout(r,200))
}
}

type()

function openModal(key){

const overlay=document.getElementById("overlay")
const modal=document.getElementById("modalContent")

const data={
pcb:"<h2>PCB Design</h2><p>Board design and testing.</p>",
firmware:"<h2>Firmware</h2><p>Embedded sensor firmware.</p>",
software:"<h2>Software</h2><p>Application prototype.</p>"
}

modal.innerHTML=data[key]
overlay.classList.add("active")
}

function closeModal(){
document.getElementById("overlay").classList.remove("active")
}
