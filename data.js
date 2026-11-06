/* OBB - real content set, Session 2 redo (2026-11-05).
   Sourced from cantonese/project/artefacts/content-*.md - every card here was
   reviewed with Clem turn by turn, not invented in one batch. Still NOT verified
   against a native speaker or CC-Canto - that's a separate, later step.
   "Days out with grandma" has no cards yet (its only entry moved to Family) -
   left empty on purpose rather than filled with placeholders. Characters are
   only populated for Family so far; other categories get them in a later pass. */

const CARDS = [
  // --- Household (room-tagged) ---
  { id: 'household-kitchen',     category: 'Household', room: 'Kitchen',        english: 'kitchen',      jyutping: 'cyu4 fong2',                        characters: '廚房' },
  { id: 'household-living-room', category: 'Household', room: 'Living room',    english: 'living room',  jyutping: 'haak3 teng1',                       characters: '客廳' },
  { id: 'household-dining-room', category: 'Household', room: 'Dining room',    english: 'dining room',  jyutping: 'faan6 teng1',                       characters: '飯廳' },
  { id: 'household-bedroom',     category: 'Household', room: 'Bedroom',        english: 'bedroom',      jyutping: 'seoi6 fong2',                       characters: '睡房' },
  { id: 'household-bathroom',    category: 'Household', room: 'Bathroom',       english: 'bathroom',     jyutping: 'juk6 sat1 / cung1 loeng4 fong2',    characters: '浴室 / 沖涼房' },
  { id: 'household-toilet',      category: 'Household', room: 'Bathroom',       english: 'toilet',       jyutping: 'sai2 sau2 gaan1 / ci3 so2',         characters: '洗手間 / 廁所' },
  { id: 'household-front-door',  category: 'Household', room: 'Other',          english: 'front door',   jyutping: 'cin4 mun2',                         characters: '前門' },
  { id: 'household-back-door',   category: 'Household', room: 'Garden/outside', english: 'back door',    jyutping: 'hau6 mun2',                         characters: '後門' },
  { id: 'household-stairs',      category: 'Household', room: 'Other',          english: 'stairs',       jyutping: 'lau4 tai1',                         characters: '樓梯' },
  { id: 'household-garage',      category: 'Household', room: 'Other',          english: 'garage',       jyutping: 'ce1 fong4',                         characters: '車房' },
  { id: 'household-balcony',     category: 'Household', room: 'Garden/outside', english: 'balcony',      jyutping: 'lou6 toi4',                         characters: '露台' },
  { id: 'household-garden',      category: 'Household', room: 'Garden/outside', english: 'garden',       jyutping: 'faa1 jyun2',                        characters: '花園' },
  { id: 'household-lift',        category: 'Household', room: 'Other',          english: 'lift',         jyutping: 'lip1 / sing1 gong3 gei1',           characters: '𨋢 / 升降機' },

  // --- Going into town ---
  { id: 'town-bus',          category: 'Going into town', english: 'bus',             jyutping: 'baa1 si2',       characters: '巴士' },
  { id: 'town-train',        category: 'Going into town', english: 'train',           jyutping: 'fo2 ce1',        characters: '火車' },
  { id: 'town-taxi',         category: 'Going into town', english: 'taxi',            jyutping: 'dik1 si2',       characters: '的士' },
  { id: 'town-bicycle',      category: 'Going into town', english: 'bicycle',         jyutping: 'daan1 ce1',      characters: '單車' },
  { id: 'town-convenience',  category: 'Going into town', english: 'convenience store', jyutping: 'bin6 lei6 dim3', characters: '便利店' },
  { id: 'town-bookshop',     category: 'Going into town', english: 'bookshop',        jyutping: 'syu1 dim3',      characters: '書店' },
  { id: 'town-park',         category: 'Going into town', english: 'park',            jyutping: 'gung1 jyun2',    characters: '公園' },
  { id: 'town-market',       category: 'Going into town', english: 'market',          jyutping: 'gaai1 si5',      characters: '街市' },
  { id: 'town-supermarket',  category: 'Going into town', english: 'supermarket',     jyutping: 'ciu1 kap1 si5 coeng4', characters: '超級市場' },
  { id: 'town-library',      category: 'Going into town', english: 'library',         jyutping: 'tou4 syu1 gun2', characters: '圖書館' },
  { id: 'town-police',       category: 'Going into town', english: 'police station',  jyutping: 'ging2 guk6',     characters: '警局' },
  { id: 'town-fire',         category: 'Going into town', english: 'fire station',    jyutping: 'siu1 fong4 guk6', characters: '消防局' },
  { id: 'town-pharmacy',     category: 'Going into town', english: 'pharmacy',        jyutping: 'joek6 fong4',    characters: '藥房' },

  // --- Family (audio generated 2026-11-05, zh-HK-HiuMaanNeural) ---
  { id: 'family-mum',          category: 'Family', english: 'mum',                          jyutping: 'maa4 maa1',   characters: '媽媽', audio: 'audio/family-mum.mp3' },
  { id: 'family-dad',          category: 'Family', english: 'dad',                          jyutping: 'baa4 baa1',   characters: '爸爸', audio: 'audio/family-dad.mp3' },
  { id: 'family-grandma-mat',  category: 'Family', english: "grandma (mum's mum)",          jyutping: 'po4 po2',     characters: '婆婆', audio: 'audio/family-grandma-mat.mp3' },
  { id: 'family-grandpa-mat',  category: 'Family', english: "grandpa (mum's dad)",          jyutping: 'gung1 gung1', characters: '公公', audio: 'audio/family-grandpa-mat.mp3' },
  { id: 'family-grandma-pat',  category: 'Family', english: "grandma (dad's mum)",          jyutping: 'maa4 maa4',   characters: '嫲嫲', audio: 'audio/family-grandma-pat.mp3' },
  { id: 'family-grandpa-pat',  category: 'Family', english: "grandpa (dad's dad)",          jyutping: 'je4 je4',     characters: '爺爺', audio: 'audio/family-grandpa-pat.mp3' },
  { id: 'family-uncle-older',  category: 'Family', english: "uncle (dad's older brother)",  jyutping: 'baak3 baak3', characters: '伯伯', audio: 'audio/family-uncle-older.mp3' },
  { id: 'family-aunt-by-marriage-1', category: 'Family', english: 'aunt (his wife)',        jyutping: 'baak3 mou5',  characters: '伯母', audio: 'audio/family-aunt-by-marriage-1.mp3' },
  { id: 'family-aunt-younger', category: 'Family', english: "aunt (dad's younger sister)",  jyutping: 'gu1 ze1',     characters: '姑姐', audio: 'audio/family-aunt-younger.mp3' },
  { id: 'family-uncle-by-marriage-1', category: 'Family', english: 'uncle (her husband)',   jyutping: 'gu1 zoeng6',  characters: '姑丈', audio: 'audio/family-uncle-by-marriage-1.mp3' },
  { id: 'family-uncle-maternal', category: 'Family', english: "uncle (mum's brother)",      jyutping: 'kau5 fu6',    characters: '舅父', audio: 'audio/family-uncle-maternal.mp3' },
  { id: 'family-aunt-by-marriage-2', category: 'Family', english: 'aunt (his wife)',        jyutping: 'kau5 mou5',   characters: '舅母', audio: 'audio/family-aunt-by-marriage-2.mp3' },

  // --- Talking to baby ---
  { id: 'baby-milk',   category: 'Talking to baby', english: 'milk', jyutping: 'naai5',          characters: '奶' },
  { id: 'baby-bath',   category: 'Talking to baby', english: 'bath', jyutping: 'cung1 loeng4',   characters: '沖涼' },
  { id: 'colour-black',  category: 'Talking to baby', english: 'black',  jyutping: 'hak1 sik1',  characters: '黑色' },
  { id: 'colour-white',  category: 'Talking to baby', english: 'white',  jyutping: 'baak6 sik1', characters: '白色' },
  { id: 'colour-red',    category: 'Talking to baby', english: 'red',    jyutping: 'hung4 sik1', characters: '紅色' },
  { id: 'colour-orange', category: 'Talking to baby', english: 'orange', jyutping: 'caang2 sik1', characters: '橙色' },
  { id: 'colour-yellow', category: 'Talking to baby', english: 'yellow', jyutping: 'wong4 sik1', characters: '黃色' },
  { id: 'colour-green',  category: 'Talking to baby', english: 'green',  jyutping: 'luk6 sik1',  characters: '綠色' },
  { id: 'colour-blue',   category: 'Talking to baby', english: 'blue',   jyutping: 'laam4 sik1', characters: '藍色' },
  { id: 'colour-purple', category: 'Talking to baby', english: 'purple', jyutping: 'zi2 sik1',   characters: '紫色' },
  { id: 'colour-brown',  category: 'Talking to baby', english: 'brown',  jyutping: 'gaa3 fe1 sik1', characters: '咖啡色' },

  // --- Dim sum / food ---
  { id: 'food-congee',       category: 'Dim sum / food', english: 'congee',                       jyutping: 'zuk1',           characters: '粥' },
  { id: 'food-cheung-fun',   category: 'Dim sum / food', english: 'rice noodle rolls (cheung fun)', jyutping: 'coeng2 fan2',  characters: '腸粉' },
  { id: 'food-wonton',       category: 'Dim sum / food', english: 'wonton noodles',               jyutping: 'wan4 tan1 min6', characters: '雲吞麵' },
  { id: 'food-zung',         category: 'Dim sum / food', english: 'sticky rice dumpling',          jyutping: 'zung2',          characters: '粽' },
  { id: 'food-milk-tea',     category: 'Dim sum / food', english: 'milk tea',                      jyutping: 'naai5 caa4',     characters: '奶茶' },
  { id: 'food-cha-chaan-teng', category: 'Dim sum / food', english: 'HK-style café',               jyutping: 'caa4 caan1 teng1', characters: '茶餐廳' },
  { id: 'food-dessert',      category: 'Dim sum / food', english: 'dessert',                       jyutping: 'tim4 ban2',      characters: '甜品' },
  { id: 'food-dim-sum',      category: 'Dim sum / food', english: 'dim sum (the word itself)',     jyutping: 'dim2 sam1',      characters: '點心' },
  { id: 'food-har-gow',      category: 'Dim sum / food', english: 'shrimp dumpling (har gow)',     jyutping: 'haa1 gaau2',     characters: '蝦餃' },
  { id: 'food-siu-mai',      category: 'Dim sum / food', english: 'pork dumpling (siu mai)',       jyutping: 'siu1 maai2',     characters: '燒賣' },
  { id: 'food-char-siu-bao', category: 'Dim sum / food', english: 'BBQ pork bun (char siu bao)',   jyutping: 'caa1 siu1 baau1', characters: '叉燒包' },
  { id: 'food-egg-tart',     category: 'Dim sum / food', english: 'egg tart',                      jyutping: 'daan6 taat1',    characters: '蛋撻' },
];
