---
title: "Career Aggregator"
slug: "career-aggregator"
order: 1
repo: "https://github.com/GPayne12/career-aggregator-tool"
demo: "http://localhost:8000"
stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Jinja2"]
status: "live"
summary: "Job search automation app — scrapes listings, filters by keyword
  profile, tracks applications through a pipeline, and surfaces a weekly
  digest. All 7 phases complete."
decisionLog: "Chose SQLite over Postgres to eliminate infrastructure overhead
  for a single-user tool. FastAPI over Flask for the async scraper scheduler.
  Jinja2 templates over a SPA framework to keep the frontend zero-build.
  Scrapers run on APScheduler inside the same process to avoid a separate
  queue service."
---
