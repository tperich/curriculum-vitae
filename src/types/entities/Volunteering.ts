import { BaseSectionItem } from "./BaseSectionItem";

export interface Volunteering extends Partial<Exclude<BaseSectionItem, "address">> {}
