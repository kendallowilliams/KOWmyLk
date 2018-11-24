import { ILink } from './link.interface';

export interface IProject {
    title: string;
    subtitle: string;
    description: string;
    links: ILink[];
}
