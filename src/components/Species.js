import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";

function Species({ data, page, next, previous }) {
  const totalPages = 4; //sets the total number of pages
  const isLastPage = page === totalPages; // checks to see if page is equal to totalpages

  return (
    <>
      <h1 align="center"> Species of Star Wars</h1>
      <div className="button">
        <Button color="purple" disabled={page === 1} onClick={previous}>
          Previous
        </Button>
        <Button color="purple" disabled={isLastPage} onClick={next}>
          Next
        </Button>
      </div>
      <br></br>
      <div>
      <Grid columns={3}>
          {data.map((species, i) => {
            return (
              <Grid.Column key={i} divided="true">
                <Card>
                  <Card.Content>
                    <Card.Header>
                      <header>{species.name}</header>
                    </Card.Header>
                    <Card.Description>
                      <label>Classification</label>
                      <p>{species.classification}</p>
                      <label>Designation</label>
                      <p>{species.designation}</p>
                      <label>Average Lifespan</label>
                      <p>{species.average_lifespan}</p>
                      <label>Homeworld</label>{" "}
                      <p>
                        <a href={species.homeworld}>{species.homeworld}</a>
                      </p>
                      <label>Language</label>
                      <p>{species.language}</p>
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

export default Species;
