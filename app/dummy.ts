export const dummyVideoLink =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
export const dummyVideoThumbnailLink =
  'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp';
export const dummyVideoType = 'video/mp4';
export const dummyAspectRatio = '16:9';

export interface SourcesVideoJSOptions {
  src: string;
  type: string;
}
export interface VideoJSOptions {
  autoplay: boolean;
  controls: boolean;
  poster: string;
  sources: Array<SourcesVideoJSOptions>;
  aspectRatio: string;
  playbackRates: Array<number>;
}
export interface VideoElements {
  id: number;
  title: string;
  thumbnailUrl: string;
  uploadTime: string;
  videoUrl: string;
  type: string;
}

export const dummyVideoArray: VideoElements[] = [
  {
    id: 1,
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
    uploadTime: 'May 9, 2011',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'video/mp4',
  },
  // {
  //   id: 2,
  //   title: 'The first Blender Open Movie from 2006',
  //   thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  //   type: 'video/mp4'
  // },
  // {
  //   id: 3,
  //   title: 'For Bigger Blazes',
  //   thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  //   type: 'video/mp4'
  // },
  // {
  //   id: 4,
  //   title: 'For Bigger Escape',
  //   thumbnailUrl: 'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  //   type: 'video/mp4'
  // },
  // {
  //   id: 5,
  //   title: 'Big Buck Bunny',
  //   thumbnailUrl:
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //   type: 'video/mp4'
  // },
  // {
  //   id: 6,
  //   title: 'For Bigger Blazes',
  //   thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  //   type: 'video/mp4'
  // },
  // {
  //   id: 7,
  //   title: 'For Bigger Escape',
  //   thumbnailUrl: 'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  //   type: 'video/mp4'
  // },
  // {
  //   id: 8,
  //   title: 'The first Blender Open Movie from 2006',
  //   thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
  //   uploadTime: 'May 9, 2011',
  //   videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  //   type: 'video/mp4'
  // }
];
