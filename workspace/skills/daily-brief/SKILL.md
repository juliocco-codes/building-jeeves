---
name: daily-brief
description: Prepare a concise daily plan from verified calendar, weather, journey, and priority information.
---

# Daily brief

## When to use

Use for the scheduled morning brief or when the user asks what their day looks like.

## Required inputs

- today's calendar events in the user's time zone;
- current priorities or reminders explicitly available to the agent;
- weather during relevant travel windows;
- verified journey information when travel timing matters.

Inbox information is optional. Include it only when the integration is available and the message changes today's plan.

## Workflow

1. Resolve today's date and time zone.
2. Retrieve calendar events. Preserve their actual start time, location, and status.
3. Identify conflicts, unusually short gaps, required preparation, and journeys between different locations.
4. Retrieve weather only for the periods in which it could change travel or plans.
5. Retrieve journey times from an authoritative transport or mapping source. Do not estimate them from memory.
6. Include priorities only when they are still active and relevant today.
7. Produce the brief using the output format below.

If a required source fails, name the missing source at the top. Do not present the brief as complete.

## Output format

### Today

A one-sentence summary of the shape of the day.

### Schedule

List events in time order. Add preparation or departure guidance only where useful.

### Worth noticing

Include conflicts, weather changes, important messages, or active priorities. Omit this section if there is nothing worth noticing.

### First action

End with the single most useful next action, if one exists.

## Boundaries

- Do not edit the calendar or send a message.
- Do not expose private event descriptions beyond what the user needs.
- Do not pad the brief with generic advice.
- Do not repeat raw source data when its implication is enough.
