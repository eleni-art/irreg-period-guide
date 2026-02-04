
export type PageType = 'PAGE_1' | 'PAGE_2' | 'COPY' | 'VEO';

export interface MagazineContent {
  title: string;
  subheading: string;
  intro: string;
  disclaimer: string;
}

// Added for Veo video generation configuration
export enum AspectRatio {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}

// Added to track the asynchronous state of video generation
export type VideoGenerationState =
  | { status: 'idle' }
  | { status: 'checking_key'; progressMessage: string }
  | { status: 'generating'; progressMessage: string }
  | { status: 'polling'; progressMessage: string }
  | { status: 'completed'; videoUri: string }
  | { status: 'error'; error: string };

