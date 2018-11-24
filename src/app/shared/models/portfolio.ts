import { IProject } from './interfaces/project.interface';
import { IPortfolio } from './interfaces/portfolio.interface';

export class Portfolio implements IPortfolio {
    title: string;
    description: string;
    projects: IProject[];
}
