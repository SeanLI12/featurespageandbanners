const translationData = [
  // Right Banner #1
  {
    trans_id: "right_banner_1_title",
    en: "AUTO CASH OUT",
    zh: "",
    vi: "",
    id: "",
    th: "",
    ko: "",
    pt: "",
    km: "",
    ja: "",
  },
  {
    trans_id: "right_banner_1_content",
    en: [
      "Set a Cash Out value that can be automatically cashed out - even if you are not active within Sportsbook.",
    ],
    zh: [""],
    vi: [""],
    id: [""],
    th: [""],
    ko: [""],
    pt: [""],
    km: [""],
    ja: [""],
  },
  {
    trans_id: "right_banner_1_learn_more",
    en: "Learn More",
    zh: "查看更多",
    vi: "TÌM HIỂU THÊM",
    id: "PELAJARI LEBIH LANJUT",
    th: "อ่านเพิ่มเติม",
    ko: "더 알아보기",
    pt: "Saiba Mais",
    km: "មើល​បន្ថែមទៀត",
    ja: "詳細を見る",
  },
  // Right Banner #2
  {
    trans_id: "right_banner_2_title",
    en: "MATCH PARLAY",
    zh: "",
    vi: "",
    id: "",
    th: "",
    ko: "",
    pt: "",
    km: "",
    ja: "",
  },
  {
    trans_id: "right_banner_2_content",
    en: "Combine up to 4 popular markets from the same event. Available Prestart and In-Play!",
    zh: "",
    vi: "",
    id: "",
    th: "",
    ko: "",
    pt: "",
    km: "",
    ja: "",
  },
  {
    trans_id: "right_banner_2_learn_more",
    en: "Learn More",
    zh: "查看更多",
    vi: "TÌM HIỂU THÊM",
    id: "PELAJARI LEBIH LANJUT",
    th: "อ่านเพิ่มเติม",
    ko: "더 알아보기",
    pt: "Saiba Mais",
    km: "មើល​បន្ថែមទៀត",
    ja: "詳細を見る",
  },
  // Right Banner #3
  {
    trans_id: "right_banner_3_title",
    en: "NEW HDP & O/U TEMPLATE",
    zh: "",
    vi: "",
    id: "",
    th: "",
    ko: "",
    pt: "",
    km: "",
    ja: "",
  },
  {
    trans_id: "right_banner_3_content",
    en: [
      "New HDP & O/U view. See all available lines for these popular markets.",
    ],
    zh: [""],
    vi: [""],
    id: [""],
    th: [""],
    ko: [""],
    pt: [""],
    km: [""],
    ja: [""],
  },
  {
    trans_id: "right_banner_3_learn_more",
    en: "Learn More",
    zh: "查看更多",
    vi: "TÌM HIỂU THÊM",
    id: "PELAJARI LEBIH LANJUT",
    th: "อ่านเพิ่มเติม",
    ko: "더 알아보기",
    pt: "Saiba Mais",
    km: "មើល​បន្ថែមទៀត",
    ja: "詳細を見る",
  },
  // Right Banner #4
  {
    trans_id: "right_banner_4_title",
    en: "LIVE TV STREAMING",
    zh: "",
    vi: "",
    id: "",
    th: "",
    ko: "",
    pt: "",
    km: "",
    ja: "",
  },
  {
    trans_id: "right_banner_4_content",
    en: "Look for the Play Icon to activate live streaming across our extensive In-Play offerings. Regional restrictions may apply.",
    zh: "",
    vi: "",
    id: "",
    th: "",
    ko: "",
    pt: "",
    km: "",
    ja: "",
  },
  {
    trans_id: "right_banner_4_learn_more",
    en: "Learn More",
    zh: "查看更多",
    vi: "TÌM HIỂU THÊM",
    id: "PELAJARI LEBIH LANJUT",
    th: "อ่านเพิ่มเติม",
    ko: "더 알아보기",
    pt: "Saiba Mais",
    km: "មើល​បន្ថែមទៀត",
    ja: "詳細を見る",
  },
];

// Language Code of the HTML file
const { lang } = document.documentElement;

// Generating the translated data inside the HTML
translationData.forEach((objData) => {
  const $objectEl = document.getElementById(objData.trans_id);

  if ($objectEl) {
    if (typeof objData[lang] === "object") {
      // FOR PARAGRAPHS
      objData[lang].forEach((textData) => {
        const $newParaEl = document.createElement("p");
        $newParaEl.innerHTML = textData;
        $objectEl.appendChild($newParaEl);
      });
    } else if (typeof objData[lang] === "string") {
      // FOR SINGLE-LINE TEXTS
      $objectEl.innerHTML = objData[lang];
    }
  }
});
