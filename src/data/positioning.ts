// Single source of truth for the locked positioning text.
// `positioningLead` is rendered verbatim on both the homepage hero and the About
// narrative — edit here only, so the two pages can never drift apart again.
// `expertiseRange` is About-only as of 2026-08-04: George cut it from the
// homepage paragraph. It stays exported rather than inlined so About keeps a
// single source, and so the homepage can pick it back up unchanged.
//
// Rule (2026-07-15): do not name the United Nations (or any client as a proper noun
// beyond named employers) until a dedicated case study for that project exists.

export const positioningLead =
  'For the past 10 years, I have cultivated learning design expertise by building ' +
  'hundreds of learning objects and assessments, revising over 100 distinct course ' +
  'offerings, and producing learning solutions for a nationally recognized cohort ' +
  'of research and specialized universities, and other high-profile clients.';

export const expertiseRange =
  'My expertise ranges from multimedia and video production to data-driven learning ' +
  'design, to learning experience architecture and AI-assisted coding.';
