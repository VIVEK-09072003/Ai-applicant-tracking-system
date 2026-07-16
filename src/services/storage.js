import puter from "../lib/puter";

export const uploadResume = async (file) => {
  try {
    const uploaded = await puter.fs.write(file.name, file);

    return uploaded;
  } catch (error) {
    console.error(error);
    throw error;
  }
};