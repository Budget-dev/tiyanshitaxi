import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { 
  initializeFirestore,
  getFirestore,
  persistentLocalCache,
  persistentMultipleTabManager, 
  collection, 
  addDoc, 
  setDoc,
  getDocs, 
  getDoc,
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy, 
  limit,
  startAfter,
  startAt,
  endBefore,
  limitToLast,
  getCountFromServer,
  onSnapshot, 
  serverTimestamp,
  getDocFromServer,
  type QueryDocumentSnapshot,
  type DocumentData,
  type QueryConstraint
} from 'firebase/firestore';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  type User as FirebaseUser
} from 'firebase/auth';

// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCU9Zb2n7EWAOqdCJvD3G0o18lM7F_io8Y",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tiyanshi-24e57.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tiyanshi-24e57",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tiyanshi-24e57.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "180027974200",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:180027974200:web:b710f07cf0318f696dbccd",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-YCPB7801HR"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics safely for browser environments
export let analytics: any = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((err) => {
    console.debug('Firebase Analytics initialization note:', err);
  });
}

// Initialize Firestore with persistent caching and long-polling support
let dbInstance;
try {
  dbInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
  });
} catch {
  try {
    dbInstance = getFirestore(app);
  } catch (err) {
    console.warn("Fallback to default Firestore instance:", err);
    dbInstance = getFirestore(app);
  }
}

export const db = dbInstance;
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Operation types for error handling
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.warn('Firestore Operation Info:', JSON.stringify(errInfo));
  return errInfo;
}

// Connection test with graceful offline resilience (exported for optional manual health check)
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.info("Firestore client operating with cached capabilities.");
    }
  }
}


export {
  collection, 
  addDoc, 
  setDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter, 
  startAt, 
  endBefore, 
  limitToLast, 
  getCountFromServer, 
  onSnapshot, 
  serverTimestamp, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile, 
  sendPasswordResetEmail, 
  type FirebaseUser, 
  type QueryDocumentSnapshot, 
  type DocumentData, 
  type QueryConstraint 
};
