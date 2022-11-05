
let wachlist = []
var contadorID = 1;


class Pelicula {

    constructor(titulo, year, director, img, video, genero) {
        this.id = contadorID++;
        this.titulo = titulo;
        this.year = year;
        this.director = director;
        this.img = img;
        this.video = video;
        this.genero = genero;
    }
}

const pelicula1 = new Pelicula('Black Adam', 2022, 'Jaume Collet-Serra', 'https://www.imdb.com/title/tt6443346/mediaviewer/rm787678721/?ref_=tt_ov_i', 'https://www.imdb.com/video/vi3315844377/?playlistId=tt6443346&ref_=tt_ov_vi', 'accion');

const pelicula2 = new Pelicula('The Shawshank Redemption ', 1994, 'Frank Darabont', 'https://www.imdb.com/title/tt0111161/mediaviewer/rm2366020609/?ref_=tt_ov_i', 'https://www.imdb.com/video/vi3877612057/?playlistId=tt0111161&ref_=tt_ov_vi', 'drama');

const pelicula3 = new Pelicula(' Schindler\'s List', 1993, 'Steven Spielberg', 'https://www.imdb.com/title/tt0108052/mediaviewer/rm4007168769/?ref_=tt_ov_i', 'https://www.imdb.com/video/vi1158527769/?playlistId=tt0108052&ref_=tt_pr_ov_vi', 'historia');

wachlist.push(pelicula1);
wachlist.push(pelicula2);
wachlist.push(pelicula3);

console.log(wachlist);

