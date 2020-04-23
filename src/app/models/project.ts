import { ProjectCardType } from './project-card-type';

export interface Project {
    /**
     * 项目的名称
     */
    name: string;
    /**
     * 描述
     */
    descrption?: string;
    /**
     * 项目平台的图标
     */
    icon?: string;
    /**
     * 项目的类型 网页地址 ｜ 下载资源 ｜ 二维码
     */
    type: ProjectCardType;
    /**
     * 网页、资源地址或二维码base64
     */
    url?: string;
}