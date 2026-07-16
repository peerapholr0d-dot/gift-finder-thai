const questions = [
  {
    key: "recipient",
    kicker: "เริ่มจากคนรับก่อน",
    title: "คุณกำลังหาของขวัญให้ใคร?",
    help: "เลือกคำตอบที่ใกล้ที่สุด ไม่ต้องคิดเยอะ",
    options: [
      { value: "friend", icon: "🤝", label: "เพื่อน", note: "เพื่อนสนิท หรือเพื่อนที่อยากสนิท" },
      { value: "partner", icon: "💞", label: "แฟน / คนพิเศษ", note: "คนที่พลาดแล้วเรื่องยาว" },
      { value: "family", icon: "🏠", label: "คนในครอบครัว", note: "พ่อ แม่ พี่ น้อง และญาติ" },
      { value: "coworker", icon: "💼", label: "เพื่อนร่วมงาน", note: "รวมถึงหัวหน้าที่เราเคารพ" },
      { value: "kid", icon: "🛝", label: "เด็ก ๆ", note: "ลูก หลาน หรือเจ้าตัวเล็ก" },
      { value: "self", icon: "✨", label: "ตัวเอง", note: "เพราะเราก็สมควรได้ของดี ๆ" },
    ],
  },
  {
    key: "gender",
    kicker: "ต่อด้วยเพศของคนรับ",
    title: "คนรับเป็นเพศไหน?",
    help: "ใช้ช่วยคัดของให้เข้าทางขึ้น ถ้าไม่แน่ใจเลือกไม่จำกัดเพศได้",
    options: [
      { value: "female", icon: "♀", label: "ผู้หญิง", note: "ของขวัญโทนอ่อนหวาน ดูแลตัวเอง หรือของน่ารัก" },
      { value: "male", icon: "♂", label: "ผู้ชาย", note: "ของใช้จริง เสื้อผ้า แกดเจ็ต หรือของเรียบเท่" },
      { value: "unisex", icon: "∞", label: "ไม่จำกัดเพศ", note: "เน้นรสนิยมและโอกาสมากกว่าเพศ" },
    ],
  },
  {
    key: "age",
    type: "slider",
    kicker: "ช่วงอายุมีผลมาก",
    title: "คนรับอายุประมาณเท่าไหร่?",
    help: "เลื่อนเลือกอายุคร่าว ๆ ก็พอ ระบบจะใช้เป็นน้ำหนักในการเลือกสินค้า",
    min: 1,
    max: 75,
    defaultValue: 25,
    marks: [
      { value: 8, label: "เด็ก" },
      { value: 18, label: "วัยรุ่น" },
      { value: 30, label: "วัยทำงาน" },
      { value: 50, label: "ผู้ใหญ่" },
      { value: 65, label: "สูงวัย" },
    ],
  },
  {
    key: "occasion",
    kicker: "มีเหตุให้ต้องเปย์",
    title: "ให้ในโอกาสอะไร?",
    help: "โอกาสต่างกัน ระดับความจริงจังก็ต่างกัน",
    options: [
      { value: "birthday", icon: "🎂", label: "วันเกิด", note: "คลาสสิก แต่ห้ามซ้ำปีที่แล้ว" },
      { value: "celebrate", icon: "🥂", label: "ยินดีกับความสำเร็จ", note: "เรียนจบ งานใหม่ เลื่อนตำแหน่ง" },
      { value: "festival", icon: "🎊", label: "เทศกาล / จับฉลาก", note: "ปีใหม่ คริสต์มาส หรือปาร์ตี้" },
      { value: "anniversary", icon: "💌", label: "วันครบรอบ", note: "ต้องมีความหมายขึ้นมาอีกนิด" },
      { value: "thankyou", icon: "🙏", label: "ขอบคุณ / ฝากเนื้อฝากตัว", note: "ให้ผู้ใหญ่ ลูกค้า หรือเจ้าบ้าน" },
      { value: "justbecause", icon: "🌤️", label: "ไม่มีโอกาส แค่อยากให้", note: "น่ารักที่สุดแล้วแบบนี้" },
    ],
  },
  {
    key: "personality",
    multiSelect: true,
    kicker: "เจาะความสนใจให้ละเอียดขึ้น",
    title: "เขาสนใจอะไรบ้าง?",
    help: "เลือกได้หลายข้อ ยิ่งใกล้ตัวเขา ระบบยิ่งคัดของขวัญได้แม่นขึ้น",
    options: [
      { value: "football", icon: "⚽", label: "ฟุตบอล", note: "ทีมรัก แมตช์ดัง ของแฟนบอล" },
      { value: "games", icon: "🎮", label: "เกม", note: "เกมเมอร์ ของเล่นตั้งโต๊ะ เกมปาร์ตี้" },
      { value: "makeup", icon: "💄", label: "เครื่องสำอาง", note: "เมคอัพ บิวตี้ ของแต่งหน้า" },
      { value: "skincare", icon: "🧴", label: "สกินแคร์", note: "ดูแลผิว ดูแลตัวเอง" },
      { value: "luxury_bags", icon: "👜", label: "กระเป๋าแบรนด์เนม", note: "แฟชั่นพรีเมียม ของดูแพง" },
      { value: "fashion", icon: "👕", label: "แฟชั่น", note: "เสื้อผ้า สไตล์ แต่งตัว" },
      { value: "sneakers", icon: "👟", label: "รองเท้า", note: "รองเท้าแฟชั่น ใส่สบาย" },
      { value: "watches", icon: "⌚", label: "นาฬิกา", note: "นาฬิกา สมาร์ตวอทช์ เครื่องประดับ" },
      { value: "jewelry", icon: "💍", label: "เครื่องประดับ", note: "สร้อย แหวน กำไล ของคู่" },
      { value: "plush", icon: "🧸", label: "ตุ๊กตา", note: "นุ่ม น่ารัก กอดได้" },
      { value: "sanrio", icon: "🎀", label: "Sanrio / Hello Kitty", note: "คาแรกเตอร์น่ารัก" },
      { value: "moomin", icon: "☁️", label: "Moomin", note: "มูมิน ของนุ่ม ๆ โทนละมุน" },
      { value: "anime", icon: "✨", label: "อนิเมะ", note: "ของสะสม คาแรกเตอร์ ญี่ปุ่น" },
      { value: "naruto", icon: "🍥", label: "นารูโตะ", note: "นินจา อนิเมะ ของแฟนด้อม" },
      { value: "one_piece", icon: "🏴‍☠️", label: "วันพีช", note: "โจรสลัด อนิเมะ ของสะสม" },
      { value: "marvel", icon: "🦾", label: "Marvel / Iron Man", note: "ซูเปอร์ฮีโร่ ของตั้งโต๊ะ" },
      { value: "music", icon: "🎵", label: "เพลง", note: "เพลงโปรด ความทรงจำ เพลย์ลิสต์" },
      { value: "instruments", icon: "🎸", label: "ดนตรี", note: "เล่นดนตรี ฟังเพลงจริงจัง" },
      { value: "movies", icon: "🎬", label: "หนัง / ซีรีส์", note: "ดูหนัง บรรยากาศห้อง" },
      { value: "photography", icon: "📷", label: "ถ่ายรูป", note: "กล้อง รูป ความทรงจำ" },
      { value: "tech", icon: "💻", label: "เทคโนโลยี", note: "แกดเจ็ต อุปกรณ์ไอที" },
      { value: "gadgets", icon: "🔌", label: "แกดเจ็ต", note: "ของเล่นไอที ของใช้บนโต๊ะ" },
      { value: "home_decor", icon: "🏠", label: "แต่งห้อง", note: "ไฟ โต๊ะ ห้องนอน มุมทำงาน" },
      { value: "aroma", icon: "🕯️", label: "กลิ่นหอม", note: "เทียนหอม ดิฟฟิวเซอร์ อโรมา" },
      { value: "coffee", icon: "☕", label: "กาแฟ", note: "แก้วน้ำ คาเฟ่ ของใช้ประจำวัน" },
      { value: "tea", icon: "🍵", label: "ชา", note: "ชา ชุดของขวัญ เครื่องดื่ม" },
      { value: "snacks", icon: "🍪", label: "ขนม", note: "ของกิน กล่องขนม ฝากได้" },
      { value: "cooking", icon: "🍳", label: "ทำอาหาร", note: "ครัว อุปกรณ์ ใช้จริง" },
      { value: "fitness", icon: "🏋️", label: "ฟิตเนส", note: "ออกกำลังกาย สุขภาพ" },
      { value: "travel", icon: "🧳", label: "ท่องเที่ยว", note: "เดินทาง จัดกระเป๋า ของพกพา" },
      { value: "books", icon: "📚", label: "หนังสือ", note: "อ่านหนังสือ มุมสงบ" },
      { value: "diy", icon: "🧩", label: "DIY / งานคราฟต์", note: "ประกอบเอง งานมือ" },
      { value: "art", icon: "🎨", label: "ศิลปะ / ดีไซน์", note: "ของสวย งานครีเอทีฟ" },
      { value: "plants", icon: "🪴", label: "ต้นไม้", note: "ปลูกต้นไม้ แต่งโต๊ะ" },
      { value: "pets", icon: "🐾", label: "สัตว์เลี้ยง", note: "ทาสหมาแมว ของน่ารัก" },
      { value: "stationery", icon: "✏️", label: "เครื่องเขียน", note: "ของจุกจิก โต๊ะทำงาน" },
      { value: "wellness", icon: "🌿", label: "สุขภาพใจ", note: "พักผ่อน คลายเครียด ดูแลตัวเอง" },
      { value: "personalized", icon: "📝", label: "ของสั่งทำ", note: "สลักชื่อ รูปคู่ ข้อความเฉพาะ" },
    ],
  },
  {
    key: "budget",
    kicker: "คำถามสำคัญที่สุด",
    title: "งบประมาณเท่าไหร่ดี?",
    help: "เราไม่ตัดสิน งบไหนก็มีของที่ดูดีได้",
    options: [
      { value: "small", icon: "🪙", label: "ไม่เกิน 500 บาท", note: "เล็กแต่เลือกมาดี" },
      { value: "medium", icon: "💵", label: "500 – 1,500 บาท", note: "ช่วงปลอดภัย ให้ได้หลายโอกาส" },
      { value: "large", icon: "💳", label: "1,500 – 3,000 บาท", note: "จัดเต็มแบบยังมีสติ" },
      { value: "premium", icon: "💎", label: "3,000 บาทขึ้นไป", note: "คนนี้สำคัญจริง ยอมแล้ว" },
    ],
  },
];

