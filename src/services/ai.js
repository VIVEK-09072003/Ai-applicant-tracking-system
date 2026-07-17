import puter from "../lib/puter";

export const analyzeResume = async (
  images,
  jobDescription
) => {
  const prompt = `
Analyze this resume.

Job Description:
${jobDescription}

Return JSON with:

{
 "score":0,
 "summary":"",
 "strengths":[],
 "weaknesses":[],
 "suggestions":[]
}
`;

  const result = await puter.ai.chat(prompt, {
    images,
  });

  return result;
};