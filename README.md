# Dev-Timeline | Developer Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and represents simple 1 timeline portfolio.

Demo: https://alcibiadescleinias.github.io/dev-timeline/

# Features
- timeline with work and projects experiences, educations and prized projects
- filters for all 4 components are available

# Dev

`pnpm i`

`pnpm run start`

# Prod

In [.github/workflows/deploy.yml](.github/workflows/deploy.yml) presented deploy to github pages. After the deploy you can find the site at https://alcibiadescleinias.github.io/<repo-name>/ or you could use CNAME file to set custom domain as it done in this repo: [CNAME](CNAME)

To use your own experience for timeline - set up secretes: 
- EDUCATIONS_JSON
- PROJECTS_JSON
- WORKS_JSON

## Copy to production

## Fixtures Format

### Education
```json
[
  {
    "title": "Bachelor of Science",
    "subtitle": "Moscow Institute of Physics and Technology (State University) (MIPT)",
    "start": "1409603810000",
    "end": "1535834210000",
    "description": "Applied Mathematics and Physics, GPA 4/5"
  }
]
```

### Projects
```json
[
  {
    "title": "AI Video Insight Chrome Extension",
    "subtitle": null,
    "start": "1719957600000",
    "description": "Extension for Video Summary, Clickbait Rating, TL;DR of Comments. Project built according to the provided technical task for 10 hours (check readme)",
    "stack": [
      "Docker",
      "FastAPI",
      "JavaScript",
      "Python"
    ],
    "additionalTags": [
      "ChromeExtension",
      "Openai",
      "Withdocs"
    ],
    "publicUrl": null,
    "moreInfoUrl": "https://www.notion.so/why-nft/36420a38619747d0943074f9139224f2",
    "awards": null
  }
]
```

### Works
```json
[
  {
    "title": "ML Engineer",
    "subtitle": "ACRA Rating Agency",
    "start": "1525125600000",
    "end": "1543363200000",
    "description": "Developed web-app to predict probability of a company default",
    "stack": ["Flask", "ML"],
    "additionalTags": ["Moscow"]
  }
]
```