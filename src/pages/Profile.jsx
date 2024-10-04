import React, { useState, useEffect } from "react";
import { auth, db } from '../firebaseConfig';
import { doc, deleteDoc, getFirestore, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
//import EmojiButton from '../EmojiButton';

function Profile({ userProfile }) {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    const validFiles = Array.from(uploadedFiles).filter(file => file.size <= 3 * 1024 * 1024);
    setFiles(validFiles);
  };

  return (
    <div className="profile-section">
      <h1>Profile Page</h1>
      <p>Upload your files (max 3 MB each):</p>
      <input type="file" multiple onChange={handleFileUpload} />
      <div className="file-list">
        {files.map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Profile;










