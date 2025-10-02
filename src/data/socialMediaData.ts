import type { SocialMediaPost } from "@/types";

export const socialMediaData: SocialMediaPost[] = [
  {
    platform: "linkedin",
    text_raw:
      "By doing so, we make it easy for developers and companies to try, use, develop and deploy on our technology while giving them the ability to save money and focus on what really matters: solving big (and little!) problems.",
    preprocess: {
      text_clean:
        "By doing so, we make it easy for developers and companies to try, use, develop and deploy on our technology while giving them the ability to save money and focus on what really matters: solving big (and little!) problems.",
      lang: "en",
      pii_redacted: false,
    },
    sentiment: {
      label: "positive",
      confidence: 0.85,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: ["product", "pricing", "developer"],
    },
    persona: {
      labels: ["developer", "customer"],
    },
    entities: {
      product: ["technology"],
    },
    moderation: {
      toxicity: "low",
      is_spam: false,
    },
  },
  {
    platform: "linkedin",
    text_raw:
      "Send Feed post View Pragna Paranji's  graphic link Pragna ParanjiPragna Paranji • 2ndPremium • 2nd Senior Director at TenstorrentSenior Director at Tenstorrent 3mo •  3 months ago • Visible to anyone on or off LinkedIn",
    preprocess: {
      text_clean:
        "Send Feed post View Pragna Paranji's graphic link Pragna ParanjiPragna Paranji • 2ndPremium • 2nd Senior Director at TenstorrentSenior Director at Tenstorrent 3mo • 3 months ago • Visible to anyone on or off LinkedIn",
      lang: "en",
      pii_redacted:
        "Send Feed post View [PERSON]'s graphic link [PERSON][PERSON] • 2ndPremium • 2nd Senior Director at TenstorrentSenior Director at Tenstorrent 3mo • 3 months ago • Visible to anyone on or off LinkedIn",
    },
    sentiment: {
      label: "neutral",
      confidence: 0.7,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: [],
    },
    persona: {
      labels: [],
    },
    entities: [],
    moderation: {
      toxicity: "no",
      is_spam: "no",
    },
  },
  {
    platform: "discord",
    text_raw: "1",
    preprocess: {
      text_clean: "1",
      lang: "unk",
      pii_redacted: false,
    },
    sentiment: {
      label: "neutral",
      confidence: 0.5,
    },
    issue_types: [],
    topics: [],
    persona: ["unknown"],
    entities: [],
    moderation: {
      toxicity: "negligible",
      is_spam: false,
    },
  },
  {
    platform: "reddit",
    text_raw:
      "Has anyone had experience with any tenstorrent cards? Why haven't I've seem / heard about them more often for local ai? There relatively cheap\nTenstorrent also provides a custom fork of vLLM!",
    preprocess: {
      text_clean:
        "Has anyone had experience with any tenstorrent cards? Why haven't I've seem / heard about them more often for local ai? There relatively cheap\nTenstorrent also provides a custom fork of vLLM!",
      lang: "en",
      pii_redacted: false,
    },
    sentiment: {
      label: "neutral",
      confidence: 0.6,
    },
    issue_types: {
      labels: ["performance", "hardware"],
    },
    topics: {
      labels: ["product", "performance", "pricing"],
    },
    persona: {
      labels: ["developer", "customer", "unknown"],
    },
    entities: {
      product: ["tenstorrent cards", "vLLM"],
    },
    moderation: {
      toxicity: "low",
      is_spam: false,
    },
  },
  {
    platform: "reddit",
    text_raw:
      "📢 Tenstorrent is hiring a SLT System Engineer!\nCompany: Tenstorrent\r\n\r\nLocation: Austin, TX 📍\r\n\r\nSalary: 100K - 500K 💰\r\n\r\nDate Posted: June 17, 2025 📅\r\n\r\n\r\n\r\n\r\nApply & Description 👉 https://jobboardsearch.com/redirect?utm_source=reddit&utm_medium=bot&utm_id=jobboarsearch&utm_term=echojobs.io&rurl=aHR0cHM6Ly9lY2hvam9icy5pby9qb2IvdGVuc3RvcnJlbnQtc2x0LXN5c3RlbS1lbmdpbmVlci16cjJtNQ==",
    preprocess: {
      text_clean:
        "📢 Tenstorrent is hiring a SLT System Engineer!\nCompany: Tenstorrent\n\nLocation: Austin, TX 📍\n\nSalary: 100K - 500K 💰\n\nDate Posted: June 17, 2025 📅\n\n\n\nApply & Description 👉 https://jobboardsearch.com/redirect?utm_source=reddit&utm_medium=bot&utm_id=jobboarsearch&utm_term=echojobs.io&rurl=aHR0cHM6Ly9lY2hvam9icy5pby9qb2IvdGVuc3RvcnJlbnQtc2x0LXN5c3RlbS1lbmdpbmVlci16cjJtNQ==",
      lang: "en",
      pii_redacted: [],
    },
    sentiment: {
      label: "positive",
      confidence: 0.9,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: ["product", "performance"],
    },
    persona: {
      labels: ["unknown"],
    },
    entities: {
      product: ["Tenstorrent"],
    },
    moderation: {
      toxicity: 0.0,
      is_spam: false,
    },
  },
  {
    platform: "linkedin",
    text_raw: "No alternative text description for this image",
    preprocess: {
      text_clean: "No alternative text description for this image",
      lang: "en",
      pii_redacted: false,
    },
    sentiment: {
      label: "neutral",
      confidence: 0.6,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: [],
    },
    persona: {
      labels: ["unknown"],
    },
    entities: [],
    moderation: {
      toxicity: "safe",
      is_spam: false,
    },
  },
  {
    platform: "discord",
    text_raw:
      "6/7/25, 5:09 PM\n20 minutes to go, y'all! You can submit now even if it's not complete, as it helps to have the GitHub link",
    preprocess: {
      text_clean:
        "20 minutes to go, y'all! You can submit now even if it's not complete, as it helps to have the GitHub link",
      lang: "en",
      pii_redacted: false,
    },
    sentiment: {
      label: "neutral",
      confidence: 0.7,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: [],
    },
    persona: {
      labels: ["developer"],
    },
    entities: [],
    moderation: {
      toxicity: "low",
      is_spam: false,
    },
  },
  {
    platform: "discord",
    text_raw: "Yesterday at 6:32 PM\nAdd it to my channel! Thanks @marty1885",
    preprocess: {
      text_clean: "Add it to my channel! Thanks @marty1885",
      lang: "en",
      pii_redacted: "@marty1885",
    },
    sentiment: {
      label: "positive",
      confidence: 0.9,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: [],
    },
    persona: {
      labels: ["unknown"],
    },
    entities: {
      product: [],
      feature: [],
      component: [],
      version: [],
      competitor: [],
    },
    moderation: {
      toxicity: "low",
      is_spam: false,
    },
  },
  {
    platform: "reddit",
    text_raw:
      "SingularityNET (AGIX): Unlocking Decentralized AI - A Deep Dive\nPF-039\n\nSingularityNET (AGIX) is making waves by aiming to democratize AI through its decentralized platform, envisioning a global marketplace for AI services. The AGIX token is the lifeblood of this ecosystem, serving as the primary currency for transactions, allowing users to purchase AI services directly from developers. Beyond simple transactions, AGIX empowers holders to actively participate in the platform's governance through SingularityNET Enhancement Proposals (SNEPs), shaping the future direction of the network. Furthermore, users can stake their AGIX tokens to earn rewards, contributing to network security and stability. The platform's multi-chain compatibility, bridging Ethereum and Cardano, enhances its usability and expands its reach, making AI services more accessible across different blockchain communities. For example, a developer on Cardano could create an AI-powered image recognition service and be paid in AGIX by a user on the Ethereum network, showcasing the power of interoperability.\n\n\n\nThe staking structure of AGIX offers a pathway for users to earn passive income while supporting the network. By locking up their AGIX tokens for a set period, stakers receive rewards, effectively earning interest on their holdings. While specific APRs and lock-up terms can vary, the staking portal provides a calculator to estimate potential earnings, allowing users to make informed decisions. However, it's important to note that smaller stakes may yield relatively low APRs, and exploring alternative platforms like Minswap for higher rewards can come with risks like impermanent loss. This structure incentivizes long-term holding and active participation in the SingularityNET ecosystem, fostering a community invested in the platform's success. For instance, a user staking 5,000 AGIX might earn enough tokens monthly to offset transaction fees or reinvest back into AI services on the platform.\n\n\n\nSingularityNET is already demonstrating tangible real-world impact across diverse sectors. In healthcare, the Awakening Health joint venture with Hanson Robotics has produced Grace, a humanoid robot assistant designed to provide care and companionship to elderly patients, leveraging AI to recognize emotions, speak multiple languages, and offer therapeutic activities. Singularity Studio focuses on enterprise AI solutions, such as real-time data analytics for supply chains, helping businesses optimize operations and gain valuable insights. The Rejuve project is building a decentralized network for longevity research, connecting researchers, clinicians, and data contributors to accelerate the development of affordable and accessible solutions. Recent partnerships, like the collaboration with Tenstorrent to develop specialized AGI-optimized chip architectures, and the formation of the Artificial Superintelligence Alliance with [Fetch.ai](http://Fetch.ai) and Ocean Protocol, further solidify SingularityNET's position as a key player in the evolving decentralized AI landscape. These initiatives demonstrate that AGIX is not just a token, but a gateway to a future powered by democratized and accessible AI.",
    preprocess: {
      text_clean:
        "SingularityNET (AGIX): Unlocking Decentralized AI - A Deep Dive\nPF-039\n\nSingularityNET (AGIX) is making waves by aiming to democratize AI through its decentralized platform, envisioning a global marketplace for AI services. The AGIX token is the lifeblood of this ecosystem, serving as the primary currency for transactions, allowing users to purchase AI services directly from developers. Beyond simple transactions, AGIX empowers holders to actively participate in the platform's governance through SingularityNET Enhancement Proposals (SNEPs), shaping the future direction of the network. Furthermore, users can stake their AGIX tokens to earn rewards, contributing to network security and stability. The platform's multi-chain compatibility, bridging Ethereum and Cardano, enhances its usability and expands its reach, making AI services more accessible across different blockchain communities. For example, a developer on Cardano could create an AI-powered image recognition service and be paid in AGIX by a user on the Ethereum network, showcasing the power of interoperability.\n\n\n\nThe staking structure of AGIX offers a pathway for users to earn passive income while supporting the network. By locking up their AGIX tokens for a set period, stakers receive rewards, effectively earning interest on their holdings. While specific APRs and lock-up terms can vary, the staking portal provides a calculator to estimate potential earnings, allowing users to make informed decisions. However, it's important to note that smaller stakes may yield relatively low APRs, and exploring alternative platforms like Minswap for higher rewards can come with risks like impermanent loss. This structure incentivizes long-term holding and active participation in the SingularityNET ecosystem, fostering a community invested in the platform's success. For instance, a user staking 5,000 AGIX might earn enough tokens monthly to offset transaction fees or reinvest back into AI services on the platform.\n\n\n\nSingularityNET is already demonstrating tangible real-world impact across diverse sectors. In healthcare, the Awakening Health joint venture with Hanson Robotics has produced Grace, a humanoid robot assistant designed to provide care and companionship to elderly patients, leveraging AI to recognize emotions, speak multiple languages, and offer therapeutic activities. Singularity Studio focuses on enterprise AI solutions, such as real-time data analytics for supply chains, helping businesses optimize operations and gain valuable insights. The Rejuve project is building a decentralized network for longevity research, connecting researchers, clinicians, and data contributors to accelerate the development of affordable and accessible solutions. Recent partnerships, like the collaboration with Tenstorrent to develop specialized AGI-optimized chip architectures, and the formation of the Artificial Superintelligence Alliance with [Fetch.ai](http://Fetch.ai) and Ocean Protocol, further solidify SingularityNET's position as a key player in the evolving decentralized AI landscape. These initiatives demonstrate that AGIX is not just a token, but a gateway to a future powered by democratized and accessible AI.",
      lang: "en",
      pii_redacted: false,
    },
    sentiment: {
      label: "positive",
      confidence: 0.8,
    },
    issue_types: {
      labels: [],
    },
    topics: {
      labels: ["product", "technology", "blockchain", "AI"],
    },
    persona: {
      labels: ["developer", "investor", "researcher"],
    },
    entities: {
      product: [
        "SingularityNET",
        "AGIX",
        "Tenstorrent",
        "Fetch.ai",
        "Ocean Protocol",
      ],
    },
    moderation: {
      toxicity: "low",
      is_spam: false,
    },
  },
];
