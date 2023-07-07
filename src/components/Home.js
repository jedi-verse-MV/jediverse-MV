/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Grid, Image, Card, Message } from "semantic-ui-react";

function Home() {
  const posters = [
    {
      image: "https://i.ebayimg.com/images/g/gHwAAOSwKtpcUP3-/s-l1600.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/51UPI34OUyL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image: "https://i.pinimg.com/originals/48/a9/7f/48a97f9f1f795c872bb0568b201631f2.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/0EoAAOSwc7xgVThu/s-l1600.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/pqgAAOSwP~BgZ1SV/s-l1600.jpg",
    },
    {
      image: "https://www.limitedruns.com/media/cache/c8/c2/c8c27e59b3c6de8ae5598fca2d5ac20c.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/Mb8AAOSwVCVkEr~M/s-l1600.jpg",
    },
  ];

  return (
    <>
      <h1 align="center">Welcome to the JediVerse!</h1>
      <div>
        <Message className="message">
          {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://giphy.com/embed/l378ndHJn4bvW8wWQ"
            width="480"
            height="201"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/starwars-star-wars-chewbacca-l378ndHJn4bvW8wWQ">
              <h2>A long time ago in a galaxy far far away...</h2>
            </a>
          </p>
          <p>
            Welcome to the JediVerse! The unofficial Star Wars catalogue! Through this website you can navigate through the different tabs above to see the people, species, planets, and all of the films that make up the Star Wars Universe! Learn more about the galaxy's most influential people, and the places they have been. Please feel free to look through all of the sections above and enjoy some of the classic movie posters below! And as always...May the force be with you!
          </p>
        </Message>
      </div>
      <br></br>
      <Grid columns={3}>
        {posters.map((poster, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Image className="poster" src={poster.image} />
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}

export default Home;
