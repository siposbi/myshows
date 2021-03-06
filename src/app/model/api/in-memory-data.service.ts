import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Show} from '../Show';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const shows = [
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZTQ2Mjg2M2MtNTExNi00MTgxLTk3MTYtOTI4ZDRmM2JkNWQ4XkEyXkFqcGdeQXVyNzIyMTA4MjA@._V1_SX300.jpg',
        id: 1,
        title: 'American Vandal',
        releaseYear: 2017,
        imdbUrl: 'https://www.imdb.com/title/tt6877772',
        netflixUrl: 'https://www.netflix.com/title/80117545',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BYjg1ZmQ0ZDktMjNhZS00MDJjLTllZTItMmIyYTBkYjM2MzQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 2,
        title: 'Atypical',
        releaseYear: 2017,
        imdbUrl: 'https://www.imdb.com/title/tt6315640',
        netflixUrl: 'https://www.netflix.com/title/80117540',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxMDE5NGMtMjAxOS00OGIzLTg5NTQtNGIyOTEzNThhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 3,
        title: 'Hyperdrive',
        releaseYear: 2019,
        imdbUrl: 'https://www.imdb.com/title/tt8911552',
        netflixUrl: 'https://www.netflix.com/title/80189648',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BN2ZhNmQ2MjQtMmQzMi00YjE5LTlkMWMtMjk5YzIxMjk2NDc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 4,
        title: 'The End of the F***ing World',
        releaseYear: 2017,
        imdbUrl: 'https://www.imdb.com/title/tt6257970',
        netflixUrl: 'https://www.netflix.com/title/80175722',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BODUzODY1NzEtYjNiNy00NzEwLThhYzEtZGUxZjQ4MDRiNjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 5,
        title: 'Insatiable',
        releaseYear: 2018,
        imdbUrl: 'https://www.imdb.com/title/tt6487482',
        netflixUrl: 'https://www.netflix.com/title/80179905',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg',
        id: 6,
        title: 'Sex Education',
        releaseYear: 2019,
        imdbUrl: 'https://www.imdb.com/title/tt7767422',
        netflixUrl: 'https://www.netflix.com/title/801975R26',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BYWJhMWMyZmUtNTc3Mi00MTYzLTllMjMtNzFkM2ZhYTg2ZWFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        id: 7,
        title: 'Elite',
        releaseYear: 2018,
        imdbUrl: 'https://www.imdb.com/title/tt7134908',
        netflixUrl: 'https://www.netflix.com/title/80200942',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZDJjOTg4OWYtYWIyOS00MjQ3LTg5ZDktYzU2N2RkNmYzNjZlXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
        id: 8,
        title: 'You',
        releaseYear: 2018,
        imdbUrl: 'https://www.imdb.com/title/tt7335184',
        netflixUrl: 'https://www.netflix.com/title/80211991',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BNTk1OWE3MmItNDhlYi00NGM4LTkwMWUtM2NkZWJiNjQyNGIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        id: 9,
        title: 'Never Have I Ever',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt10062292',
        netflixUrl: 'https://www.netflix.com/title/80179190',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BYjdiMDBlNWUtMzRlZi00ZDk1LWIzYWItN2NhODQ0MDE2NjY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        id: 10,
        title: 'Summertime',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt11269886',
        netflixUrl: 'https://www.netflix.com/title/81004936',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMDA1MjMyOTItZDdiZS00MjFhLThmYTYtNWI4YTE4MzJiMWRiXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg',
        id: 11,
        title: 'White Lines',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt9073958',
        netflixUrl: 'https://www.netflix.com/title/80993591',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 12,
        title: '13 Reasons Why',
        releaseYear: 2017,
        imdbUrl: 'https://www.imdb.com/title/tt1837492',
        netflixUrl: 'https://www.netflix.com/title/80117470',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BNWYwMzE2MGItOTYwYy00YmQyLWE0NGQtZWViMTU4ZTk4ZjQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 13,
        title: 'Space Force',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt9612516',
        netflixUrl: 'https://www.netflix.com/title/81021929',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZWFjMDhkY2YtMTljYi00MWNjLTgyNjQtN2NjNjQ3ZjZhMzJlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SX300.jpg',
        id: 14,
        title: 'Dynasty',
        releaseYear: 2017,
        imdbUrl: 'https://www.imdb.com/title/tt6128300',
        netflixUrl: 'https://www.netflix.com/title/80179394',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BYWIxMmVmZWMtZmEyNy00YmU4LWI2ZjctZjhlNmU1NTAzYTYwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg',
        id: 15,
        title: 'Baby',
        releaseYear: 2018,
        imdbUrl: 'https://www.imdb.com/title/tt7645192',
        netflixUrl: 'https://www.netflix.com/title/80211634',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BOGVhNzJjOGMtODVhMC00MzNmLThhOWItYTc3OTFkMGZhMTUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 16,
        title: 'Blood & Water',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt9839146',
        netflixUrl: 'https://www.netflix.com/title/81044547',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BYTFjZjQzZDgtOWEyNy00YmY1LTgyYjQtMTBlODUxZTBiZWRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 17,
        title: 'Emily in Paris',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt8962124',
        netflixUrl: 'https://www.netflix.com/title/81037371',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BOTg3YjU0NGUtMTFhYi00OWMwLThmOGYtYTg5MDJhMTdmMWIwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg',
        id: 18,
        title: 'Teenage Bounty Hunters',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt10584608',
        netflixUrl: 'https://www.netflix.com/title/80244296',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZDNiZTEzMjgtNmU5OS00Yjc2LWJlMTUtNDI1ZGEzZTkxNzE5XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg',
        id: 19,
        title: 'Control Z',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt11937662',
        netflixUrl: 'https://www.netflix.com/title/81021245',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZTk3NTU5NzAtNGY0Zi00YTIwLWI0MWUtNTliMmVjOWNiY2VjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg',
        id: 20,
        title: 'Love & Anarchy',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt10888876',
        netflixUrl: 'https://www.netflix.com/title/81069541',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_SX300.jpg',
        id: 21,
        title: 'The Queen\'s Gambit',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt10048342',
        netflixUrl: 'https://www.netflix.com/title/80234304',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BNTcyOTA3ZWUtOWEwMy00YjI5LWIyNjctNTAyYjI5ZmE0NGI4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        id: 22,
        title: 'Dead to Me',
        releaseYear: 2019,
        imdbUrl: 'https://www.imdb.com/title/tt8064302',
        netflixUrl: 'https://www.netflix.com/title/80219707',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BYmZmN2NlMjQtOTJiYS00ZmI4LWFmMTItNDk1ZDNmYTBkZDZiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
        id: 23,
        title: 'DASH & LILY',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt1758589',
        netflixUrl: 'https://www.netflix.com/title/81037871',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMzg0YWYxNjAtYTNmNC00ODlhLTg5YzQtMDNlNmE2YWFhMGZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        id: 24,
        title: 'The Mess You Leave Behind',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt9731242',
        netflixUrl: 'https://www.netflix.com/title/81033361',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZTk3MTdmODUtMTEwMy00NjNhLTg3NGUtMzE5NGNiYTA5ZTA3XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg',
        id: 25,
        title: 'Good Girls',
        releaseYear: 2018,
        imdbUrl: 'https://www.imdb.com/title/tt6474378',
        netflixUrl: 'https://www.netflix.com/title/80177342',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BNzRlNGUzMmEtYTg0Ni00N2U2LTg4YWEtNDdlNmMwYjBlZDQ0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        id: 26,
        title: 'Lupin',
        releaseYear: 2021,
        imdbUrl: 'https://www.imdb.com/title/tt2531336',
        netflixUrl: 'https://www.netflix.com/title/80994082',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMzRmNzJjYWQtZTZkMC00NGE5LWFiYjQtYzJjNzFjYTFhNWMzXkEyXkFqcGdeQXVyODUwNTE3OTY@._V1_SX300.jpg',
        id: 27,
        title: 'The Minions of Midas',
        releaseYear: 2020,
        imdbUrl: 'https://www.imdb.com/title/tt10147520',
        netflixUrl: 'https://www.netflix.com/title/81051782',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMjFhNmI3ZjQtOTg2OC00N2VmLWEwNDgtYjE1ZTUwNjhiY2VkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        id: 28,
        title: 'Firefly Lane',
        releaseYear: 2021,
        imdbUrl: 'https://www.imdb.com/title/tt9012876',
        netflixUrl: 'https://www.netflix.com/title/80994340',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BMDk2Njg0ZTUtNTFjZS00NzUwLWEwZDQtZTg5MDZiMmJhNGEzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg',
        id: 29,
        title: 'Behind Her Eyes',
        releaseYear: 2021,
        imdbUrl: 'https://www.imdb.com/title/tt9698442',
        netflixUrl: 'https://www.netflix.com/title/80244630',
        myRating: Math.floor(Math.random() * 5) + 1
      },
      {
        coverUrl: 'https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_SX300.jpg',
        id: 30,
        title: 'When They See Us',
        releaseYear: 2019,
        imdbUrl: 'https://www.imdb.com/title/tt7137906',
        netflixUrl: 'https://www.netflix.com/title/80200549',
        myRating: Math.floor(Math.random() * 5) + 1
      },
    ];
    return {shows};
  }

  genId(shows: Show[]): number {
    return shows.length > 0 ? Math.max(...shows.map(show => show.id)) + 1 : 1;
  }
}
