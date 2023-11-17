import { BsPencil as icon } from 'react-icons/bs';

export default {
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      description: 'Title of the Blog',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
      description: 'Content of the Blog',
    },
  ],
};
