import test from "node:test";
import assert from "node:assert/strict";
import { buildBriefContext, weatherDecision } from "../src/brief-context.mjs";

test("turns raw context into a sorted decision packet", () => {
  const now = new Date("2026-08-28T07:00:00Z");
  const result = buildBriefContext({
    events: [{ id: "2", summary: "Lunch", start: "2026-08-28T12:00:00Z" }, { id: "1", summary: "Call", start: "2026-08-28T09:00:00Z" }],
    messages: [{ id: "m1", sender: "friend@example.test", subject: "Question", requires_reply: true }],
  }, now);
  assert.equal(result.events[0].title, "Call");
  assert.equal(result.events[0].hours_until, 2);
  assert.equal(result.inbox[0].requires_reply, true);
});

test("makes the umbrella threshold explicit", () => {
  assert.equal(weatherDecision({ hourly: [{ rain_probability: 25 }] }).umbrella, true);
  assert.equal(weatherDecision({ hourly: [{ rain_probability: 10 }] }).umbrella, false);
});
