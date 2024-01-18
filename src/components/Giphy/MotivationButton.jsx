import React, { useState } from 'react';
import axios from 'axios';
import GameMotivation from './GameMotivation';


const MotivationButton = ({ motivation }) => {
  const [showModal, setShowModal] = useState(false);
  const [gifUrl, setGifUrl] = useState('');
  const [quote, setQuote] = useState('');

  const handleMotivateClick = async () => {
    try {
      // Fetch gif based on searchTerm
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${motivation}&api_key=5l5dVPScVcrWCA6AgKaZxU222XtFwPG7&limit=1&offset=5&rating=g&lang=en`
      );
      const gifData = response.data.data[0];
      setGifUrl(gifData.images.original.url);
    } catch (error) {
      console.error('Error fetching gif:', error);
    }

    try {
      // Fetch inspirational quote
      const quoteResponse = await axios.get('YOUR_QUOTE_API_ENDPOINT');
      const quoteData = quoteResponse.data.quote;
      setQuote(quoteData);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }

    // Show the modal
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleMotivateClick}>
        Motivate Me
      </button>
      
      {/* Render MotivationModal based on showModal state */}
      {showModal && (
        <MotivationModal
          showModal={showModal}
          closeModal={closeModal}
          gifUrl={gifUrl}
          quote={quote}
        />
      )}
    </>
  );
};

export default MotivationButton;
