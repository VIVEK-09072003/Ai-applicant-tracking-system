import puter from "../lib/puter";

const HISTORY_DIR = "resume-history";

async function ensureHistoryDir() {
  try {
    await puter.fs.mkdir(HISTORY_DIR);
  } catch (error) {
    // Directory most likely already exists — safe to ignore.
  }
}

export async function saveResumeAnalysis(data) {
  try {
    await ensureHistoryDir();

    const fileName = `${HISTORY_DIR}/resume-${Date.now()}.json`;

    await puter.fs.write(fileName, JSON.stringify(data, null, 2));

    return fileName;
  } catch (error) {
    console.error("Failed to save analysis:", error);
    return null;
  }
}

export async function getResumeHistory() {
  try {
    await ensureHistoryDir();

    const files = await puter.fs.readdir(HISTORY_DIR);
    const jsonFiles = files.filter((file) => file.name.endsWith(".json"));

    const history = await Promise.all(
      jsonFiles.map(async (file) => {
        const content = await puter.fs.read(file.path);
        const text = typeof content.text === "function" ? await content.text() : content;
        const resume = JSON.parse(text);

        return {
          id: file.name,
          ...resume,
        };
      })
    );

    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return history;
  } catch (error) {
    console.error("Failed to load resume history:", error);
    return [];
  }
}

export async function wipeResumeHistory() {
  try {
    const files = await puter.fs.readdir(HISTORY_DIR);
    const jsonFiles = files.filter((file) => file.name.endsWith(".json"));

    await Promise.all(jsonFiles.map((file) => puter.fs.delete(file.path)));

    return true;
  } catch (error) {
    console.error("Failed to wipe resume history:", error);
    return false;
  }
}
