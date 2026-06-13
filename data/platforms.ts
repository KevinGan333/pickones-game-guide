export type Platform = {
  title: string;
  slug: string;
  category: string;
  description: string;
  audience: string;
  focus: string[];
  guides: {
    title: string;
    slug: string;
    type: string;
    description: string;
    gameSlug?: string;
  }[];
};

export const platforms: Platform[] = [
  {
    title: "Nintendo Switch",
    slug: "nintendo-switch",
    category: "Nintendo Platform",
    description:
      "Practical Nintendo Switch guides for family players, beginners, cozy game fans, RPG players, and everyday gamers.",
    audience:
      "Best for players looking for beginner-friendly game recommendations, setup tips, family games, and practical Switch guides.",
    focus: [
      "Best Nintendo Switch games",
      "Family-friendly game recommendations",
      "Cozy game guides",
      "Beginner setup tips",
      "RPG and local co-op guides",
    ],
    guides: [
      {
        title: "Best Nintendo Switch Games for Beginners",
        slug: "best-games-for-beginners",
        type: "Game Recommendation",
        description:
          "A beginner-friendly list of Switch games that are easy to start, fun to play, and suitable for casual players.",
      },
      {
        title: "Best Cozy Games on Nintendo Switch",
        slug: "best-cozy-games",
        type: "Cozy Game Guide",
        description:
          "Relaxing farming, life simulation, crafting, and slow-paced games for Nintendo Switch players.",
      },
      {
        title: "Best Family Games on Nintendo Switch",
        slug: "best-family-games",
        type: "Family Game Guide",
        description:
          "Nintendo Switch games suitable for families, kids, parties, and local multiplayer sessions.",
      },
    ],
  },
  {
    title: "Nintendo Switch 2",
    slug: "nintendo-switch-2",
    category: "Next-Gen Nintendo Platform",
    description:
      "Switch 2 guides covering launch games, setup tips, beginner help, new features, and practical player recommendations.",
    audience:
      "Best for players planning to buy, set up, or explore the Nintendo Switch 2 ecosystem.",
    focus: [
      "Switch 2 launch games",
      "Setup and beginner tips",
      "New feature explanations",
      "Family and casual game picks",
      "Switch 2 performance guides",
    ],
    guides: [
      {
        title: "Nintendo Switch 2 Beginner Guide",
        slug: "beginner-guide",
        type: "Beginner Guide",
        description:
          "A simple starting guide for new Switch 2 players, covering setup, game choices, and early tips.",
      },
      {
        title: "Best Nintendo Switch 2 Launch Games",
        slug: "best-launch-games",
        type: "Game Recommendation",
        description:
          "A practical guide to the most important Switch 2 launch games and who should play them.",
      },
      {
        title: "Best Family Games on Nintendo Switch 2",
        slug: "best-family-games",
        type: "Family Game Guide",
        description:
          "Family-friendly Switch 2 games for kids, parents, local multiplayer, and casual play.",
      },
    ],
  },
  {
    title: "Retro Handheld",
    slug: "retro-handheld",
    category: "Handheld Gaming Device",
    description:
      "Retro handheld guides for R36S, Retroid, Anbernic, TrimUI, Powkiddy, SD card backup, restore, setup, and best settings.",
    audience:
      "Best for retro handheld beginners who need setup tutorials, backup guidance, firmware tips, and practical device help.",
    focus: [
      "R36S backup and restore",
      "Retroid Pocket setup",
      "Anbernic handheld guides",
      "TrimUI and Powkiddy guides",
      "SD card and firmware tips",
    ],
    guides: [
      {
        title: "R36S Backup and Restore Guide",
        slug: "r36s-backup-restore-guide",
        type: "Setup Guide",
        description:
          "A practical guide to backing up and restoring the R36S retro handheld microSD card safely.",
        gameSlug: "r36s",
      },
      {
        title: "R36S Beginner Setup Guide",
        slug: "r36s-beginner-setup-guide",
        type: "Beginner Guide",
        description:
          "A beginner-friendly R36S setup guide covering first steps, SD cards, controls, and basic settings.",
        gameSlug: "r36s",
      },
      {
        title: "Best Retro Handhelds for Beginners",
        slug: "best-retro-handhelds-for-beginners",
        type: "Buying Guide",
        description:
          "A practical comparison of beginner-friendly retro handhelds for casual players and first-time buyers.",
      },
    ],
  },
  {
    title: "Steam Deck",
    slug: "steam-deck",
    category: "PC Handheld",
    description:
      "Steam Deck guides for game settings, performance, battery life, beginner setup, and handheld PC gaming tips.",
    audience:
      "Best for players who want better performance, smoother gameplay, and practical Steam Deck setup advice.",
    focus: [
      "Steam Deck best settings",
      "Battery life optimization",
      "Game compatibility",
      "Performance tuning",
      "Beginner setup help",
    ],
    guides: [
      {
        title: "Steam Deck Beginner Guide",
        slug: "beginner-guide",
        type: "Beginner Guide",
        description:
          "A simple Steam Deck guide for new users covering setup, controls, storage, and first recommended settings.",
      },
      {
        title: "Best Steam Deck Settings for Better Battery Life",
        slug: "best-battery-life-settings",
        type: "Best Settings",
        description:
          "A practical settings guide for improving Steam Deck battery life without making games feel bad.",
      },
      {
        title: "Best Cozy Games on Steam Deck",
        slug: "best-cozy-games",
        type: "Game Recommendation",
        description:
          "Relaxing farming, life simulation, and casual games that play well on Steam Deck.",
      },
    ],
  },
];

export function getPlatformBySlug(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}