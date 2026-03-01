import latte1 from '../assets/latte1.jpg';
import latte2 from '../assets/latte2.jpg';
import latte3 from '../assets/latte3.jpg';
import latte4 from '../assets/latte4.jpg';
import { menu } from '../menu';
import { testData } from '../pages/Map/testData';
import rawUsers from './users.json';

const photos = [latte1, latte2, latte3, latte4];
const curatedPhotoByName = {
  Sean: latte1,
  David: latte2,
  Matt: latte3,
  Addie: latte4,
  George: latte2,
  Sarah: latte3,
};

const curatedBioByName = {
  Sean: 'Always chasing a clean pour-over, a good cortado, and a shop worth revisiting.',
  David: 'Weekend cafe planner with a bias toward bright rooms and strong cold brew.',
  Matt: 'Mostly judging espresso texture, seating comfort, and whether the playlist is trying too hard.',
  Addie: 'Looking for places that feel social enough for a meetup and quiet enough for a second drink.',
  George: 'Tends to save neighborhood shops with easy parking and a reliable drip coffee.',
  Sarah: 'More likely to order matcha, but still opinionated about pastry counters and cafe lighting.',
};

const curatedFavoriteByName = {
  Sean: 'Honey oat latte',
  David: 'Vanilla cold brew',
  Matt: 'Cortado',
  Addie: 'Brown sugar latte',
  George: 'Drip coffee',
  Sarah: 'Iced matcha latte',
};

const curatedBadgesByName = {
  Sean: ['Early riser', 'Latte scout', 'Neighborhood regular'],
  David: ['Weekend planner', 'Cold brew loyalist'],
  Matt: ['Espresso dialer', 'Study session host'],
  Addie: ['Meetup organizer', 'Menu browser'],
  George: ['Route optimizer', 'Classic order'],
  Sarah: ['Atmosphere hunter', 'Pastry radar'],
};

const importedUsers = rawUsers.filter((user) => user.name && !['2', '3'].includes(user.name));

export const staticNotice =
  'Static preview mode: live auth, chat, maps, and review APIs are replaced with local placeholder data.';

export const profiles = importedUsers.map((user, index) => ({
  id: user.email || `user-${index + 1}`,
  name: user.name,
  email: user.email,
  phone: user.phone,
  picture: curatedPhotoByName[user.name] || photos[index % photos.length],
  bio: curatedBioByName[user.name] || 'Demo profile imported from local development data.',
  city: 'Imported from src/devData/users.json',
  favoriteOrder: curatedFavoriteByName[user.name] || 'House latte',
  badges: curatedBadgesByName[user.name] || ['Placeholder profile'],
}));

export const demoUser =
  profiles.find((profile) => profile.name === 'Sean') ??
  {
    id: 'demo-user',
    name: 'Sean',
    email: 'sean@cupquest.demo',
    phone: '1238124182',
    picture: latte1,
    bio: 'Always chasing a clean pour-over, a good cortado, and a shop worth revisiting.',
    city: 'Imported from src/devData/users.json',
    favoriteOrder: 'Honey oat latte',
    badges: ['Early riser', 'Latte scout', 'Neighborhood regular'],
  };

const friendMap = Object.fromEntries(
  importedUsers.map((user) => [
    user.name,
    (user.friends ?? [])
      .filter((friend) => friend.status === 1)
      .map((friend) => friend.user)
      .filter(
        (friendName, index, allFriends) =>
          friendName !== user.name &&
          allFriends.indexOf(friendName) === index &&
          importedUsers.some((candidate) => candidate.name === friendName)
      ),
  ])
);

