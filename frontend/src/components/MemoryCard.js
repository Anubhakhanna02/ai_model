// import React from "react";
// import "../styles/Dashboard.css";

// const MemoryCard = ({ memory }) => {
//     return (
//         <div className="memory-card">

//             <p className="memory-text">
//                 {memory.text}
//             </p>

//             <div className="memory-info">
//                 <span>🔥 Importance: {memory.importance}</span>
//                 <span>⏳ Expires: {memory.expiry}</span>
//             </div>

//         </div>
//     );
// };

// export default MemoryCard;






// import React from "react";
// import "../styles/Dashboard.css";

// const MemoryCard = ({ memory }) => {
//   const getExpiry = () => {
//     if (!memory.timestamp) return "N/A";

//     const age = Date.now() - new Date(memory.timestamp).getTime();
//     const days = Math.floor(age / (1000 * 60 * 60 * 24));

//     return `${days} day(s) ago`;
//   };

//   return (
//     <div className="memory-card">

//       {/* 🔥 CONTENT */}
//       <p className="memory-text">
//         {memory.content}
//       </p>

//       {/* 🔥 INFO */}
//       <div className="memory-info">
//         <span>🔥 Importance: {memory.importance?.toFixed(2)}</span>
//         <span>📊 Score: {memory.score?.toFixed(2)}</span>
//         <span>📌 Type: {memory.type}</span>
//         <span>⏳ Age: {getExpiry()}</span>
//       </div>

//     </div>
//   );
// };

// export default MemoryCard;




import React from "react";
import "../styles/Dashboard.css";

const MemoryCard = ({ memory }) => {

  const getAge = () => {
    if (!memory.timestamp) return "N/A";

    const diff = Date.now() - new Date(memory.timestamp).getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    return `${days} day(s) ago`;
  };

  return (
    <div className="memory-card">

      <p className="memory-text">{memory.content}</p>

      <div className="memory-info">
        <span>🔥 Importance: {memory.importance?.toFixed(2)}</span>
        <span>📊 Score: {memory.score?.toFixed(2)}</span>
        <span>⏳ Age: {getAge()}</span>
      </div>

    </div>
  );
};

export default MemoryCard;