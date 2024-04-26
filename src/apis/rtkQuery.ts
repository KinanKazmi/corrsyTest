import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type QueryDataType = {
	userId?: string;
	gradeId?: string;
	subjectId?: string;
	lessonId?: string;
	token?: string;
};

const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkYzYyY2MxYWEwMDc4MDAwZjljMDEiLCJpYXQiOjE3MTM3MzQxOTh9.2ZIPdqfGIEbm0t6iSE14HTQw1ASehe_hijG_iEnWFJU';

export const apis = createApi({
	reducerPath: 'corrsyAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://lessonapi.educationforalliraqis.com/',
		prepareHeaders: headers => {
			headers.set('authorization', `Bearer ${token}`);
			return headers;
		},
	}),
	endpoints: builder => ({
		fetchSubjects: builder.query<unknown, QueryDataType>({
			query: data => `courseregistration/${data.userId}/${data.gradeId}`,
		}),
		fetchChapters: builder.query<unknown, QueryDataType>({
			query: data => `lessons/subject/${data.subjectId}`,
		}),
		fetchLesson: builder.query<unknown, QueryDataType>({
			query: data => `lessons?_id=${data.lessonId}`,
		}),
	}),
});

export const {
	useFetchSubjectsQuery,
	useFetchChaptersQuery,
	useFetchLessonQuery,
} = apis;
