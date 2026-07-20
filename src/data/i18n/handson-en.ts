import type { LabEnMap } from './types';

/** 실습 따라하기 — 영문 오버레이 (한국어 정본: src/data/handsOn.ts) */
export const HANDSON_EN: LabEnMap = {
  /* ════════ Shared VOD ════════ */
  'v-lab1': {
    title: 'Lab 1 · From signing up for Claude to your first conversation',
    scenario: 'Sign up for Claude, enter your first prompt, and then follow up with a revision request — you will complete the whole basic workflow.',
    level: 'Beginner',
    minutes: 'About 15 min',
    steps: [
      {
        title: 'Sign up',
        detail: 'Open claude.ai in your browser and sign up with your email or Google account. When the verification email arrives, click the confirmation link to finish.',
        check: 'If you see the conversation list on the left and the input box in the middle, you are all set.',
      },
      {
        title: 'Send your first hello',
        detail: 'Copy the prompt below, paste it into the input box, and press Enter. The labels — [Role], [Context], [Request], [Format], [Condition] — are the standard structure.',
        prompt: '[Role] From now on you are the AI teaching assistant who helps me prepare my classes.\n[Context] I am a professor at Dongshin University teaching [course name], and today is my first time using you.\n[Request] Please tell me 5 things you can help me with.\n[Format] A numbered list, one line per item.\n[Condition] Use examples that fit humanities, social science, and arts courses.',
        check: 'A list of 5 items means it worked. Notice the response speed and the tone of voice too.',
      },
      {
        title: 'Follow up',
        detail: 'The key skill is not finishing in one shot but continuing the conversation. Within the same conversation, a follow-up can be as short as [Request] and [Condition].',
        prompt: '[Request] Number 3 on your list is interesting. Please explain it in more detail and recommend one first action I can start on this semester.\n[Condition] The first action should be something I can do in 30 minutes today.',
        check: 'Confirm that it remembers the earlier exchange and answers in context.',
      },
      {
        title: 'Try starting a new conversation',
        detail: 'Click the new conversation (＋) button at the top left. Starting a new conversation each time the topic changes makes the answers more accurate.',
        check: 'Check that your previous conversation is saved in the list on the left.',
      },
    ],
    result: 'You now have a Claude account and know the basic workflow: a well-structured prompt → refine through follow-ups → start a new conversation.',
  },

  'v-lab2': {
    title: 'Lab 2 · Experiencing hallucination and building a verification routine',
    scenario: 'Safely witness the limits of AI (hallucination) for yourself, and build the habit of verifying.',
    level: 'Beginner',
    minutes: 'About 15 min',
    steps: [
      {
        title: 'Map the hallucination danger zones',
        detail: 'Find out in advance where AI tends to get things wrong in your field.',
        prompt: '[Role] You are an AI literacy expert who has studied the limits of generative AI.\n[Context] My field is [your field], and before I use AI for course materials I want to know where the risks are.\n[Request] Please tell me 5 types of questions in this field where AI is likely to hallucinate (produce plausible-sounding falsehoods), along with ways to verify them.\n[Format] A 3-column table: "Question type / Example of hallucination / How to verify".\n[Condition] The verification methods should be actions I can try right away today.',
        check: 'You have succeeded if you get a table with 5 types and their verification methods.',
      },
      {
        title: 'Ask it to separate the certain from the uncertain',
        detail: 'Build the habit of making the AI flag its own confidence level.',
        prompt: '[Role] You are a careful research assistant who marks up your own answers with self-verification notes.\n[Context] I am deciding whether to use an explanation of [topic in my field] as course material.\n[Request] Please explain [topic in my field].\n[Format] After the explanation, split it into two lists: (1) solidly established general knowledge, (2) points I need to verify separately.\n[Condition] For (2), include search terms I can use to check.',
        check: 'Check that the two parts are clearly separated.',
      },
      {
        title: 'Check that the references really exist',
        detail: 'Search for the titles of the sources the AI gave you directly on Google Scholar or RISS (Korean academic database).',
        check: 'If any source does not turn up in your search — you have just witnessed a hallucination in the wild!',
      },
    ],
    result: '"Names, numbers, and citations stay unverified until I check the original" — the verification routine is starting to become second nature.',
  },

  'v-lab3': {
    title: 'Lab 3 · The well-structured prompt upgrade experiment',
    scenario: 'Compare the results of an off-the-cuff prompt with a properly structured one ([Role], [Context], [Request], [Format], [Example], [Condition]) side by side.',
    level: 'Foundational',
    minutes: 'About 20 min',
    steps: [
      {
        title: 'The off-the-cuff version',
        detail: 'In a new conversation, deliberately make a sloppy request.',
        prompt: 'Recommend some discussion topics.',
        check: 'Copy the result and save it in a notepad.',
      },
      {
        title: 'The well-structured version',
        detail: 'Open another new conversation and make the request with full labels.',
        prompt: '[Role] You are an expert with 10 years of experience designing university general education courses.\n[Context] I want to run small-group discussions in a first-year undergraduate [course name] class (75 minutes, 30 students).\n[Request] Please recommend 3 discussion topics I can use in this class.\n[Format] A table with 2 points for and 2 points against attached to each topic.\n[Example] Topic example: something roughly as debatable as "Is AI-generated work also art?"\n[Condition] Choose topics first-year students can engage with even without background knowledge.',
        check: 'Put the two results side by side and compare — can you see the difference in specificity?',
      },
      {
        title: 'Upgrade your go-to request',
        detail: 'Ask it to rewrite one request you make often into the standard structure.',
        prompt: '[Role] You are a coach who teaches prompt writing.\n[Context] A request I make often is "[your usual request]", but the results were always a little disappointing.\n[Request] Please rewrite this request using the [Role], [Context], [Request], [Format], [Example], [Condition] structure, and explain what changed.\n[Format] The upgraded prompt in a code block, plus 3 lines on why it changed.\n[Condition] Leave the parts that will vary as [bracketed] blanks.',
        check: 'Save the upgraded prompt in your notepad — your first template is done!',
      },
    ],
    result: 'You have felt for yourself how the same request produces different results once it has a proper structure, and you have your first template in hand.',
  },

  /* ════════ Day 1 ════════ */
  'd1-lab1': {
    title: 'Lab 1 · Completing an AI application map for your course',
    scenario: 'Break a semester of class activities into parts and organize the AI application points into a single table.',
    level: 'Foundational',
    minutes: 'About 25 min',
    steps: [
      {
        title: 'List the activities',
        detail: 'Write down at least 5 class activities from your course on paper. (e.g. group discussion, reflection papers, case presentations, close reading, studio practice)',
        check: 'Once you have 5 or more written down, move on to the next step.',
      },
      {
        title: 'Ask for the breakdown',
        detail: 'Plug in the activities you listed and ask for an AI application map.',
        prompt: '[Role] You are an expert with 10 years of experience in instructional design for the humanities, social sciences, and arts.\n[Context] I teach [course name] at Dongshin University, and my main class activities are [list of activities]. I have no clear standard for how much I can hand over to AI.\n[Request] For each activity, please separate out (1) the preparation work AI can help with, (2) the parts students must do themselves, and (3) the parts the instructor has to judge.\n[Format] A 3-column table with the activities running down the vertical axis.\n[Example] One row might read: "Group discussion | Draft prompts and background materials | Choosing a position and finding evidence | Finalizing the prompt and grading".\n[Condition] Make each cell concrete, using the actual names of the tasks.',
        check: 'Check that you get a 3-column table and that it matches the reality of your class.',
      },
      {
        title: 'Set priorities',
        detail: 'Pick your starting point from the table.',
        prompt: '[Request] From the table above, please pick the 3 AI uses that are "high impact and easy to prepare", rank them, and suggest a one-line first step for each this semester.\n[Condition] The first step should be something I can do in 30 minutes this week.',
        check: 'Once you have a top priority, start with exactly that in today\'s hands-on session!',
      },
    ],
    result: 'Your course\'s AI application map and priorities are now organized on a single page.',
  },

  'd1-lab2': {
    title: 'Lab 2 · From learning objectives to a lesson plan, in one conversation',
    scenario: 'Finalize your learning objectives and build the lesson plan in the same conversation, so you can experience "automatic alignment".',
    level: 'Foundational',
    minutes: 'About 30 min',
    steps: [
      {
        title: 'Generate learning objectives',
        detail: 'Pick one week of the course and start with the objectives.',
        prompt: '[Role] You are an expert with 10 years of experience in curriculum design for the humanities, social sciences, and arts.\n[Context] The topic for week [week] of my course [course name] is "[topic]". Right now the objective is only "students will understand ~", which is too vague to serve as a standard.\n[Request] Please write learning objectives at three levels: (1) one at the comprehension level, (2) one at the analysis level, (3) one at the expression/creation level.\n[Format] "Students can ~" sentences, each tagged with its Bloom level.\n[Example] "Students can explain the difference in perspective between two historical sources with 2 pieces of evidence."\n[Condition] Use verbs that make thinking and expression visible.',
        check: 'Check that the verbs are observable ("understand" ❌ / "can explain" ✅).',
      },
      {
        title: 'Refine the objectives',
        detail: 'Ask for revisions to fit the reality of your class.',
        prompt: '[Request] Objective 2 is a bit hard for our students. Please change it to an analysis activity one level easier.\n[Condition] Keep 1 and 3 as they are.',
        check: 'When you are happy with the revised objective, reply "Confirmed!"',
      },
      {
        title: 'Continue into the lesson plan',
        detail: 'Ask for the lesson plan right there in the same conversation — do not open a new one!',
        prompt: '[Request] Great, now please build a 75-minute lesson plan around the 3 confirmed learning objectives.\n[Format] Opening (10 min) / Development 1 (25 min) / Development 2 – student activity (25 min) / Wrap-up (15 min), with instructor actions and student actions separated at each stage.\n[Condition] End with a list of materials needed and points to watch out for, and use the same verbs in the activities as in the objectives.',
        check: 'Check that the activities in the lesson plan connect to the objectives (that they use the same verbs).',
      },
      {
        title: 'Pull out a handout',
        detail: 'Bonus: get the student materials from the same conversation too.',
        prompt: '[Request] Please also create a one-page A4 handout to give students, based on this lesson plan.\n[Format] Today\'s objectives / 3 key concepts / 1 sentence to remember / 2 self-check questions.\n[Condition] Add a plain-language gloss in parentheses for any technical terms.',
        check: 'Objectives, lesson plan, and handout are now one complete set!',
      },
    ],
    result: 'Your learning objectives, lesson plan, and handout are finished and fully aligned. Repeat this for your other weeks.',
  },

  'd1-lab3': {
    title: 'Lab 3 · A discussion guide plus a set of texts at three levels',
    scenario: 'Create a discussion guide and a case analysis sheet, then convert a lecture text into three difficulty levels.',
    level: 'Applied',
    minutes: 'About 30 min',
    steps: [
      {
        title: 'Generate a discussion guide',
        detail: 'Use a topic you will actually use next semester.',
        prompt: '[Role] You are an expert with 10 years of experience designing university discussion classes.\n[Context] In my [course name] class (undergraduate year [year], 30 students) we will hold a 40-minute small-group discussion on "[topic]". The students have little discussion experience.\n[Request] Please create a discussion guide.\n[Format] (1) A for/against proposition, (2) a 2-minute background briefing, (3) 3 points each for and against, (4) the running order and timetable, (5) closing remarks.\n[Example] Proposition example: a single sentence in the form "~ should ~".\n[Condition] Keep the background briefing neutral.',
        check: 'Judge for yourself whether the proposition really is evenly balanced between the two sides.',
      },
      {
        title: 'Generate a case analysis sheet',
        detail: 'Build the analysis sheet with a three-tier question structure.',
        prompt: '[Role] You are a teaching consultant who is expert at designing questions.\n[Context] I cover [case/work title] in class, and I do not want students to stop at shallow impressions.\n[Request] Please create a one-page A4 case analysis sheet.\n[Format] A 5-line summary / 2 factual questions / 2 interpretive questions / 1 application question / instructions for a "my own thoughts" box.\n[Example] Question flow: "What happened? (fact) → What does it mean? (interpretation) → What would I do? (application)".\n[Condition] Make it finished enough to hand straight to students.',
        check: 'Check that the questions build from the shallow to the deep.',
      },
      {
        title: 'Convert by level',
        detail: 'Paste in one paragraph of your lecture text and convert it.',
        prompt: '[Role] You are an expert editor of educational content.\n[Context] My class has a mix of students with different reading levels.\n[Request] Please rewrite the text below as (1) an easy version (analogies, short sentences), (2) a standard version, (3) an advanced version (adding 1 extra concept and 2 questions).\n[Format] Mark the intended student group in front of each version.\n[Condition] Keep the facts identical across all three.\n\n[paste your text here]',
        check: 'Check that the difference in difficulty across the three versions is genuinely noticeable.',
      },
    ],
    result: 'With the discussion guide, analysis sheet, and level-differentiated texts, your Day 1 output set is complete.',
  },

  /* ════════ Day 2 ════════ */
  'd2-lab1': {
    title: 'Lab 1 · Essay questions plus model answers at three levels',
    scenario: 'Write analytical and critical essay questions, then see your grading standards with your own eyes through weak, average, and strong model answers.',
    level: 'Foundational',
    minutes: 'About 30 min',
    steps: [
      {
        title: 'Design the questions',
        detail: 'Keep the practice to a practice-only scope! Do not enter your real exam questions.',
        prompt: '[Role] You are an expert with 10 years of experience writing assessment items in [your field].\n[Context] I want to check the thinking skills of year [year] undergraduates within the scope of [topic]. (This is for practice.)\n[Request] Please write 2 essay questions — 1 analytical and 1 critical.\n[Format] For each question, state the length and the required number of pieces of evidence, plus a one-line note on the assessment intent.\n[Example] "Compare and analyze the two perspectives (600 characters, at least 2 pieces of evidence)."\n[Condition] Make sure "what + how + under which conditions" is all visible in the sentence.',
        check: 'Check that "what + how + under which conditions" is all present in the question.',
      },
      {
        title: 'Model answers at three levels',
        detail: 'This is the key step where you see your grading standards in advance.',
        prompt: '[Request] Please write model answers to question 1 at three levels: strong, average, and weak. Under each answer, add 2 lines from a grader\'s perspective on "why it is at this level".\n[Condition] Keep the three answers similar in length — the difference should come from the quality of thinking, not the word count.',
        check: 'Check that the difference between the three answers is clearly visible.',
      },
      {
        title: 'Revise the question',
        detail: 'If the model answers reveal that the question was ambiguous, fix it now.',
        prompt: '[Request] The difference between the average answer and the strong answer is not coming through clearly. Please revise the question so the evidence requirement is more explicit.\n[Condition] Keep the original assessment intent.',
        check: 'Check whether the revised question makes the grading standard sharper.',
      },
    ],
    result: 'A question set with three-level model answers — you will use it as a rubric validation tool in the next lab.',
  },

  'd2-lab2': {
    title: 'Lab 2 · Building a competency rubric and validating it',
    scenario: 'Build a rubric across the four competencies — analysis, criticism, creativity, and expression — then validate it by test-grading the model answers from Lab 1.',
    level: 'Applied',
    minutes: 'About 30 min',
    steps: [
      {
        title: 'Generate the rubric',
        detail: 'Continue in the same conversation as Lab 1.',
        prompt: '[Role] You are an expert with 10 years of experience designing educational assessment rubrics.\n[Context] I want to grade the question 1 we just wrote fairly, focusing on the quality of thinking.\n[Request] Please create a grading rubric.\n[Format] A table of 4 criteria (analysis / critical thinking / creativity / expression) × 4 levels (1 weak to 4 outstanding).\n[Example] An "outstanding" cell might read: "Constructs a counterargument with at least 2 pieces of evidence and also notes its limitations."\n[Condition] No circular wording like "does it well" — describe it in terms of observable behavior.',
        check: 'Check that it is described in terms of behavior, with no circular wording like "excellent".',
      },
      {
        title: 'Validate with the model answers',
        detail: 'Test-grade to see whether the rubric actually works.',
        prompt: '[Request] Please grade each of the three-level model answers from earlier using this rubric. Give the scores and reasoning per criterion in a table, plus a comparison of the totals.\n[Condition] If any criterion fails to spread the totals apart, revise the level descriptions for that criterion and show me the result again.',
        check: 'If the totals spread out in the expected order, the rubric passes!',
      },
      {
        title: 'A version for students',
        detail: 'Convert the rubric into a version you can share with students.',
        prompt: '[Request] Please turn this rubric into a student-facing version. Rewrite the outstanding level of each criterion as "here is what makes a good answer" examples, and add a 5-item self-check list for before submission.\n[Condition] Use students\' own words instead of assessment jargon, and keep it within one A4 page.',
        check: 'Check that a student who reads it will know what they are supposed to do.',
      },
    ],
    result: 'You now have a validated competency rubric plus a student-facing version.',
  },

  'd2-lab3': {
    title: 'Lab 3 · Scaling up a feedback template and hunting fake citations',
    scenario: 'Turn one sample piece of feedback into a template you can scale, and use web search to verify whether references actually exist.',
    level: 'Applied',
    minutes: 'About 25 min',
    steps: [
      {
        title: 'Write a sample piece of feedback',
        detail: 'Write careful, personal feedback on one (anonymized) assignment yourself. Do this one without AI!',
        check: 'One piece of feedback containing what was done well, what to improve, and a word of encouragement.',
      },
      {
        title: 'Extract the template',
        detail: 'Turn the structure of your own feedback into a template.',
        prompt: '[Role] You are an education coach who analyzes the structure of good feedback.\n[Context] Below is student feedback I wrote myself. I want to scale it to 30 students while keeping this quality.\n[Request] Please analyze the structure and turn it into a template.\n[Format] The template (with the variable parts as [blanks]) plus 3 lines on how to use it.\n[Condition] Keep my tone of voice, and leave the final encouragement sentence blank, marked "write this yourself".\n\n[paste your sample feedback here]',
        check: 'Check that the template preserves your own tone of voice.',
      },
      {
        title: 'Hunt the fake citations',
        detail: 'Verify the references the AI gave you earlier using web search.',
        prompt: '[Role] You are an academic librarian who verifies whether references really exist.\n[Context] I want to check the references in the AI-generated material before using it in class.\n[Request] Please search the web and confirm whether the following sources actually exist: [list of references]\n[Format] A table: "Source / Exists? / Link to the source / Accuracy of author, year, and title".\n[Condition] Mark anything you cannot confirm as "recommend deleting", and finish by telling me to do the final check myself by opening the original.',
        check: 'If even one item came back as "recommend deleting" — you have just proved the value of the verification routine!',
      },
    ],
    result: 'You now have a system for scaling feedback and a routine for verifying sources.',
  },

  /* ════════ Day 3 ════════ */
  'd3-lab1': {
    title: 'Lab 1 · An AI strategy table for before, during, and after class',
    scenario: 'Complete a single 3×3 matrix laying out how AI fits into your signature class format.',
    level: 'Applied',
    minutes: 'About 20 min',
    steps: [
      {
        title: 'Generate the strategy table',
        detail: 'Pick one signature class format and make the request.',
        prompt: '[Role] You are an expert with 10 years of experience consulting on university teaching innovation.\n[Context] The signature format of my course [course name] is [discussion / writing / presentation / PBL]. Starting without clear standards is likely to get confusing.\n[Request] Across the three stages of before, during, and after class, please design (1) where the instructor uses AI, (2) where students are permitted to use it and under what conditions, and (3) where it is prohibited.\n[Format] A 3×3 matrix table.\n[Example] Permitted condition example: "5 minutes of brainstorming allowed — must be labeled \'AI-assisted\'".\n[Condition] Do not leave the prohibited cells empty.',
        check: 'Check that the prohibited cells are not empty — a strategy with no clear red lines is risky.',
      },
      {
        title: 'Make the conditions concrete',
        detail: 'Refine the student permissions so they are actually enforceable.',
        prompt: '[Request] For each point where students are permitted, attach concrete conditions (time limit / labeling requirement / verification requirement), and also pull it together as a one-paragraph notice I can put in my syllabus.\n[Condition] The notice should be respectful toward students and no more than 5 lines.',
        check: 'Check that the notice is ready to be announced to students as it stands.',
      },
    ],
    result: 'Your AI deployment strategy table and the syllabus notice are complete.',
  },

  'd3-lab2': {
    title: 'Lab 2 · Vibe coding — building a debate practice board',
    scenario: 'Build a real, working classroom tool by asking for it in plain words, with no coding, then refine it.',
    level: 'Advanced',
    minutes: 'About 30 min',
    steps: [
      {
        title: 'Three lines of planning',
        detail: 'On paper first: who (students, in groups) / when (15 minutes during class) / what (practicing proposition → arguments → counterarguments). The plan is half the work.',
        check: 'Once the three lines are written, you are ready to start!',
      },
      {
        title: 'The first request',
        detail: 'Turn your plan into sentences exactly as written and ask.',
        prompt: '[Role] You are a developer who builds web tools for education.\n[Context] I need a practice tool students can use during a 15-minute small-group discussion activity in a university class.\n[Request] Please build a "debate practice board" web tool. Features: (1) enter a proposition, then choose for or against, (2) display 3 arguments and 2 likely counterarguments for the chosen side, (3) a practice box for "responding to the counterargument".\n[Format] A clean screen, large text, in the language your students use (Korean or English).\n[Example] Pre-load "Fully permitting AI use in university assignments" as the sample proposition.\n[Condition] Put the usage instructions at the top of the screen.',
        check: 'If a working tool appears beside the conversation, it worked!',
      },
      {
        title: 'Refine through conversation',
        detail: 'Try it out and fix what falls short, just by saying so.',
        prompt: '[Request] Great! Just two fixes please. (1) Add a 5-minute practice timer. (2) Replace the sample proposition with [a topic from my course].\n[Condition] Leave the rest of the features and the layout exactly as they are.',
        check: 'Check that your revision requests are reflected. Two or three rounds of refinement will finish it.',
      },
      {
        title: 'Test it as a student',
        detail: 'Put in a proposition and work all the way through it as if you were a student.',
        check: 'Once you have decided which class activity to slot it into, this lab is done!',
      },
    ],
    result: 'Your very first interactive tool — one you can actually use in class — is born.',
  },

  'd3-lab3': {
    title: 'Lab 3 · Completing and sharing your personal teaching protocol',
    scenario: 'Pull together everything you produced over the three days into a one-page AI teaching protocol, and share it with your colleagues.',
    level: 'Capstone',
    minutes: 'About 30 min',
    steps: [
      {
        title: 'Gather your materials',
        detail: 'Look back over what you produced on Days 1 to 3 and pick the 3 things you will keep using.',
        check: 'Choose 3 from among the application map, lesson plan, rubric, strategy table, and tool.',
      },
      {
        title: 'Generate the protocol',
        detail: 'Feed in what you chose and ask for a synthesis.',
        prompt: '[Role] You are my AI teaching coach.\n[Context] I want to synthesize the outputs of this 3-day program into a one-page statement of principles.\n- My course: [course name]\n- Tasks I will mainly use it for: [the 3 you chose]\n- Red lines: [e.g. never enter real exam questions or student information]\n- Rules for students: [e.g. brainstorming allowed, ghostwriting prohibited, labeling required]\n[Request] Please create a one-page "AI Teaching Protocol".\n[Format] A table with 6 sections (purpose / tasks / red lines / rules for students / verification routine / action plan), one A4 page.\n[Example] Action plan example: "Week 1 of September: start the week 3 discussion prompts from an AI draft".\n[Condition] Start the action plan from "one small thing next Monday".',
        check: 'Check that all 6 sections are filled in and that the action plan starts "small".',
      },
      {
        title: 'Prepare a 2-minute talk',
        detail: 'Write the remarks you will use to share it with colleagues.',
        prompt: '[Request] Please turn this protocol into remarks for a 2-minute introduction in front of my fellow professors.\n[Format] The 1 biggest change / 2 things I will start this semester / 1 tip to recommend to colleagues.\n[Condition] Natural spoken style, under 2 minutes when read aloud.',
        check: 'Read it aloud and check that it comes in under 2 minutes.',
      },
      {
        title: 'Share and give each other feedback',
        detail: 'Swap protocols with the professor next to you and jot down 1 question and 1 idea you want to borrow.',
        check: 'If you have folded one colleague\'s idea into your own protocol — you have completed the program!',
      },
    ],
    result: 'The final output of these 12 hours, your own AI Teaching Protocol, is complete. 🎓',
  },
};
