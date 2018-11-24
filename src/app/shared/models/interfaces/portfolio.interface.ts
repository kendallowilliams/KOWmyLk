import { IProject } from './project.interface';

export interface IPortfolio {
    title: string;
    description: string;
    projects: IProject[];
}
