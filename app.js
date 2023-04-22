const generateColor = document.querySelector('.generate-color')
const colorContainers = document.querySelectorAll('.color-container')



function getRandomColor(){
    const colors = ['#FF5733', '#9B59B6', '#3498DB', '#F1C40F', '#2ECC71', '#E74C3C'];

    for(let i = 0; i < colorContainers.length; i++){
        const color = colors[Math.floor(Math.random() * colors.length)]
        colorContainers[i].style.backgroundColor = color
        colorContainers[i].nextElementSibling.textContent = color
    }
}


generateColor.addEventListener('click', getRandomColor)