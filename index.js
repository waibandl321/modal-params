
const images = document.querySelectorAll('.main__image');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');
const modalImage = document.querySelector('.modal__image');

function paramsId() {
    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', () => {
            let data = images[i].getAttribute('src');
            modalImage.setAttribute('src', data);
            modal.classList.add('active');
        })
        modal.addEventListener('click', (e) => {
            if(!e.target.modalInner) {
                modal.classList.remove('active');
                document.body.classList.remove('is-active');
            } else {
                return;
            }
        })
    }
}
paramsId();

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

index = getUrlParameter('id'); //?id=数字を取得
$('.main__image').eq(index - 1).trigger('click');

