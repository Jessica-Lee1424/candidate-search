// Define the interface for the candidate object
export interface Candidate {
    login: string; // GitHub username
    id: number; // Unique identifier
    avatar_url: string; // URL for the candidate's avatar
    html_url: string; // URL to the candidate's GitHub profile
    // Add any other properties you need based on the API response
  }