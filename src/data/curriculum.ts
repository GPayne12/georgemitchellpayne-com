/**
 * Program-level metadata for /coursework.
 *
 * The course list itself lives in src/content/coursework/*.md — one file per
 * course in the *full* curriculum, including the ones not started yet. This
 * file only holds the framing that would otherwise be duplicated in every
 * course's frontmatter.
 *
 * Source: Quantic MSAIE Class of September 2027 cohort schedule (© 2025
 * Quantic Holdings Inc.). Dates and lesson titles are transcribed from it.
 */
export const curriculum = {
  program: 'M.S. Artificial Intelligence Engineering',
  institution: 'Quantic School of Business and Technology — Class of September 2027',
  /** Shown under the title. One or two sentences, plain. */
  blurb:
    'Fifty-eight weeks, eight core concentrations, a specialization period ' +
    'and a capstone. The whole curriculum from day one — including everything ' +
    'I have not yet taken.',
  /** Optional. Set to 0 to hide the credit readout entirely. */
  creditGoal: 0,
  /** Milestones from the cohort schedule. Rendered in the progress rail. */
  milestones: [
    { label: 'started', date: 'Jul 20, 2026' },
    { label: 'capstone kickoff', date: 'May 24, 2027' },
    { label: 'anticipated graduation', date: 'Sep 30, 2027' },
  ],
} as const;
