
export type PageType = 'PAGE_1' | 'PAGE_2';

export interface MagazineContent {
  title: string;
  subheading: string;
  intro: string;
  disclaimer: string;
}

/**
 * Supported aspect ratios for video generation.
 */
export enum AspectRatio {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}

/**
 * State of the video generation process.
 */
export interface VideoGenerationState {
  status: 'idle' | 'checking_key' | 'generating' | 'polling' | 'completed' | 'error';
  progressMessage?: string;
  videoUri?: string;
  error?: string;
}




