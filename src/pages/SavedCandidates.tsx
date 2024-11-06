import SavedCandidatesList from "../components/SavedCandidatesList" //use candidateslist after line 6.  Need to make a candidate card component to represent individual components. savedcandidatelist component will be a list of candidate cards

const SavedCandidates = () => {
  return (
    <>
      <h1>Potential Candidates</h1>
      <SavedCandidatesList />
    </>
  );
};

export default SavedCandidates;
