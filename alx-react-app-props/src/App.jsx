import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  // The data we want to share across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