const gifts = typeof productCatalog !== "undefined" && Array.isArray(productCatalog) ? productCatalog : [];

const productInterestMap = {
  "tea-gift-set": ["tea", "wellness", "aroma", "home_decor"],
  "premium-snack-box": ["snacks", "foodie"],
  "body-care-set": ["skincare", "wellness"],
  "business-gift-set": ["fashion", "practical", "stationery"],
  "aroma-diffuser": ["aroma", "home_decor", "wellness"],
  "board-game": ["games", "home_decor"],
  "wireless-earbuds": ["music", "tech", "gadgets"],
  "instant-camera": ["photography", "travel", "art"],
  "travel-organizer": ["travel", "fashion", "practical"],
  "plant-pot": ["plants", "home_decor"],
  "baby-gift-set": ["kids", "plush", "wellness"],
  cookware: ["cooking", "home_decor", "practical"],
  "mens-loafer-shoes": ["fashion", "sneakers"],
  "mens-bomber-jacket": ["fashion"],
  "cheese-mini-gift": ["snacks", "stationery"],
  "goose-plush-pillow": ["plush", "home_decor", "wellness"],
  "custom-music-plaque-nfc": ["music", "personalized", "home_decor"],
  "crochet-sunflower-bouquet": ["diy", "art", "home_decor"],
  "mens-wallet-belt-gift-set": ["fashion", "luxury_bags", "practical"],
  "playboy-womens-watch-set": ["watches", "jewelry", "fashion"],
  "duck-night-light": ["home_decor", "plush", "wellness"],
  "aurora-gold-bracelet": ["jewelry", "luxury_bags"],
  "birthday-candle-jewelry-box": ["jewelry", "home_decor", "personalized"],
  "moomin-plush-pillow": ["moomin", "plush", "anime"],
  "liverpool-man-u-mug": ["football", "coffee"],
  "shy-boy-table-lamp": ["home_decor", "gadgets", "tech"],
  "menspe-crossbody-bag": ["fashion", "luxury_bags", "travel"],
  "civago-lucky-puppy-tumbler": ["coffee", "pets", "fashion"],
  "eloop-magsafe-powerbank": ["tech", "gadgets", "travel"],
  "samurai-umbrella": ["anime", "naruto", "one_piece", "travel"],
  "instax-mini-evo-camera": ["photography", "tech", "travel"],
  "aroma-humidifier": ["aroma", "home_decor", "wellness"],
  "portable-mini-projector": ["movies", "tech", "gadgets", "home_decor"],
  "kai-hair-clipper": ["wellness", "practical", "gadgets"],
  "twilight-library-diy-book-nook": ["books", "diy", "home_decor", "art"],
  "enchen-shaver-gift-set": ["gadgets", "wellness", "practical"],
  "thai-funny-tshirt": ["fashion", "anime"],
  "enter-key-stress-pillow": ["games", "tech", "wellness"],
  "hello-kitty-ceramic-cup": ["sanrio", "coffee", "home_decor"],
  "personalized-steel-bracelet": ["jewelry", "personalized", "fashion"],
  "huawei-watch-fit-5": ["watches", "fitness", "tech"],
  "gq-running-shorts": ["fitness", "fashion"],
  "iron-man-arc-reactor-lamp": ["marvel", "tech", "gadgets", "home_decor"],
  "scented-candle-gift-box": ["aroma", "home_decor", "wellness"],
  "soft-kettlebell": ["fitness", "wellness"],
};