const shopExtras = [
  {
    summary: 'Bright neighborhood stop with bagels, waffles, and a beginner-friendly menu.',
    vibe: 'Casual morning meetup',
    features: ['Fast service', 'Easy parking', 'Breakfast-heavy menu'],
    signatureDrinks: ['Chai latte', 'Caramel latte', 'Vanilla cold brew'],
    hours: [
      'Monday to Friday: 6:30 AM to 5:00 PM',
      'Saturday: 7:00 AM to 4:00 PM',
      'Sunday: 7:00 AM to 2:00 PM',
    ],
    reviewHighlights: [
      {
        author: 'David',
        rating: 4.7,
        text: 'Reliable stop when we want coffee and food without overthinking it.',
      },
      {
        author: 'Sean',
        rating: 4.5,
        text: 'Friendly staff, quick drinks, and enough seating for a short work session.',
      },
    ],
  },
  {
    summary: 'A larger cafe with brunch traffic, roomy seating, and dependable staples.',
    vibe: 'Busy all-day cafe',
    features: ['Large dining area', 'Breakfast and lunch', 'Good for groups'],
    signatureDrinks: ['House mocha', 'Hazelnut latte', 'Iced americano'],
    hours: [
      'Monday to Thursday: 6:00 AM to 6:00 PM',
      'Friday: 6:00 AM to 7:00 PM',
      'Saturday and Sunday: 7:00 AM to 5:00 PM',
    ],
    reviewHighlights: [
      {
        author: 'Matt',
        rating: 4.3,
        text: 'The seating makes this a practical meetup spot when everyone is scattered.',
      },
      {
        author: 'Addie',
        rating: 4.2,
        text: 'Not the most intimate room, but the menu is broad and dependable.',
      },
    ],
  },
  {
    summary: 'Darker aesthetic, stronger branding, and a more espresso-forward menu.',
    vibe: 'Specialty coffee stop',
    features: ['Distinct branding', 'Strong espresso menu', 'Quick in-and-out service'],
    signatureDrinks: ['Maple cortado', 'Brown sugar latte', 'Nitro cold brew'],
    hours: [
      'Tuesday to Friday: 7:00 AM to 4:00 PM',
      'Saturday: 8:00 AM to 4:00 PM',
      'Sunday and Monday: Closed',
    ],
    reviewHighlights: [
      {
        author: 'Sean',
        rating: 4.8,
        text: 'Best place in the area when I want something that feels more dialed-in.',
      },
      {
        author: 'Matt',
        rating: 4.6,
        text: 'Smaller room, better espresso, worth the extra stop.',
      },
    ],
  },
  {
    summary: 'A public-house setting that still works for coffee, food, and slower hangouts.',
    vibe: 'Long-form weekend stop',
    features: ['Scenic drive', 'Food menu', 'Great for lingering'],
    signatureDrinks: ['Irish cream latte', 'Classic cappuccino', 'Hot mocha'],
    hours: [
      'Monday to Thursday: 8:00 AM to 8:00 PM',
      'Friday to Sunday: 8:00 AM to 10:00 PM',
    ],
    reviewHighlights: [
      {
        author: 'Sarah',
        rating: 4.4,
        text: 'Less coffee-lab, more destination hangout. That works well on weekends.',
      },
      {
        author: 'David',
        rating: 4.1,
        text: 'Great fallback when the group wants food and coffee in one stop.',
      },
    ],
  },
];

const curatedShops = testData.businesses.slice(0, 4).map((shop, index) => {
  const extra = shopExtras[index];
  const photo = photos[index % photos.length];

  return {
    ...shop,
    heroImage: photo,
    gallery: [photo, photos[(index + 1) % photos.length], photos[(index + 2) % photos.length]],
    summary: extra.summary,
    vibe: extra.vibe,
    features: extra.features,
    signatureDrinks: extra.signatureDrinks,
    hours: extra.hours,
    reviewHighlights: extra.reviewHighlights,
    menuRatings: menu.slice(0, 6).map((item, menuIndex) => ({
      item,
      rating: (4.1 + ((index + menuIndex) % 5) * 0.15).toFixed(1),
      note: extra.signatureDrinks[menuIndex % extra.signatureDrinks.length],
    })),
  };
});

