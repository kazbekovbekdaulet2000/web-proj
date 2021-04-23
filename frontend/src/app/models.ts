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

    // name = models.CharField(max_length = 50)
    // birth_date = models.DateField(null = True, blank = True)
    // death_date = models.DateField(null = True, blank = True)
    // county = models.CharField(max_length = 50)
    // person_details = models.CharField(max_length = 1000)
    // awards = models.CharField(max_length = 50)
    // award_nominations =models.CharField(max_length = 50)
    // link
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