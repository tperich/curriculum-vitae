export interface BaseSectionItem {
  title: string;
  startedAt?: string;
  endedAt: string;
  current: boolean;
  address: string;
  achievements?: string[];
  techStack?: string;
  responsibilities?: string;
}
