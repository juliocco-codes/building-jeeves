const HOUR = 3600000;

export function prepareEvents(events, now = new Date()) {
  return events
    .filter((event) => event?.start && new Date(event.start) >= now)
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .map((event) => ({
      id: event.id,
      title: event.summary || "Untitled event",
      start: event.start,
      end: event.end || null,
      location: event.location || null,
      attendees: Array.isArray(event.attendees) ? event.attendees.map(({ displayName }) => displayName).filter(Boolean) : [],
      hours_until: Math.round(((new Date(event.start) - now) / HOUR) * 10) / 10,
    }));
}

export function weatherDecision(weather) {
  if (!weather) return { available: false };
  const maximumRain = Math.max(0, ...(weather.hourly || []).map((hour) => Number(hour.rain_probability) || 0));
  return {
    available: true,
    minimum_c: weather.minimum_c,
    maximum_c: weather.maximum_c,
    maximum_rain_probability: maximumRain,
    umbrella: maximumRain >= 20,
  };
}

export function prepareInbox(messages, importantSenders = []) {
  const approved = new Set(importantSenders.map((value) => value.toLowerCase()));
  return messages
    .filter((message) => message.unread || message.requires_reply)
    .map((message) => ({
      id: message.id,
      sender: message.sender,
      subject: message.subject,
      requires_reply: Boolean(message.requires_reply),
      important_sender: approved.has(String(message.sender || "").toLowerCase()),
    }))
    .sort((a, b) => Number(b.requires_reply || b.important_sender) - Number(a.requires_reply || a.important_sender));
}

export function buildBriefContext(input, now = new Date()) {
  return {
    generated_at: now.toISOString(),
    events: prepareEvents(input.events || [], now),
    weather: weatherDecision(input.weather),
    inbox: prepareInbox(input.messages || [], input.preferences?.important_senders || []),
    preferences: input.preferences?.brief || {},
  };
}
