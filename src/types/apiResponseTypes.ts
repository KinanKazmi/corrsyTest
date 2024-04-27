export type SubjectType = {
	_id: string;
	Subject_name: string;
	createdAt: string;
	grade: string;
	isActive: boolean;
	subject_icon: string;
	subject_price: number;
	uniCode: string;
	updatedAt: string;
};

export type SubjectResponseArrayType = {
	_id: string;
	grade: string;
	isPurchase: boolean;
	registeredCourseID: string;
	subject: SubjectType;
};

export type SubjectResponseType = {
	data: SubjectResponseArrayType[];
};

export type ChatpersResponseType = {
	data: ChaptersResponseArrayType[];
};

export type ChaptersResponseArrayType = {
	chapter: ChapterType[];
	lessons: LessonType[];
};

export type ChapterType = {
	chapterID: string;
	chapter_name: string;
	chapter_icon: string;
	isActive: boolean;
	chapter_number: number;
	price: number;
	isHidden: boolean;
};

export type LessonType = {
	_id: string;
	grade: string;
	isActive: boolean;
	isPaid: boolean;
	lessonIcon: string;
	lessonNumber: number;
	level: string;
	longDescription: string;
	price: number;
	realLifeScenario: string;
	shortDescription: string;
	subject: string;
	title: string;
};
