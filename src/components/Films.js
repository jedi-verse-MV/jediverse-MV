import React from "react";
import { Card, Grid } from "semantic-ui-react";

function Films({ data }) {
  return (
    <>
      <h1 align="center">Star Wars Films</h1>
      <Grid columns={3}>
        {data.map((films, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <header>{films.title}</header>
                  </Card.Header>
                  <Card.Description>
                    <label>Episode</label>
                    <p>{films.episode_id}</p>
                    <label>Description</label>
                    <p>{films.opening_crawl}</p>
                    <label>Director</label>
                    <p>{films.director}</p>
                    <label>Release Date</label>
                    <p>{films.release_date}</p>
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

export default Films;
