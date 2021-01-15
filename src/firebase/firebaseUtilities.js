import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import configObject from "./firebase-config";

let config = configObject;

export let createUserDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  let userRef = firestore.doc(`users/${userAuth.uid}`);
  let snapShot = await userRef.get();
  if (!snapShot.exists) {
    let { displayName, email } = userAuth;
    let docCreationDate = new Date();

    try {
      await userRef.set({ displayName, email, docCreationDate, ...otherData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export let addCollectionAndDocuments = async (collectionKey, dataToAdd) => {
  let collectionRef = firestore.collection(collectionKey);
  let batch = firestore.batch();
  dataToAdd.forEach((object) => {
    let newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export let convertCollectionsSnapshotToMap = (collections) => {
  let transformedCollections = collections.docs.map((doc) => {
    let { title, items } = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });

  return transformedCollections.reduce((accumalator, collection) => {
    accumalator[collection.title.toLowerCase()] = collection;
    return accumalator;
  }, {});
};

firebase.initializeApp(config);

export let auth = firebase.auth();
export let firestore = firebase.firestore();

export let googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
