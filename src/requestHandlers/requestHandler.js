import axios from 'axios';
import { HN_CONFIG as HACKER_NEWS } from '../constants/constants';


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
export const getBestStories = () => axiosInstance.get(HACKER_NEWS.bestStories)
  .then( response => response.data )
  .catch( error => error );

/**
 *
 *
 */
export const getNewStories = () => axiosInstance.get(HACKER_NEWS.newStories)
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
