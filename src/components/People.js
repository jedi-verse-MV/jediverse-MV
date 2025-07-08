import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import HomeworldName from "./HomeworldName";

function People({ data, next, previous, page }) {
  const totalPages = 9; // total pages for people
  const isLastPage = page === totalPages; // checks to see if this is the last page
  return (
    <>
      <h1 align="center"> People of Star Wars</h1>
      <div className="button">
        <Button compact color="teal" disabled={page === 1} onClick={previous}>
          Previous
        </Button>
        <Button compact color="teal" disabled={isLastPage} onClick={next}>
          Next
        </Button>
      </div>
      <br />
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
                      <label>Birth Year</label>
                      <p>{people.birth_year}</p>
                      <label>Gender</label>
                      <p>{people.gender}</p>
                      <label>Homeworld</label>
                      <p>
                        <HomeworldName homeworldUrl={people.homeworld} />
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
