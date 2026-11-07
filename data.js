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

  // --- Baby fundamentals (renamed from "Talking to baby" 2026-11-07, expanded per MacArthur-Bates CDI categories) ---
  { id: 'baby-milk',   category: 'Baby fundamentals', english: 'milk', jyutping: 'naai5',          characters: '奶' },
  { id: 'baby-bath',   category: 'Baby fundamentals', english: 'bath', jyutping: 'cung1 loeng4',   characters: '沖涼' },
  { id: 'baby-eat',    category: 'Baby fundamentals', english: 'eat',  jyutping: 'sik6 faan6',     characters: '食飯' },
  { id: 'baby-sleep',  category: 'Baby fundamentals', english: 'sleep', jyutping: 'fan3 gaau3',    characters: '瞓覺' },
  { id: 'colour-black',  category: 'Baby fundamentals', english: 'black',  jyutping: 'hak1 sik1',  characters: '黑色' },
  { id: 'colour-white',  category: 'Baby fundamentals', english: 'white',  jyutping: 'baak6 sik1', characters: '白色' },
  { id: 'colour-red',    category: 'Baby fundamentals', english: 'red',    jyutping: 'hung4 sik1', characters: '紅色' },
  { id: 'colour-orange', category: 'Baby fundamentals', english: 'orange', jyutping: 'caang2 sik1', characters: '橙色' },
  { id: 'colour-yellow', category: 'Baby fundamentals', english: 'yellow', jyutping: 'wong4 sik1', characters: '黃色' },
  { id: 'colour-green',  category: 'Baby fundamentals', english: 'green',  jyutping: 'luk6 sik1',  characters: '綠色' },
  { id: 'colour-blue',   category: 'Baby fundamentals', english: 'blue',   jyutping: 'laam4 sik1', characters: '藍色' },
  { id: 'colour-purple', category: 'Baby fundamentals', english: 'purple', jyutping: 'zi2 sik1',   characters: '紫色' },
  { id: 'colour-brown',  category: 'Baby fundamentals', english: 'brown',  jyutping: 'gaa3 fe1 sik1', characters: '咖啡色' },

  // --- Baby fundamentals: numbers (CSV) ---
  { id: 'num-1',  category: 'Baby fundamentals', english: 'one',   jyutping: 'jat1',  characters: '一' },
  { id: 'num-2',  category: 'Baby fundamentals', english: 'two',   jyutping: 'ji6',   characters: '二' },
  { id: 'num-3',  category: 'Baby fundamentals', english: 'three', jyutping: 'saam1', characters: '三' },
  { id: 'num-4',  category: 'Baby fundamentals', english: 'four',  jyutping: 'sei3',  characters: '四' },
  { id: 'num-5',  category: 'Baby fundamentals', english: 'five',  jyutping: 'ng5',   characters: '五' },
  { id: 'num-6',  category: 'Baby fundamentals', english: 'six',   jyutping: 'luk6',  characters: '六' },
  { id: 'num-7',  category: 'Baby fundamentals', english: 'seven', jyutping: 'cat1',  characters: '七' },
  { id: 'num-8',  category: 'Baby fundamentals', english: 'eight', jyutping: 'baat3', characters: '八' },
  { id: 'num-9',  category: 'Baby fundamentals', english: 'nine',  jyutping: 'gau2',  characters: '九' },
  { id: 'num-10', category: 'Baby fundamentals', english: 'ten',   jyutping: 'sap6',  characters: '十' },

  // --- Baby fundamentals: directions/spatial (mostly CSV) ---
  { id: 'dir-up',    category: 'Baby fundamentals', english: 'up',           jyutping: 'soeng6 min6', characters: '上便' },
  { id: 'dir-down',  category: 'Baby fundamentals', english: 'down',         jyutping: 'haa6 min6',   characters: '下便' },
  { id: 'dir-in',    category: 'Baby fundamentals', english: 'in / inside',  jyutping: 'leoi5 min6',  characters: '入便' },
  { id: 'dir-out',   category: 'Baby fundamentals', english: 'out / outside', jyutping: 'ngoi5 min6', characters: '出便' },
  { id: 'dir-here',  category: 'Baby fundamentals', english: 'here',         jyutping: 'ni1 dou6',    characters: '呢度' },
  { id: 'dir-there', category: 'Baby fundamentals', english: 'there',       jyutping: 'go2 dou6',    characters: '嗰度' },

  // --- Baby fundamentals: action words (CSV) ---
  { id: 'action-come', category: 'Baby fundamentals', english: 'come', jyutping: 'lei4',    characters: '嚟' },
  { id: 'action-go',   category: 'Baby fundamentals', english: 'go',   jyutping: 'heoi3',   characters: '去' },
  { id: 'action-stop', category: 'Baby fundamentals', english: 'stop', jyutping: 'ting4',   characters: '停' },
  { id: 'action-give', category: 'Baby fundamentals', english: 'give', jyutping: 'bei2',    characters: '俾' },
  { id: 'action-more', category: 'Baby fundamentals', english: 'more', jyutping: 'do1 di1', characters: '多啲' },

  // --- Baby fundamentals: social/routine words (fresh) ---
  { id: 'social-hello',  category: 'Baby fundamentals', english: 'hello',  jyutping: 'nei5 hou2',  characters: '你好' },
  { id: 'social-byebye', category: 'Baby fundamentals', english: 'bye-bye', jyutping: 'baai1 baai3', characters: '拜拜' },
  { id: 'social-mgoi',   category: 'Baby fundamentals', english: 'please / thanks (for a favour)', jyutping: 'm4 goi1', characters: '唔該' },
  { id: 'social-dohze',  category: 'Baby fundamentals', english: 'thank you (for a gift)', jyutping: 'do1 ze6', characters: '多謝' },
  { id: 'social-yes',    category: 'Baby fundamentals', english: 'yes',    jyutping: 'hai6',    characters: '係' },
  { id: 'social-no',     category: 'Baby fundamentals', english: "no / don't", jyutping: 'm4 hou2', characters: '唔好' },

  // --- Baby fundamentals: descriptive words (CSV) ---
  { id: 'desc-big',    category: 'Baby fundamentals', english: 'big',    jyutping: 'daai6',    characters: '大' },
  { id: 'desc-small',  category: 'Baby fundamentals', english: 'small',  jyutping: 'sai3',     characters: '細' },
  { id: 'desc-hot',    category: 'Baby fundamentals', english: 'hot',    jyutping: 'jit6',     characters: '熱' },
  { id: 'desc-cold',   category: 'Baby fundamentals', english: 'cold',   jyutping: 'dung3',    characters: '凍' },
  { id: 'desc-hungry', category: 'Baby fundamentals', english: 'hungry', jyutping: 'tou5 ngo6', characters: '肚餓' },
  { id: 'desc-tired',  category: 'Baby fundamentals', english: 'tired',  jyutping: 'gui6',     characters: '攰' },

  // --- Baby fundamentals: body parts (CSV, clean subset) ---
  { id: 'body-head',  category: 'Baby fundamentals', english: 'head',  jyutping: 'tau4',        characters: '頭' },
  { id: 'body-hand',  category: 'Baby fundamentals', english: 'hand',  jyutping: 'sau2',        characters: '手' },
  { id: 'body-foot',  category: 'Baby fundamentals', english: 'foot',  jyutping: 'geot3',       characters: '腳' },
  { id: 'body-eyes',  category: 'Baby fundamentals', english: 'eyes',  jyutping: 'ngaan5 zing1', characters: '眼睛' },
  { id: 'body-nose',  category: 'Baby fundamentals', english: 'nose',  jyutping: 'bei6 go1',    characters: '鼻哥' },
  { id: 'body-mouth', category: 'Baby fundamentals', english: 'mouth', jyutping: 'hau2',        characters: '口' },
  { id: 'body-ears',  category: 'Baby fundamentals', english: 'ears',  jyutping: 'ji3 zai2',    characters: '耳仔' },
  { id: 'body-tummy', category: 'Baby fundamentals', english: 'tummy', jyutping: 'tou5',        characters: '肚' },

  // --- Baby fundamentals: animals (fresh, not in CSV at all) ---
  { id: 'animal-dog',    category: 'Baby fundamentals', english: 'dog (homophone of "nine" - 九 gau2, different character)', jyutping: 'gau2',   characters: '狗' },
  { id: 'animal-cat',    category: 'Baby fundamentals', english: 'cat',    jyutping: 'maau1',    characters: '貓' },
  { id: 'animal-bird',   category: 'Baby fundamentals', english: 'bird',   jyutping: 'zoek2 zai2', characters: '雀仔' },
  { id: 'animal-fish',   category: 'Baby fundamentals', english: 'fish',   jyutping: 'jyu2',     characters: '魚' },
  { id: 'animal-duck',   category: 'Baby fundamentals', english: 'duck',   jyutping: 'aap2',     characters: '鴨' },
  { id: 'animal-cow',    category: 'Baby fundamentals', english: 'cow',    jyutping: 'ngau4',    characters: '牛' },
  { id: 'animal-pig',    category: 'Baby fundamentals', english: 'pig',    jyutping: 'zyu1',     characters: '豬' },
  { id: 'animal-horse',  category: 'Baby fundamentals', english: 'horse',  jyutping: 'maa5',     characters: '馬' },
  { id: 'animal-sheep',  category: 'Baby fundamentals', english: 'sheep',  jyutping: 'joeng4',   characters: '羊' },
  { id: 'animal-rabbit', category: 'Baby fundamentals', english: 'rabbit', jyutping: 'tou3',     characters: '兔' },

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
