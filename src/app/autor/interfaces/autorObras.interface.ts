export interface RESTAutorObras {
    title:     string;
    author:    Author;
    lines:     string[];
    linecount: string;
}

export enum Author {
    WilliamShakespeare = "William Shakespeare",
}
