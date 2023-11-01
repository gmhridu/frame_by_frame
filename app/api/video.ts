import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';


const localDirectoryPath =
  'C:Users/mahab/OneDrive/Desktop/DML/Frame_Frame_Priview/frame_by_frame/app/mediaFiles'; // Update with your directory path

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const videoDirectory = path.join(process.cwd(), localDirectoryPath);
  
  const videoFiles = fs
    .readdirSync(videoDirectory)
    .filter(filename => filename.endsWith('.mp4')); // Filter for video files

  res.status(200).json({ videos: videoFiles });
};
