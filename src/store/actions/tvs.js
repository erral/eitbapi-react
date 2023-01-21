import {
  getTVCategories as getTVCategoriesAPI,
  getTVCategory as getTVCategoryAPI,
  getTVCategoryPrograms as getTVCategoryProgramsAPI,
  getTVCategoryProgramPlaylist as getTVCategoryProgramPlaylistAPI,
  getTVCategoryProgramPlaylistChapter as getTVCategoryProgramPlaylistChapterAPI,
} from '../../api';

export const GET_TV_CATEGORIES = 'GET_TV_CATEGORIES';
export const getTVCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_TV_CATEGORIES}_PENDING`,
    });
    const result = await getTVCategoriesAPI();
    try {
      dispatch({
        type: `${GET_TV_CATEGORIES}_SUCCESS`,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_TV_CATEGORIES}_FAIL`,
        payload: error,
      });
    }
  };
};
export const GET_TV_CATEGORY = 'GET_TV_CATEGORY';
export const getTVCategory = (category) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_TV_CATEGORY}_PENDING`,
    });
    const result = await getTVCategoryAPI(category);
    try {
      dispatch({
        type: `${GET_TV_CATEGORY}_SUCCESS`,
        category: category,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_TV_CATEGORY}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_TV_CATEGORY_PROGRAMS = 'GET_TV_CATEGORY_PROGRAMS';
export const getTVCategoryPrograms = (program_id) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_TV_CATEGORY_PROGRAMS}_PENDING`,
    });
    const result = await getTVCategoryProgramsAPI(program_id);
    try {
      dispatch({
        type: `${GET_TV_CATEGORY_PROGRAMS}_SUCCESS`,
        program_id: program_id,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_TV_CATEGORY_PROGRAMS}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_TV_CATEGORY_PROGRAM_PLAYLIST =
  'GET_TV_CATEGORY_PROGRAM_PLAYLIST';
export const getTVCategoryProgramPlaylist = (playlist_id) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_TV_CATEGORY_PROGRAM_PLAYLIST}_PENDING`,
    });
    const result = await getTVCategoryProgramPlaylistAPI(playlist_id);
    try {
      dispatch({
        type: `${GET_TV_CATEGORY_PROGRAM_PLAYLIST}_SUCCESS`,
        playlist_id: playlist_id,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_TV_CATEGORY_PROGRAM_PLAYLIST}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER =
  'GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER';
export const getTVCategoryProgramPlaylistChapter = (chapter_id) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}_PENDING`,
    });
    const result = await getTVCategoryProgramPlaylistChapterAPI(chapter_id);
    try {
      dispatch({
        type: `${GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}_SUCCESS`,
        chapter_id: chapter_id,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}_FAIL`,
        payload: error,
      });
    }
  };
};
