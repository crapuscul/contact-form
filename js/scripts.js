function changecolor(selectedRadio){
    const containers = document.querySelectorAll('.radio');
    for(let i=0; i<containers.length; i++){
        containers[i].classList.remove("active");
    }
    // containers.forEach(radio => radio.classList.remove("active"));

     if (selectedRadio.checked){
        selectedRadio.closest('.radio').classList.add("active");
     }
}