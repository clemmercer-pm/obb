/* OBB - Storytime content (POC, 2026-11-07). Hand-segmented words (not the
   general CC-Canto segmenter - that's for Translate & Learn's arbitrary text
   later). Same standing caveat as every other card: not yet verified against
   Isla or CC-CEDICT - the animal-species vocabulary in "Wild Cat! Wild Cat!"
   especially so. */

const STORYTIME_ITEMS = [
  {
    id: 'counting-rhyme',
    title: 'One, Two, Three, Four, Five (五指歌)',
    type: 'rhyme',
    source: 'Traditional Cantonese counting rhyme ("Five Fingers Song"), adapted into colloquial phrasing by Clem/Claude from the commonly-published written-Chinese text.',
    audio: 'audio-story/counting-rhyme.mp3',
    lines: [
      {
        characters: '一二三四五，上山打老虎。',
        jyutping: 'jat1 ji6 saam1 sei3 ng5, soeng5 saan1 daa2 lou5 fu2.',
        english: 'One two three four five, up the mountain to hit a tiger.',
        words: [
          { text: '一二三四五', jyutping: 'jat1 ji6 saam1 sei3 ng5', english: 'one two three four five' },
          { text: '上山', jyutping: 'soeng5 saan1', english: 'go up the mountain' },
          { text: '打', jyutping: 'daa2', english: 'to hit' },
          { text: '老虎', jyutping: 'lou5 fu2', english: 'tiger' },
        ],
      },
      {
        characters: '老虎冇打到，打到隻松鼠。',
        jyutping: 'lou5 fu2 mou5 daa2 dou2, daa2 dou2 zek3 cung4 syu2.',
        english: "Didn't manage to hit the tiger, hit a squirrel instead.",
        words: [
          { text: '老虎', jyutping: 'lou5 fu2', english: 'tiger' },
          { text: '冇打到', jyutping: 'mou5 daa2 dou2', english: "didn't manage to hit" },
          { text: '打到', jyutping: 'daa2 dou2', english: 'managed to hit' },
          { text: '隻', jyutping: 'zek3', english: '(classifier for animals)' },
          { text: '松鼠', jyutping: 'cung4 syu2', english: 'squirrel' },
        ],
      },
      {
        characters: '松鼠有幾多隻？等我數一數。',
        jyutping: 'cung4 syu2 jau5 gei2 do1 zek3? dang2 ngo5 sou2 jat1 sou2.',
        english: 'How many squirrels are there? Let me count.',
        words: [
          { text: '松鼠', jyutping: 'cung4 syu2', english: 'squirrel' },
          { text: '有幾多隻', jyutping: 'jau5 gei2 do1 zek3', english: 'how many are there' },
          { text: '等我', jyutping: 'dang2 ngo5', english: 'let me' },
          { text: '數一數', jyutping: 'sou2 jat1 sou2', english: 'count' },
        ],
      },
      {
        characters: '數嚟數去，一二三四五，五隻小松鼠。',
        jyutping: 'sou3 lei4 sou3 heoi3, jat1 ji6 saam1 sei3 ng5, ng5 zek3 siu2 cung4 syu2.',
        english: 'Counting back and forth, one two three four five, five little squirrels.',
        words: [
          { text: '數嚟數去', jyutping: 'sou3 lei4 sou3 heoi3', english: 'counting back and forth' },
          { text: '一二三四五', jyutping: 'jat1 ji6 saam1 sei3 ng5', english: 'one two three four five' },
          { text: '五隻', jyutping: 'ng5 zek3', english: 'five (animals)' },
          { text: '小松鼠', jyutping: 'siu2 cung4 syu2', english: 'little squirrels' },
        ],
      },
    ],
  },
  {
    id: 'wild-cat-wild-cat',
    title: 'Wild Cat! Wild Cat!',
    type: 'story',
    source: 'Adapted from "Wild Cat! Wild Cat!" by Sejal Mehta, illustrated by Rohan Chakravarty, published by Pratham Books (CC BY 4.0, storyweaver.org.in/en/stories/21618-wild-cat-wild-cat). Trimmed to the common-animal pages (tiger/lion/leopard) at Clem\'s request - the full story\'s more obscure wild-cat species names were a weaker vocabulary fit.',
    audio: 'audio-story/wild-cat-wild-cat.mp3',
    lines: [
      {
        characters: '有啲野貓有條紋，好似老虎！',
        jyutping: 'jau5 di1 je5 maau1 jau5 tiu4 man4, hou2 ci5 lou5 fu2!',
        english: 'Some wild cats have stripes. Like the tiger!',
        words: [
          { text: '有啲', jyutping: 'jau5 di1', english: 'some' },
          { text: '野貓', jyutping: 'je5 maau1', english: 'wild cat' },
          { text: '有', jyutping: 'jau5', english: 'have' },
          { text: '條紋', jyutping: 'tiu4 man4', english: 'stripes' },
          { text: '好似', jyutping: 'hou2 ci5', english: 'like / similar to' },
          { text: '老虎', jyutping: 'lou5 fu2', english: 'tiger' },
        ],
      },
      {
        characters: '有啲野貓有鬃毛，好似獅子！',
        jyutping: 'jau5 di1 je5 maau1 jau5 zung1 mou4, hou2 ci5 si1 zi2!',
        english: 'Some wild cats have manes. Like the lion!',
        words: [
          { text: '有啲野貓', jyutping: 'jau5 di1 je5 maau1', english: 'some wild cats' },
          { text: '有', jyutping: 'jau5', english: 'have' },
          { text: '鬃毛', jyutping: 'zung1 mou4', english: 'mane' },
          { text: '好似', jyutping: 'hou2 ci5', english: 'like / similar to' },
          { text: '獅子', jyutping: 'si1 zi2', english: 'lion' },
        ],
      },
      {
        characters: '有啲野貓有斑點，好似豹同豹貓！',
        jyutping: 'jau5 di1 je5 maau1 jau5 baan1 dim2, hou2 ci5 paau3 tung4 paau3 maau1!',
        english: 'Some wild cats have spots. Like the leopard and the leopard cat!',
        words: [
          { text: '有啲野貓', jyutping: 'jau5 di1 je5 maau1', english: 'some wild cats' },
          { text: '有', jyutping: 'jau5', english: 'have' },
          { text: '斑點', jyutping: 'baan1 dim2', english: 'spots' },
          { text: '好似', jyutping: 'hou2 ci5', english: 'like / similar to' },
          { text: '豹', jyutping: 'paau3', english: 'leopard' },
          { text: '同', jyutping: 'tung4', english: 'and' },
          { text: '豹貓', jyutping: 'paau3 maau1', english: 'leopard cat' },
        ],
      },
      {
        characters: '但係佢哋全部都係野貓！',
        jyutping: 'daan6 hai6 keoi5 dei6 cyun4 bou6 dou1 hai6 je5 maau1!',
        english: 'But they are all wild cats!',
        words: [
          { text: '但係', jyutping: 'daan6 hai6', english: 'but' },
          { text: '佢哋', jyutping: 'keoi5 dei6', english: 'they' },
          { text: '全部都係', jyutping: 'cyun4 bou6 dou1 hai6', english: 'are all' },
          { text: '野貓', jyutping: 'je5 maau1', english: 'wild cat' },
        ],
      },
    ],
  },
];
