export type GearItem = {
  title: string;
  slug: string;
  category: string;
  platform: string;
  description: string;
  focus: string[];
  guides: {
    title: string;
    slug: string;
    type: string;
    description: string;
  }[];
};

export const gearItems: GearItem[] = [
  {
    title: "R36S Retro Handheld",
    slug: "r36s",
    category: "Retro Handheld",
    platform: "Retro Handheld / RK3326",
    description:
      "A budget-friendly retro handheld that runs ArkOS, supports PS1, GBA, and many classic systems. Practical setup, SD card, firmware, and accessory guides.",
    focus: [
      "SD card replacement and backup",
      "ArkOS setup and updates",
      "Best accessories and cases",
      "Screen protector and grip options",
      "USB Wi-Fi adapter compatibility",
    ],
    guides: [
      {
        title: "Best SD Cards for R36S",
        slug: "best-sd-cards-for-r36s",
        type: "Buying Guide",
        description:
          "Recommended MicroSD cards for the R36S — reliable brands, sizes, and tips for TF1 system card and TF2 game card.",
      },
      {
        title: "Best Cases and Screen Protectors for R36S",
        slug: "best-cases-screen-protectors",
        type: "Accessory Guide",
        description:
          "Practical case, screen protector, and grip recommendations for protecting and carrying your R36S.",
      },
    ],
  },
  {
    title: "Nintendo Switch Controllers",
    slug: "switch-controllers",
    category: "Controller / Accessory",
    platform: "Nintendo Switch / Switch 2",
    description:
      "Practical controller recommendations for Nintendo Switch and Switch 2 players, covering Pro Controllers, Joy-Con alternatives, and family-friendly options.",
    focus: [
      "Best Pro Controller alternatives",
      "Joy-Con grip and comfort upgrades",
      "Family and kid-friendly controllers",
      "Budget controller recommendations",
    ],
    guides: [
      {
        title: "Best Nintendo Switch Controllers for Beginners",
        slug: "best-switch-controllers-for-beginners",
        type: "Buying Guide",
        description:
          "A beginner-friendly guide to choosing comfortable, reliable Switch controllers without overspending.",
      },
      {
        title: "Best Budget Switch Controllers",
        slug: "best-budget-switch-controllers",
        type: "Buying Guide",
        description:
          "Affordable Switch controller picks that balance price, comfort, and reliability.",
      },
    ],
  },
  {
    title: "Gaming Headphones",
    slug: "gaming-headphones",
    category: "Audio / Headphone",
    platform: "Multi-Platform",
    description:
      "Practical gaming headphone recommendations for Switch, PC, handheld, and console players who want clear audio without audiophile confusion.",
    focus: [
      "Budget gaming headphones",
      "Wired vs wireless for gaming",
      "Switch-compatible audio setups",
      "Comfort for long gaming sessions",
    ],
    guides: [
      {
        title: "Best Budget Gaming Headphones for Switch and Handheld",
        slug: "best-budget-gaming-headphones",
        type: "Buying Guide",
        description:
          "Affordable headphone picks for Switch, retro handheld, and casual gaming setups.",
      },
    ],
  },
  {
    title: "Portable Power Banks",
    slug: "portable-power-banks",
    category: "Power / Charging",
    platform: "Multi-Platform",
    description:
      "Practical power bank recommendations for Nintendo Switch, retro handhelds, Steam Deck, and travel gaming setups.",
    focus: [
      "Switch-compatible power banks",
      "Retro handheld charging solutions",
      "Travel-friendly power options",
      "Fast charging and capacity guide",
    ],
    guides: [
      {
        title: "Best Power Banks for Nintendo Switch and Handheld Gaming",
        slug: "best-power-banks-for-switch",
        type: "Buying Guide",
        description:
          "Power bank picks that support handheld gaming, travel, and long play sessions.",
      },
    ],
  },
];

export function getGearBySlug(slug: string) {
  return gearItems.find((gear) => gear.slug === slug);
}
