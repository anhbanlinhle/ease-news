import { createAction } from "@reduxjs/toolkit";

export const getNewsAction = createAction("newsData/getNewsAction");

export const getAllCategoriesAction = createAction(
	"newsData/getAllCategoriesAction"
);

export const getNewsByCategoryAction = createAction(
	"newsData/getNewsByCategoryAction"
);

export const getReduplicationInNewsAction = createAction(
	"newsData/getReduplicationInNewsAction"
);

export const getReduplicationDetailAction = createAction(
	"newsData/getReduplicationDetailAction"
);

export const getSummaryTextAction = createAction(
	"newsData/getSummaryTextAction"
);

export const getTextToImageAction = createAction(
	"newsData/getTextToImageAction"
);
