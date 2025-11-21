import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("Missing FIREBASE_SERVICE_ACCOUNT environment variable");
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
export { db };