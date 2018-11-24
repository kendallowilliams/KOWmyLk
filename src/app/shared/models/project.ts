import { IProject } from './interfaces/project.interface';
import { ILink } from './interfaces/link.interface';

export class Project implements IProject {
    title: string;
    subtitle: string;
    description: string;
    links: ILink[];
}
