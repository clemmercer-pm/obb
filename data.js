/* OBB - real content set, Session 2 redo (2026-11-05).
   Sourced from cantonese/project/artefacts/content-*.md - every card here was
   reviewed with Clem turn by turn, not invented in one batch. Still NOT verified
   against a native speaker or CC-Canto - that's a separate, later step.
   "Days out with grandma" has no cards yet (its only entry moved to Family) -
   left empty on purpose rather than filled with placeholders. Characters are
   only populated for Family so far; other categories get them in a later pass. */

const CARDS = [
  // --- Household (room-tagged) ---
  { id: 'household-kitchen',     category: 'Household', room: 'Kitchen',        english: 'kitchen',      jyutping: 'cyu4 fong2' },
  { id: 'household-living-room', category: 'Household', room: 'Living room',    english: 'living room',  jyutping: 'haak3 teng1' },
  { id: 'household-dining-room', category: 'Household', room: 'Dining room',    english: 'dining room',  jyutping: 'faan6 teng1' },
  { id: 'household-bedroom',     category: 'Household', room: 'Bedroom',        english: 'bedroom',      jyutping: 'seoi6 fong2' },
  { id: 'household-bathroom',    category: 'Household', room: 'Bathroom',       english: 'bathroom',     jyutping: 'juk6 sat1 / cung1 loeng4 fong2' },
  { id: 'household-toilet',      category: 'Household', room: 'Bathroom',       english: 'toilet',       jyutping: 'sai2 sau2 gaan1 / ci3 so2' },
  { id: 'household-front-door',  category: 'Household', room: 'Other',          english: 'front door',   jyutping: 'cin4 mun2' },
  { id: 'household-back-door',   category: 'Household', room: 'Garden/outside', english: 'back door',    jyutping: 'hau6 mun2' },
  { id: 'household-stairs',      category: 'Household', room: 'Other',          english: 'stairs',       jyutping: 'lau4 tai1' },
  { id: 'household-garage',      category: 'Household', room: 'Other',          english: 'garage',       jyutping: 'ce1 fong4' },
  { id: 'household-balcony',     category: 'Household', room: 'Garden/outside', english: 'balcony',      jyutping: 'lou6 toi4' },
  { id: 'household-garden',      category: 'Household', room: 'Garden/outside', english: 'garden',       jyutping: 'faa1 jyun2' },
  { id: 'household-lift',        category: 'Household', room: 'Other',          english: 'lift',         jyutping: 'lip1 / sing1 gong3 gei1' },

  // --- Going into town ---
  { id: 'town-bus',          category: 'Going into town', english: 'bus',             jyutping: 'baa1 si2' },
  { id: 'town-train',        category: 'Going into town', english: 'train',           jyutping: 'fo2 ce1' },
  { id: 'town-taxi',         category: 'Going into town', english: 'taxi',            jyutping: 'dik1 si2' },
  { id: 'town-bicycle',      category: 'Going into town', english: 'bicycle',         jyutping: 'daan1 ce1' },
  { id: 'town-convenience',  category: 'Going into town', english: 'convenience store', jyutping: 'bin6 lei6 dim3' },
  { id: 'town-bookshop',     category: 'Going into town', english: 'bookshop',        jyutping: 'syu1 dim3' },
  { id: 'town-park',         category: 'Going into town', english: 'park',            jyutping: 'gung1 jyun2' },
  { id: 'town-market',       category: 'Going into town', english: 'market',          jyutping: 'gaai1 si5' },
  { id: 'town-supermarket',  category: 'Going into town', english: 'supermarket',     jyutping: 'ciu1 kap1 si5 coeng4' },
  { id: 'town-library',      category: 'Going into town', english: 'library',         jyutping: 'tou4 syu1 gun2' },
  { id: 'town-police',       category: 'Going into town', english: 'police station',  jyutping: 'ging1 guk2' },
  { id: 'town-fire',         category: 'Going into town', english: 'fire station',    jyutping: 'siu1 fong1 guk2' },
  { id: 'town-pharmacy',     category: 'Going into town', english: 'pharmacy',        jyutping: 'joek6 fong4' },

  // --- Family ---
  { id: 'family-mum',          category: 'Family', english: 'mum',                          jyutping: 'maa4 maa1',   characters: '媽媽' },
  { id: 'family-dad',          category: 'Family', english: 'dad',                          jyutping: 'baa4 baa1',   characters: '爸爸' },
  { id: 'family-grandma-mat',  category: 'Family', english: "grandma (mum's mum)",          jyutping: 'po4 po2',     characters: '婆婆' },
  { id: 'family-grandpa-mat',  category: 'Family', english: "grandpa (mum's dad)",          jyutping: 'gung1 gung1', characters: '公公' },
  { id: 'family-grandma-pat',  category: 'Family', english: "grandma (dad's mum)",          jyutping: 'maa4 maa4',   characters: '嫲嫲' },
  { id: 'family-grandpa-pat',  category: 'Family', english: "grandpa (dad's dad)",          jyutping: 'je4 je4',     characters: '爺爺' },
  { id: 'family-uncle-older',  category: 'Family', english: "uncle (dad's older brother)",  jyutping: 'baak3 baak3', characters: '伯伯' },
  { id: 'family-aunt-by-marriage-1', category: 'Family', english: 'aunt (his wife)',        jyutping: 'baak3 mou5',  characters: '伯母' },
  { id: 'family-aunt-younger', category: 'Family', english: "aunt (dad's younger sister)",  jyutping: 'gu1 ze1',     characters: '姑姐' },
  { id: 'family-uncle-by-marriage-1', category: 'Family', english: 'uncle (her husband)',   jyutping: 'gu1 zoeng6',  characters: '姑丈' },
  { id: 'family-uncle-maternal', category: 'Family', english: "uncle (mum's brother)",      jyutping: 'kau5 fu6',    characters: '舅父' },
  { id: 'family-aunt-by-marriage-2', category: 'Family', english: 'aunt (his wife)',        jyutping: 'kau5 mou5',   characters: '舅母' },

  // --- Talking to baby ---
  { id: 'baby-milk',   category: 'Talking to baby', english: 'milk', jyutping: 'naai5' },
  { id: 'baby-bath',   category: 'Talking to baby', english: 'bath', jyutping: 'cung1 loeng4' },
  { id: 'colour-black',  category: 'Talking to baby', english: 'black',  jyutping: 'hak1 sik1' },
  { id: 'colour-white',  category: 'Talking to baby', english: 'white',  jyutping: 'baak6 sik1' },
  { id: 'colour-red',    category: 'Talking to baby', english: 'red',    jyutping: 'hung4 sik1' },
  { id: 'colour-orange', category: 'Talking to baby', english: 'orange', jyutping: 'caang2 sik1' },
  { id: 'colour-yellow', category: 'Talking to baby', english: 'yellow', jyutping: 'wong4 sik1' },
  { id: 'colour-green',  category: 'Talking to baby', english: 'green',  jyutping: 'luk6 sik1' },
  { id: 'colour-blue',   category: 'Talking to baby', english: 'blue',   jyutping: 'laam4 sik1' },
  { id: 'colour-purple', category: 'Talking to baby', english: 'purple', jyutping: 'zi2 sik1' },
  { id: 'colour-brown',  category: 'Talking to baby', english: 'brown',  jyutping: 'gaa3 fe1 sik1' },

  // --- Dim sum / food ---
  { id: 'food-congee',       category: 'Dim sum / food', english: 'congee',                       jyutping: 'zuk1' },
  { id: 'food-cheung-fun',   category: 'Dim sum / food', english: 'rice noodle rolls (cheung fun)', jyutping: 'coeng2 fan2' },
  { id: 'food-wonton',       category: 'Dim sum / food', english: 'wonton noodles',               jyutping: 'wan4 tan1 min6' },
  { id: 'food-zung',         category: 'Dim sum / food', english: 'sticky rice dumpling',          jyutping: 'zung2' },
  { id: 'food-milk-tea',     category: 'Dim sum / food', english: 'milk tea',                      jyutping: 'naai5 caa4' },
  { id: 'food-cha-chaan-teng', category: 'Dim sum / food', english: 'HK-style café',               jyutping: 'caa4 caan1 teng1' },
  { id: 'food-dessert',      category: 'Dim sum / food', english: 'dessert',                       jyutping: 'tim4 ban2' },
  { id: 'food-dim-sum',      category: 'Dim sum / food', english: 'dim sum (the word itself)',     jyutping: 'dim2 sam1' },
  { id: 'food-har-gow',      category: 'Dim sum / food', english: 'shrimp dumpling (har gow)',     jyutping: 'haa1 gaau2' },
  { id: 'food-siu-mai',      category: 'Dim sum / food', english: 'pork dumpling (siu mai)',       jyutping: 'siu1 maai2' },
  { id: 'food-char-siu-bao', category: 'Dim sum / food', english: 'BBQ pork bun (char siu bao)',   jyutping: 'caa1 siu1 baau1' },
  { id: 'food-egg-tart',     category: 'Dim sum / food', english: 'egg tart',                      jyutping: 'daan6 taat1' },
];
