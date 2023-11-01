const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
// const cros = require('cros');

// app.use(
//   cros()
// );
app.use(express.json());

// // Define an API endpoint to get video files
// app.get('/api/video', (req, res) => {
//   const videoDirectory =
//     'C:Users/mahab/OneDrive/Desktop/DML/Frame_Frame_Priview/frame_by_frame/app/mediaFiles';
//   // Read the list of video files in the directory
//   // Send the list of video files as a response
//   // You can use the 'fs' module to read the directory and list files

//   // Example using fs.readdirSync
//   const videoFiles = fs
//     .readdirSync(videoDirectory)
//     .filter(filename => filename.endsWith('.mp4')); // Filter for video files

//   res.json({ videos: videoFiles });
// });

app.get('/api/video', async (req, res) => {
  const videoUrl = req.query.url;

  try {
    // Fetch the video from the remote source
    const response = await axios.get(videoUrl, { responseType: 'stream' });

    // Set response headers to allow cross-origin access
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    // Pipe the video content to the response
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send('Error fetching video');
  }
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
