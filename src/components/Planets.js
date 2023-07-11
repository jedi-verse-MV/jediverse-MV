import React from "react";
import { Card, Grid } from "semantic-ui-react";


function Planets({ data }) {
  return (
    <>
      <h1 align="center"> Planets of Star Wars</h1>
      <Grid columns={3}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header><header>{planets.name}</header></Card.Header>
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
