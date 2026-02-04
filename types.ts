export type PageType = 'PAGE_1' | 'PAGE_2';

export interface MagazineContent {
  title: string;
  subheading: string;
  intro: string;
  disclaimer: string;
}

// Added AspectRatio and VideoGenerationState to fix compilation errors in VeoStudio.tsx

/**
 * Aspect ratios supported by the Veo video generation feature.
 */
export enum AspectRatio {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE'
}

/**
 * Represents the state of a video generation request.
 */
export interface VideoGenerationState {
  status: 'idle' | 'checking_key' | 'generating' | 'polling' | 'completed' | 'error';
  progressMessage?: string;
  videoUri?: string;
  error?: string;
}


