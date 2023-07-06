import React from "react";
import { Card, Grid } from "semantic-ui-react";


function People({ data }) {
  return (
    <>
      <h1 align="center"> People of Star Wars</h1>
      <div>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i} divided="true">
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Birth Year</strong> <p>{people.birth_year}</p>
                    <strong>Gender</strong>
                    <p>{people.gender}</p>
                    <strong>Homeworld</strong>
                    <p><a href={people.homeworld}>{people.homeworld}</a></p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
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

export default People;
