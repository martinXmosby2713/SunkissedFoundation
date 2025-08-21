// DOCUMENT CONTENT LOADED LISTENER FOR THE MODAL DISPLAY FOR EACH IMAGE
document.addEventListener("DOMContentLoaded", (e) => {

    const modal = document.querySelector('.galleryModal');
    const modalClose = document.querySelector('.close');
    const modalImg = document.getElementById('modal-img');
    const modalArtist = document.getElementById('modal-artist')
    const modalPrice = document.getElementById('modal-price');
    const itemBox = document.querySelectorAll('.itemBox');
    const schoolLogo = document.getElementById('schoolLogo')
    const school = document.getElementById('school')

    itemBox.forEach(item => {
        item.addEventListener('click', function (e) {
            const artist = this.getAttribute('data-artist');
            const price = this.getAttribute('data-price');
            const img = this.querySelector('img').getAttribute('src');
            const alt = this.querySelector('img').getAttribute('alt');
            const logo = this.getAttribute('data-schoolLogo');
            const schoolName = this.getAttribute('data-school');

            // Populate Modal
            modalArtist.textContent = artist;
            modalPrice.textContent = `${price}`;
            modalImg.src = img;
            modalImg.alt = alt;
            schoolLogo.src = `../HBCUS/${logo}`;
            schoolLogo.alt = `${artist}`
            school.textContent = ` ${schoolName}`

            if (schoolName.includes('Howard') || schoolName.includes('North Carolina') || schoolName.includes('Tuskegee') || schoolName.includes('Tennessee')) {
                schoolLogo.style.filter = 'brightness(5)'
            } else {
                schoolLogo.style.filter = 'none'
            }

            // To show Modal
            modal.style.display = 'flex';
        })
    })

    modalClose.addEventListener('click', function (e) {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none'
        }
    })
    // End of Content loaded
})

// JQUERY FILTER 
$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter')
        if (value === 'All') {
            $('.itemBox').fadeIn('2000')
        } else {
            $('.itemBox').not('.' + value).fadeOut('2000')
            setTimeout(()=>{
                $('.itemBox').filter('.' + value).fadeIn('2000')
            },400)
        }
    })

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})
