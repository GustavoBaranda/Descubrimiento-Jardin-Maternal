let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () =>{

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('actives');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('actives');
            });
        }

    });
};
