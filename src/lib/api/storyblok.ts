import {
  useStoryblokApi,
  type ISbRichtext,
  type ISbStoriesParams,
  type ISbStory,
  type ISbStories,
} from "@storyblok/astro";

type StoryblokImage = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset" | string;
  meta_data: unknown;
  is_private: boolean;
};

const storyblokApi = useStoryblokApi();
const storyblokGet = async (slug: string, params?: ISbStoriesParams) => {
  return storyblokApi.get(slug, {
    version: import.meta.env.DEV ? "draft" : "published",
    ...params,
  });
};

export const getAboutPage = async () => {
  const response: ISbStory = await storyblokGet("cdn/stories/about");
  const data: {
    faqs: { content: string; heading: string }[];
    images: StoryblokImage[];
    aboutText: ISbRichtext;
  } = {
    faqs: response.data.story.content.faqs ?? [],
    images: response.data.story.content.images ?? [],
    aboutText: response.data.story.content.aboutText,
  };
  return { _raw: response, data };
};

export const getContactPage = async () => {
  const response: ISbStory = await storyblokGet("cdn/stories/contact");
  const data: {
    email: string;
    heading: string;
    mapLat: string;
    mapLong: string;
    mapZoom: string;
    contactText: ISbRichtext;
    locationText: ISbRichtext;
  } = {
    email: response.data.story.content.email,
    heading: response.data.story.content.heading,
    mapLat: response.data.story.content.mapLat,
    mapLong: response.data.story.content.mapLong,
    mapZoom: response.data.story.content.mapZoom,
    contactText: response.data.story.content.contactText,
    locationText: response.data.story.content.locationText,
  };
  return { _raw: response, data };
};

export const getHomePage = async () => {
  const response: ISbStory = await storyblokGet("cdn/stories/home");
  const data: {
    images: StoryblokImage[];
    headingText: string;
  } = {
    images: response.data.story.content.images,
    headingText: response.data.story.content.headingText,
  };
  return { _raw: response, data };
};

export const getWorkItems = async () => {
  const response: ISbStories = await storyblokGet("cdn/stories/", {
    starts_with: "work/",
  });
  const data: {
    workName: string;
    info: ISbRichtext;
    images: StoryblokImage[];
    thumbnail: StoryblokImage;
    slug: string;
  }[] = response.data.stories.map(
    ({ content: { workName, info, images, thumbnail }, slug }: any) => ({
      workName,
      info,
      images,
      thumbnail,
      slug,
    }),
  );
  return { _raw: response, data };
};
