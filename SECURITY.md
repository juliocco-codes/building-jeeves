# Security and privacy

Treat an agent workspace as private by default. It can reveal a person's routines, relationships, location, health, travel, and accounts even when it contains no password.

Before committing any change:

- search for names, email addresses, phone numbers, home and work addresses, calendar titles, and local filesystem paths;
- search for API keys, OAuth tokens, cookies, bearer tokens, private keys, and webhook URLs;
- inspect images and example output for personal information;
- check the complete Git diff, including deleted files;
- never commit a real `openclaw.json`, `.env`, credential file, memory directory, or exported conversation.

If a secret enters Git history, deleting it in a later commit is not enough. Revoke it immediately and clean the repository history before publishing.

Use least privilege. Begin with read-only access, keep confirmation in front of messages and destructive inbox actions, and restrict each integration to the data the workflow genuinely needs.

This template is instructional. You are responsible for reviewing the services, models, channels, and third-party skills you connect to your agent.
