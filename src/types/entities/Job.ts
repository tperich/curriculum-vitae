import { BaseSectionItem } from "./BaseSectionItem";

export interface Job extends BaseSectionItem {
  position: string;
  company: string;
  hours: "Full-Time" | "Part-Time";
}
