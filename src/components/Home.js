/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { Grid, Image, Card, Message } from "semantic-ui-react";

function Home() {
  const posters = [
    {
      image: "https://i.ebayimg.com/images/g/gHwAAOSwKtpcUP3-/s-l1600.jpg",
      video: "https://www.youtube.com/watch?v=he6e-ySOdRs",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      video: "https://www.youtube.com/watch?v=IPaYPlcEiYg&list=PLKcGEIO7V0rU0PIJA2DF4AM1KPUnsgg8z",
    },
    {
      image: "https://m.media-amazon.com/images/I/51UPI34OUyL._AC_UF1000,1000_QL80_.jpg",
      video: "https://www.youtube.com/watch?v=nohQReM7BpI",
    },
    {
      image: "https://i.pinimg.com/originals/48/a9/7f/48a97f9f1f795c872bb0568b201631f2.jpg",
      video: "https://www.youtube.com/watch?v=gW_3aJkavgc",
    },
    {
      image: "https://i.ebayimg.com/images/g/0EoAAOSwc7xgVThu/s-l1600.jpg",
      video: "https://www.youtube.com/watch?v=Ij0DxFbLXVw",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      video: "https://www.youtube.com/watch?v=uXYC0GrHAvE",
    },
    {
      image: "https://i.ebayimg.com/images/g/pqgAAOSwP~BgZ1SV/s-l1600.jpg",
      video: "https://youtube.com/watch?v=f1PhK2WIEpM",
    },
    {
      image: "https://www.limitedruns.com/media/cache/c8/c2/c8c27e59b3c6de8ae5598fca2d5ac20c.jpg",
      video: "https://youtube.com/watch?v=amgojdMJP6o",
    },
    {
      image: "https://i.ebayimg.com/images/g/Mb8AAOSwVCVkEr~M/s-l1600.jpg",
      video: "https://www.youtube.com/watch?v=B87Hh5tN5E0&list=OLAK5uy_lRxZeiLCrKgNgef8hdenLy0kMk4x_i3So&index=7",
    },
  ];

  // Keeps track of the index of the currently hovered poster card for onMouse events 
  const [hoveredIndex, setHoveredIndex] = useState(-1); 
  return (
    <>
      <h1 align="center">Welcome to the JediVerse!</h1>
      <div>
        <Message className="message">
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
          <br></br>
          <p>
            Welcome to the JediVerse! The unofficial Star Wars catalogue! Through this website you can navigate through
            the different tabs above to see the people, species, planets, and all of the films that make up the Star
            Wars Universe! Learn more about the galaxy's most influential people, and the places they have been. Please
            feel free to look through all of the sections above and enjoy some of the classic movie posters below! And
            as always...May the force be with you!
          </p>
        </Message>
      </div>
      <br></br>
      <Grid columns={3}>
        {posters.map((poster, i) => {
          return (
            <Grid.Column key={i}>
              <Card onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(-1)}>
              {/* The onMouseEnter and onMouseLeave handlers update the hoveredIndex state variable each time a user hovers over the poster card */}
                <Card.Content>
                  {hoveredIndex === i && <div className="hover-message">Click me!</div>}
                  {/* Conditional rendering added here, "Click Me!" message is only displayed when the hoveredIndex matches the current index of the poster card being */}

                  <a href={poster.video}>    
                  {/* Links to each video for each image listed in array above, when the poster image card is clicked will then take to that specified link */}
                    <Image className="poster" src={poster.image} />
                  </a>
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