const answers = {};
let currentStep = 0;
let resultOffset = 0;
const resultsPerPage = 6;

const hero = document.getElementById("hero");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const startButton = document.getElementById("startButton");
const restartHeader = document.getElementById("restartHeader");
const backButton = document.getElementById("backButton");
const skipButton = document.getElementById("skipButton");
const restartButton = document.getElementById("restartButton");
const shuffleButton = document.getElementById("shuffleButton");
const optionsGrid = document.getElementById("optionsGrid");

function showOnly(section) {
  [hero, quiz, results].forEach((item) => item.classList.toggle("hidden", item !== section));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentStep];
  const percent = Math.round(((currentStep + 1) / questions.length) * 100);

  document.getElementById("stepLabel").textContent = `คำถาม ${currentStep + 1} จาก ${questions.length}`;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("questionKicker").textContent = question.kicker;
  document.getElementById("questionTitle").textContent = question.title;
  document.getElementById("questionHelp").textContent = question.help;
  backButton.style.visibility = currentStep === 0 ? "hidden" : "visible";

  if (question.type === "slider") {
    renderSliderQuestion(question);
  } else {
    renderChoiceQuestion(question);
  }
}

function renderChoiceQuestion(question) {
  const selectedValues = Array.isArray(answers[question.key]) ? answers[question.key] : [];
  optionsGrid.className = question.multiSelect ? "options-grid compact-options" : "options-grid";
  optionsGrid.innerHTML = question.options
    .map(
      (option) => `
        <button class="option-button ${question.multiSelect ? "compact-option" : ""} ${
        question.multiSelect
          ? selectedValues.includes(option.value)
            ? "selected"
            : ""
          : answers[question.key] === option.value
            ? "selected"
            : ""
      }"
          type="button" data-value="${option.value}">
          <span class="option-icon" aria-hidden="true">${option.icon}</span>
          <span>
            <span class="option-label">${option.label}</span>
            <span class="option-note">${option.note}</span>
          </span>
        </button>
      `,
    )
    .join("");

  if (question.multiSelect) {
    optionsGrid.insertAdjacentHTML(
      "beforeend",
      `<button class="primary-button multi-next" id="multiNext" type="button">ต่อไป →</button>`,
    );
  }

  optionsGrid.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(question.key, button.dataset.value));
  });

  const multiNext = document.getElementById("multiNext");
  if (multiNext) {
    multiNext.addEventListener("click", goNext);
  }
}

