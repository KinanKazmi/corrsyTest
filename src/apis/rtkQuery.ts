import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TOKEN as token, BASE_URL as baseUrl} from '@env';

export type QueryDataType = {
	userId?: string;
	gradeId?: string;
	subjectId?: string;
	lessonId?: string;
};

export const apis = createApi({
	reducerPath: 'corrsyAPI',
	baseQuery: fetchBaseQuery({
		baseUrl,
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
