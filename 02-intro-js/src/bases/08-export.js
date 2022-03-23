import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id === id);
}

export const getHeroeByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner);
}

// console.log(getHeroeById(5));
// console.log(getHeroeByOwner('DC'));