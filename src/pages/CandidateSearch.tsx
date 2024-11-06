import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  // State to hold the candidates
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // Example useEffect to fetch candidates
  useEffect(() => {
    const fetchCandidates = async () => {
      const result = await searchGithub(); // Replace with your actual API call
      setCandidates(result);
    };

    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              {candidate.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;