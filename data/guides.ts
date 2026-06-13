export type GuideStep = {
  title: string;
  description: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideContent = {
  gameSlug: string;
  guideSlug: string;
  title: string;
  type: string;
  excerpt: string;
  quickAnswer: string;
  difficulty: "Beginner" | "Easy" | "Medium" | "Hard";
  timeRequired: string;
  platform: string;
  updatedAt: string;
  beforeYouStart: string[];
  steps: GuideStep[];
  commonMistakes: string[];
  finalTip: string;
  faqs: GuideFaq[];
};

export const guideContents: GuideContent[] = [
  {
    gameSlug: "stardew-valley",
    guideSlug: "beginner-guide",
    title: "Stardew Valley Beginner Guide",
    type: "Beginner Guide",
    excerpt:
      "A beginner-friendly Stardew Valley guide covering your first days, farming basics, energy management, money-making, and early priorities.",
    quickAnswer:
      "In Stardew Valley, beginners should focus on clearing a small farm area, planting easy crops, saving energy, meeting villagers, fishing for early income, and upgrading tools only after building a stable daily routine.",
    difficulty: "Beginner",
    timeRequired: "10–15 minutes",
    platform: "Nintendo Switch / PC / Console",
    updatedAt: "May 2026",
    beforeYouStart: [
      "Do not clear your entire farm on Day 1. Your energy is limited.",
      "Start with a small number of crops that you can water every morning.",
      "Keep some money for seeds instead of spending everything at once.",
      "Watch the TV every morning for weather, fortune, and useful tips.",
    ],
    steps: [
      {
        title: "Clear only a small farming area",
        description:
          "Use your axe, pickaxe, and scythe to clear a small area near your farmhouse. Avoid spending all your energy on trees and rocks during the first day.",
      },
      {
        title: "Plant and water your first crops",
        description:
          "Plant your starter parsnip seeds and water them every morning. Crops are the easiest way to learn the daily rhythm of Stardew Valley.",
      },
      {
        title: "Save energy for fishing and exploration",
        description:
          "After watering crops, use your remaining time to meet villagers, explore town, or fish. Fishing can be a strong early income source once you get used to it.",
      },
      {
        title: "Build a simple daily routine",
        description:
          "A good early routine is: check TV, water crops, sell items, talk to villagers, fish or mine, then return home before 2:00 AM.",
      },
    ],
    commonMistakes: [
      "Clearing too much land on the first day and running out of energy.",
      "Planting too many crops before you can water them comfortably.",
      "Ignoring villagers completely during the first season.",
      "Going to bed too late and losing energy the next day.",
    ],
    finalTip:
      "Stardew Valley rewards steady progress. Do not try to optimize everything in your first week. Learn the daily rhythm first, then expand your farm slowly.",
    faqs: [
      {
        question: "What should I do first in Stardew Valley?",
        answer:
          "Start by clearing a small area, planting your starter seeds, watering them daily, and exploring Pelican Town.",
      },
      {
        question: "What is the best early way to make money?",
        answer:
          "Fishing and simple crops are the most beginner-friendly early money sources.",
      },
      {
        question: "Should I restart if I make mistakes?",
        answer:
          "Usually no. Stardew Valley is forgiving, and most early mistakes can be fixed over time.",
      },
    ],
  },
  {
    gameSlug: "stardew-valley",
    guideSlug: "how-to-make-money-early",
    title: "How to Make Money Early in Stardew Valley",
    type: "How-to Guide",
    excerpt:
      "Learn practical early-game money-making methods in Stardew Valley, including crops, fishing, foraging, and simple daily routines.",
    quickAnswer:
      "The easiest early money strategy in Stardew Valley is to grow affordable crops, fish whenever you have spare energy, forage daily, and reinvest profits into seeds before expanding too quickly.",
    difficulty: "Easy",
    timeRequired: "8–12 minutes",
    platform: "Nintendo Switch / PC / Console",
    updatedAt: "May 2026",
    beforeYouStart: [
      "Do not spend all money on decorations or upgrades too early.",
      "Keep enough energy for fishing or foraging after farm work.",
      "Sell common fish, forage items, and early crops for steady income.",
    ],
    steps: [
      {
        title: "Plant reliable early crops",
        description:
          "Use your starting money to buy simple crops that mature quickly. Parsnips are useful early because they are cheap and easy to manage.",
      },
      {
        title: "Fish after watering crops",
        description:
          "Fishing is one of the strongest early income sources. Even if it feels difficult at first, it becomes easier with practice and better fishing levels.",
      },
      {
        title: "Forage around town every day",
        description:
          "Walk around Pelican Town, the forest, and the beach to collect forage items. These can be sold or saved for energy and gifts.",
      },
      {
        title: "Reinvest profits into more seeds",
        description:
          "Use early profits to buy more seeds, but do not plant more crops than you can water comfortably each morning.",
      },
    ],
    commonMistakes: [
      "Buying too many seeds and running out of energy every morning.",
      "Ignoring fishing because it feels hard at first.",
      "Selling everything without saving useful items for quests or gifts.",
      "Upgrading tools before having enough backup money.",
    ],
    finalTip:
      "Early money in Stardew Valley is about consistency. Small daily income from crops, fishing, and foraging is better than trying to rush big profits too early.",
    faqs: [
      {
        question: "Is fishing worth it early in Stardew Valley?",
        answer:
          "Yes. Fishing can be one of the best early money sources once you practice the mini-game.",
      },
      {
        question: "Should I buy more seeds immediately?",
        answer:
          "Yes, but only buy as many as you can water comfortably each day.",
      },
    ],
  },
  {
    gameSlug: "animal-crossing-new-horizons",
    guideSlug: "how-to-get-iron-nuggets",
    title: "How to Get Iron Nuggets in Animal Crossing: New Horizons",
    type: "How-to Guide",
    excerpt:
      "Learn how to get iron nuggets in Animal Crossing: New Horizons by hitting rocks correctly, visiting mystery islands, and avoiding common mistakes.",
    quickAnswer:
      "To get iron nuggets in Animal Crossing: New Horizons, hit rocks with a shovel or axe without eating fruit first. Dig holes behind your character to stop knockback and hit each rock repeatedly for more materials.",
    difficulty: "Beginner",
    timeRequired: "5–10 minutes",
    platform: "Nintendo Switch",
    updatedAt: "May 2026",
    beforeYouStart: [
      "Use a shovel or axe to hit rocks.",
      "Do not eat fruit before hitting rocks unless you want to break the rock.",
      "Dig holes behind your character to avoid being pushed backward.",
      "Check all rocks on your island every day.",
    ],
    steps: [
      {
        title: "Find a rock on your island",
        description:
          "Walk around your island and look for large rocks. Each rock can drop materials such as stone, clay, iron nuggets, or gold nuggets.",
      },
      {
        title: "Stand in the correct position",
        description:
          "Stand next to the rock and dig two holes behind you. This keeps your character in place when you hit the rock.",
      },
      {
        title: "Hit the rock repeatedly",
        description:
          "Use your shovel or axe to hit the rock as many times as possible. If positioned correctly, you can get multiple material drops from one rock.",
      },
      {
        title: "Visit mystery islands if needed",
        description:
          "If you still need more iron nuggets, use a Nook Miles Ticket to visit mystery islands and hit rocks there.",
      },
    ],
    commonMistakes: [
      "Eating fruit before hitting rocks, which can break the rock.",
      "Standing too far away and missing hits.",
      "Not digging holes behind the character to prevent knockback.",
      "Only checking one rock instead of all rocks on the island.",
    ],
    finalTip:
      "Iron nuggets are important early in Animal Crossing: New Horizons, so make rock hitting part of your daily routine until you have enough materials.",
    faqs: [
      {
        question: "Why did my rock break?",
        answer:
          "You probably ate fruit before hitting it. Fruit gives your character enough strength to break rocks.",
      },
      {
        question: "Can rocks respawn?",
        answer:
          "Yes. Broken rocks can respawn, but it is better not to break them when farming materials.",
      },
    ],
  },
  {
    gameSlug: "pokemon-legends-z-a",
    guideSlug: "beginner-guide",
    title: "Pokémon Legends: Z-A Beginner Guide",
    type: "Beginner Guide",
    excerpt:
      "A beginner-friendly Pokémon Legends: Z-A guide covering early progression, catching basics, battle preparation, and team-building habits.",
    quickAnswer:
      "New Pokémon Legends: Z-A players should focus on learning catching mechanics, building a balanced team, keeping healing items ready, and exploring carefully before rushing major battles.",
    difficulty: "Beginner",
    timeRequired: "10–15 minutes",
    platform: "Nintendo Switch / Switch 2",
    updatedAt: "May 2026",
    beforeYouStart: [
      "Keep several Poké Balls and healing items ready.",
      "Catch different Pokémon types instead of relying on one favorite.",
      "Pay attention to tutorial messages and early battle explanations.",
    ],
    steps: [
      {
        title: "Learn the basic catching flow",
        description:
          "Early progression depends on understanding when to approach, when to throw, and when to battle. Practice catching common Pokémon first.",
      },
      {
        title: "Build a balanced early team",
        description:
          "Try to keep different Pokémon types on your team so you are not weak to one kind of opponent.",
      },
      {
        title: "Prepare before important battles",
        description:
          "Before a major battle, check your team health, items, and type coverage. Small preparation can prevent unnecessary losses.",
      },
      {
        title: "Explore instead of rushing",
        description:
          "Exploration often gives you useful items, new Pokémon, and better understanding of the game world.",
      },
    ],
    commonMistakes: [
      "Using only one strong Pokémon and ignoring type balance.",
      "Entering major battles without healing items.",
      "Skipping tutorials too quickly.",
      "Ignoring exploration and missing useful resources.",
    ],
    finalTip:
      "A balanced team and careful preparation matter more than rushing. Take time to learn the systems early.",
    faqs: [
      {
        question: "Is Pokémon Legends: Z-A beginner-friendly?",
        answer:
          "Yes, but new players should pay attention to catching, battles, and team balance from the start.",
      },
      {
        question: "Should I catch every Pokémon I see?",
        answer:
          "You do not need to catch everything, but catching different types helps you build more options.",
      },
    ],
  },
  {
    gameSlug: "mario-kart-world",
    guideSlug: "best-kart-setups",
    title: "Best Kart Setups for Beginners",
    type: "Best Settings",
    excerpt:
      "A beginner-friendly guide to choosing stable kart setups, improving control, and avoiding difficult racing configurations.",
    quickAnswer:
      "Beginners should choose kart setups with balanced speed, good handling, and stable acceleration instead of chasing the highest top speed. Easier control usually leads to better race results.",
    difficulty: "Beginner",
    timeRequired: "6–10 minutes",
    platform: "Nintendo Switch 2",
    updatedAt: "May 2026",
    beforeYouStart: [
      "Do not choose a setup only because it has the highest speed.",
      "Handling and acceleration are more important for beginners.",
      "Test your setup on simple tracks before using it in difficult races.",
    ],
    steps: [
      {
        title: "Start with balanced handling",
        description:
          "Pick a setup that feels easy to steer. Beginners usually benefit more from control than from maximum speed.",
      },
      {
        title: "Choose stable acceleration",
        description:
          "Good acceleration helps you recover after bumps, mistakes, or being hit by items during a race.",
      },
      {
        title: "Avoid extreme builds early",
        description:
          "Very fast but hard-to-control builds can make beginners lose time on corners and recovery.",
      },
      {
        title: "Test on multiple tracks",
        description:
          "Try your setup on tracks with turns, jumps, and straight roads to make sure it feels comfortable.",
      },
    ],
    commonMistakes: [
      "Choosing only the fastest-looking kart.",
      "Ignoring handling and acceleration.",
      "Changing setup after every bad race instead of practicing.",
      "Testing only on one track.",
    ],
    finalTip:
      "The best beginner kart setup is the one you can control consistently. Stable driving beats unstable speed.",
    faqs: [
      {
        question: "Should beginners prioritize speed?",
        answer:
          "Not always. Handling and acceleration are often more useful for new players.",
      },
      {
        question: "How do I know if a setup is good?",
        answer:
          "A good setup should feel stable on corners, recover well after mistakes, and match your driving style.",
      },
    ],
  },
  {
    gameSlug: "r36s",
    guideSlug: "r36s-beginner-setup-guide",
    title: "R36S Beginner Setup Guide: The First Things You Should Do Before Playing",
    type: "Beginner Guide",
    excerpt:
      "The R36S is a cheap, compact, and surprisingly capable retro handheld. But it is not a perfect out-of-the-box experience. This guide walks through exactly what to do first: replace the SD cards, get online, enable the hidden Options menu, update ArkOS, scrape game covers, use PortMaster, tune emulator cores for N64 and PSP, and fix common problems. Follow these steps before you start building your game library and you will avoid the most common headaches: system crashes, lost saves, missing menus, ugly game lists, and bad emulator performance.",
    quickAnswer:
      "If you only follow one piece of advice, make it this: replace the stock SD card immediately. Many R36S units ship with low-quality MicroSD cards that can corrupt the system, break boot files, crash during use, or destroy save files without warning. After that, enable the hidden Options menu from UI Settings > Visible Systems, connect to the internet with a USB Wi-Fi adapter or Android phone USB tethering, update ArkOS from the Options menu, create a ScreenScraper account and scrape box art for your games, explore PortMaster for PC ports like Half-Life or GTA III, and if N64 or PSP games lag, change the emulator core from the per-game settings menu. Spend a little time setting up the R36S properly first and this tiny budget handheld becomes far more than a cheap toy.",
    difficulty: "Beginner",
    timeRequired: "20–40 minutes",
    platform: "Retro Handheld",
    updatedAt: "May 2026",
    beforeYouStart: [
      "Buy two reliable MicroSD cards from a trusted brand such as SanDisk or Samsung. Do not trust the stock card that came with your R36S — it is the weakest link in the entire device and will fail when you least expect it.",
      "Prepare a way to get online before you begin. The R36S does not include built-in Wi-Fi. Either get a compatible USB Wi-Fi adapter for the OTG port, or have an Android phone and USB cable ready for USB tethering.",
      "Set aside 30 to 40 minutes for the full setup. Rushing through these steps on a weak factory SD card or skipping the network setup will lead to frustration later. The payoff is absolutely worth the time.",
      "Understand that the R36S is a budget device, not a polished console from Nintendo or Sony. Some factory configuration is rough, some menus are hidden, and not every game will run perfectly. Setting expectations correctly from day one makes the experience much more enjoyable.",
    ],
    steps: [
      {
        title: "Replace the SD cards — this is the most important step",
        description:
          "If you only follow one piece of advice from this entire guide, make it this one: replace the original SD card as soon as possible. Many R36S units ship with low-quality, unbranded MicroSD cards that may work at first but are notoriously unreliable. A bad card can corrupt the operating system, break boot files, cause random crashes during gameplay, or destroy your save files without any warning. Nothing feels worse than spending hours setting up emulators and games, only to lose everything because the factory card failed. The R36S is cheap because corners are cut somewhere — the stock SD card is one of those corners. Do not trust it with your system or your saves. For a cleaner and safer setup, use two high-quality MicroSD cards: TF1 (the left slot) for the system card running ArkOS, and TF2 (the right slot) for your game library. A 16GB or 32GB card is plenty for ArkOS and system files in TF1. For games in TF2, 64GB is a practical starting point, while 128GB gives you more room if you plan to build a larger library across multiple retro platforms like NES, SNES, GBA, PS1, and more. This two-card separation makes the device much easier to manage. If the system card fails or you want to try a different firmware setup, your game library stays safe on the TF2 card. If your game card fills up, you can upgrade it without touching the operating system. For a low-cost handheld like the R36S, this simple split saves a huge amount of future trouble.",
      },
      {
        title: "Get the R36S online — it has no built-in Wi-Fi",
        description:
          "The R36S does not include built-in Wi-Fi, which surprises many new users. This is one of the corners that was cut to keep the price so low. Online access is still needed for system updates, cover scraping, and using tools like PortMaster, so you need a workaround. Fortunately, you have two practical options. The first and cleaner option is to use a USB Wi-Fi adapter plugged into the OTG port (the same port used for charging, on the top or bottom depending on your model). Not all adapters are compatible, so if you already have one, try it first before buying a new one. The second option is to connect an Android phone to the R36S with a USB cable and enable USB tethering in the phone's settings. This lets the R36S use your phone's mobile data or Wi-Fi connection as if it were directly connected to a network. Do not panic if you cannot find a Wi-Fi menu right away after connecting — the R36S interface is not designed like a modern smartphone or a Nintendo Switch. Some useful functions are hidden under the Options menu, and on some new units that menu may not even be visible until you enable it manually in the next step.",
      },
      {
        title: "Enable the hidden Options menu and change your language",
        description:
          "A very common beginner problem is that the Options menu simply does not appear on the main screen. Without it, many important tools are hard or impossible to access, including system updates and PortMaster. The fix is easy once you know where to look. Press START to open the main menu, then go to UI Settings. Inside UI Settings, find the option called Visible Systems. Scroll all the way to the bottom of the list and you will see an entry for Options — it is disabled by default. Enable it, then return to the main interface. You should now see Options appear as a system category alongside your game consoles. This small setting matters more than it looks. Once Options is visible, the R36S becomes dramatically easier to manage. You can update ArkOS, access setup tools, install ports, and configure advanced features without digging through confusing menus. While you are in the settings, also check the interface language. Go back into UI Settings and find Language. Choose your preferred language and apply the change. For beginners, using a familiar language makes a huge difference because many R36S settings menus are already less user-friendly than they should be.",
      },
      {
        title: "Update ArkOS — but only after your SD card is reliable",
        description:
          "Once your R36S is connected to the internet and the Options menu is visible, go to Options and choose Update. When the virtual keyboard appears on screen, type OK and press enter to start the automatic update process. The system will check for the latest version of ArkOS and download it. Updating ArkOS is worth doing because newer versions can improve emulator compatibility, fix bugs, add features, and make the overall system feel smoother and more stable. That said, update only after you have replaced the stock SD card with a reliable one and made sure the device has stable power. Updating the operating system on a weak, unreliable factory card is asking for trouble — a failure during the update process could leave the device unable to boot. If you have followed the previous steps and set up a good SD card in TF1, the update process should be straightforward and safe.",
      },
      {
        title: "Use Scraper to download game covers and make your library look great",
        description:
          "The R36S can run games, but a raw list of ROM filenames is not very exciting to browse. If you want the device to feel more like a real handheld game library instead of a file browser, you should set up game covers and metadata. The built-in Scraper feature can automatically download box art, game descriptions, ratings, release dates, and other metadata for your games from an online database called ScreenScraper. This transforms a dull text list into a visually appealing game library that is genuinely pleasant to browse, especially if you have ROMs across many different systems. Before using Scraper, you need to create a free account on the ScreenScraper website (screenscraper.fr). Then, on the R36S, go into the Scraper settings, enter your ScreenScraper username and password, and choose which game systems you want to scrape. You can scrape one system at a time or all of them, depending on how many games you have and how long you want to wait. This step is not technically required for gameplay, but it makes the handheld feel dramatically better. A clean game list with cover art turns the R36S from a cheap emulator box into something that feels personal and polished.",
      },
      {
        title: "Explore PortMaster to play PC ports like Half-Life and GTA III",
        description:
          "If you want to push the R36S beyond basic retro emulation, PortMaster is one of the most exciting tools available. PortMaster lets you install and play selected PC game ports directly on the R36S. Depending on compatibility and whether you own the original game files, you may be able to play titles like Half-Life, Grand Theft Auto III, Grand Theft Auto: Vice City, Tomb Raider, Shovel Knight, Celeste (via Pico-8 or similar), and many more indie and classic PC titles. To access PortMaster, go to the Options menu on the main screen — the same Options menu you enabled in an earlier step — and select PortMaster. The tool will check for available ports and let you browse a catalog of supported games. For many ports, you will need to provide your own legally obtained game files from the PC version. PortMaster handles the installation and configuration, but be aware that compatibility varies. Some ports run surprisingly well on the R36S. Others may have performance issues, control mapping quirks, or require specific file versions. This is where the R36S starts to feel more interesting than its price suggests. It will never be a Steam Deck, but with the right ports and some patience, it can deliver fun experiences that go far beyond simple NES or GBA emulation.",
      },
      {
        title: "Understand N64 and PSP performance — and how to improve it",
        description:
          "The R36S is excellent for many classic systems, but it is not a performance monster. Beginners should understand this clearly before expecting perfect Nintendo 64 or PlayStation Portable gameplay. If an N64 or PSP game feels slow, stuttery, or has broken audio, do not immediately assume your handheld is broken or defective. Some 3D games are simply too demanding for this class of hardware. However, you can often improve performance significantly by changing the emulator core — the underlying emulation engine that runs the game. Different cores have different performance characteristics, and one core may handle a specific game much better than another. To try a different core, go to the game list for the system you want to adjust (for example, the Nintendo 64 or PSP list). Press the Select button to open the game settings or system settings menu. Look for the Emulator or Core option. Try a different core from the available list and then launch the game again to test the difference. Try a few different cores and keep the one that gives the best balance of speed, sound quality, and overall stability. This will not fix every game — some titles are simply beyond what the R36S chipset can handle smoothly — but it can make a real difference for many games. The key is to keep your expectations realistic. The R36S is fantastic for its price, but it is still a cheap retro handheld. For 8-bit, 16-bit, GBA, and many PlayStation 1 titles, it can be an absolute joy. For demanding PSP and N64 3D games, expect some testing, compromises, and the occasional disappointment.",
      },
    ],
    commonMistakes: [
      "Trusting the factory SD card and losing everything when it corrupts. The stock card that ships with the R36S is the single most common point of failure. It may work fine for days or weeks, and then suddenly corrupt the system files, crash during gameplay, or silently destroy your save data. Many beginners learn this lesson the hard way after spending hours building their game library. Replace it with a SanDisk or Samsung card before you do anything else.",
      "Not enabling the hidden Options menu and then wondering where Updates, PortMaster, and other essential tools are. The Options menu is disabled by default on many units and beginners often assume the device is broken or missing features. Go to UI Settings > Visible Systems, scroll to the bottom, and enable Options. This unlocks nearly all the advanced functionality.",
      "Expecting flawless N64 and PSP performance on a budget handheld without testing different emulator cores. The R36S is a capable little device for its price, but it is not a high-end emulation machine. Some 3D games will lag, stutter, or have audio issues regardless of what you do. Before giving up on a game, try different emulator cores — it often makes a noticeable difference.",
      "Skipping the network setup entirely and missing out on ArkOS updates, Scraper cover art downloads, and PortMaster game ports. Yes, getting the R36S online is a little inconvenient since it requires a USB Wi-Fi adapter or phone tethering. But without network access, you are locked out of some of the device's best features.",
      "Updating ArkOS while still running from the unreliable factory SD card. If the card fails or corrupts during the update process, the device may be left unable to boot. Always update only after you have replaced the stock card with a reliable brand and verified that the device is stable.",
      "Treating the R36S like a polished consumer product from Nintendo or Sony instead of what it really is: a budget handheld that requires some tinkering to reach its full potential. The R36S can be a fantastic little retro machine, but you need to meet it halfway with proper setup, realistic expectations, and a willingness to tweak settings.",
    ],
    finalTip:
      "The R36S is not the smoothest handheld for complete beginners, but that is also part of its strange charm. It is cheap enough to feel like an impulse buy, capable enough to surprise you, and flexible enough to reward people who enjoy tinkering. At the same time, it can punish careless setup. Use the stock card for too long and you may lose saves. Ignore the Options menu and you may never find key features. Expect flawless PSP performance and you may be disappointed. Treat it like a device that needs a little preparation, and the experience becomes much better. The best way to enjoy the R36S is simple: replace the SD cards, make the Options menu visible, update ArkOS, clean up your game library with covers and metadata, and learn how to change emulator cores when needed. Do that, and this tiny budget handheld becomes far more than a cheap toy — it becomes a surprisingly fun retro machine that can keep you busy for hours. For new users, the message is clear: do not rush straight into games. Spend a little time setting up the R36S properly first. The payoff is absolutely worth it.",
    faqs: [
      {
        question: "Why should I replace the stock R36S MicroSD card?",
        answer:
          "The factory card included with most R36S units is a low-quality, unbranded card that is the single most common point of failure on the device. It can corrupt the system files, break the boot process, crash randomly during gameplay, or destroy your save files without any warning. Nothing is more frustrating than losing hours of game progress and setup work because the card failed. Switch to a reliable card from SanDisk or Samsung before you do anything else.",
      },
      {
        question: "How do I connect the R36S to the internet since it has no built-in Wi-Fi?",
        answer:
          "The R36S does not have built-in Wi-Fi, which is one of the compromises made to keep the price low. You have two options. The first is to use a compatible USB Wi-Fi adapter plugged into the OTG port (the same port used for charging). Not every adapter works, so test what you have. The second option is to connect an Android phone to the R36S with a USB cable and enable USB tethering in your phone's settings. This lets the R36S share your phone's internet connection.",
      },
      {
        question: "Why can't I find the Options menu or PortMaster on my R36S?",
        answer:
          "The Options menu is hidden by default on many R36S units. Without it, you cannot access system updates, PortMaster, or several other important tools. To make it visible, press START to open the main menu, go to UI Settings, find Visible Systems, scroll all the way to the bottom of the list, and enable Options. After that, Options should appear on the main screen as a system category alongside your game consoles.",
      },
      {
        question: "What size SD cards do I need for the R36S two-card setup?",
        answer:
          "For the TF1 system card that runs ArkOS, a 16GB or 32GB card is sufficient — the operating system does not take up much space. For the TF2 game card, 64GB is a practical starting point if you mainly play smaller retro games (NES, SNES, GBA, etc.). If you plan to add many PlayStation 1, PSP, or large disc-based games, a 128GB card gives you much more breathing room. Always choose a reliable brand like SanDisk or Samsung.",
      },
      {
        question: "How do I fix laggy N64 or PSP games on the R36S?",
        answer:
          "Lag and stuttering in N64 and PSP games is one of the most common R36S complaints. First, understand that some 3D games are simply too demanding for the R36S hardware, especially heavier PSP titles. However, you can often improve performance by changing the emulator core — the underlying engine that runs the game. Go to the game list for the system (N64 or PSP), press the Select button to open the settings menu, look for the Emulator or Core option, and try a different core. Different games respond better to different cores. Test a few, and keep the one that gives the best balance of speed, audio quality, and stability. If a game still runs badly on every core, the honest answer is that it is probably too demanding for this budget handheld.",
      },
      {
        question: "Should I update ArkOS immediately on a new R36S?",
        answer:
          "Yes, updating ArkOS is recommended because newer versions often improve emulator compatibility, fix bugs, and add useful features. However, only update after you have replaced the stock SD card with a reliable brand. Updating the operating system on a weak, unreliable factory card is risky — if the card fails or corrupts during the update, the device may be left unable to boot. Once you have a good SD card in TF1 and a stable power source, go to Options > Update, type OK on the virtual keyboard, and let the system update automatically.",
      },
    ],
  },
];

export function getGuideContent(gameSlug: string, guideSlug: string) {
  return guideContents.find(
    (guide) => guide.gameSlug === gameSlug && guide.guideSlug === guideSlug
  );
}

export function getGuidesByGameSlug(gameSlug: string) {
  return guideContents.filter((guide) => guide.gameSlug === gameSlug);
}