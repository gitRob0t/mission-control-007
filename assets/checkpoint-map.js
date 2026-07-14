(() => {
  const maps = {
    "past-never-dies": {
      "completionist-the-past-never-dies":"02 — Arriving at Aleph → 07 — Find 009",
      "pacifist-the-past-never-dies":"03 — Black Market; 05 — Infiltration; 06 — Aleph's Port",
      "ghost-the-past-never-dies":"05 — Infiltration; 07 — Find 009",
      "assault-the-past-never-dies":"03 — Black Market; 07 — Find 009",
      "fall-guy":"03 — Black Market",
      "bottled-it":"03 — Black Market",
      "hammer-time":"03 — Black Market",
      "silent-line":"05 — Infiltration",
      "soldier-boy":"05 — Infiltration",
      "art-lover":"05 — Infiltration",
      "sightseeing":"06 — Aleph's Port",
      "secure-transaction":"03 — Black Market",
      "shoot-em-up":"03 — Black Market",
      "gunslinger":"03 — Black Market",
      "cupped":"03 — Black Market",
      "show-me-the-money":"03 — Black Market",
      "tech-support":"03 — Black Market",
      "easy-does-it":"06 — Aleph's Port",
      "no-trouble-at-all":"02 — Arriving at Aleph",
      "silence-is-violence":"02 — Arriving at Aleph",
      "the-big-bang":"06 — Aleph's Port",
      "laser-show":"07 — Find 009",
      "wheels-up":"06 — Aleph's Port",
      "make-them-count":"07 — Find 009"
    },
    "knightfall": {
      "completionist-knightfall":"Chapter Start → Cargo Check",
      "pacifist-knightfall":"Executive Floor 2; Data Center",
      "ghost-knightfall":"Executive Floor 2; Data Center",
      "assault-knightfall":"Executive Floor 2; Perch Run; Data Center",
      "exclusive-access":"Executive Floor 1 — Finch's Office",
      "high-ground":"Executive Floor 2 — Vent Route",
      "tactical-pause":"Executive Floor 1 — Meet Greenway",
      "discretion-advised":"Executive Floor 2 — Meeting Area",
      "hand-of-god":"Executive Floor 2 — Meeting Area",
      "makeover":"Executive Floor 2 — Meeting Room",
      "blackball":"Executive Floor 2 — Pool Table",
      "crackerjack":"Executive Floor 2 — Safe Room",
      "epic-fail":"Executive Floor 2 — Safe Room",
      "all-the-time-in-the-world":"Run to the Perch",
      "after-hours":"Data Center Entrance",
      "underdressed":"Data Center Entrance",
      "it-specialist":"Data Center — Server Floor",
      "service-update":"Data Center — Server Floor",
      "server-crash":"Data Center — Server Floor",
      "closing-time":"Escape from the Perch",
      "blast-of-air":"Escape from the Perch",
      "gun-nut":"Escape from the Perch",
      "mightier-than-the-sword":"Escape from the Perch",
      "moving-target":"Cargo Check Room"
    },
    "time-to-die": {
      "completionist-time-to-die":"Resort Arrival → Quarry Finale",
      "pacifist-time-to-die":"Wine Cellar; Quarry Approach",
      "ghost-time-to-die":"Hung Villa; Emperor Villa; Quarry Approach",
      "assault-time-to-die":"Resort Night; Quarry Blitz",
      "pool-inspector":"Serenity Space — Pool Entrance",
      "yogi":"Serenity Space — Yoga Area",
      "zen-no-more":"Tranquility Cave",
      "bathroom-bomb":"Hung Villa — Roof Access",
      "the-quiet-man":"Hung Villa Entrance",
      "party-crasher":"Ellis' Party — Resort Promenade",
      "blanc-the-brut":"Velvet Lantern Bar",
      "key-master":"Ocean View Bar — Storage Room",
      "give-me-a-minute":"Resort Night — Lorca",
      "silent-night":"Resort Night",
      "panther":"Emperor Villa Approach",
      "phantom":"Emperor Villa — Wine Cellar Route",
      "unlicensed-to-kill":"Wine Cellar — Rescue Ellis",
      "wraith":"Quarry Approach — Reach Lorca",
      "two-birds-one-stone":"Quarry Shootout",
      "thief":"Quarry Shootout",
      "who-s-counting":"Quarry Blitz",
      "marble-madness":"Quarry — Marble Yard",
      "you-talk-too-much":"Quarry — Mining Truck",
      "lights-out":"Quarry — Power Control"
    },
    "for-england": {
      "completionist-for-england":"Null Space → Damien Showdown",
      "pacifist-for-england":"Null Space; Lift Showdown",
      "ghost-for-england":"Security Offices; Q-Lab",
      "assault-for-england":"Operations Room; Q-Lab; Sniper Gallery",
      "lock-stock-and-1-trapped-hostile":"Null Space — Holding Cells",
      "the-great-escape":"Null Space",
      "all-smoke-and-mirrors":"Security Offices — Rafters",
      "apex-predator":"Security Offices — Security Room",
      "reduce-your-screen-time":"Operations Room",
      "untouchable":"Sniper Gallery",
      "bring-a-fist-to-a-gun-fight":"Lift Showdown",
      "be-q-uiet":"Q-Lab Entrance",
      "technomage":"Q-Lab — Flash Mine Section",
      "astonishing":"Q-Lab Combat Section",
      "fire-in-the-hole":"Damien Showdown — Phase One",
      "turret-aficionado":"Damien Showdown — First Turret"
    }
  };

  for (const chapter of window.__GAME_DATA__.missions) {
    const chapterMap = maps[chapter.id];
    if (!chapterMap) continue;
    for (const challenge of chapter.challenges) {
      if (chapterMap[challenge.id]) challenge.checkpoint = chapterMap[challenge.id];
    }
  }
})();