function renderSliderQuestion(question) {
  const value = Number(answers[question.key] || question.defaultValue);
  optionsGrid.className = "slider-panel";
  optionsGrid.innerHTML = `
    <div class="age-readout">
      <span id="ageValue">${value}</span>
      <small>ปี</small>
    </div>
    <input
      class="age-slider"
      id="ageSlider"
      type="range"
      min="${question.min}"
      max="${question.max}"
      value="${value}"
      aria-label="อายุของคนรับ"
    />
    <div class="age-marks">
      ${question.marks.map((mark) => `<span>${mark.label}</span>`).join("")}
    </div>
    <button class="primary-button slider-next" id="sliderNext" type="button">ต่อไป →</button>
  `;

  const slider = document.getElementById("ageSlider");
  const ageValue = document.getElementById("ageValue");
  slider.addEventListener("input", () => {
    answers[question.key] = Number(slider.value);
    ageValue.textContent = slider.value;
  });
  document.getElementById("sliderNext").addEventListener("click", () => {
    selectAnswer(question.key, Number(slider.value));
  });
}

function selectAnswer(key, value) {
  const question = questions[currentStep];

  if (question.multiSelect) {
    const selected = Array.isArray(answers[key]) ? [...answers[key]] : [];
    const existingIndex = selected.indexOf(value);
    if (existingIndex >= 0) {
      selected.splice(existingIndex, 1);
    } else {
      selected.push(value);
    }
    answers[key] = selected;
    optionsGrid.querySelectorAll(".option-button").forEach((button) => {
      button.classList.toggle("selected", selected.includes(button.dataset.value));
    });
    return;
  }

  answers[key] = value;
  optionsGrid.querySelectorAll(".option-button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.value === value);
  });

  window.setTimeout(() => {
    goNext();
  }, 180);
}

