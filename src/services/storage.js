const STORAGE_KEY = "resume_history";

export const getResumeHistory = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading history:", error);
    return [];
  }
};

export const saveResumeAnalysis = (analysis) => {
  try {
    const history = getResumeHistory();

    const newAnalysis = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...analysis,
    };

    history.unshift(newAnalysis);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(history)
    );

    return newAnalysis;
  } catch (error) {
    console.error("Error saving analysis:", error);
    return null;
  }
};

export const getResumeById = (id) => {
  return getResumeHistory().find(
    (item) => item.id === id
  );
};

export const deleteResume = (id) => {
  const history = getResumeHistory();

  const updated = history.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};

export const clearResumeHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};