import { useState, useEffect } from 'react';

const useRandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // try {
      //   const response = await fetch();
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   const data = await response.json();
      //   setUser(data.results[0]);
      //   setLoading(false);
      // } catch (error) {
      //   setError(error);
      //   setLoading(false);
      // }
    };

    fetchUser();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { user, loading, error };
};

export default useRandomUser;
