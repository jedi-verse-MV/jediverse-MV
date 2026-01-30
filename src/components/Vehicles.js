import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";

function Vehicles({ data, page, next, previous }) {
  const totalPages = 4; // sets total number of pages
  const isLastPage = page === totalPages; // checks to see if the page is equal to total pages

  return (
    <>
      <h1 align="center"> Vehicles of Star Wars</h1>
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
          {data.map((vehicles, i) => {
            return (
              <Grid.Column key={i} divided="true">
                <Card>
                  <Card.Content>
                    <Card.Header>
                      <header>{vehicles.name}</header>
                    </Card.Header>
                    <Card.Description>
                      <label>Model</label>
                      <p>{vehicles.model}</p>
                      <label>Manufacturer</label>
                      <p>{vehicles.manufacturer}</p>
                      <label>Vehicle Class</label>
                      <p>{vehicles.vehicle_class}</p>
                      <label>Max Atmospheric Speed</label>
                      <p>{vehicles.max_atmosphering_speed}</p>
                      <label>Crew and Passengers</label>{" "}
                      <p>
                        Crew: {vehicles.crew}
                        <br></br>
                        Passengers: {vehicles.passengers}
                      </p>
                      <label>Cargo Capacity</label>
                      <p>{vehicles.cargo_capacity}</p>
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

export default Vehicles;
