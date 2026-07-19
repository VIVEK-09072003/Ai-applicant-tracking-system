import puter from "../lib/puter";

export const analyzeResume = async (images, jobDescription) => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) and professional resume reviewer.

Analyze the attached resume against the job description below and respond
with ONLY raw JSON (no markdown, no code fences, no extra commentary) in
exactly this shape:

{
  "score": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Job Description:
${jobDescription}
`;

  const result = await puter.ai.chat(prompt, { images });

  const raw =
    typeof result === "string"
      ? result
      : result?.message?.content ?? result?.text ?? "";

  const cleaned = raw.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Failed to parse AI response:", raw);
    throw new Error("The AI response could not be parsed as JSON.");
  }
};
