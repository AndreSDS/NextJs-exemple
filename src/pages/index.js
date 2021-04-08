import React from 'react';
import { Button, Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="Youtube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
     id: 1,
     title: 'Olá teste',
     authorName: "André",
     thumb: 'https://img.freepik.com/free-photo/emale-hand-showing-thumbs-up-gesture_77190-292.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617148800',
     avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
     views: 54000, 
     url: 'url',
     updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Olá teste',
      authorName: "André",
      thumb: 'https://img.freepik.com/free-photo/emale-hand-showing-thumbs-up-gesture_77190-292.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617148800',
      avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      views: 54000, 
      url: 'url',
      updatedAt: new Date(),
     },
     {
      id: 3,
      title: 'Olá teste',
      authorName: "André",
      thumb: 'https://img.freepik.com/free-photo/emale-hand-showing-thumbs-up-gesture_77190-292.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617148800',
      avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      views: 54000, 
      url: 'url',
      updatedAt: new Date(),
     },
     {
      id: 4,
      title: 'Olá teste',
      authorName: "André",
      thumb: 'https://img.freepik.com/free-photo/emale-hand-showing-thumbs-up-gesture_77190-292.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617148800',
      avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      views: 54000, 
      url: 'url',
      updatedAt: new Date(),
     }
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