function goNext() {
  if (currentStep < questions.length - 1) {
    currentStep += 1;
    renderQuestion();
  } else {
    renderResults();
  }
}

function giftScore(gift) {
  let score = 0;
  score += interestScore(gift);
  if (gift.budget.includes(answers.budget)) score += 24;
  if (gift.occasions.includes(answers.occasion)) score += 20;
  if (gift.recipients.includes(answers.recipient)) score += 18;
  if (genderMatches(gift)) score += 14;
  if (ageScore(gift) > 0) score += ageScore(gift);
  score += stableTieBreaker(gift.id);
  return Math.round(score);
}

function giftInterests(gift) {
  return [...(productInterestMap[gift.id] || []), ...(gift.personality || [])];
}

function selectedInterests() {
  return Array.isArray(answers.personality) ? answers.personality : answers.personality ? [answers.personality] : [];
}

function interestScore(gift) {
  const selected = selectedInterests();
  if (!selected.length) return 12;

  const tags = giftInterests(gift);
  const matches = selected.filter((interest) => tags.includes(interest)).length;
  if (!matches) return 0;

  return Math.min(36, 18 + matches * 9);
}

function isAgeInRange(age, range) {
  if (!age || !range) return true;
  const [min, max] = range;
  return age >= min && age <= max;
}

function genderMatches(gift) {
  if (!answers.gender || answers.gender === "unisex") return true;
  if (!gift.genders) return true;
  return gift.genders.includes("unisex") || gift.genders.includes(answers.gender);
}

function ageScore(gift) {
  const age = Number(answers.age);
  if (!age || !gift.ageRange) return 10;

  const [min, max] = gift.ageRange;
  if (age >= min && age <= max) return 12;

  const distance = age < min ? min - age : age - max;
  if (distance <= 5) return 5;
  if (distance <= 10) return 2;
  return 0;
}

function isStrongFit(gift) {
  if (!gift.affiliateUrl) return false;
  if (!genderMatches(gift)) return false;

  const age = Number(answers.age);
  if (age && gift.ageRange && !isAgeInRange(age, gift.ageRange)) {
    const [min, max] = gift.ageRange;
    const distance = age < min ? min - age : age - max;
    if (distance > 10) return false;
  }

  return true;
}

function stableTieBreaker(id) {
  return Array.from(id).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 7;
}

