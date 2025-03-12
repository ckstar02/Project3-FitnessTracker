import '../css/recipieList.css';
import React from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom'

export default function recipieList(){
  const ResultPage = () => {
    const location = useLocation();
    const { result } = location.state || {result: "Failed to return"};
  }
  return(
    <>
      <Header />
        <main>
          {result};
        </main>
    </>
  )
}