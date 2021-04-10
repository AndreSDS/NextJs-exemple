import connectToDataBase from "src/utils/mongodb";

async function getVideos() {
  const { db } = await connectToDataBase();

  const data = db.collection('videos').find().toArray();

  return data;
}

export default getVideos;