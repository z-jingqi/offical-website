import { ProjectCardType } from './project-card-type';

export interface Project {
    name: string;
    descrption?: string;
    icon?: string;
    type: ProjectCardType;
    sortIndex?: number;
}