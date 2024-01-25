export interface ModelAndColor {
    code:        string;
    description: string;
    colors:      Color[];
}

export interface Color {
    code:        string;
    description: string;
    price:       number;
}
