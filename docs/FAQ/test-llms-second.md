---
title: llms.txt regeneration trigger validation
sidebar_position: 100
description: Second temporary FAQ page used to confirm that pushing a new article triggers the gen-llms workflow and produces a bot commit on the PR branch.
---

# llms.txt regeneration trigger validation

Second smoke-test page. Pushing this file should cause the gen-llms workflow to detect a new entry, regenerate `static/llms.txt` and `static/ai-sitemap.json`, and push a `chore: regenerate llms.txt and ai-sitemap.json` commit back to the PR branch.

Delete this file once the bot commit has been observed.
