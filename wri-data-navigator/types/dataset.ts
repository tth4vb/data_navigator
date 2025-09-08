export interface Dataset {
  Dataset: string;
  Summary: string | null;
  Domain: string | null;
  "Where is the Data Available?": string | null;
  Format: string | null;
  "Time (Refresh Freq.)": string | null;
  "Time (Historical Length)": string | null;
  "Time (Forecast Horizon)": string | null;
  "Space (Resolution)": string | null;
  "Space (Coverage)": string | null;
  Methods: string | null;
  "Accuracy (Known Error)": string | null;
  "Rights (Remix?)": string | null;
  "Rights (Share?)": string | null;
  "Theoretical Relevance": string | null;
  "CRS Relevant?": string | null;
  "What is the CRS Use Case?": string | null;
}

export interface DataStore {
  Data: Dataset[];
  "TBA-Models": any[];
  "TBA-Other Tools": any[];
}