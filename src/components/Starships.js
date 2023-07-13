import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";

function Starships({ data, page, next, previous }) {
  const totalPages = 4; //sets the total number of pages
  const isLastPage = page === totalPages; // checks to see if page is equal to totalpages

  return (
    <>
      <h1 align="center"> Starships of Star Wars</h1>
      <div className="button">
        <Button compact color="purple" disabled={page === 1} onClick={previous}>
          Previous
        </Button>
        <Button compact color="purple" disabled={isLastPage} onClick={next}>
          Next
        </Button>
      </div>
      <br />
      <div>
        <Grid columns={3}>
          {data.map((starships, i) => {
            return (
              <Grid.Column key={i} divided="true">
                <Card>
                  <Card.Content>
                    <Card.Header>
                      <header>{starships.name}</header>
                    </Card.Header>
                    <Card.Description>
                      <label>Model</label>
                      <p>{starships.model}</p>
                      <label>Starship Class</label>
                      <p>{starships.starship_class}</p>
                      <label>Manufacturer</label>
                      <p>{starships.manufacturer}</p>
                      <label>Max Atmospheric Speed</label>
                      <p>{starships.max_atmosphering_speed}</p>
                      <label>Crew and Passengers</label>{" "}
                      <p>
                        Crew: {starships.crew}
                        <br></br>
                        Passengers: {starships.passengers}
                      </p>
                      <label>Hyperdrive Rating</label>
                      <p>{starships.hyperdrive_rating}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Starships;