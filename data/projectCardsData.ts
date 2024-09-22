const linkPrefix = process.env.NODE_ENV === "production" ? "/kaitlynvo" : "";

export const cardData = [
    {
      id: 1,
      imageUrl: linkPrefix + '/images/dcmh.png',
      title: 'Davis Community Meals and Housing - CommunityCache',
      description: 'Backend Developer',
      link: 'https://devpost.com/software/dcmh-inventory-tracker',
    },
    {
      id: 2,
      imageUrl: linkPrefix + '/svgs/coursevis.svg',
      title: 'CodeLab - Course Visualization',
      description: 'Software Developer',
      link: '',
    },
    {
      id: 3,
      imageUrl: linkPrefix + '/svgs/supporthands.svg',
      title: 'SupportHands - SupportHands App',
      description: 'Full-Stack Developer',
      link: 'https://www.supporthands.net/home',
    },
    {
        id: 4,
        imageUrl: linkPrefix + '/svgs/tt.svg',
        title: 'CodeLab - Training Tool',
        description: 'Software Developer',
        link: '',
      },
  ];