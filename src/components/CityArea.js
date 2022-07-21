import React from "react";
import { Grid } from "semantic-ui-react";
const CityArea = ({error,show}) => {
  return (
    <>
      <Grid.Row className="text-area-row">
        <label>
          {error ? (
            <h2 style={{ color: "red" }}>INVALID INPUT !!!</h2>
          ) : (
            show.toUpperCase()
          )}
        </label>
      </Grid.Row>
    </>
  );
};

export default CityArea;
