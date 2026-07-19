import puter from "../lib/puter";

export const signIn = async () => {
  await puter.auth.signIn();
  return puter.auth.getUser();
};

export const signOut = async () => {
  await puter.auth.signOut();
};

export const getCurrentUser = async () => {
  try {
    const isSignedIn = await puter.auth.isSignedIn();
    if (!isSignedIn) return null;
    return await puter.auth.getUser();
  } catch (error) {
    console.error("Auth check failed:", error);
    return null;
  }
};
