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
    surname: string;
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
    actors: Actor;
    budget: BigInteger;
    county: string;
    description: string;
    director: Director;
    duration: number;
    genres: Genres;
    likes: number;
    movies_id: number;
    poster: string;
    rating: number;
    title: string;
    year: number;
}