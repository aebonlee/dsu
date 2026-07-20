import type { SessionEnMap } from './types';

/** 공통 VOD — 영문 오버레이 (한국어 정본: src/data/courses.ts) */
export const VOD_EN: SessionEnMap = {
  /* ── Module 1 · How LLMs Work & Where Faculty Can Use Them ── */
  'vod:1:0': {
    title: 'How does generative AI (Claude) produce language?',
    goal: 'You can explain, in your own words, that AI writes by repeatedly guessing the next word. (Understand)',
    topics: [
      'Is AI a very smart person? No — it is "a machine that has read an enormous amount of text and guesses the next word by probability"',
      'It works just like the autocomplete on your phone — except it has learned from hundreds of millions of books\' worth of text, so it writes far longer and more natural passages',
      'What the name LLM (Large Language Model) means: Large (big), Language (language), Model (a model that imitates it)',
      'Claude, ChatGPT, and Gemini are all LLMs — in this program we will focus on Claude',
      'It does ==not "answer because it understands" — it "generates a plausible answer"==, and that is the starting point of every limitation',
      '📦 Output: A one-sentence summary of how an LLM works (in your own words)',
    ],
    practices: [
      { scenario: 'Have Claude explain its own inner workings in plain language', prompt: '[Role] You are a friendly AI education specialist who has spent ten years teaching complete beginners.\n[Context] I am a university professor encountering AI for the first time, and I still have no feel for what a large language model (LLM) is.\n[Request] Please explain how an LLM produces text, using one analogy.\n[Format] Three sentences or fewer, in plain language a middle-school student could follow.\n[Example] Use an everyday analogy, such as "Just as your phone\'s autocomplete suggests the next word…".\n[Condition] Whenever you use a technical term, put a plain-language explanation in parentheses right beside it.' },
      { scenario: 'Put the autocomplete analogy to the test', prompt: '[Role] You are a science communicator who scrutinises analogies for accuracy.\n[Context] I have just been taught the analogy "AI is a very large version of your phone\'s autocomplete".\n[Request] Please tell me how far this analogy holds and where it breaks down.\n[Format] A table with two things it gets right and two things it gets wrong.\n[Example] For a correct point, be as concrete as "Both predict the next word by probability".\n[Condition] Keep each item to one sentence and attach one example to each.' },
    ],
  },
  'vod:1:1': {
    title: 'Hallucination — AI tells convincing lies too',
    goal: 'You can explain, with examples, why AI answers must always be verified. (Understand)',
    topics: [
      'What is **hallucination**? It is when AI, instead of saying "I don\'t know", ==invents plausible-sounding false information==',
      'Why does it happen? Because AI does not "remember" facts — it constructs "plausible sentences"',
      'Typical cases: paper titles and authors that do not exist, wrong years, fabricated case-law citations',
      '==Numbers, names, dates, and quotations are especially risky== — make it a habit to check them against the original source',
      'Three verification steps: (1) be suspicious, (2) ask for sources, (3) check the original yourself (library, Google Scholar)',
      '📦 Output: A list of situations in your own field where hallucination would be dangerous',
    ],
    practices: [
      { scenario: 'Witness hallucination for yourself (a safe experiment)', prompt: '[Role] You are an AI literacy specialist who has researched the limits of generative AI.\n[Context] My field is [your field], and before I use AI to prepare class materials I want to know where the risks lie.\n[Request] Please tell me five types of questions in this field where generative AI is likely to hallucinate (produce plausible but false information), together with how to verify each one.\n[Format] A three-column table: "Question type / Example of hallucination / How to verify".\n[Example] For a question type, something like "Asking for a particular scholar\'s list of publications — it may invent book titles that do not exist".\n[Condition] Write the verification methods as actions I could actually carry out today.' },
      { scenario: 'Build the habit of asking for sources', prompt: '[Role] You are a careful research assistant who flags the reliability of your own answers.\n[Context] I am considering whether to use an explanation of [topic in my field] as class material.\n[Request] Please explain [topic in my field].\n[Format] After the explanation, give a list that separates (1) well-established general knowledge from (2) points I need to verify myself.\n[Example] For (2), flag things like "The year and figures for XX — needs checking against the original source (suggested search terms: …)".\n[Condition] For (2), also suggest search terms I can use when I check.' },
    ],
  },
  'vod:1:2': {
    title: 'Where can it help in your work — from syllabus to feedback',
    goal: 'You can identify the points in your own work (syllabus, lesson plans, assessment, feedback) where Claude can help. (Apply)',
    topics: [
      'Class preparation: syllabus drafts, weekly lesson plans, slide outlines, creating examples and analogies',
      'Running the class: discussion questions, group worksheets, remedial and advanced materials by level',
      'Assessment: draft exam items, grading rubrics, model answers',
      'Feedback: polishing the wording of assignment feedback, encouraging phrases for different types of students',
      'An important line: ==AI handles the "first draft"; the final judgement and the responsibility always rest with you, the instructor==',
      '📦 Output: A checklist of where AI fits into your own work',
    ],
    practices: [
      { scenario: 'Draw an AI-use map for your own course', prompt: '[Role] You are a teaching-and-learning consultant who understands the work of university faculty well.\n[Context] I am a professor teaching [course name] at Dongshin University, and I am introducing generative AI into my work for the first time.\n[Request] Please suggest three tasks in each of three areas where I could use generative AI in this course: (1) class preparation, (2) running the class, (3) assessment and feedback.\n[Format] A four-column table: "Area / Task / Expected benefit / Estimated time saved".\n[Example] For a task, something like "Drafting weekly discussion questions — saves 30 minutes a week".\n[Condition] Make each task concrete enough that I could try it this very semester.' },
      { scenario: 'Pick your most urgent task and try it right away', prompt: '[Role] You are a work coach who is good at sequencing tasks.\n[Context] I am a professor who has to finish [task, e.g. creating a group worksheet] by next week.\n[Request] Please tell me in what order I should work through this task with Claude, and write the prompt I should use for the first step.\n[Format] A numbered list of steps, followed by a code block containing the "prompt for step 1".\n[Example] For the steps, something like "Step 1: decide the activity goal → Step 2: generate a draft → Step 3: polish it".\n[Condition] Keep it to three to five steps in total, with one line of explanation per step.' },
    ],
  },
  'vod:1:3': {
    title: 'Getting started with Claude — from signing up to your first prompt',
    goal: 'You can sign up for Claude, find your way around the screen, and enter your first prompt. (Apply)',
    topics: [
      'Signing up: go to claude.ai → sign up with your email or Google account → complete verification',
      'The screen: conversation list on the left, conversation window in the middle, input box at the bottom — these three are all you need to know',
      'Basic operation: press Enter to send, you can follow up with "please rewrite that", and conversations are saved automatically',
      'When to start a new conversation: press the new-conversation button (＋) whenever the topic changes, and the answers get more accurate',
      'Attaching files: use the paperclip icon to upload PDFs and images and ask questions about them',
      '📦 Output: A Claude account plus your first completed conversation',
    ],
    practices: [
      { scenario: 'Your first prompt — start with an introduction', prompt: '[Role] You are the AI teaching assistant who will help me prepare my classes from now on.\n[Context] I am a professor teaching [course name] at Dongshin University, and today is the first time I have used you.\n[Request] Please tell me five things you can help me with.\n[Format] A numbered list, one line per item.\n[Example] Something like "1. Drafting a syllabus — just give me the course details and I will lay out a 15-week table for you".\n[Condition] Use examples suited to humanities, social science, and arts & physical education classes.' },
      { scenario: 'Learn how to make follow-up requests', prompt: '[Request] Of the five things you just listed, please explain number 3 in more detail. And recommend one first action I could start on this semester.\n[Format] Three to four sentences of detailed explanation, plus a one-line "first action".\n[Condition] The first action should be something I can do within 30 minutes today. (For follow-up requests within the same conversation, you can keep it short like this, with no [Role] or [Context]!)' },
    ],
  },

  /* ── Module 2 · Prompt Engineering with Claude ── */
  'vod:2:0': {
    title: 'What makes a good prompt — role, context, format, example (+ steps)',
    goal: 'You can write a request that includes all the components of a prompt. (Apply)',
    topics: [
      '**A prompt is a "work order" you send to the AI** — the more detail you give, the better the result',
      '(1) Role: "You are an expert in XX" — telling the AI what kind of person to answer as',
      '(2) Context: the background — who it is for and what the situation is (year level, subject, class length, and so on)',
      '(3) Format: a table? a list? how many words? — deciding the shape of the output',
      '(4) **Example**: showing one line of a sample of what you want — ==the quality improves noticeably== (few-shot)',
      '(5) Steps and conditions: break complex work into an order, and state the conditions to be observed',
      '📦 Output: One prompt in the standard structure (for your own course)',
    ],
    practices: [
      { scenario: 'Same request, two versions compared', prompt: '[Role] You are a specialist with ten years of experience designing university general-education courses.\n[Context] I want to run group discussions in my first-year undergraduate [course name] class (75 minutes, 30 students).\n[Request] Please recommend three discussion topics for this class.\n[Format] A table with two arguments for and two against attached to each topic.\n[Example] Aim for topics about as debatable as "Can work created by AI count as art?".\n[Condition] Choose topics first-year students can join in on without any background knowledge. (Experiment: compare the result with what you get by typing only "give me discussion topics" in a new conversation!)' },
      { scenario: 'Upgrade your own request into the standard structure', prompt: '[Role] You are a coach who teaches people how to write prompts.\n[Context] The request I usually make to AI is "[your usual request, e.g. make me some class materials]", but the results have always been disappointing.\n[Request] Please rewrite this request as a prompt with the [Role], [Context], [Request], [Format], [Example], and [Condition] structure, and explain what changed and why.\n[Format] A code block containing the "upgraded prompt", plus three lines on the reasons for the changes.\n[Example] An upgrade should look like: "make me some materials" → "[Role] You are an expert in XX …".\n[Condition] Mark the parts that should be left blank with [square brackets].' },
    ],
  },
  'vod:2:1': {
    title: 'Ready-to-use prompt templates for faculty work',
    goal: 'You can fill in the blanks in the supplied templates and apply them directly to your own work. (Apply)',
    topics: [
      'A template is a "prompt form" where you only fill in the blanks — you never have to write it from scratch again',
      'Syllabus template: just enter [course name], [audience], and [number of weeks] to get a complete draft',
      'Lesson-plan template: enter the weekly topic and it generates an introduction–development–wrap-up flow',
      'Quiz template: specify the scope, number of items, and difficulty to generate comprehension questions',
      'Feedback template: a three-part structure of strengths – areas to improve – next steps',
      'How to store your templates: keep them together in a notepad or Hangul file and copy them when you need them',
      '📦 Output: The start of your own template collection file',
    ],
    practices: [
      { scenario: 'Try the syllabus template', prompt: '[Role] You are a specialist with ten years of experience designing university curricula.\n[Context] I am opening the following course next semester.\n- Course name: [course name]\n- Audience: [year level / major]\n- Hours per week: [e.g. 3 hours]\n- Content that must be covered: [two or three core topics]\n[Request] Please create a draft 15-week syllabus.\n[Format] A four-column table: week / topic / key content / activity.\n[Example] Make the activity column concrete, such as "Week 3 — group discussion (40 min) + mini-lecture (30 min)".\n[Condition] Leave the midterm and final weeks empty, and spread discussion and writing activities evenly across the semester.' },
      { scenario: 'Try the feedback template', prompt: '[Role] You are a university professor who guides students warmly but precisely.\n[Context] I need to write feedback on a student assignment.\n- What the assignment was: [one-line summary]\n- My notes: [what struck me as strong or weak]\n[Request] Please write the feedback for this student.\n[Format] (1) Two strengths, (2) one area to improve (including a concrete method), (3) one line of encouragement for the next assignment.\n[Example] Write the strengths with reference to the actual work, such as "It was striking how you connected the problem to your own experience in the introduction".\n[Condition] Use a tone that respects the student, in six lines or fewer overall.' },
    ],
  },
  'vod:2:2': {
    title: 'Practice: refining the learning objectives for your own course',
    goal: 'You can refine vague goals into sentences that use observable action verbs. (Apply / Analyse)',
    topics: [
      'What a learning objective is: a sentence stating what students will be able to do once the class is over',
      'A poor objective: "Students will understand XX" — ==you cannot see with your own eyes whether they understood==',
      'A good objective: "Students will be able to **explain / compare / create** XX" — verbs you can actually check',
      'The Bloom verb ladder (easier → harder): remember → understand → apply → analyse → evaluate → create',
      'How to give Claude your draft objective and ask it to "rewrite this with action verbs"',
      '📦 Output: Three learning objectives for your course (refined versions)',
    ],
    practices: [
      { scenario: 'Repair a learning-objective sentence', prompt: '[Role] You are an educational technology specialist well versed in Bloom\'s taxonomy of educational objectives.\n[Context] The draft learning objective for my course [course name] is "[e.g. Students will understand the concept of marketing]", but I have been told it is not a checkable statement.\n[Request] Please rewrite this objective in three versions that use observable action verbs.\n[Format] A four-column table: "Version / Objective statement / Bloom level / How to check it in class".\n[Example] A good objective looks like "Students will be able to apply the 4Ps of marketing to a real product case and explain it".\n[Condition] Make the three versions sit at different Bloom levels (understand, analyse, create, and so on).' },
      { scenario: 'Build a set of objectives for one week', prompt: '[Role] You are a specialist in university course design.\n[Context] I am rewriting the learning objectives for the [weekly topic] class (75 minutes) in [course name].\n[Request] Please create three learning objectives structured as "one remember/understand + one apply/analyse + one synthesis activity".\n[Format] Write each objective as a "Students will be able to …" sentence, with one line beside it on how to check it (a question or activity).\n[Example] For how to check it, something like "Have them explain it to a partner, then call on students at random to present".\n[Condition] Make the three objectives connect into a single lesson flow (from easier to harder).' },
    ],
  },
  'vod:2:3': {
    title: 'The three core instructional design documents — syllabus, lesson plan, and rubric are one body',
    goal: 'You can explain the relationship between the three documents with a diagram. (Understand)',
    topics: [
      'The syllabus is the map for the semester, the lesson plan is today\'s directions, and the rubric confirms you arrived',
      'What happens when the three documents drift apart: students complain that what was taught and what was tested are different',
      '**Alignment**: ==learning objectives → class activities → assessment items must line up in a single line==',
      'The order in which to use Claude: settle the learning objectives → syllabus → weekly lesson plan → rubric, requesting each in turn',
      'If you build them one after another in the same conversation, Claude remembers what came before and aligns them automatically',
      '📦 Output: A one-page concept diagram of how the three documents align',
    ],
    practices: [
      { scenario: 'Have your alignment checked', prompt: '[Role] You are an assessment specialist who diagnoses curriculum alignment.\n[Context] Here is the current state of my course.\n- Learning objective: "[objective]"\n- Main class activities: "[activities]"\n- Final assessment: "[assessment method]"\n[Request] Please check whether the objective, activities, and assessment connect well to one another, and propose fixes for anything that is out of line.\n[Format] A diagnosis table (item / current state / diagnosis / proposed fix), plus three lines of overall comment.\n[Example] A misalignment looks like: "The objective says \'compare and analyse\' but the exam says \'list\' — the verbs do not match".\n[Condition] Give the proposed fixes in both directions — one that changes the objective and one that changes the assessment.' },
      { scenario: 'Connect objective to assessment in one line', prompt: '[Role] You are an instructional designer who knows course design from beginning to end.\n[Context] Starting from the learning objective "[objective statement]", I want to build one complete session.\n[Request] Please create, in order: (1) two class activities that achieve this objective, (2) one assessment item that checks whether it was achieved, and (3) three lines of grading criteria.\n[Format] A list with a subheading for each step.\n[Example] For the activities, if the objective is "be able to compare", the activity should use the same verb, such as "build a comparison table of two cases".\n[Condition] Make the objective, activities, and assessment connect through the same action verb.' },
    ],
  },

  /* ── Module 3 · Creating Stage-by-Stage Teaching Materials with Claude ── */
  'vod:3:0': {
    title: 'The three stages of a class — each of introduction, development, and wrap-up needs its own materials',
    goal: 'You can distinguish which materials are needed at each stage of a class. (Understand)',
    topics: [
      'Introduction (the first 5–10 minutes): materials that open up curiosity — questions, cases, short stories, quizzes',
      'Development (the middle of the class): materials for learning the content — explanatory materials, worked examples, worksheets, discussion guides',
      'Wrap-up (the last 5–10 minutes): materials that consolidate what was learned — summaries, comprehension questions, a preview of the next session',
      'Because the "purpose" of the materials differs at each stage, the prompts have to be written differently too',
      'Once you have a three-stage set of materials on one topic, your class preparation is done',
      '📦 Output: A table of material types by stage (for your own course)',
    ],
    practices: [
      { scenario: 'Create your introduction materials', prompt: '[Role] You are a specialist in designing class openings that awaken student curiosity.\n[Context] I am preparing the first five minutes of the [topic] class in [course name] (undergraduate [year level], 75 minutes).\n[Request] Please create, for those five minutes: (1) two curiosity-raising questions, (2) one real-life case, and (3) one one-minute mini quiz.\n[Format] A list with subheadings; include the answers to the quiz.\n[Example] For a curiosity-raising question, something that touches their own experience, such as "Of all the money you spent yesterday, which purchase was the least rational?".\n[Condition] Make the questions ones with no right answer, so anyone can say something.' },
      { scenario: 'Create your wrap-up materials', prompt: '[Role] You are a specialist in designing review activities that make learning stick.\n[Context] I need wrap-up materials to hand out in the last ten minutes of the [topic] class (75 minutes).\n[Request] Please create: (1) a three-line summary of today\'s key points, (2) three true/false comprehension questions (with answers), and (3) one sentence previewing the next class.\n[Format] One page to hand out to students, divided by subheadings.\n[Example] For the preview sentence, something like "Next time we will look at how the XX we learned today was overturned in a real case".\n[Condition] Make the summary accurate enough that students could reread it before the exam.' },
    ],
  },
  'vod:3:1': {
    title: 'Feed in your lesson plan and learning materials come out',
    goal: 'You can enter an existing lesson-plan draft and automatically generate draft learning materials. (Apply)',
    topics: [
      'How to use what you already have: copy and paste the text of your lesson plan or teaching notes, then say "use this to make XX"',
      'Split long material up: one week\'s worth at a time is about right',
      'You can also upload PDF and Hangul files using the attachment (paperclip) icon',
      'Materials you can generate: student handouts, key-point summary notes, worksheets, preview and review assignments',
      'If you do not like the result: follow up with revision requests such as "make it simpler", "add examples", or "put it in a table"',
      '📦 Output: One draft learning material based on your own lesson plan',
    ],
    practices: [
      { scenario: 'Lesson plan → student handout', prompt: '[Role] You are a teaching-materials editor who turns lecture content into materials pitched at student level.\n[Context] Below is part of my lesson plan. I need summary material to hand out to students.\n[Request] Please turn this content into a one-page (A4) handout.\n[Format] Today\'s objectives / three key concepts (explained simply) / one sentence to remember / two self-check questions.\n[Example] For a self-check question, something like "Can I explain today\'s concept in one sentence in my own words?".\n[Condition] Make it understandable on a first reading, and put a plain explanation in parentheses after any technical term.\n\n[paste your lesson plan here]' },
      { scenario: 'Lesson plan → group worksheet', prompt: '[Role] You are a specialist in designing group activities.\n[Context] I want to run a 20-minute activity in groups of four during class, using the lesson-plan content above.\n[Request] Please create the group worksheet.\n[Format] Activity objective / step-by-step instructions (three steps) / a space for the group\'s notes / a space for summing up the presentation.\n[Example] Write the instructions so the time, the action, and the roles are all visible, such as "Step 1 (5 min): each person names one case and the recorder writes it in the table".\n[Condition] Make the instructions concrete enough that students do not have to ask again.' },
    ],
  },
  'vod:3:2': {
    title: 'The magic of purpose-driven conversion — summarise, simplify, expand',
    goal: 'You can convert the same content in three different ways to suit different purposes. (Apply)',
    topics: [
      'Summarise: long content → just the essentials (for review materials and exam preparation notes)',
      'Simplify: difficult explanations → analogies and everyday language (for students with weaker foundations)',
      'Expand: simple content → advanced cases and applied problems (for strong students and deeper study)',
      'The secret of differentiated teaching: take the same material and make an "easy version + standard version + advanced version"',
      'The conversion prompt formula: "Please rewrite the content below for [audience] as [purpose]"',
      '📦 Output: Three converted versions of one piece of content',
    ],
    practices: [
      { scenario: 'Do all three conversions at once', prompt: '[Role] You are an educational content editor who rewrites the same content to suit different readers.\n[Context] I want to give students at different levels a version of the lecture content below that suits each of them.\n[Request] Please convert it into three versions: (1) a summary — a five-line set of notes to read before the exam, (2) an easy version — an explanation with analogies for students meeting this for the first time, (3) an advanced version — with one real case and two applied questions added.\n[Format] Give each version a subheading and mark which students it is for.\n[Example] A sentence from the easy version might read: "Inflation is money losing its strength. It is like having to pay 1,200 won this year for the bread that cost you 1,000 won last year."\n[Condition] Keep the facts identical across all three versions.\n\n[paste your content here]' },
      { scenario: 'Master one difficult concept completely', prompt: '[Role] You are a celebrated lecturer known for making difficult concepts easy.\n[Context] Our students struggle every year with [the concept students find hardest in my course].\n[Request] Please explain this concept in this order: (1) an analogy, as if explaining to a middle-school student, (2) two everyday examples, (3) one common misconception and how to correct it.\n[Format] A spoken-style script I could deliver in class as written.\n[Example] For correcting the misconception, something like "Many people think XX is the same as YY, but in fact …".\n[Condition] Keep it to a length I could say in two minutes.' },
    ],
  },
  'vod:3:3': {
    title: 'Gathering up-to-date material with web search and checking for hallucination',
    goal: 'You can collect current material using the web search function and verify its sources. (Apply / Evaluate)',
    topics: [
      '**AI knowledge has a cut-off date**: it does not know about anything after its training date → make up for this with the web search function',
      'Using Claude\'s web search: when you need recent statistics, news, or cases, ask it to "search the web and…"',
      'Checking sources is essential for search results too: open the links yourself and compare them against the original',
      'A hallucination-checking routine: treat names, numbers, years, and quotations as "unverified" until you have checked the original',
      'The habit of citing sources in your class materials: it also has an educational effect, showing students what verification looks like',
      '📦 Output: One recent case plus a record of the source verification',
    ],
    practices: [
      { scenario: 'Collecting recent cases', prompt: '[Role] You are a meticulous researcher who always leaves a source trail.\n[Context] I want to use a recent case on [topic related to my course] in the introduction to next week\'s class.\n[Request] Please search the web and find three domestic cases or statistics from within the last year.\n[Format] A table giving, for each case, (1) a one-line summary, (2) the source link, and (3) how to use it in class.\n[Example] For how to use it, something like "As an opening question: why do you think this statistic came out this way?".\n[Condition] Leave out entirely any information whose source you cannot confirm.' },
      { scenario: 'Checking the material you received for hallucination', prompt: '[Role] You are a fact-checking assistant who helps verify material.\n[Context] Before I use case number 1 from what you just gave me in an actual class, I want to check it myself.\n[Request] Please turn the items I need to check (organisation name, figures, date) into a checklist, and recommend exact search terms for finding the original.\n[Format] A checkbox list of items to verify, plus two or three recommended search terms.\n[Example] A check item might read: "☐ Does the publishing organisation actually exist — confirm the press release on the organisation\'s official website".\n[Condition] Design the route so that verification takes no more than five minutes.' },
    ],
  },

  /* ── Module 4 · Assessment Design, Quality Control & AI Ethics ── */
  'vod:4:0': {
    title: 'Assessment items and rubrics — starting from templates',
    goal: 'You can follow the templates for generating assessment items and grading rubrics. (Apply / Foundational)',
    topics: [
      'Assessment item template: specify the scope, item type, difficulty, and number of items to generate a draft',
      'What a rubric is: a grading table stating "how many points for doing what, and how well" — it makes grading fair and fast',
      'The basic structure of a rubric: a table of assessment criteria (down the side) × levels (across the top: needs work – satisfactory – excellent)',
      'A caution: always work through items the AI has produced yourself and check them (the answers may be wrong or ambiguous)',
      'An exam security principle: never enter the actual items you plan to set into an AI (more on this in session 5)',
      '📦 Output: Three practice assessment items plus a mini rubric',
    ],
    practices: [
      { scenario: 'Try the comprehension quiz template', prompt: '[Role] You are a specialist with ten years of experience in university assessment design.\n[Context] I want to check the understanding of undergraduate [year level] students who have finished the [topic] section.\n[Request] Please create comprehension questions.\n[Format] Three multiple-choice items (four options, with answers and explanations) plus two short-answer items.\n[Example] For the explanations, aim for something like "Correct answer: (2). Option (1) confuses this with XX; options (3) and (4) are outside the scope".\n[Condition] Keep them at a basic level that anyone who attended the class could answer, and do not include trick questions.' },
      { scenario: 'Create a mini rubric', prompt: '[Role] You are a specialist in designing grading rubrics.\n[Context] I want to grade the [assignment name, e.g. a one-page essay] assignment fairly and quickly.\n[Request] Please create a grading rubric.\n[Format] A table of three assessment criteria (grasp of content / logical development / expression) × three levels (needs work 1 point – satisfactory 2 points – excellent 3 points).\n[Example] The "excellent" cell might read: "Supports the claim with at least two pieces of evidence and also acknowledges opposing views".\n[Condition] Write each cell as a concrete description of behaviour, so that a student reading it would know what they need to do.' },
    ],
  },
  'vod:4:1': {
    title: 'Quality-checking AI output — accuracy, appropriateness, and bias',
    goal: 'You can check AI output against three criteria. (Evaluate)',
    topics: [
      '(1) Accuracy: is the content factual? — check names, numbers, and quotations against the original',
      '(2) Appropriateness: does it fit the purpose? — does it match the learning objectives, level, and length',
      '(3) Bias: is it slanted one way? — check for stereotypes about gender, region, and culture',
      'Examples of bias: when the occupations of the people in the examples follow gender stereotypes, or when only one perspective is presented',
      'Quality checking is a new competence for instructors: ==being good at "filtering things out" matters more than being good at "producing things"==',
      '📦 Output: A three-criteria quality check sheet',
    ],
    practices: [
      { scenario: 'Have the AI review its own work', prompt: '[Role] You are a strict quality inspector reviewing the material you have just produced.\n[Context] Before I use the [material name] you created in an undergraduate [year level] [course] class, I want to check it.\n[Request] Please find (1) the parts that need fact-checking, (2) the parts that may not fit the purpose or level of the class, and (3) any expressions that may be biased.\n[Format] A three-column table: "Location / Problem / Proposed fix".\n[Example] A finding might read: "Statistic in paragraph 2 — source unknown, needs checking against the original".\n[Condition] Mark items with no problems as "checked — no issues", so that nothing is left out.' },
      { scenario: 'Practice detecting bias', prompt: '[Role] You are a diversity review specialist who checks educational materials for bias.\n[Context] Below is an example passage I plan to use in class.\n[Request] Please check whether it contains any expressions that carry stereotypes about gender, age, region, or culture, and if so, rewrite them in neutral terms.\n[Format] A table of "Original wording / Problem / Revised wording", plus two lines of overall comment.\n[Example] A revision might be: "she, a nurse," → "that person, a nurse," or diversifying the occupation–gender pairing itself.\n[Condition] Avoid over-correcting — change only what is genuinely a problem.\n\n[paste your example passage here]' },
    ],
  },
  'vod:4:2': {
    title: 'What if you find an error? — the revise, regenerate, re-review loop',
    goal: 'You can explain the cycle of finding an error, requesting a fix, and reviewing again. (Understand)',
    topics: [
      'The four steps of the checking loop: (1) generate → (2) check (find errors) → (3) request a fix or regeneration → (4) review again … and repeat',
      'Do not expect a perfect result on the first try: usually two or three rounds make it usable',
      'How to ask for revisions well: instead of the vague "do it again", be specific — "the options in item 3 overlap, please change them"',
      'Regenerating: if you dislike the whole thing, write the conditions in more detail and start again from scratch',
      'Keep a record: save the prompt that produced the final version as a template → reuse it next semester',
      '📦 Output: One worked example of applying the checking loop',
    ],
    practices: [
      { scenario: 'Practise making specific revision requests', prompt: '[Request] Please fix just two things in the quiz you have just made. (1) Item 2 appears to have two correct answers — please revise the options. (2) Item 4 covers material we did not deal with in class — please write a new one within [the scope we covered].\n[Condition] Leave the remaining items as they are. (When you follow up with revision requests, be specific like this about the location and the reason!)' },
      { scenario: 'Recover the prompt for the final version', prompt: '[Role] You are a documentation specialist who turns conversations into reusable templates.\n[Context] After many rounds of refinement, the final version of [material name] is now complete. Next semester I want to produce the same quality in a single step.\n[Request] Please condense this into one complete prompt that would produce this final output in one go.\n[Format] A code block with the [Role], [Context], [Request], [Format], [Example], and [Condition] labels.\n[Example] The label format should look like: "[Role] You are an expert in XX / [Context] …".\n[Condition] Turn the parts that change each semester into [square bracket] blanks.' },
    ],
  },
  'vod:4:3': {
    title: 'AI ethics, copyright, and personal data — the basic principles for instructors',
    goal: 'You can turn the ethics, copyright, and personal data principles for AI use into rules for your own class. (Understand / Apply)',
    topics: [
      'Copyright: review is essential before publishing or distributing AI output as it stands, and never feed in someone else\'s work in its entirety',
      'Declaring AI use: if you used AI in class materials or research, the principle is to state where and how you used it',
      'Give students standards too: state in the syllabus how far AI use is permitted in assignments',
      'Protecting personal data: strip out identifying information such as names before using any material containing student data',
      'Check your university\'s or institution\'s guidelines: make it a habit to check your own institution\'s AI policy first',
      '📦 Output: A draft AI-use notice for your own class',
    ],
    practices: [
      { scenario: 'Create an AI-use notice for your class', prompt: '[Role] You are an education policy adviser who knows university AI guidelines well.\n[Context] I want to include a student-facing "notice on the use of generative AI" in the syllabus for my course [course name].\n[Request] Please draft the notice.\n[Format] Four sections: (1) permitted uses, (2) prohibited uses, (3) how to declare use, (4) the principle for handling violations.\n[Example] For how to declare use, something like "Add one line at the end of the assignment: \'AI use: Claude used for outlining\'".\n[Condition] Use a tone that respects students, in ten lines or fewer overall.' },
      { scenario: 'Ethics check on how you use AI', prompt: '[Role] You are a specialist who advises on AI ethics in educational settings.\n[Context] This is how I currently use AI in preparing my classes: [list how you use it].\n[Request] Please check which of these need care from a copyright, personal data, or ethics point of view, and tell me how to use them more safely.\n[Format] A table: "How it is used / Risk level (high, medium, low) / Reason / Safer alternative".\n[Example] An alternative might be: "Entering the full text of a student assignment → remove the name and enter only the key paragraphs".\n[Condition] If anything is rated "high" risk, move it to the top of the table to highlight it.' },
    ],
  },
  'vod:4:4': {
    title: 'Data you must never enter — exam items, student information, confidential material',
    goal: 'You can distinguish the criteria for data that must not be entered into an AI. (Understand / Evaluate)',
    topics: [
      '**Prohibited 1 — real exam items and answers**: ==risk of leakage==. Use AI only for creating practice or sample items',
      '**Prohibited 2 — students\' personal data**: ==names, student numbers, grades, counselling records, contact details — anything identifiable==',
      '**Prohibited 3 — confidential information**: unpublished internal university documents, unpublished research data, contract and personnel information',
      'How to use it safely: replace real names with "Student A", and rebuild real exam items as similar practice items',
      'Remember: once you have entered something, it has left your hands — ==ask yourself before you type, "would I be fine if this became public?"==',
      '📦 Output: A three-tier classification table of prohibited / use with care / permitted inputs',
    ],
    practices: [
      { scenario: 'Build the three-tier classification table', prompt: '[Role] You are a security specialist responsible for information protection training at a university.\n[Context] Faculty are confused about what may and may not be entered into an AI, so I want to make a reference table and share it.\n[Request] Please create a table classifying the materials a university professor handles into three tiers: "must not be entered into AI / may be entered after processing / may be entered freely".\n[Format] A table with four real examples for each tier and the reason for each.\n[Example] A borderline case might read: "An anonymised student assignment — if all personally identifying elements have been removed, it may be entered after processing".\n[Condition] Include at least two ambiguous borderline cases, to show how the judgement is made.' },
      { scenario: 'Practise safe processing', prompt: '[Role] You are a specialist in de-identifying personal data.\n[Context] I want to use AI to draft feedback on a student assignment, but the assignment contains the student\'s information.\n[Request] Please tell me, in order, the processing steps I need to carry out before entering the assignment text into an AI.\n[Format] A checklist (item to check + how to handle it).\n[Example] An item might read: "☐ Delete the name and student number → replace with \'Student A\'".\n[Condition] Add one line to each item explaining why it is risky.' },
    ],
  },
};
