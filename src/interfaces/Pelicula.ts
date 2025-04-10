interface Pelicula { 
    id: number,
    titulo: string,
    generos: [],
    anio: number,
    director: string,
    likes: number,
    portada?: string
}
export default Pelicula;