const importedCoffeeShops = [
  {
    id: 'dev-MTSW4McQd7CbVtyjqoe9mw',
    name: 'St Honore Pastries',
    image_url: latte2,
    review_count: 80,
    rating: 4.0,
    coordinates: {
      latitude: 39.9555052,
      longitude: -75.1555641,
    },
    price: '$',
    location: {
      address1: '935 Race St',
      city: 'Philadelphia',
      state: 'PA',
      display_address: ['935 Race St', 'Philadelphia, PA 19107'],
    },
    display_phone: 'Imported from devData',
    heroImage: latte2,
    gallery: [latte2, latte3, latte4],
    summary: 'Imported from src/devData/shops.json as a bakery-forward coffee stop.',
    vibe: 'Historic pastry cafe',
    features: ['Coffee & Tea', 'Bakeries', 'Imported dev record'],
    signatureDrinks: ['Cafe au lait', 'Bubble tea', 'Drip coffee'],
    hours: [
      'Monday to Thursday: 7:00 AM to 8:00 PM',
      'Friday to Sunday: 7:00 AM to 9:00 PM',
    ],
    reviewHighlights: [
      {
        author: 'Sarah',
        rating: 4.2,
        text: 'Useful imported record for the static demo, especially because it already reads like a real cafe listing.',
      },
    ],
    menuRatings: menu.slice(0, 6).map((item, index) => ({
      item,
      rating: (4 + (index % 3) * 0.1).toFixed(1),
      note: 'Imported dev seed',
    })),
  },
  {
    id: 'dev-WKMJwqnfZKsAae75RMP6jA',
    name: 'Roast Coffeehouse and Wine Bar',
    image_url: latte3,
    review_count: 40,
    rating: 4.0,
    coordinates: {
      latitude: 53.5460453,
      longitude: -113.4991693,
    },
    price: '$$',
    location: {
      address1: '10359 104 Street NW',
      city: 'Edmonton',
      state: 'AB',
      display_address: ['10359 104 Street NW', 'Edmonton, AB T5J 1B9'],
    },
    display_phone: 'Imported from devData',
    heroImage: latte3,
    gallery: [latte3, latte4, latte1],
    summary: 'Imported from src/devData/shops.json as a hybrid cafe and wine-bar example.',
    vibe: 'Urban cafe bar',
    features: ['Coffee & Tea', 'Cafes', 'Wine Bars', 'Imported dev record'],
    signatureDrinks: ['House espresso', 'Flat white', 'Evening wine flight'],
    hours: [
      'Monday to Saturday: 8:00 AM to 6:00 PM',
      'Sunday: 10:00 AM to 5:00 PM',
    ],
    reviewHighlights: [
      {
        author: 'Matt',
        rating: 4.1,
        text: 'This one reads closest to the original CupQuest vision, so it works well as imported static seed data.',
      },
    ],
    menuRatings: menu.slice(0, 6).map((item, index) => ({
      item,
      rating: (4 + ((index + 1) % 4) * 0.1).toFixed(1),
      note: 'Imported dev seed',
    })),
  },
];

export const shops = [...curatedShops, ...importedCoffeeShops];

export const defaultShopId = shops[0].id;

export const activityByUser = {
  Sean: [
    'Imported from users.json and used as the default demo profile.',
    'Saved Roast The Dead Coffee to revisit for espresso flights.',
    'Shared Queen Bean Caffe with David for a weekend meetup.',
  ],
  David: [
    'Imported from users.json and linked to Sean, Addie, and Sarah in the local friend graph.',
    'Queued a few coffee stops for a weekend route test.',
  ],
  Matt: [
    'Imported from users.json and surfaced as one of Sean\'s local demo friends.',
    'Compared stronger espresso options for the static preview.',
  ],
  Addie: [
    'Imported from users.json and used to seed the friend list flow.',
    'Marked group-friendly cafes for meetup planning.',
  ],
  George: [
    'Imported from users.json and kept available in the all-users list.',
    'Saved a couple of out-of-town coffee records from the dev dataset.',
  ],
  Sarah: [
    'Imported from users.json and connected into the static social graph.',
    'Flagged bakery-heavy shops from the dev dataset as useful demo records.',
  ],
};

export const conversations = {
  David: [
    { sender: 'David', body: 'Using the local users.json data makes the friend graph feel more grounded.', time: '9:12 AM' },
    { sender: 'Sean', body: 'Agreed. It is better than inventing everyone from scratch.', time: '9:14 AM' },
  ],
  Matt: [
    { sender: 'Matt', body: 'For the demo, I would keep the map as a curated list instead of pretending geolocation is live.', time: '10:03 AM' },
    { sender: 'Sean', body: 'Agreed. Better honest placeholders than broken API calls.', time: '10:05 AM' },
  ],
  Addie: [
    { sender: 'Addie', body: 'Can we call out that reviews are sample content so nobody expects persistence?', time: '11:28 AM' },
    { sender: 'Sean', body: 'Yes. I am surfacing that in the overview page banner.', time: '11:29 AM' },
  ],
};

export const getProfileByName = (name) =>
  profiles.find((profile) => profile.name.toLowerCase() === String(name).toLowerCase()) ?? demoUser;

export const getFriendsForUser = (name) => {
  const profile = getProfileByName(name);
  const friendNames = friendMap[profile.name] ?? [];

  if (friendNames.length === 0) {
    return profiles.filter((candidate) => candidate.name !== profile.name);
  }

  return friendNames
    .map((friendName) => profiles.find((candidate) => candidate.name === friendName))
    .filter(Boolean);
};

export const getShopById = (shopId) =>
  shops.find((shop) => shop.id === shopId) ?? shops[0];
