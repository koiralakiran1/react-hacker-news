export const APP_ROUTES = {
  root: `${process.env.PUBLIC_URL}/`,
  home: `${process.env.PUBLIC_URL}/home`,
  login: `${process.env.PUBLIC_URL}/login`,
  topStories: `${process.env.PUBLIC_URL}/topstories`,
  newStories: `${process.env.PUBLIC_URL}/newstories`,
  bestStories: `${process.env.PUBLIC_URL}/beststories`,
  askStories: `${process.env.PUBLIC_URL}/askstories`,
  showStories: `${process.env.PUBLIC_URL}/showstories`,
  jobStories: `${process.env.PUBLIC_URL}/jobstories`
};

export const HN_CONFIG = {
  baseUrl: 'https://hacker-news.firebaseio.com/v0',
  itemRoute: '/item/',
  userRoute: '/user/',
  topStories: '/topstories.json',
  newStories: '/newstories.json',
  bestStories: '/beststories.json',
  askStories: '/askstories.json',
  showStories: '/showstories.json',
  jobStories: '/jobstories.json'
};

export const STORY_TYPES = {
  topStories: 'topstories',
  newStories: 'newstories',
  bestStories: 'beststories'
};

export const LIST_POSITIONS = {
  primary: 'primary',
  secondary: 'secondary',
  main: 'main'
};
