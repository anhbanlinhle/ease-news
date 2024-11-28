import {createAction} from "@reduxjs/toolkit"

export const getNewsAction = createAction(
  'newsData/getNewsAction'
)

export const getAllCategoriesAction = createAction(
  'newsData/getAllCategoriesAction'
)

export const getNewsByCategoryAction = createAction(
  'newsData/getNewsByCategoryAction'
)
