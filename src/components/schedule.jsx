"use client"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const Schedule = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          今日のスケージュール
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="08:50 ~ 10:20" />
          </ListItem>
          <ListItem>
            <ListItemText primary="10:30 ~ 12:00" />
          </ListItem>
          <ListItem>
            <ListItemText primary="13:10 ~ 14:40" />
          </ListItem>
          <ListItem>
            <ListItemText primary="14:50 ~ 16:20" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary">
          詳細
        </Button>
      </CardContent>
    </Card>
  );
}

export default Schedule;
