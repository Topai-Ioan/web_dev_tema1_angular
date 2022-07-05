interface Actor {
    id: number;
    firstName: string;
    lastName: string;
}

interface Movie {
    id: number;
    rating: number;
    duration: number;
    name: string;
    releaseData: string;
    actors: Array<Actor>;
}