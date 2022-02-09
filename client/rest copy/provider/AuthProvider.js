

export function AuthProvider({ children }) {
    const auth = useAuth();
  
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }
