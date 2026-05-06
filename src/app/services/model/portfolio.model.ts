
export interface SkillItem {
    name: string;
    level: number;
    icon: string;
}

export interface SkillCategory {
    category: string;
    icon: string;
    items: SkillItem[];
}