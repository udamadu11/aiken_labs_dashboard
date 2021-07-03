import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Typography,
  IconButton,
  CardContent,
  CardHeader,
} from "@material-ui/core";
const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          action={
            <IconButton>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faSearchPlus} />
              <FontAwesomeIcon icon={faEllipsisV} />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
