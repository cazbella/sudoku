// // need to manage the showModal and closeModal functions in the parent component where we render the modal

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SetMotivation from './SetMotivation';

// const searchValue = props.motivation;

// const Modal = () => {
//   const [gifUrl, setGifUrl] = useState('');
//   const [quote, setQuote] = useState('');

//   function 

//   useEffect(() => {
//     const searchTerm = "cheeseburgers"; // Replace with search term variable
  
//     // Fetch gif based on searchTerm
//     const fetchGif = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.giphy.com/v1/stickers/search?q=${searchValue}&api_key=YOUR_API_KEY&limit=1&offset=5&rating=g&lang=en`
//         );
//         const gifData = response.data.data[0];
//         setGifUrl(gifData.images.original.url);
//       } catch (error) {
//         console.error('Error fetching gif:', error);
//       }
//     };
  
//     // Fetch inspirational quote
//     const fetchQuote = async () => {
//       try {
//         const response = await axios.get('YOUR_QUOTE_API_ENDPOINT');
//         const quoteData = response.data.quote;
//         setQuote(quoteData);
//       } catch (error) {
//         console.error('Error fetching quote:', error);
//       }
//     };

//     fetchGif();
//     fetchQuote();
//   }, []); // Trigger the fetch once on component mount

//   return (
//     <div className="modal fade" id="motivationModal" tabIndex={-1} role="dialog">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Motivation Modal</h5>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             {gifUrl && <img src={gifUrl} alt="Motivational Gif" />}
//             {quote && <div>{quote}</div>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
