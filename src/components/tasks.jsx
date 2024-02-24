"use client"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const Tasks = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          課題一覧
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary">
          詳細
        </Button>
      </CardContent>
    </Card>
  );
}

export default Tasks;
