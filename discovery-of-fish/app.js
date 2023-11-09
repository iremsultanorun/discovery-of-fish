

let line = document.querySelector('.line');
let boat =document.querySelector('.boat')
let lineHeight = 0;
let buton = document.querySelector('.btnbig');





buton.addEventListener('click', () => {

    line.style.height = '300px'
    window.addEventListener('scroll', () => {

        const scrollY = window.scrollY;
        lineHeight = scrollY;
        line.style.height = lineHeight + 'px';

    });

});


let open = true;


let cardBottoms = document.querySelectorAll('.card-bottom');
let btnsmalls = document.querySelectorAll('.btnsmall');




btnsmalls.forEach((btnsmall, index) => {
    btnsmall.addEventListener('click', () => {

      
        cardBottoms.forEach((card, Index) => {
            card.style.display = 'none';

        });
        open = !open;
      
        if (cardBottoms[index].style.display === 'block' ||  open) {
            cardBottoms[index].style.display = 'block';
            
            btnsmall.style.width = '40px';
            btnsmall.style.height = '40px';
            btnsmall.style.borderRadius = '100%';
            btnsmall.textContent = '';
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-fish');
            icon.style.fontSize='20px'
            icon.style.marginTop='3px'
            btnsmall.appendChild(icon);
           
        } else {
            cardBottoms[index].style.display = 'none';
        }
    });
});

let cards = document.querySelectorAll('.card')

window.addEventListener('scroll', checkbox)

function checkbox(){
    cards.forEach((cardd)=> {
        const box = cardd.getBoundingClientRect().top
        if(box < window.innerHeight){
            cardd.classList.add('show')

        } else{
            cardd.classList.remove('show')
        }

    })
}
checkbox()

