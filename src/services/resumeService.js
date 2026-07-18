import puter from "../lib/puter";

export async function saveResumeAnalysis(data) {
  try {
    const fileName = `resume-${Date.now()}.json`;

    await puter.fs.write(
      fileName,
      JSON.stringify(data, null, 2)
    );

    return fileName;
  } catch (err) {
    console.error(err);
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
      const text = await puter.fs.read(file.name);

      history.push(JSON.parse(text));
    }

    return history;
  } catch (err) {
    console.error(err);
    return [];
  }
}