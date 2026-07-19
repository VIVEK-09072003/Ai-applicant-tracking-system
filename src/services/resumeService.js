import puter from "../lib/puter";

export async function saveResumeAnalysis(data) {
  try {
    const fileName = `resume-${Date.now()}.json`;

    await puter.fs.write(
      fileName,
      JSON.stringify(data, null, 2)
    );

    return fileName;
  } catch (error) {
    console.error(error);
  }
}

export async function getResumeHistory() {
  try {
    const files = await puter.fs.readdir("/");

    const jsonFiles = files.filter(file =>
      file.name.endsWith(".json")
    );

    const history = [];

    for (const file of jsonFiles) {
      const content = await puter.fs.read(file.name);

      const resume = JSON.parse(content);

      history.push({
        id: file.name,
        fileName: resume.fileName,
        score: resume.score,
        summary: resume.summary,
        strengths: resume.strengths,
        weaknesses: resume.weaknesses,
        suggestions: resume.suggestions,
        createdAt: resume.createdAt,
      });
    }

    history.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );

    return history;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function wipeResumeHistory() {
  try {
    const files = await puter.fs.readdir("/");

    const jsonFiles = files.filter(file =>
      file.name.endsWith(".json")
    );

    for (const file of jsonFiles) {
      await puter.fs.delete(file.name);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}