export type StandaloneFaq = { question: string; answer: string };

export type StandaloneGuide = {
  slug: string;
  title: string;
  type: string;
  category: string;
  excerpt: string;
  quickAnswer: string;
  difficulty: "Beginner" | "Easy" | "Medium" | "Hard";
  timeRequired: string;
  platform: string;
  updatedAt: string;
  beforeYouStart: string[];
  steps: { title: string; description: string }[];
  commonMistakes: string[];
  finalTip: string;
  faqs: StandaloneFaq[];
};

export const standaloneGuides: StandaloneGuide[] = [
  {
    slug: "switch-2-first-time-setup",
    title: "Nintendo Switch 2 First-Time Setup Guide",
    type: "Setup Guide",
    category: "Nintendo Platform",
    excerpt:
      "A step-by-step guide for setting up your Nintendo Switch 2 for the first time, including account setup, system updates, settings, and beginner recommendations.",
    quickAnswer:
      "When you first unbox your Nintendo Switch 2, connect to Wi-Fi, sign into or create a Nintendo Account, install any available system updates, configure your user profile and parental controls, and download your first game. The whole process takes about 20–30 minutes.",
    difficulty: "Beginner",
    timeRequired: "20–30 minutes",
    platform: "Nintendo Switch 2",
    updatedAt: "June 2026",
    beforeYouStart: [
      "Make sure your Switch 2 is charged or connected to power during setup.",
      "Have your Wi-Fi password ready.",
      "Have your Nintendo Account email and password ready, or create a new account.",
      "Keep the console within range of your Wi-Fi router during the initial setup.",
    ],
    steps: [
      {
        title: "Unbox and power on",
        description:
          "Remove the Switch 2 from the box, attach the Joy-Con controllers to the console or grip, and press the power button on the top of the console. Follow the on-screen prompts to select your language and region.",
      },
      {
        title: "Connect to Wi-Fi",
        description:
          "Select your Wi-Fi network from the list and enter the password. A stable internet connection is needed for the system update and Nintendo Account sign-in.",
      },
      {
        title: "Sign into your Nintendo Account",
        description:
          "Sign in with your existing Nintendo Account, or create a new one directly on the console. Your account links your game purchases, save data cloud backups, and online subscription.",
      },
      {
        title: "Install system updates",
        description:
          "After signing in, the Switch 2 will check for the latest system software. Install any available updates. This step may take a few minutes depending on your connection speed.",
      },
      {
        title: "Configure settings and download your first game",
        description:
          "Set your user icon, nickname, and preferred settings. Go to the Nintendo eShop to browse and download your first game. You can also insert a physical game card to start playing immediately.",
      },
    ],
    commonMistakes: [
      "Skipping the system update — this can cause compatibility issues with newer games and features.",
      "Not signing into a Nintendo Account during setup — many features require it.",
      "Setting up without a stable Wi-Fi connection — the initial update needs reliable internet.",
    ],
    finalTip:
      "Take your time with the initial setup. A properly configured Switch 2 from day one saves you headaches later with save data, game sharing, and online features.",
    faqs: [
      {
        question: "Do I need a Nintendo Account to set up the Switch 2?",
        answer:
          "Yes, a Nintendo Account is required for most features including the eShop, online play, and cloud saves. You can create one for free during setup.",
      },
      {
        question: "How long does the initial system update take?",
        answer:
          "Usually 5–15 minutes depending on internet speed. It is best to keep the console connected to power during the update.",
      },
      {
        question: "Can I transfer data from my original Switch to Switch 2?",
        answer:
          "Yes, Nintendo provides a system transfer tool. See our Switch data transfer guide for step-by-step instructions.",
      },
    ],
  },
  {
    slug: "r36s-setup-guide",
    title: "R36S Beginner Setup Guide: The First Things You Should Do Before Playing",
    type: "Setup Guide",
    category: "Retro Handheld",
    excerpt:
      "A complete R36S setup guide covering SD card replacement, ArkOS update, Wi-Fi setup, cover scraping, PortMaster, emulator tuning, and common beginner problems.",
    quickAnswer:
      "The first thing every R36S owner should do is replace the stock MicroSD card with a reliable brand. After that, enable the hidden Options menu, get online via USB Wi-Fi adapter or phone tethering, update ArkOS, scrape game covers, and tune emulator cores for better N64 and PSP performance.",
    difficulty: "Beginner",
    timeRequired: "30–45 minutes",
    platform: "Retro Handheld",
    updatedAt: "June 2026",
    beforeYouStart: [
      "Buy a reliable MicroSD card from SanDisk or Samsung before you begin — do not trust the stock card.",
      "Prepare a USB Wi-Fi adapter or an Android phone with USB cable for internet access.",
      "Set aside 30 to 45 minutes for a proper setup. Rushing leads to problems later.",
      "Understand that the R36S is a budget device — not every game will run perfectly.",
    ],
    steps: [
      {
        title: "Replace the SD card immediately",
        description:
          "The stock SD card included with most R36S units is the weakest link. Flash ArkOS to a new SanDisk or Samsung MicroSD card using a tool like Rufus or Win32 Disk Imager. Use TF1 for the system card and TF2 for your game library.",
      },
      {
        title: "Enable the hidden Options menu",
        description:
          "Press START, go to UI Settings > Visible Systems, scroll to the bottom, and enable Options. This unlocks system updates, PortMaster, and essential configuration tools.",
      },
      {
        title: "Get the R36S online",
        description:
          "Use a compatible USB Wi-Fi adapter in the OTG port, or connect an Android phone via USB and enable USB tethering. Without internet, you cannot update ArkOS or scrape game covers.",
      },
      {
        title: "Update ArkOS",
        description:
          "Go to Options > Update, type OK on the virtual keyboard, and let the system download the latest ArkOS version. Only update after replacing the stock SD card.",
      },
      {
        title: "Scrape game covers and metadata",
        description:
          "Create a free ScreenScraper account, enter your credentials in the Scraper settings, and scrape box art and metadata for your games. This transforms a raw file list into a polished game library.",
      },
      {
        title: "Tune emulator cores for N64 and PSP",
        description:
          "If a game lags, press Select on the game list, change the emulator core, and test different cores for the best balance of speed and stability.",
      },
    ],
    commonMistakes: [
      "Trusting the factory SD card and losing save data when it corrupts.",
      "Not enabling the Options menu and missing key features.",
      "Expecting flawless PSP and N64 performance without testing different emulator cores.",
      "Skipping the network setup and missing out on updates and scraping.",
    ],
    finalTip:
      "The R36S rewards patience. Spend the time to set it up properly and this budget handheld becomes far more enjoyable than its price suggests.",
    faqs: [
      {
        question: "Why should I replace the stock R36S MicroSD card?",
        answer:
          "The factory card is low-quality and prone to corruption. It can fail without warning, destroying your system files and save data. Switch to SanDisk or Samsung immediately.",
      },
      {
        question: "How do I connect the R36S to the internet?",
        answer:
          "The R36S has no built-in Wi-Fi. Use a compatible USB Wi-Fi adapter in the OTG port, or connect an Android phone via USB and enable USB tethering.",
      },
      {
        question: "How do I fix laggy N64 or PSP games?",
        answer:
          "Change the emulator core from the per-game settings menu (press Select on the game list). Different cores have different performance characteristics — test a few to find the best one.",
      },
    ],
  },
  {
    slug: "r36s-black-screen-fix",
    title: "R36S Black Screen Fix: Troubleshooting Guide",
    type: "Troubleshooting",
    category: "Retro Handheld",
    excerpt:
      "Step-by-step troubleshooting for R36S black screen issues, including boot problems, SD card failures, display glitches, and firmware recovery.",
    quickAnswer:
      "If your R36S shows a black screen, try holding the power button for 10+ seconds to force a shutdown, then restart. If that fails, reflash the SD card with a fresh ArkOS image, check the display ribbon cable connection, and try booting without the TF2 game card inserted.",
    difficulty: "Medium",
    timeRequired: "15–30 minutes",
    platform: "Retro Handheld",
    updatedAt: "June 2026",
    beforeYouStart: [
      "Do not panic — most R36S black screen issues are fixable.",
      "Keep a backup of your ArkOS system card on your PC.",
      "Have a MicroSD card reader ready for reflashing if needed.",
      "Charge the device for at least 30 minutes before troubleshooting power-related issues.",
    ],
    steps: [
      {
        title: "Force a hard shutdown",
        description:
          "Hold the power button for 10 to 15 seconds until the device powers off completely. Some black screens are caused by the device being stuck in sleep mode or a crashed emulator.",
      },
      {
        title: "Check the battery and charge the device",
        description:
          "Plug the R36S into a reliable charger and let it charge for at least 30 minutes. A completely drained battery can cause a black screen that looks like a hardware failure.",
      },
      {
        title: "Remove the TF2 game card and reboot",
        description:
          "Turn off the device, remove the TF2 card (right slot), and try booting with only the TF1 system card. A corrupted game card can sometimes prevent the system from booting.",
      },
      {
        title: "Reflash the ArkOS system card",
        description:
          "If the above steps do not work, the system card may be corrupted. Use a PC to reflash ArkOS onto the TF1 card with Rufus or a similar imaging tool. This is the most reliable fix for black screen boot failures.",
      },
      {
        title: "Check the display connection",
        description:
          "If the device powers on (green light) but the screen stays black, the display ribbon cable may be loose. Open the case gently and reseat the ribbon cable connecting the screen to the mainboard.",
      },
    ],
    commonMistakes: [
      "Assuming the device is dead when the battery is just fully drained.",
      "Reflashing the wrong ArkOS image version for your specific R36S panel type.",
      "Removing the TF1 system card while the device is powered on.",
      "Opening the case carelessly and damaging the ribbon cable or plastic clips.",
    ],
    finalTip:
      "Most R36S black screen problems are SD card or power related. Start with the simplest fix — a hard shutdown and charge — before moving to reflashing or hardware checks.",
    faqs: [
      {
        question: "Why does my R36S show a black screen after boot?",
        answer:
          "Common causes include a corrupted SD card, dead battery, stuck sleep mode, or a loose display ribbon cable. Try the steps above in order.",
      },
      {
        question: "Will reflashing ArkOS delete my game saves?",
        answer:
          "If your saves are on the TF2 game card, they will not be affected. If they were on the TF1 system card, they will be lost — always back up your saves before reflashing.",
      },
    ],
  },
  {
    slug: "nintendo-switch-parental-controls",
    title: "Nintendo Switch Parental Controls: Complete Setup Guide",
    type: "Setup Guide",
    category: "Nintendo Platform",
    excerpt:
      "A complete guide to setting up and using Nintendo Switch Parental Controls, including the mobile app, play time limits, content restrictions, and family management.",
    quickAnswer:
      "Nintendo Switch Parental Controls can be set up directly on the console or through the free Nintendo Switch Parental Controls mobile app. The app lets you set daily play time limits, restrict games by age rating, manage online communication, and receive monthly play activity reports.",
    difficulty: "Beginner",
    timeRequired: "10–15 minutes",
    platform: "Nintendo Switch / Switch 2",
    updatedAt: "June 2026",
    beforeYouStart: [
      "Download the Nintendo Switch Parental Controls app on your smartphone (iOS or Android).",
      "Make sure your Switch console is connected to the internet.",
      "Have your Nintendo Account login ready.",
      "Decide what restrictions you want: play time limits, age ratings, or communication controls.",
    ],
    steps: [
      {
        title: "Download and open the parental controls app",
        description:
          "Install the free Nintendo Switch Parental Controls app from the App Store or Google Play. Open the app and sign in with your Nintendo Account.",
      },
      {
        title: "Link the app to your Switch console",
        description:
          "The app will display a registration code. On your Switch, go to System Settings > Parental Controls > Parental Controls Settings, and enter the code shown in the app.",
      },
      {
        title: "Set play time limits",
        description:
          "In the app, choose a daily play time limit. When the limit is reached, the console will display an alarm. You can also set the console to suspend software automatically when time runs out.",
      },
      {
        title: "Restrict games by age rating",
        description:
          "Set a maximum age rating for games. The console will require your PIN to launch any game rated above the limit you set. This works across both physical and digital games.",
      },
      {
        title: "Manage communication and social features",
        description:
          "Control whether the user can communicate with others online, post screenshots to social media, or use friend features. These settings are managed through the app or the console directly.",
      },
    ],
    commonMistakes: [
      "Setting a PIN and forgetting it — write it down or store it securely.",
      "Not testing the restrictions after setup to make sure they work as expected.",
      "Assuming the app works without an internet connection — it requires the Switch to be online.",
      "Forgetting to set restrictions for each user profile if multiple people use the same console.",
    ],
    finalTip:
      "Parental controls work best when combined with open conversations about healthy gaming habits. The app is a tool to support your family rules, not replace them.",
    faqs: [
      {
        question: "Can I set up parental controls without the mobile app?",
        answer:
          "Yes, basic restrictions can be set directly on the Switch under System Settings > Parental Controls. However, the mobile app offers more detailed controls and activity reports.",
      },
      {
        question: "Can parental controls be bypassed?",
        answer:
          "The PIN is required to change or disable restrictions. Choose a PIN your child cannot easily guess, and do not share it.",
      },
    ],
  },
  {
    slug: "switch-2-storage-guide",
    title: "Nintendo Switch 2 Storage Guide: microSD Cards, Internal Storage, and Best Practices",
    type: "Buying Guide",
    category: "Nintendo Platform",
    excerpt:
      "A practical guide to Nintendo Switch 2 storage options, including recommended microSD cards, internal storage management, transfer speeds, and capacity planning.",
    quickAnswer:
      "The Nintendo Switch 2 supports microSD Express cards for faster load times, in addition to standard microSD cards. For most players, a 256GB or 512GB card from a trusted brand like SanDisk or Samsung is the best balance of price and capacity. Digital-only players should consider 1TB.",
    difficulty: "Beginner",
    timeRequired: "8–12 minutes",
    platform: "Nintendo Switch 2",
    updatedAt: "June 2026",
    beforeYouStart: [
      "Check how much free space you currently have under System Settings > Data Management.",
      "Decide whether you mainly buy physical or digital games — digital games need much more storage.",
      "Understand that microSD Express cards are faster but currently more expensive than standard microSD.",
    ],
    steps: [
      {
        title: "Check your current storage usage",
        description:
          "Go to System Settings > Data Management on your Switch 2 to see how much internal storage and microSD space you are using. This helps you decide what capacity card you need.",
      },
      {
        title: "Choose the right microSD card type",
        description:
          "The Switch 2 supports standard microSD, microSDHC, and microSDXC cards, plus the faster microSD Express format. For most games, a standard UHS-I U3 card is sufficient. For faster load times in Switch 2-enhanced games, consider microSD Express.",
      },
      {
        title: "Pick the right capacity",
        description:
          "128GB is enough for a small library of physical games. 256GB or 512GB is recommended for a mixed library. 1TB is best for all-digital players who download many large titles.",
      },
      {
        title: "Insert or replace the microSD card",
        description:
          "Power off the console completely. Open the microSD card slot cover on the back of the console. Insert the card until it clicks into place. Power on and format if prompted.",
      },
      {
        title: "Transfer existing data",
        description:
          "Go to System Settings > Data Management > Move Data Between System and microSD Card. Move games and screenshots to the new card to free up internal storage.",
      },
    ],
    commonMistakes: [
      "Buying a card that is too small and running out of space within months.",
      "Inserting or removing the microSD card while the console is powered on.",
      "Buying cheap unbranded cards that have slow speeds or fail prematurely.",
      "Not checking if the card is compatible with microSD Express before paying a premium for it.",
    ],
    finalTip:
      "A 512GB SanDisk or Samsung card is the sweet spot for most Switch 2 players. It provides enough room for a growing digital library without being as expensive as 1TB options.",
    faqs: [
      {
        question: "Does the Switch 2 require a special microSD card?",
        answer:
          "No, standard microSD cards work fine. However, microSD Express cards offer faster load times for compatible games if you want the best performance.",
      },
      {
        question: "Can I use the same microSD card from my original Switch?",
        answer:
          "Yes, but the Switch 2 will prompt you to format it. Back up your screenshots and consider transferring your data first.",
      },
    ],
  },
  {
    slug: "how-to-transfer-switch-data",
    title: "How to Transfer Nintendo Switch Data to Switch 2",
    type: "How-to Guide",
    category: "Nintendo Platform",
    excerpt:
      "A step-by-step guide to transferring save data, user profiles, screenshots, and game downloads from your original Nintendo Switch to a new Nintendo Switch 2.",
    quickAnswer:
      "You can transfer data from an original Switch to a Switch 2 using the built-in System Transfer tool, Nintendo Switch Online cloud saves, or by manually moving data via a microSD card. The full system transfer moves your user profile, save data, and settings wirelessly between consoles.",
    difficulty: "Easy",
    timeRequired: "15–45 minutes",
    platform: "Nintendo Switch / Switch 2",
    updatedAt: "June 2026",
    beforeYouStart: [
      "Have both consoles nearby, connected to power, and connected to the same Wi-Fi network.",
      "Update both consoles to the latest system software before starting.",
      "Make sure you have an active Nintendo Switch Online membership if you plan to use cloud saves.",
      "Back up important screenshots and videos to a microSD card or PC before transferring.",
    ],
    steps: [
      {
        title: "Update both consoles",
        description:
          "On both your original Switch and Switch 2, go to System Settings > System > System Update and install any available updates. Both consoles need to be on the latest version for the transfer to work.",
      },
      {
        title: "Start the system transfer",
        description:
          "On your Switch 2, go to System Settings > System > Transfer Your User Data. Follow the on-screen instructions. Select your original Switch as the source console and your Switch 2 as the target.",
      },
      {
        title: "Move your user profile and save data",
        description:
          "The system transfer will move your user profile and all save data to the Switch 2. This process uses a local wireless connection between the two consoles and does not require an internet connection after setup.",
      },
      {
        title: "Redownload your games",
        description:
          "After the transfer, your user profile and saves will be on the Switch 2, but you will need to redownload your digital games from the eShop. Go to your account page in the eShop and select Redownload.",
      },
      {
        title: "Transfer screenshots and videos manually",
        description:
          "Screenshots and videos are not moved by the system transfer. Copy them to a microSD card on your original Switch, then insert that card into your Switch 2. Or transfer them to a PC first.",
      },
    ],
    commonMistakes: [
      "Starting the transfer without updating both consoles — this is the most common cause of transfer failures.",
      "Not having enough free space on the Switch 2 before starting the transfer.",
      "Assuming all digital games transfer automatically — you must redownload them.",
      "Forgetting to back up screenshots before wiping or selling the original Switch.",
    ],
    finalTip:
      "The system transfer is reliable but can take 30+ minutes depending on how much save data you have. Set aside enough time and keep both consoles connected to power throughout the process.",
    faqs: [
      {
        question: "Do I lose my data on the original Switch after transfer?",
        answer:
          "Your user profile and save data are moved to the Switch 2, so they will no longer be on the original Switch. Digital games can be redownloaded on either console.",
      },
      {
        question: "Do I need Nintendo Switch Online for the transfer?",
        answer:
          "No, the system transfer does not require an online membership. However, cloud saves do require Nintendo Switch Online if you want to use that method.",
      },
      {
        question: "Can I transfer data from one Switch 2 to another?",
        answer:
          "Yes, the same system transfer process works between two Switch 2 consoles as well.",
      },
    ],
  },
];

export function getStandaloneGuide(slug: string) {
  return standaloneGuides.find((g) => g.slug === slug);
}
