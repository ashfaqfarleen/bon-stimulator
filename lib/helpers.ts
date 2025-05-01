const getReadinessInterpretation = (score: number): string => {
  if (score <= 2.4)
    return "Foundational Readiness – Clarify vision and align your leadership team.";
  if (score <= 3.4)
    return "Emerging Readiness – You're gaining traction, but alignment gaps remain.";
  if (score <= 4.2)
    return "Strategic Readiness – A strong foundation to scale transformation.";
  return "Execution-Ready – You’re primed for AI-powered execution and leadership acceleration.";
};

export { getReadinessInterpretation };
