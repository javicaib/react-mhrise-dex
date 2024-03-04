export interface Monsters {
    docs: Monster[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null;
    nextPage: number;
}

export interface Monster {
    _id: string;
    name: string;
    type: string;
    weakness: string[];
}


export async function fetchAllMonsters(page: number = 1) {

    const response = await fetch(`https://mh-rise-api.onrender.com//all?page=${page}`)

    if (!response.ok) throw new Error("No se han podido cargar los monstruos")

    const result: Monsters = await response.json()
    if (result.docs.length === 0) throw new Error("No se han podido cargar los monstruos")

    return result
}