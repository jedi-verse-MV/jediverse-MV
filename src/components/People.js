/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Card, Grid} from "semantic-ui-react";

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
                    <Card.Header>
                      <header>{people.name}</header>
                    </Card.Header>
                    <Card.Description>
                      <label>Height</label>
                      <p>{people.height}</p>
                      <label>Birth Year</label> <p>{people.birth_year}</p>
                      <label>Gender</label>
                      <p>{people.gender}</p>
                      <label>Homeworld</label>
                      <p>
                        <a href={people.homeworld}>{people.homeworld}</a>
                      </p>
                      <label>Hair Color</label>
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
