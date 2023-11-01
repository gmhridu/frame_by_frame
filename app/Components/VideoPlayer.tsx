'use client'
import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { VideoToFrames, VideoToFramesMethod } from '../utils/VideoFrames';
import {
  VideoJSOptions,
  dummyAspectRatio,
  dummyVideoLink,
  dummyVideoThumbnailLink,
  dummyVideoType,
} from '../dummy';
import Image from 'next/image';

const VideoPlayer: React.FC<{ videoSource: string }> = ({ videoSource }) => {
  // console.log(videoSource)
  const videoJsOptions: VideoJSOptions = {
    autoplay: false,
    controls: true,
    poster: dummyVideoThumbnailLink,
    sources: [
      {
        src: videoSource, // Use the provided video source
        type: dummyVideoType,
      },
    ],
    aspectRatio: dummyAspectRatio,
    playbackRates: [1, 0.5],
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef(null);

  const [videoPlayerInformation, setVideoPlayerInformation] =
    useState(videoJsOptions);
  const [frames, setFrames] = useState<string[]>([]); // To store frames

  useEffect(() => {
    let canceled = false;
    let videoElement: HTMLVideoElement;

    const loadVideo = async () => {
      if (!videoRef.current) {
        return;
      }
      try {
        const vjsPlayer = videojs(videoRef.current, videoPlayerInformation);
        
        
      } catch (error) {
        console.error('Video initialization error:', error);
      }
    };
    loadVideo();

    return () => {
      canceled = true;
    };
  }, [videoPlayerInformation, videoSource]);

  const handleCrop = async () => {
    if (!videoRef.current) return;
    const blob = await fetch(videoSource).then(response => response.blob());
    console.log(URL.createObjectURL(blob))
    const startCrop = videoRef.current.currentTime;
    const endCrop = videoRef.current.duration;

    try {
      const frames = await VideoToFrames.getFrames(
        URL.createObjectURL(blob),
        30, // Frames per second
        VideoToFramesMethod.totalFrames,
        startCrop,
        endCrop
      );

      // Now, you can set the frames in the state or process them as needed.
      setFrames(frames);
    } catch (error) {
      console.error('Error extracting frames:', error);
    }
  };


  return (
    <div className="w-[50%] h-full">
      <video ref={videoRef} className="video-js" />

      {/* <div className="">
        <button >Crop</button>
      </div> */}
      {/* <canvas id='canvas-id' width="320" height="180" style={{ border: '1px solid black' }} >
      </canvas> */}
      
      {/* Render frames */}
      {frames?.length > 0 && (
        <div className="max-w-[100%] flex gap-2 overflow-x-scroll">
          {frames.map((frame, index) => (
            <img key={index} src={frame} alt={`Frame ${index + 1}`} />
          ))}
        </div>
      )}


      <button className='px-3 py-2 bg-blue-400 text-center' onClick={handleCrop}>Crop</button>
    </div>
  );
};

export default VideoPlayer;
