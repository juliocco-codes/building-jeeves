# Building Jeeves

Jeeves is a personal operations agent. It turns information that is normally spread across calendars, inboxes, weather forecasts, travel tools, and personal preferences into a useful daily brief. It can also recommend places and products based on what its user actually likes.

## What you are building

A useful personal agent needs four kinds of context:

1. **Stable preferences:** food, travel, communication, budget, and recommendation preferences that rarely change.
2. **Current context:** temporary priorities, trips, active constraints, and decisions that matter now.
3. **Daily evidence:** what happened today, what changed, and what the agent learned from corrections.
4. **Skills:** repeatable workflows for jobs such as preparing a daily brief or comparing journeys.

Keep these layers separate. It makes the agent easier to correct and prevents yesterday's detail from becoming a permanent assumption.

## Start here

1. Install and complete OpenClaw's onboarding. Follow the [official OpenClaw README](https://github.com/openclaw/openclaw#readme), because installation and configuration can change.
2. Create or choose an OpenClaw workspace.
3. Copy the files under `workspace/` into it.
4. Rename `USER.example.md` to `USER.md` and replace the fictional examples with your own preferences.
5. Connect only the services required for the first use case. A calendar-only brief is a better starting point than connecting every account at once.
6. Test the agent manually before scheduling anything.
7. Add one skill at a time and review its output before granting write access.

OpenClaw loads workspace skills from `<workspace>/skills/<skill>/SKILL.md`. Its official [skills documentation](https://docs.openclaw.ai/skills) explains precedence, installation, and configuration.

## A sensible first version

Start with a morning brief that answers:

- What is on the calendar today?
- What needs preparation?
- Does weather change any plan?
- When should I leave, and how should I travel?
- Is there anything genuinely important in the inbox?

The example skill in `workspace/skills/daily-brief/` defines this job without assuming a particular calendar, email, mapping, or weather provider.

## Design decisions

### Start with decisions, not data

Do not include information simply because an API makes it available. Include it when it changes what the user should do.

### Separate judgment from retrieval

Use deterministic tools to retrieve dates, journeys, and weather. Use the model to explain their implications. Do not ask the model to invent journey times or calendar facts.

### Let taste accumulate through corrections

When the user rejects a recommendation, capture the reason, not just the rejection. “Too formal for a weekday dinner” is reusable. “Did not like it” is not.

### Default to read-only

Reading a calendar to prepare a brief is lower risk than editing it. Drafting an inbox action is lower risk than executing it. Add write access only after the read-only workflow is reliable.

### Use schedules for scheduled work

Run a morning brief through a scheduled job. Do not keep a heartbeat running only to check whether it is morning. This reduces cost and makes the trigger explicit.

## Repository map

- `workspace/AGENTS.md`: operating rules and startup routine.
- `workspace/SOUL.md`: the agent's stance, tone, and boundaries.
- `workspace/USER.example.md`: example stable preferences to replace locally.
- `workspace/skills/daily-brief/SKILL.md`: a provider-neutral daily brief workflow.
- `examples/daily-brief.md`: an example showing the intended level of detail.
- `SECURITY.md`: what must remain out of Git and how to review changes.

## Next steps

Once the daily brief is dependable, add one workflow at a time:

- journey comparison using authoritative transport data;
- place recommendations that combine hard constraints with learned taste;
- a weekly look-ahead for preparation and logistics;
- conservative inbox triage with confirmation before any destructive action.

## License

Available for personal and non-commercial use. See `LICENSE` for details.
