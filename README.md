# The ResumeBook

ResumeBook lets users concisely present their skills, experience and past work on their profile. Portfolio content is assumed to be hosted elsewhere but represented on the site as a link and a thumbnail.

Other users or guests can leave comments on a user’s skills and experience as well as each past project they post. Each comment will be run through a sentiment analysis API and only displayed by default if it is positive.

## 

## External API

Watson Tone Analyzer

Tones: https://cloud.ibm.com/docs/tone-analyzer?topic=tone-analyzer-utgpe#tones-tone

Currently, new comments will be checked for joy, anger and fear with a very low threshold. Any anger or fear will override joy in deciding to post a comment.

## Dev Stuff

### Scripts

- `npm start` start theResumeBook
  - hits the database first and will not start if it doesn't get anything back
  - also spits out the entire database before `react-scripts start` takes over so you can make sure things look okay. Surprisingly handy.
- `npm run api` start the local database API
  - `npm run api init` will create/overwrite the database file -- use this if you're running for the first time

### API

`json-server` is used for a mock database.

You will need Watson Tone analyzer credentials exported to `REACT_APP_TRB_KEYNAME` and `REACT_APP_TRB_KEY`. Please note that even if you keep your creds in the (untracked by default) `.env` file **your api key will be embedded in the source for the site**. I haven't hardened this setup at all.
