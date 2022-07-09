const hidden = document.querySelectorAll('.hidden')
hidden.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.classList.contains('hidden')){
        element.classList.remove('hidden')
    }
    else {
    element.classList.add('hidden')
    }
    })
});
