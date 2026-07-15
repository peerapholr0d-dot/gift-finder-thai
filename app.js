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
    kicker: "ส่องนิสัยกันนิด",
    title: "เขาเป็นคนประมาณไหน?",
    help: "เลือกคาแรกเตอร์ที่เด่นที่สุดของเขา",
    options: [
      { value: "homebody", icon: "🛋️", label: "สายอยู่บ้าน", note: "รักความสบายและพื้นที่ส่วนตัว" },
      { value: "foodie", icon: "🍜", label: "สายกิน", note: "รู้ร้านใหม่ก่อนทุกคนเสมอ" },
      { value: "active", icon: "🏃", label: "สายลุย", note: "ชอบเที่ยว ออกกำลัง และกิจกรรม" },
      { value: "creative", icon: "🎨", label: "สายครีเอทีฟ", note: "ชอบงานศิลป์ ดีไซน์ และของเก๋" },
      { value: "tech", icon: "🎧", label: "สายเทค", note: "มีแกดเจ็ตเต็มโต๊ะ แต่ยังซื้อเพิ่ม" },
      { value: "practical", icon: "🧰", label: "สายใช้จริง", note: "ไม่อินของตั้งโชว์ ต้องมีประโยชน์" },
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
  optionsGrid.className = "options-grid";
  optionsGrid.innerHTML = question.options
    .map(
      (option) => `
        <button class="option-button ${answers[question.key] === option.value ? "selected" : ""}"
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

  optionsGrid.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(question.key, button.dataset.value));
  });
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
  answers[key] = value;
  optionsGrid.querySelectorAll(".option-button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.value === value);
  });

  window.setTimeout(() => {
    if (currentStep < questions.length - 1) {
      currentStep += 1;
      renderQuestion();
    } else {
      renderResults();
    }
  }, 180);
}

function giftScore(gift) {
  let score = 0;
  if (gift.personality.includes(answers.personality)) score += 28;
  if (gift.budget.includes(answers.budget)) score += 24;
  if (gift.occasions.includes(answers.occasion)) score += 20;
  if (gift.recipients.includes(answers.recipient)) score += 18;
  if (genderMatches(gift)) score += 14;
  if (ageScore(gift) > 0) score += ageScore(gift);
  score += stableTieBreaker(gift.id);
  return Math.round(score);
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
  const names = {
    homebody: "ชอบใช้เวลาอยู่บ้าน",
    foodie: "มีความสุขกับของอร่อย",
    active: "ชอบออกไปทำกิจกรรม",
    creative: "ชอบของมีดีไซน์และเรื่องราว",
    tech: "อินกับเทคโนโลยี",
    practical: "ชอบของที่ใช้ได้จริง",
  };
  return names[answers.personality] || "มีสไตล์เฉพาะตัว";
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
