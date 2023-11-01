import Image from 'next/image'
import VideoPlayer from './Components/VideoPlayer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VideoPlayer videoSource="http://localhost:3001/api/video?url=https://res.cloudinary.com/gmshuvo/video/upload/v1698858810/Heart_Bypass_Surgery_CABG_a5rs1o.mp4" />
    </main>
  );
}

