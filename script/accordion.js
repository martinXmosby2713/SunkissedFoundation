document.addEventListener('DOMContentLoaded', function(){

    const allAccordions = document.querySelectorAll('.accordion')
    allAccordions.forEach(accordion => {
        accordion.addEventListener("click", function(){
            allAccordions.forEach(acc => {
                if(acc !== this){
                    acc.classList.remove('active');
                    acc.nextElementSibling.style.maxHeight = null;
                }
            });
            // Toggle 'this' panel
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if(panel.style.maxHeight){
                panel.style.maxHeight = null;
            }else{
                panel.style.maxHeight = panel.scrollHeight = panel.scrollHeight + 'px'
            }
        })
    })
})