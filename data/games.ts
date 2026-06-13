export type Game = {
  title: string;
  slug: string;
  platform: string;
  category: string;
  description: string;
  focus: string[];
  guides: {
    title: string;
    slug: string;
    type: string;
  }[];
};

export const games: Game[] = [
  {
    title: "Animal Crossing: New Horizons",
    slug: "animal-crossing-new-horizons",
    platform: "Nintendo Switch",
    category: "Cozy Game",
    description:
      "A relaxing life simulation game where players build an island, collect items, decorate homes, and enjoy slow-paced daily activities.",
    focus: [
      "Beginner island setup",
      "Item collection",
      "Seasonal events",
      "Villager and home decoration tips",
    ],
    guides: [
      {
        title: "Animal Crossing: New Horizons Beginner Guide",
        slug: "beginner-guide",
        type: "Beginner Guide",
      },
      {
        title: "How to Get Iron Nuggets in Animal Crossing",
        slug: "how-to-get-iron-nuggets",
        type: "How-to Guide",
      },
      {
        title: "Best Early Island Tips for New Players",
        slug: "best-early-island-tips",
        type: "Tips",
      },
    ],
  },
  {
    title: "Mario Kart World",
    slug: "mario-kart-world",
    platform: "Nintendo Switch 2",
    category: "Racing Game",
    description:
      "A fast-paced kart racing game focused on tracks, characters, vehicle choices, racing strategy, and multiplayer fun.",
    focus: [
      "Beginner racing tips",
      "Best kart setups",
      "Track shortcuts",
      "Family and multiplayer play",
    ],
    guides: [
      {
        title: "Mario Kart World Beginner Guide",
        slug: "beginner-guide",
        type: "Beginner Guide",
      },
      {
        title: "Best Kart Setups for Beginners",
        slug: "best-kart-setups",
        type: "Best Settings",
      },
      {
        title: "How to Improve Your Racing Lines",
        slug: "how-to-improve-racing-lines",
        type: "Skill Guide",
      },
    ],
  },
  {
    title: "Pokémon Legends: Z-A",
    slug: "pokemon-legends-z-a",
    platform: "Nintendo Switch / Switch 2",
    category: "RPG",
    description:
      "A Pokémon RPG adventure focused on exploration, catching Pokémon, battles, team building, and story progression.",
    focus: [
      "Beginner progression",
      "Pokémon locations",
      "Battle tips",
      "Team building",
    ],
    guides: [
      {
        title: "Pokémon Legends: Z-A Beginner Guide",
        slug: "beginner-guide",
        type: "Beginner Guide",
      },
      {
        title: "Best Starter Tips for New Players",
        slug: "best-starter-tips",
        type: "Tips",
      },
      {
        title: "How to Build a Balanced Early Team",
        slug: "balanced-early-team",
        type: "Build Guide",
      },
    ],
  },
  {
    title: "Stardew Valley",
    slug: "stardew-valley",
    platform: "Nintendo Switch / PC / Console",
    category: "Cozy RPG",
    description:
      "A farming and life simulation RPG where players grow crops, build relationships, explore mines, fish, craft, and expand their farm.",
    focus: [
      "Farming basics",
      "Fishing and mining",
      "Relationship guides",
      "Best beginner farm setup",
    ],
    guides: [
      {
        title: "Stardew Valley Beginner Guide",
        slug: "beginner-guide",
        type: "Beginner Guide",
      },
      {
        title: "Best Crops for Your First Spring",
        slug: "best-first-spring-crops",
        type: "Farming Guide",
      },
      {
        title: "How to Make Money Early in Stardew Valley",
        slug: "how-to-make-money-early",
        type: "How-to Guide",
      },
    ],
  },
  {
    title: "Borderlands 4",
    slug: "borderlands-4",
    platform: "PC / PlayStation / Xbox",
    category: "Looter Shooter",
    description:
      "A chaotic looter shooter focused on open-world exploration, fast gunplay, repeatable boss farming, Vault hunting, build variety, and long-term loot progression.",
    focus: [
      "Open-world exploration",
      "Loot farming",
      "Gunplay and weapon feel",
      "Vault Hunter builds",
      "Endgame and boss farming",
    ],
    guides: [],
  },
  {
    title: "R36S Retro Handheld",
    slug: "r36s",
    platform: "Retro Handheld",
    category: "Handheld Setup",
    description:
      "A budget-friendly retro handheld that runs ArkOS, supports PS1, GBA, and many classic systems, and rewards users who set it up properly from day one.",
    focus: [
      "SD card replacement",
      "ArkOS setup and updates",
      "Cover scraping and PortMaster",
      "Emulator core tuning",
      "Beginner troubleshooting",
    ],
    guides: [
      {
        title: "R36S Beginner Setup Guide",
        slug: "r36s-beginner-setup-guide",
        type: "Beginner Guide",
      },
    ],
  },
];


export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}