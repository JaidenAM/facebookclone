import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
return (
  <Box flex={2} p={2} sx={{display: {xs: "none", sm:"block"}}}>
         <Box position={"fixed"} width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://media.comicbook.com/2021/06/yu-yu-hakusho-yusuke-urameshi-anime-1273444-1280x0.jpeg"/>
             <Avatar alt="Travis Howard" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/512e7a8a-033b-4885-828a-e078b4701798/dcupmbw-bd384171-5258-4069-8d8c-8520921ada76.png/v1/fill/w_1024,h_573,q_80,strp/angry_songoku_jpeg_by_aubreiprince_dcupmbw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTczIiwicGF0aCI6IlwvZlwvNTEyZTdhOGEtMDMzYi00ODg1LTgyOGEtZTA3OGI0NzAxNzk4XC9kY3VwbWJ3LWJkMzg0MTcxLTUyNTgtNDA2OS04ZDhjLTg1MjA5MjFhZGE3Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4wLmUkuleVvbsgx8uVpHvUttTDod4S43xVBsUO7mNEo" />
             <Avatar alt="Cindy Baker" src="https://www.worthview.com/wp-content/uploads/2019/03/Cult-Anime.jpg" />
             <Avatar alt="Agnes Walker" src="https://i.pinimg.com/736x/64/21/30/642130da9100e29f5fef88d465a39cc5.jpg" />
            <Avatar alt="Trevor Henderson" src="https://attackontitanstuff.com/wp-content/uploads/2021/05/168fdc7e05190e38535828b33c3ea531.jpg" />
            <Avatar alt="Remy Sharp" src="https://konachan.com/image/9f774765a2a77854ef401b84ee7d7a02/Konachan.com%20-%2070253%20blonde_hair%20clouds%20edward_elric%20fullmetal_alchemist%20gloves%20jpeg_artifacts%20male%20orange_eyes%20short_hair%20sky.jpg"/>
             <Avatar alt="Travis Howard" src="" />
             <Avatar alt="Cindy Baker" src="https://www.worthview.com/wp-content/uploads/2019/03/Cult-Anime.jpg" />
             <Avatar alt="Agnes Walker" src="https://i.pinimg.com/736x/64/21/30/642130da9100e29f5fef88d465a39cc5.jpg" />
            <Avatar alt="Trevor Henderson" src="https://attackontitanstuff.com/wp-content/uploads/2021/05/168fdc7e05190e38535828b33c3ea531.jpg" />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
              src="https://images7.alphacoders.com/756/756229.jpeg"
              alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src="https://media.comicbook.com/2020/09/dragon-ball-super-ending-z-fighters-team-reunion-1237292.jpeg?auto=webp"
              alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src="https://wallpaperaccess.com/full/702730.jpg"
              alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Goku" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/512e7a8a-033b-4885-828a-e078b4701798/dcupmbw-bd384171-5258-4069-8d8c-8520921ada76.png/v1/fill/w_1024,h_573,q_80,strp/angry_songoku_jpeg_by_aubreiprince_dcupmbw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTczIiwicGF0aCI6IlwvZlwvNTEyZTdhOGEtMDMzYi00ODg1LTgyOGEtZTA3OGI0NzAxNzk4XC9kY3VwbWJ3LWJkMzg0MTcxLTUyNTgtNDA2OS04ZDhjLTg1MjA5MjFhZGE3Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4wLmUkuleVvbsgx8uVpHvUttTDod4S43xVBsUO7mNEo" />
        </ListItemAvatar>
        <ListItemText
          primary="Fight this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Son Goku
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ichigo" src="https://i.pinimg.com/736x/64/21/30/642130da9100e29f5fef88d465a39cc5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Naruto, Yusuke, Ed
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
         </Box>
  </Box>
  );
}

export default Rightbar;