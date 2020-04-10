const sections = $('.section');
const display = $('.main');

let inScroll = false;

const performTransition = function(seсtionEq) {
    if(inScroll === false){
        inScroll = true;
        const position = seсtionEq * -103;

        sections.eq(seсtionEq).addClass('active-section').siblings().removeClass('active-section');

        display.css({
            transform: `translateY(${position}%)`
        });

        setTimeout(() => {
            inScroll = false;
        }, 1300)
    }
};

const scrollSection = function(direction) {
    const activeSection = sections.filter('.active-section');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if(nextSection.length && direction === 'next'){
        performTransition(nextSection.index());
    }

    if(prevSection.length && direction === 'prev'){
        performTransition(prevSection.index());
    }
}

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0){
        scrollSection('next');
    }

    if(deltaY < 0){
        scrollSection('prev');
    }
});

$(document).on('keydown', function(e) {
    const tagName = e.target.tagName.toLowerCase();

    if(tagName !== 'input' && tagName !== 'textarea'){
        switch(e.keyCode){
            case 38:
                scrollSection('prev');
                break;
            case 40:
                scrollSection('next');
                break;
        }
    }
});

$('[data-scroll-to]').on('click', function(e){
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');

    performTransition(target);
});



