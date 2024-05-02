import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Story } from "../../entities/story/model/Story";
import { Comment } from "../../entities/comment/model/Comment";
// Define a service using a base URL and expected endpoints
export const hackernewsApi = createApi({
  reducerPath: "hackernewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0/",
  }),
  endpoints: (builder) => ({
    getTopStories: builder.query<number[], void>({
      query: () => `topstories.json`,
    }),
    // getTopStoryItems: builder.query<Story[], number[]>({
    //   async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
    //     const requests = ids.map((id) => fetchWithBQ(`item/${id}.json`));
    //     const stories: Story[] = await Promise.all(requests);
    //     return stories;
    //   }
    // }),
    getStoryItemById: builder.query<Story, number | undefined>({
      query: (id) => `item/${id}.json`,
    }),
    getCommentById: builder.query<Comment, number>({
      query: (id) => `item/${id}.json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTopStoriesQuery,
  useGetStoryItemByIdQuery,
  useGetCommentByIdQuery,
} = hackernewsApi;
