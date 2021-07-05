import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import "./CardComponent.css";
const CardComponent = ({ type, img }) => {
  return (
    <div>
      <Card className="chart_card" style={{ width: 200, height: 160 }}>
        <Typography
          className="chart_title"
          variant="subtitle1"
          style={{ marginLeft: 20 }}
        >
          {type}
        </Typography>
        <CardContent>
          <img src={`img/${img}`} style={{ height: 100, width: 150 }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
