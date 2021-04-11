import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const useStyles = makeStyles((theme) => ({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
    },
    img: {
      width: '100%'
      },
}));

function VideoCard({ item }) {
  const { caption, img } = useStyles();

  return (
    <Box>
      <img className={img} alt={item.title} src={item.thumb} />
      <Box display="flex" mt="1">
        <Box mr="2">
          <Avatar alt={item.authorName} src={item.avatar}>
            SS
          </Avatar>
        </Box>
        <Box ml="2">
          <Typography
            className={caption}
            gutterBottom
            variant="body2"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">{`${
            item.views
          } - ${dayjs(item.updatedAt).fromNow()}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;
