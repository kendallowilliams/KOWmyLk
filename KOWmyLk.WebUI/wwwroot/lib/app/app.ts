import Portfolio from "./Portfolio/portfolio";

export default class App {
    private portfolio: Portfolio;

    constructor() {
        this.initializeControls();
        this.portfolio = new Portfolio();
    }

    private initializeControls(): void {
        $('[data-bs-toggle="popover"]').popover();
    }
}