import type { SessionEnMap } from './types';

/** Day 2 — 영문 오버레이 (한국어 정본: src/data/courses.ts) */
export const DAY2_EN: SessionEnMap = {
  'day2:1:0': {
    title: 'The Five Faces of Assessment in the Humanities & Arts',
    goal: 'Distinguish the characteristics and best uses of essay, critical-thinking, performance, portfolio, and presentation assessments. (Understanding)',
    topics: [
      '① Essay: explaining what you know in writing — "Explain the meaning of ○○ using two supporting reasons."',
      '② Critical: evaluating a claim or a work against evidence — "Identify the weaknesses in this argument and refute them."',
      '③ Performance: showing what you can do with your body and hands — recitals, demonstrations, studio production (the heart of the arts)',
      '④ Portfolio: a collection that traces a semester of growth — process-centered assessment',
      '⑤ Presentation: conveying your thinking out loud — content + delivery + Q&A',
      'Assessment types and the role of AI: design items and criteria together with AI, but observing performance and making the final judgment stays with the professor',
      '📦 Output: A combination chart of assessment types for my own course',
    ],
    practices: [
      {
        scenario: 'Drawing the assessment blueprint for my course',
        prompt: '[Role] You are an expert with 10 years of experience in university assessment design.\n[Context] My course is [course name] (undergraduate [year level], [number of students] students), and the current assessment is [current method], which I feel does not really capture what the course is about.\n[Request] Among the five types — essay, critical, performance, portfolio, and presentation — recommend the combination that best fits this course.\n[Format] Present as a table: (1) the recommended combination and its weighting (2) the competency each assessment measures (3) the preparation work AI can help with for each type.\n[Example] A sample combination: "Critical essay 40% + Portfolio 40% + Presentation 20%".\n[Condition] Also show the grading burden (time required) so that the combination stays realistic.',
      },
      {
        scenario: 'Experimenting with a change of type',
        prompt: '[Role] You are an education consultant who has worked with many assessment-innovation cases.\n[Context] Right now the final assessment in my course is [current method]. In the age of AI, I feel that simply checking memorization is not enough.\n[Request] Design what this assessment would look like if I changed it to a combination of critical essay and portfolio.\n[Format] A "current → proposed" comparison table + 3 advantages + 3 points to watch out for.\n[Example] A sample caution: "A portfolio increases grading time — spread it out with two interim check-ins."\n[Condition] Include practical problems such as student pushback or grading burden, along with ways to address them.',
      },
      {
        scenario: 'Building performance and presentation criteria (arts & physical education)',
        prompt: '[Role] You are an expert in designing performance assessments for the arts and physical education.\n[Context] I need to assess [name of the performance/presentation task], and I want the criteria to be transparent so that no one misunderstands it as a subjective judgment.\n[Request] Create the assessment criteria. For a performance, use three axes — technical accuracy / interpretation and expression / attitude; for a presentation, use three axes — content / delivery / Q&A.\n[Format] A table dividing each axis into three levels + an observation checklist the professor can use on the day of the assessment.\n[Example] Sample observation items: "☐ Maintains tempo in the opening ☐ Recovers gracefully after a mistake".\n[Condition] Assume that observing and judging performance is the professor\'s responsibility — AI stops at designing the criteria.',
      },
    ],
  },

  'day2:1:1': {
    title: 'Hands-On: Essay Items + Model Answers by Level',
    goal: 'Generate essay items for your own course along with model answers at each level. (Applying & Creating)',
    topics: [
      'What makes a good essay item: ==what (the subject) + how (the thinking verb) + conditions (length, number of sources)== must all be clear',
      'Choosing the thinking verb: summarize (understanding) < compare (analysis) < evaluate (evaluation) < propose (creation)',
      '"Model answers by level" means: writing weak, adequate, and strong answers in advance so you can see your grading criteria with your own eyes',
      'Why three model answers are useful: they secure grading consistency and give students concrete examples of each level',
      'Security principle, revisited: replace real exam items with similar practice items while working in class',
      '📦 Output: 2 essay items + a set of model answers at 3 levels',
    ],
    practices: [
      {
        scenario: 'Designing essay items',
        prompt: '[Role] You are an expert with 10 years of experience writing assessment items in [field of study].\n[Context] I am preparing an essay assessment that checks the thinking skills of undergraduate [year level] students within the scope of [topic]. (These are practice items, not the real exam items.)\n[Request] Create 2 essay items — one analytical ("compare and analyze") and one critical ("evaluate and refute").\n[Format] For each item, state the required answer length and number of supporting reasons + a one-line note for the professor on the intent behind the item.\n[Example] A sample item format: "Compare and analyze the difference in perspective between the two historical sources (600 characters, at least 2 supporting reasons)."\n[Condition] Make sure "what + how (thinking verb) + conditions" all appear within the sentence itself.',
      },
      {
        scenario: 'Generating model answers at 3 levels',
        prompt: '[Role] You are an assessment expert who makes grading criteria visible through sample answers.\n[Context] I want to stay consistent when grading item 1 that we just created, and I would also like to show students examples of each level.\n[Request] Write the model answer for item 1 at three levels: (1) strong (full marks) (2) adequate (partial credit) (3) weak.\n[Format] Under each answer, add 2 lines from a grader\'s point of view explaining "why this answer sits at this level".\n[Example] A sample explanation: "Adequate: grasps the claim, but offers only one supporting reason and shows no awareness of counterarguments."\n[Condition] Keep the three answers similar in length — the level should be separated by the quality of thinking, not by word count.',
      },
      {
        scenario: 'Experimenting with difficulty adjustment',
        prompt: '[Role] You are an assessment designer who fine-tunes item difficulty with precision.\n[Context] I like item 1, and I would like to adapt it for classes at other year levels as well.\n[Request] Adapt item 1 into (1) a version one step easier (for first-year students) and (2) a version one step harder (advanced, for third- and fourth-year students).\n[Format] A three-column table: "Version / Item / What was changed (thinking verb, conditions, source material)".\n[Example] A sample principle of adjustment: "Easier version — change \'compare\' to \'identify two differences\' and provide the source material."\n[Condition] Explain the principle behind why the difficulty changed, so that I can apply it to other items on my own.',
      },
    ],
  },

  'day2:2:0': {
    title: 'Building a Rubric That Measures Analysis, Critique, and Creativity',
    goal: 'Write a competency-based grading rubric and validate it against your model answers. (Creating & Evaluating)',
    topics: [
      'A **competency rubric** = a criteria table that measures ==not knowledge, but "the quality of thinking"==',
      'Breaking down the three core competencies: analysis (grasping structure, finding relationships) / critique (evaluating evidence, counterarguments) / creativity (making new connections, proposing alternatives)',
      'How to describe levels: instead of vague words like "does well," ==describe behavior, as in "constructs a counterargument using at least two supporting reasons"==',
      'How to validate a rubric: grade the three model answers from period 2 with the rubric and check whether the scores come out as expected',
      'Applying it in the arts: a performance rubric (technical accuracy / interpretation and expression / creativity) is built the same way',
      '📦 Output: 1 competency rubric (validated)',
    ],
    practices: [
      {
        scenario: 'Generating a competency rubric',
        prompt: '[Role] You are an expert with 10 years of experience designing educational assessment rubrics.\n[Context] I need to grade [name of the assignment/item]. I want to measure the quality of thinking (analysis, critique, creativity) fairly, rather than memorized knowledge.\n[Request] Create a grading rubric.\n[Format] A table of 4 criteria (analytical skill / critical thinking / creativity / expression) × 4 levels (weak, 1 point, through outstanding, 4 points).\n[Example] Sample wording for the outstanding cell: "Constructs a counterargument using at least two supporting reasons, and even acknowledges the limits of their own counterargument."\n[Condition] No vague wording such as "does well" in any cell — describe it so that the student\'s concrete behavior is visible. Below the table, add 3 common mistakes made during grading.',
      },
      {
        scenario: 'Validating the rubric with model answers',
        prompt: '[Role] You are a quality reviewer who tests whether a rubric actually works.\n[Context] I want to check whether the rubric we just created really separates the levels.\n[Request] Using this rubric, grade each of the three model answers we made earlier (strong / adequate / weak).\n[Format] A table with "Criterion / Strong answer: score and reasoning / Adequate answer: score and reasoning / Weak answer: score and reasoning" + a comparison of total scores.\n[Example] A sample verdict: "Total scores — strong 14 / adequate 9 / weak 5 — the levels separate successfully."\n[Condition] If there is a criterion where the total scores do not spread apart well, revise the level descriptions for that criterion and show me the result again.',
      },
      {
        scenario: 'Creating a student-facing version of the rubric',
        prompt: '[Role] You are a communication expert who translates assessment criteria into students\' own language.\n[Context] I plan to share the validated rubric with students along with the assignment instructions. I want publishing the criteria to double as guidance for learning.\n[Request] Turn this rubric into a version meant for students.\n[Format] Rewrite the top level of each criterion around examples, in the spirit of "an answer that does this is a good answer" + a 5-question self-check list to use before submitting.\n[Example] A sample check item: "☐ Did I write even one sentence about what someone who disagrees with my claim might say?"\n[Condition] Use the words students actually use rather than assessment jargon, and keep it within one A4 page.',
      },
    ],
  },

  'day2:2:1': {
    title: 'From One Feedback to All of Them + Verifying Evidence, Sources, and Fake Citations',
    goal: 'Turn a sample feedback into a template you can scale, and verify evidence and sources through web search. (Applying & Evaluating)',
    topics: [
      'A strategy for personalized feedback: write one carefully crafted sample → extract its structure as a template → apply it to each student by changing only the individual notes',
      'The three-part structure of feedback: what went well (with a specific quotation) → where to grow (including the method) → encouragement toward the next step',
      'Privacy principle, revisited: remove student names and ID numbers, and enter only the minimum necessary from the assignment content',
      '**Catching fake citations (hallucinated references)**: ==always confirm whether a reference produced by AI actually exists== — search the title, author, and year',
      '**Gathering evidence through web search**: collect recent cases and statistics for your items and feedback via web search, and ==record the source along with them==',
      'A 5-step verification routine: ① tag every citation as "unverified" → ② search the title exactly as written (Google Scholar, RISS, DBpia) → ③ check against the original text → ④ delete anything you cannot find → ⑤ cite only what you have confirmed',
      'Teach it to students too: add "when using AI, indicate whether the original text of every citation was checked" to your assignment requirements',
      '📦 Output: A feedback template + a source verification checklist',
    ],
    practices: [
      {
        scenario: 'From a sample feedback to a scalable template',
        prompt: '[Role] You are an education coach who analyzes the structure of good feedback.\n[Context] Below is feedback I wrote carefully for the essay of student A (anonymized). I would like to extend this same quality to all 30 students.\n[Request] Analyze the structure of this feedback and turn it into a template I can use for other students as well.\n[Format] The template (leave the parts that change per student as [blanks], and keep the fixed frame as is) + 3 lines on how to use it.\n[Example] A sample template sentence: "Your [strength] stands out in [specific quotation]. Next time, try [method]."\n[Condition] Preserve my tone of voice, and leave the closing encouragement slot empty, marked "write this yourself".\n\n[Paste the sample feedback here]',
      },
      {
        scenario: 'Training to hunt down fake citations',
        prompt: '[Role] You are an academic librarian who verifies whether references really exist.\n[Context] Some material generated by AI came with a reference list attached. Because fake citations are fatal in humanities and social science writing, I want to check them one by one.\n[Request] Search the web and confirm whether the following references actually exist: [reference list]\n[Format] A table with "Reference / Exists? / Link to the source consulted / Accuracy of author, year, and title".\n[Example] Sample verdicts: "○○ (2021) — no search results, deletion recommended / △△ (2019) — exists, but the correct year is 2018."\n[Condition] Mark any reference you cannot confirm as "deletion recommended", and remind me that the final judgment requires me to open the original text myself.',
      },
      {
        scenario: 'Collecting and verifying evidence through web search',
        prompt: '[Role] You are a meticulous academic researcher who always leaves the source behind.\n[Context] I need recent supporting material (cases, statistics, research) for the essay assessments and feedback in [course name]. I cannot use anything whose source is unclear.\n[Request] Search the web and find 3 pieces of supporting material on [topic] published within the last 2 years.\n[Format] For each item, present in a table: (1) a one-line summary (2) the source (institution, publication date, link) (3) how to use it in assessment or feedback (4) the items I should verify myself in the original text.\n[Example] A sample use: "As the source material for an essay item — have students interpret this statistic and build an argument from it."\n[Condition] Exclude entirely any material whose source cannot be confirmed, and if you find fewer than 3, tell me how you changed the search terms and tried again.',
      },
      {
        scenario: 'Varying feedback by student type',
        prompt: '[Role] You are a professor with a counselor\'s instincts, attentive even to a student\'s state of mind.\n[Context] The same feedback template has to land differently depending on where a student is.\n[Request] Adapt my feedback template for three student types: (1) a student who does well but has grown complacent — offer a challenge (2) a student who works hard but does not know how — give concrete methods (3) a student who has lost confidence — help them rediscover their strengths.\n[Format] One sample feedback for each type (within 5 lines).\n[Example] A sample sentence for the rediscovering-strengths type: "The metaphor in this paragraph was the freshest in the class — try bringing that instinct into your main argument as well."\n[Condition] Assume the same assignment situation for all three so that the differences stand out clearly.',
      },
    ],
  },
};
