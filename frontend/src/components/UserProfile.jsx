function UserProfile({ user, onLogout }) {
  return (
    <div className="container">

      <h1>Welcome, {user.displayName} 👋</h1>

      <p>{user.email}</p>

      <button onClick={onLogout}>
        Logout
      </button>

    </div>
  );
}

export default UserProfile;