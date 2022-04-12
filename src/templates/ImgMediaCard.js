import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import awsIam from '../images/aws-iam.png'

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: "400" }}>
      <CardMedia
        component="img"
        alt="AWS IAM"
        height="150"
        width="100"
        image= {awsIam}
        style={{
          objectFit: 'contain'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AWS IAM
        </Typography>
        <Typography variant="body2" color="text.secondary">
        AWS Identity and Access Management helps to access the aws services or resources by the user or group of user in more secure manner.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}