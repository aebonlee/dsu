import type { SessionEnMap } from './types';

/** Day 1 — 영문 오버레이 (한국어 정본: src/data/courses.ts) */
export const DAY1_EN: SessionEnMap = {
  /* ── 1~2교시 (curriculum day: 1) ── */
  'day1:1:0': {
    title: 'Debate, Case Analysis, and Writing Courses — Where Can AI Step In?',
    goal: 'Break your course down into its teaching activities, and tell apart the places where AI can help from the places where it must not. (Analysis)',
    topics: [
      'The three pillars of humanities & arts classes: debate (speaking and listening), case analysis (reading and interpretation), and writing (composing and expressing)',
      'Where AI fits into each pillar: debate → preparing motions and discussion questions / case analysis → analysis sheets and background material / writing → assignment design and first-draft feedback',
      'What AI must never do in your place: ==the student\'s own thinking, and the professor\'s final evaluation and judgment==',
      '=="AI helps with the preparation; the thinking stays with people."== — the **guiding principle** of this entire course',
      'Hands-on breakdown of your own course: split one semester of activities apart and build a map of where AI applies',
      '📦 Output: a one-page AI application map for your course',
    ],
    practices: [
      {
        scenario: 'Breaking my course into activities',
        prompt: '[Role] You are a specialist with 10 years of experience designing instruction for humanities and arts courses.\n[Context] I am a professor at Dongshin University teaching [course name], and my main class activities are [e.g., small-group debate, response papers on artworks, case presentations]. I want to bring generative AI into my class preparation, but I have no clear standard for how much I can hand over to it.\n[Request] Please break these activities apart and separate them into (1) the preparation work AI can help with for each activity, (2) the parts students must do entirely themselves, (3) the parts the professor must judge, and (4) cautions when using AI (hallucinations, checking sources, and so on).\n[Format] A four-column table with the activities running down the left.\n[Example] One row might read: "Small-group debate | Draft the motion and organize background material | Choose your own position and find supporting evidence | Make the final choice of motion and evaluate the debate | Confirm that the background sources actually exist".\n[Steps] First complete the table → then add a one-line summary of the guiding principle beneath it → finally recommend the one activity I should start with this semester, and why.\n[Condition] Fill each cell with the name of a real task rather than an abstract phrase. If I listed fewer than three activities, suggest additional activities that are common in this field so the table has at least five rows.',
      },
      {
        scenario: 'Setting priorities for adoption',
        prompt: '[Role] You are an education consultant who is good at pinpointing what to do first.\n[Context] I want to decide where to begin with the AI application map I just made. I am a beginner with AI, so I want to start small.\n[Request] Pick three uses of AI that are "high impact and easy to prepare" and rank them in order.\n[Format] A four-column table: "Rank / Task / Why I chose it / First step this semester (one line)".\n[Example] A first step might read: "Use Claude to draft five discussion questions for next week\'s Week 3 debate (30 minutes)".\n[Condition] Each first step should be something I can finish within this week in about 30 minutes.',
      },
      {
        scenario: 'Getting ideas from colleagues\' courses',
        prompt: '[Role] You are a researcher at a center for teaching and learning who has been collecting examples of AI use in university classrooms nationwide.\n[Context] I am a professor in the humanities and arts. I would like to see how other professors use AI so I can adapt it to my own course, [course name].\n[Request] Show me five types of cases in which generative AI has been used well for class preparation in this field.\n[Format] A four-column table: "Which activity / What the AI did / The line the professor refused to cross / How I could adapt it to my course".\n[Example] One case type might read: "Literature course — AI drafts a briefing on the historical background, while interpretation of the work stays with the students".\n[Condition] Do not invent the names of real universities or professors; describe the cases only as types.',
      },
    ],
  },
  'day1:1:1': {
    title: 'Finishing Your Learning Objectives and a Lesson-Plan Draft Today',
    goal: 'Structure the learning objectives for your own course and generate a draft lesson plan for one week. (Application & Creation)',
    topics: [
      'A 30-second review of VOD Module 2: a good objective uses an observable action verb ("appreciates the work" → "can write a response supported by two pieces of evidence")',
      'What makes objectives distinctive in the humanities and arts: the target is not a correct answer but "the quality of thinking and expression"',
      'Writing in the language of competencies: critical thinking, empathetic interpretation, creative expression, building an argument',
      'From objectives to lesson plan: once the objectives are settled, generate the lesson plan in the same conversation so the two stay aligned automatically',
      'The five essential parts of a lesson plan: objectives / opening / development (activity-centered) / closing / materials and cautions',
      '📦 Output: 3 learning objectives + a draft lesson plan for one week',
    ],
    practices: [
      {
        scenario: 'Structuring learning objectives',
        prompt: '[Role] You are a specialist with 10 years of experience designing humanities and arts curricula.\n[Context] The topic for [week] of my course [course name] is "[topic]". Right now my objective is only "students will understand ~", which is too vague to guide either the class or the assessment.\n[Request] Please write the learning objectives for this week as (1) one at the comprehension level, (2) one at the analysis level, and (3) one at the expression and creation level.\n[Format] Write each objective as an observable sentence in the form "Students can ~", with the Bloom\'s taxonomy level noted beside it.\n[Example] An expression-and-creation objective might read: "Students can reinterpret the conflict structure of the work in one paragraph by relating it to their own experience".\n[Condition] Use verbs that bring out critical thinking, interpretation, and expressive competence, as befits a humanities course.',
      },
      {
        scenario: 'Continuing into the lesson plan in the same conversation',
        prompt: '[Request] Good — I will finalize the three learning objectives you just wrote. Please build a 75-minute lesson plan around them.\n[Format] Opening (10 min, spark interest) / Development 1 (25 min, core content) / Development 2 (25 min, student activity) / Closing (15 min, sharing and summary) — for each stage, list what the professor does and what the students do separately.\n[Example] A stage might read: "Development 2 | Professor: circulate among the groups asking questions | Students: fill in the analysis sheet, then a representative presents".\n[Condition] Finish with a list of materials and cautions. The activities should carry the same verbs used in the objectives we just wrote. (Asking for this in the same conversation keeps your objectives and lesson plan aligned automatically!)',
      },
      {
        scenario: 'Expanding into a full-semester syllabus',
        prompt: '[Role] You are a specialist who designs curricula at the semester level.\n[Context] I like the single-week design we just finished, and I would like to plan out the whole semester of [course name] the same way.\n[Request] Please draft a 15-week syllabus.\n[Format] A five-column table: Week / Topic / Key content / Class activity / Assignment.\n[Example] A class-activity cell might read: "Week 5 — groups complete a case analysis sheet (30 min) + whole-class sharing (15 min)".\n[Condition] Leave the midterm and final weeks blank, and spread debate, writing, and presentation activities evenly across the semester. Carry the week we designed today into the table exactly as it is.',
      },
    ],
  },

  /* ── 3~4교시 (curriculum day: 2) ── */
  'day1:2:0': {
    title: 'Debate Guides, Discussion Questions, and Case Analysis Sheets — Done in Minutes with Templates',
    goal: 'Generate debate guides, discussion questions, and case analysis sheets from templates, then refine them to fit your own course. (Application)',
    topics: [
      'What goes into a debate guide: the motion / background explanation / key arguments for and against / order of proceedings / time allocation / what to look for when evaluating',
      'The three layers of questioning: fact-checking questions → interpretive questions → application and evaluation questions (from the shallow end toward the deep end)',
      'What goes into a case analysis sheet: case summary / analysis questions (the three layers) / a space to link concepts / a space for "my own thoughts"',
      'What makes a good motion: the two sides are evenly matched, it connects to the concepts of the course, and it touches students\' own lives',
      'Adapting this for the arts: the same framework works for discussions of artworks, comparisons of performance and studio interpretations, and analyses of creative intent',
      '📦 Output: 1 debate guide + 1 case analysis sheet',
    ],
    practices: [
      {
        scenario: 'Generating a debate guide',
        prompt: '[Role] You are a specialist with 10 years of experience designing university debate classes.\n[Context] In my [course name] class (undergraduate [year level], 30 students), I want to run a 40-minute small-group debate on "[topic]". The students do not have much debate experience.\n[Request] Please build me a debate guide.\n[Format] (1) A one-sentence motion with clear pro and con sides (2) a two-minute background explanation (3) three key arguments each for the pro and con sides (4) a table of the order of proceedings and time allocation (5) closing remarks for the professor to wrap up with.\n[Example] A motion might take the form: "Universities should fully permit the use of generative AI in coursework".\n[Condition] The motion should be evenly balanced between the two sides and connected to students\' own lives, and the background explanation should stay neutral.',
      },
      {
        scenario: 'Three-layer questions + a case analysis sheet',
        prompt: '[Role] You are a teaching consultant who is expert at designing questions.\n[Context] I am covering [case or work title] in my next class, and I want the students to go deeper rather than stopping at a surface-level impression.\n[Request] Please build me a one-page case analysis sheet.\n[Format] (1) A five-line summary of the case (2) two fact-checking questions (3) two interpretive questions (4) one question that applies it to the student\'s own life (5) instructions for the "my own thoughts" section.\n[Example] The flow of the three layers might run: "Why did the protagonist leave? (fact) → What does that choice symbolize? (interpretation) → What would I have done? (application)".\n[Condition] Make the questions deepen in the order fact → interpretation → application, and make the sheet complete enough to hand straight to students.',
      },
      {
        scenario: 'A set of backup questions for breaking the silence',
        prompt: '[Role] You are a veteran discussion facilitator who knows how to bring a quiet classroom back to life.\n[Context] The moments when students fall silent are what I dread most in a debate class. I want to prepare question cards in advance that I can pull out right then.\n[Request] Please write me ten "rescue questions".\n[Format] (1) Three low-pressure warm-up questions (2) three either-or questions that split the room in half (3) two questions that draw out minority opinions (4) two reflective closing questions.\n[Example] An either-or question might read: "If you had to pick just one — principle, or outcome? Show of hands?".\n[Condition] Write them in the natural spoken style you would actually use in class, and fit them to the situation in a [course name] session.',
      },
    ],
  },
  'day1:2:1': {
    title: 'A Demonstration of Leveled Text Conversion + Organizing Today\'s Outputs',
    goal: 'Learn the template for converting lecture text into different reading levels, then organize and share your Day 1 outputs. (Application & Synthesis)',
    topics: [
      'Why leveled conversion matters: every classroom holds students who read at different levels',
      'The conversion template (demonstrated): original text → easy version (analogies, short sentences) / standard version / advanced version (quotations from primary sources, deeper questions)',
      'The same works for exercises: generate an easy set and a difficult set of problems that ask about the same concept',
      'Gathering up what you made today: the AI application map, learning objectives, lesson plan, debate guide, and analysis sheet — save them all in one folder',
      'Sharing with colleagues: swap outputs with the professor sitting next to you and learn each other\'s best prompts',
      '📦 Output: 1 set of leveled texts + a Day 1 output folder',
    ],
    practices: [
      {
        scenario: 'Three-level conversion (following along with the demonstration)',
        prompt: '[Role] You are an educational content editor who rewrites the same material to suit different readers.\n[Context] Below is text from my lecture. My class mixes students who are shaky on the basics with students who want to go deeper.\n[Request] Please rewrite it at three levels. (1) An easy version: short sentences and analogies, for students meeting this for the first time. (2) A standard version: keep the current length, just make the sentences clearer. (3) An advanced version: add one related concept and two questions to think about.\n[Format] Put a one-line note in front of each version saying which students it is for.\n[Example] A sentence in the easy version might read: "The Enlightenment was a movement that said, \'Let\'s think for ourselves.\' Instead of simply doing as your elders said, people began to ask why."\n[Condition] Keep the facts identical across all three versions.\n\n[Paste your text here]',
      },
      {
        scenario: 'Experimenting with style — same content, different tone',
        prompt: '[Role] You are a professional editor who can shift the tone of a piece of writing at will.\n[Context] I want to dress the lecture text below in different clothes for different situations (an announcement, a handout, an opening for class).\n[Request] Keep the content and change only the style, giving me three versions. (1) A warm, conversational style, as if telling a story. (2) An academic written style. (3) A newspaper-article style.\n[Format] Add one line to each version describing the class situation it suits.\n[Example] The article style might have the rhythm of: "The debate over ○○ has flared up again. Three issues are at stake."\n[Condition] Keep the facts and the key terms exactly as they are.\n\n[Paste your text here]',
      },
      {
        scenario: 'Wrapping up Day 1 — building my own prompt notebook',
        prompt: '[Role] You are a knowledge-management specialist who turns conversation records into reusable assets.\n[Context] I used a number of prompts today, and I want to reuse the ones that worked well.\n[Request] Please gather the prompts from today\'s conversation that produced good results into a "prompt notebook of my own".\n[Format] A three-column table: "Purpose / The prompt itself (with [square brackets] as blanks) / One line of advice on using it".\n[Example] A line of advice might read: "Always state the year level when generating discussion questions — leave it out and the difficulty jumps around".\n[Condition] Keep the [Role]·[Context]·[Request]·[Format]·[Example]·[Condition] label structure intact in the prompts themselves.',
      },
    ],
  },
};
