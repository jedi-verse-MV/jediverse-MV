import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";

function Planets({ data, next, previous, page }) {
  const totalPages = 6; // total pages for planets
  const isLastPage = page === totalPages; // checks to see if this is the last pag

  return (
    <>
      <h1 align="center"> Planets of Star Wars</h1>
      <div className="people-button">
        <Button compact color="purple" disabled={page === 1} onClick={previous}>
          Previous
        </Button>
        <Button compact color="purple" disabled={isLastPage} onClick={next}>
          Next
        </Button>
      </div>
      <br />
      <Grid columns={3}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <header>{planets.name}</header>
                  </Card.Header>
                  <Card.Description>
                    <label>Climate</label>
                    <p>{planets.climate}</p>
                    <label>Diameter</label>
                    <p>{planets.diameter}</p>
                    <label>Population</label>
                    <p>{planets.population}</p>
                    <label>Gravity</label>
                    <p>{planets.gravity}</p>
                    <label>Orbital Period</label>
                    <p>{planets.orbital_period}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}

export default Planets;
