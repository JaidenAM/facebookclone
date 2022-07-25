import React from "react";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Post = () => {
return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="One Piece"
      subheader="September 14, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://sportshub.cbsistatic.com/i/2021/09/08/e23e97f1-4f4e-4129-afeb-a7ca6fd3f316/one-piece.png?width=1200"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        The Best Anime of all time Peak Piece, or better known as One Piece. A pirate anime that follows the adventures of the Straw Hat Pirates and their adventure to the One Piece
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  );
}

export default Post;