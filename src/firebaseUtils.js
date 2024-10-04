import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

const addPostToDB = async (postBody, user, moodState) => {
  try {
    const postsCollection = collection(db, 'posts');
    await addDoc(postsCollection, {
      body: postBody,
      uid: user.uid,
      timestamp: serverTimestamp(), // Include server timestamp field
      mood: moodState // Include the mood state in the document
    });
    console.log('Post added to Firestore successfully');
  } catch (error) {
    throw new Error('Error adding post to Firestore: ' + error.message);
  }
};

export { addPostToDB };