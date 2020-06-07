import axios from 'axios';
import { HN_CONFIG as HACKER_NEWS } from '../constants/constants';
import { STORY_TYPES } from '../constants/constants';


const axiosInstance = axios.create({
  baseURL: HACKER_NEWS.baseUrl
});

/**
 *
 *
 * @param {*} id
 */
export const getItem = async function(id) {
  const result = await axiosInstance.get(HACKER_NEWS.itemRoute + id + '.json')
    .then( response => response.data).catch( error => error );

  return result;
};

export /**
 *
 *
 * @param {*} type
 * @returns
 */
const getStoriesIdArray = (type) => {
  if(type === STORY_TYPES.topStories ) {
    return getTopStoriesIdArray();
  } else if (type === STORY_TYPES.bestStories ) {
    return getBestStoriesIdArray();
  } else if ( type === STORY_TYPES.newStories ) {
    return getNewStoriesIdArray();
  }
};

/**
 *
 *
 */
export const getTopStoriesIdArray = () => axiosInstance.get(HACKER_NEWS.topStories)
  .then( response => response.data )
  .catch( error => error );

/**
 *
 *
 */
export const getBestStoriesIdArray = () => axiosInstance.get(HACKER_NEWS.bestStories)
  .then( response => response.data )
  .catch( error => error );

/**
 *
 *
 */
export const getNewStoriesIdArray = () => axiosInstance.get(HACKER_NEWS.newStories)
  .then( response => response.data )
  .catch( error => error );

/**
 *
 *
 */
export const getAskStories = () => axiosInstance.get(HACKER_NEWS.askStories)
  .then( response => response.data )
  .catch( error => error );

/**
 *
 *
 */
export const getShowStories = () => axiosInstance.get(HACKER_NEWS.showStories)
  .then( response => response.data )
  .catch( error => error );

/**
 *
 *
 */
export const getJobStories = () => axiosInstance.get(HACKER_NEWS.jobStories)
  .then( response => response.data )
  .catch( error => error );
