export interface Comment {
    id: number;
    author: string;
    content: string;
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    description: string;
    text: string;
    date: string;
    image: string;
    comments: Comment[];
}