import { BaseSectionItem } from "./BaseSectionItem";

export interface Volunteering extends Exclude<BaseSectionItem, "address"> {}
