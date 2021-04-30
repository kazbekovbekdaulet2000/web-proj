export interface AuthToken{
    token: string; 
}

export interface AuthData{
    username: string;
    password: string;
}

export interface User{
    email: string;
    name: string;
    surname: string;
    username: string;
    password: string;
    password2: string;
}

export interface Actor{
    name: string;
    birth_date: Date;
    death_date: Date;
    surname: string;
    person_details: string;
    awards: string;
    award_nominations: string;
    link: string;
}
export interface Genres{
    name: string;
    description: string;
}
export interface Director{
    name: string;
    surname: string;
}

export interface Movie{
    id: number;
    actors: Array<Actor>;  
    budget: number;
    county: string;
    description: string;
    director: Array<Director>;
    duration: number;
    genres: Array<Genres>;
    likes: number;
    poster: string;
    rating: number;
    title: string;
    year: number;
}

export interface UserProfile{
    email: string;
    name: string;
    surname: string;
    username: string;
    is_superuser: Boolean;
    image: string;
    wishlist: Array<string>;
}