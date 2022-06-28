let eye = document.getElementById("eye")
let eye_cover = document.getElementById("eye_cover")
let brain = document.getElementById("brain")
let line = document.getElementById("line")
let status_text = document.getElementById("status_text")

status_text.value = 'disconnected'
status_text.onclick = () =>
{
    status_text.blur()
}

let eye_onclick_count = 0
let brain_onclick_count = 0

let eye_onclick = eye.onclick = () => 
{
    eye_onclick_count++
}

let brain_onclick = brain.onclick = () => 
{
    brain_onclick_count++
}

function handleOrgansClick()
{
    console.log("eye:", eye_onclick_count)
    console.log("brain:", brain_onclick_count)
    if (eye_onclick_count == 1 && brain_onclick_count == 1)
    {
        line.style.visibility = 'visible'
        eye_cover.style.visibility = 'hidden'
        status_text.value = 'connected'
        console.log("connected")
    }
    else if (eye_onclick_count == 2 && brain_onclick_count <= 1)
    {
        line.style.visibility = 'hidden'
        eye_cover.style.visibility = 'visible'
        status_text.value = 'disconnected'
        console.log("disconnected")
        eye_onclick_count = 0
        brain_onclick_count = 0
    }
    else if (eye_onclick_count < brain_onclick_count)
    {
        console.log("brain is more than eye")
        brain_onclick_count = 0
    }
}

document.addEventListener('click', handleOrgansClick, false)