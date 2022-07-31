export default class Portfolio {
    constructor() {
        this.initializeControls();
    }

    private initializeControls(): void {
        const $carousel = $('[data-carousel="KOWMoosic"]');

        $carousel.on('slid.bs.carousel', e => {
            const $currentItem = $((e as any).relatedTarget),
                isLightMode = $currentItem.attr('data-light-mode').toLowerCase() === 'true',
                $carousel = $(e.currentTarget);

            $carousel.toggleClass('carousel-dark', !isLightMode);
        });
    }
}