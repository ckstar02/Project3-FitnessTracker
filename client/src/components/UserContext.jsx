import React, { createContext, useState, useEffect } from "react";
import { User } from "../../../server/src/models";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = Cookies.get('token');

  if (!token){
    console.log('No token assigned.');
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    )
  }

  const decoded = jwtDecode(token);
  const userId = decoded.id;

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await fetch(`api/user/${userId}`, {
          credentials: 'include',
        });

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}