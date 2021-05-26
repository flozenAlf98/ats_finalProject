import { Injectable } from "@angular/core";
import { BlogPost, Comment } from '../interfaces/blog.interfaces';

@Injectable()
export class BlogService {

    private _posts: BlogPost[] = [
        {
            id: 1,
            title: "The waves are high & beautiful",
            category: "travel",
            description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            date: "2015-03-15T08:40:51.620Z",
            image: "https://source.unsplash.com/weekly?nature",
            comments: [
                {
                    id: 1,
                    author: "Joe Doe",
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    id: 2,
                    author: "Joe Doe",
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    id: 3,
                    author: "Joe Doe",
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  }
            ]
        },
        {
            id: 2,
            title: "At the beach in winter",
            category: "lifestyle",
            description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            date: "2015-03-15T08:40:51.620Z",
            image: "https://source.unsplash.com/weekly?beach",
            comments: []
        },
        {
            id: 3,
            title: "The Edge of Nothing Lake",
            category: "business",
            description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
            date: "2015-03-15T08:40:51.620Z",
            image: "https://source.unsplash.com/random",
            comments: [
              {
                id: 1,
                author: "Joe Doe",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ]
        },
        {
            id: 4,
            title: "Five Hundred Twenty",
            category: "travel",
            description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
            date: "2015-03-15T08:40:51.620Z",
            image: "https://source.unsplash.com/collection/540518/likes/",
            comments: [
              {
                id: 1,
                author: "Joe Doe",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ]
        }

    ];

    private _categories: string[] = [
        'travel',
        'lifestyle',
        'business'
    ];

    private _currentCategory: string = '';

    private _title: string = "New Post";

    private _dataPost: BlogPost = {
        id: this.nextId,
        title: "",
        category: "",
        description: "",
        text: "",
        date: "",
        image: "https://source.unsplash.com/random",
        comments: []
    };

    get posts(): BlogPost[] {

        if( this._currentCategory.length === 0 ){
            return [...this._posts];
        }

        return this._posts.filter( post => {
            return post.category === this._currentCategory;
        });

    }

    get nextId(): number {
        return this._posts[this._posts.length -1 ].id + 1;
    }

    get categories(): string[] {
        return [...this._categories];
    }

    get titleDialog() {
        return this._title;
    }

    get dataPost() {
        return {...this._dataPost}
    }

    constructor () {}

    changeCategory( newCategory: string ): void {
        this._currentCategory = newCategory;
    }

    addPost( newPost: BlogPost ): void {
        this._posts.push(newPost);
    }

    deletePost( id: number ): void {
        this._posts = this._posts.filter( post => {
            return post.id != id
        });
    }

    editPost( changed: BlogPost): void {
        this._posts.forEach( post => {
            if( post.id == changed.id ){
                post.title = changed.title;
                post.description = changed.description;
                post.category = changed.category;
                post.image = changed.image;
            }
        });
    }

    loadDataPost( type: number, data: BlogPost ): void {

        if( type === 1 ){
            this._title = "New Post"
        }

        if( type === 2 ){
            this._title = "Edit Post"
        }

        this._dataPost = data;

    }

    addComment( newComment: Comment, blogId: number): void {
        this._posts.forEach( post => {
            if(post.id === blogId){
                post.comments.push(newComment);
            }
        })
    }

}