function matchPercent(gift) {
  return Math.max(48, Math.min(99, gift.score));
}

function getGiftMatches() {
  return gifts
    .filter(isStrongFit)
    .map((gift, index) => ({ ...gift, score: giftScore(gift), index }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
}

function recipientName() {
  const names = {
    friend: "เพื่อนของคุณ",
    partner: "คนพิเศษของคุณ",
    family: "คนในครอบครัว",
    coworker: "เพื่อนร่วมงาน",
    kid: "เจ้าตัวเล็ก",
    self: "ตัวคุณเอง",
  };
  return names[answers.recipient] || "คนนั้น";
}

function personalityName() {
  const selected = selectedInterests();
  if (!selected.length) return "มีสไตล์เฉพาะตัว";

  const labels = questions
    .find((question) => question.key === "personality")
    .options.filter((option) => selected.includes(option.value))
    .slice(0, 3)
    .map((option) => option.label);

  return `สนใจ${labels.join(", ")}`;
}

function productVisual(gift, index) {
  if (gift.imageUrl) {
    return `
      <div class="gift-visual has-image">
        <span class="gift-number">0${index + 1}</span>
        <img src="${gift.imageUrl}" alt="${gift.title}" loading="lazy" />
      </div>
    `;
  }

  return `
    <div class="gift-visual" style="background: ${gift.color}">
      <span class="gift-number">0${index + 1}</span>
      <span aria-hidden="true">${gift.icon}</span>
    </div>
  `;
}

function priceLabel(gift) {
  return gift.currentPrice || "";
}

function renderResults() {
  const matches = getGiftMatches();

  if (!matches.length) {
    document.getElementById("recipientText").textContent = recipientName();
    document.getElementById("resultSummary").textContent =
      "ตอนนี้ยังไม่มีสินค้า affiliate ในคลังสำหรับแสดงผล";
    document.getElementById("resultGrid").innerHTML = `
      <article class="empty-card">
        <strong>ยังไม่มีสินค้าในคลัง</strong>
        <p>เพิ่มลิงก์ affiliate ใน catalog.js ก่อน แล้วระบบจะเอาสินค้าเหล่านั้นมาแสดงในเว็บ</p>
      </article>
    `;
    showOnly(results);
    return;
  }

  const itemCount = Math.min(resultsPerPage, matches.length);
  const selected = Array.from({ length: itemCount }, (_, index) => matches[(resultOffset + index) % matches.length]);

  document.getElementById("recipientText").textContent = recipientName();
  document.getElementById("resultSummary").textContent = `${recipientName()}${personalityName()} เราเลยเลือกของที่ทั้งเข้าทางและดูตั้งใจ`;
  document.getElementById("resultGrid").innerHTML = selected
    .map(
      (gift, index) => `
        <article class="gift-card">
          ${productVisual(gift, index)}
          <div class="gift-details">
            <h3>${gift.title}</h3>
            <p>${gift.text}</p>
            <div class="gift-meta ${priceLabel(gift) ? "" : "no-price"}">
              ${priceLabel(gift) ? `<span class="price-pill">${priceLabel(gift)}</span>` : ""}
              <span class="why-text">เข้ากัน ${matchPercent(gift)}%</span>
            </div>
            <a class="shop-button" href="${gift.affiliateUrl}" target="_blank" rel="noopener sponsored">
              ดูใน Shopee →
            </a>
          </div>
        </article>
      `,
    )
    .join("");

  showOnly(results);
}

function startQuiz() {
  currentStep = 0;
  resultOffset = 0;
  Object.keys(answers).forEach((key) => delete answers[key]);
  renderQuestion();
  showOnly(quiz);
}

startButton.addEventListener("click", startQuiz);
restartHeader.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep -= 1;
    renderQuestion();
  }
});

skipButton.addEventListener("click", () => {
  if (currentStep < questions.length - 1) {
    currentStep += 1;
    renderQuestion();
  } else {
    renderResults();
  }
});

shuffleButton.addEventListener("click", () => {
  const matchCount = getGiftMatches().length || 1;
  resultOffset = (resultOffset + resultsPerPage) % matchCount;
  renderResults();
});
