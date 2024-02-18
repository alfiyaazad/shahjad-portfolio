// PROGRESS ELEMENTS

let aboutProgress = document.getElementById("about-progress");
let brandsProgress = document.getElementById("brands-progress");
let investmentsProgress = document.getElementById("investments-progress");
let holdingsProgress = document.getElementById("holdings-progress");
let mediaProgress = document.getElementById("media-progress");

let aboutTab = document.getElementById("about-tab");
let brandsTab = document.getElementById("brands-tab");
let investmentsTab = document.getElementById("investments-tab");
let holdingsTab = document.getElementById("holdings-tab");
let mediaTab = document.getElementById("media-tab");
let eventsTab = document.getElementById("events-tab");

// SECTION MAIN ELEMENT

let sectionCol = document.querySelector(".section-col");

// INDIVIDUAL SECTION ITEMS

// VERSION 1

let aboutSection = document.getElementById("about-section-1");
let brandsSection = document.getElementById("brands-section-1");
let investmentsSection = document.getElementById("investments-section-1");
let holdingsSection = document.getElementById("holdings-section-1");
let mediaSection = document.getElementById("media-section-1");
let eventsSection = document.getElementById("events-section-1");

// VERSION 1

let aboutSection2 = document.getElementById("about-section-2");
let brandsSection2 = document.getElementById("brands-section-2");
let investmentsSection2 = document.getElementById("investments-section-2");
let holdingsSection2 = document.getElementById("holdings-section-2");
let mediaSection2 = document.getElementById("media-section-2");
let eventsSection2 = document.getElementById("events-section-2");

// VERSION 3

let aboutSection3 = document.getElementById("about-section-3");
let brandsSection3 = document.getElementById("brands-section-3");
let investmentsSection3 = document.getElementById("investments-section-3");
let holdingsSection3 = document.getElementById("holdings-section-3");
let mediaSection3 = document.getElementById("media-section-3");
let eventsSection3 = document.getElementById("events-section-3");

// MENU BUTTONS

// VERSION 1

let aboutBtn = document.getElementById("about-btn-1");
let brandsBtn = document.getElementById("brands-btn-1");
let investmentsBtn = document.getElementById("investments-btn-1");
let holdingsBtn = document.getElementById("holdings-btn-1");
let mediaBtn = document.getElementById("media-btn-1");
let eventsBtn = document.getElementById("events-btn-1");

// VERSION 2

let aboutBtn2 = document.getElementById("about-btn-2");
let brandsBtn2 = document.getElementById("brands-btn-2");
let investmentsBtn2 = document.getElementById("investments-btn-2");
let holdingsBtn2 = document.getElementById("holdings-btn-2");
let mediaBtn2 = document.getElementById("media-btn-2");
let eventsBtn2 = document.getElementById("events-btn-2");

// VERSION 3

let aboutBtn3 = document.getElementById("about-btn-3");
let brandsBtn3 = document.getElementById("brands-btn-3");
let investmentsBtn3 = document.getElementById("investments-btn-3");
let holdingsBtn3 = document.getElementById("holdings-btn-3");
let mediaBtn3 = document.getElementById("media-btn-3");
let eventsBtn3 = document.getElementById("events-btn-3");

// BRANDS SECTION BUTTONS

let brandBtn1 = document.getElementById("brands-0-btn-1");
let brandBtn2 = document.getElementById("brands-1-btn-1");
let brandBtn3 = document.getElementById("brands-2-btn-1");
let brandBtn4 = document.getElementById("brands-3-btn-1");
let brandBtn5 = document.getElementById("brands-4-btn-1");
let brandBtn6 = document.getElementById("brands-5-btn-1");

// INVESTMENTS SECTION BUTTONS

let investBtn1 = document.getElementById("invest-0-btn-1");
let investBtn2 = document.getElementById("invest-1-btn-1");
let investBtn3 = document.getElementById("invest-2-btn-1");
let investBtn4 = document.getElementById("invest-3-btn-1");
let investBtn5 = document.getElementById("invest-4-btn-1");
let investBtn6 = document.getElementById("invest-5-btn-1");

// HOLDINGS SECTION BUTTONS

let holdBtn1 = document.getElementById("hold-0-btn-1");
let holdBtn2 = document.getElementById("hold-1-btn-1");
let holdBtn3 = document.getElementById("hold-2-btn-1");
let holdBtn4 = document.getElementById("hold-3-btn-1");
let holdBtn5 = document.getElementById("hold-4-btn-1");
let holdBtn6 = document.getElementById("hold-5-btn-1");

// BRANDS SPAN ELEMENTS

let dxgSpan = document.getElementById("dxg-span");
let adtakenSpan = document.getElementById("adtaken-span");
let deviceluxSpan = document.getElementById("devicelux-span");
let ayurnanoSpan = document.getElementById("ayurnano-span");
let jotinsSpan = document.getElementById("jotins-span");

// INVESTMENTS SPAN ELEMENTS

let investSpan1 = document.getElementById("invest-1-span");
let investSpan2 = document.getElementById("invest-2-span");
let investSpan3 = document.getElementById("invest-3-span");
let investSpan4 = document.getElementById("invest-4-span");
let investSpan5 = document.getElementById("invest-5-span");

// HOLDINGS SPAN ELEMENTS

let holdSpan1 = document.getElementById("hold-1-span");
let holdSpan2 = document.getElementById("hold-2-span");
let holdSpan3 = document.getElementById("hold-3-span");
let holdSpan4 = document.getElementById("hold-4-span");
let holdSpan5 = document.getElementById("hold-5-span");

// Scroll to functions

document.getElementById("brands-0-next-1").addEventListener("click", () => {
  moveBrandsCarousel1(1);
  fillSpan(dxgSpan, "progress");
  fillButtonWithDelay(brandBtn2, "nav-btn-default", 500);
});

document.getElementById("brands-1-next-1").addEventListener("click", () => {
  moveBrandsCarousel1(2);
  fillSpan(adtakenSpan, "progress");
  fillButtonWithDelay(brandBtn3, "nav-btn-default", 500);
});
document.getElementById("brands-2-next-1").addEventListener("click", () => {
  moveBrandsCarousel1(3);
  fillSpan(deviceluxSpan, "progress");
  fillButtonWithDelay(brandBtn4, "nav-btn-default", 500);
});
document.getElementById("brands-3-next-1").addEventListener("click", () => {
  moveBrandsCarousel1(4);
  fillSpan(ayurnanoSpan, "progress");
  fillButtonWithDelay(brandBtn5, "nav-btn-default", 500);
});
document.getElementById("brands-4-next-1").addEventListener("click", () => {
  moveBrandsCarousel1(5);
  fillSpan(jotinsSpan, "progress");
  fillButtonWithDelay(brandBtn6, "nav-btn-default", 500);
});

document.getElementById("brands-1-prev-1").addEventListener("click", () => {
  moveBrandsCarousel1(0);
  emptySpan(dxgSpan, "progress-back");
  instantEmptyButton(brandBtn2, "nav-btn");
});
document.getElementById("brands-2-prev-1").addEventListener("click", () => {
  moveBrandsCarousel1(1);
  emptySpan(adtakenSpan, "progress-back");
  instantEmptyButton(brandBtn3, "nav-btn");
});
document.getElementById("brands-3-prev-1").addEventListener("click", () => {
  moveBrandsCarousel1(2);
  emptySpan(deviceluxSpan, "progress-back");
  instantEmptyButton(brandBtn4, "nav-btn");
});
document.getElementById("brands-4-prev-1").addEventListener("click", () => {
  moveBrandsCarousel1(3);
  emptySpan(ayurnanoSpan, "progress-back");
  instantEmptyButton(brandBtn5, "nav-btn");
});
document.getElementById("brands-5-prev-1").addEventListener("click", () => {
  moveBrandsCarousel1(4);
  emptySpan(jotinsSpan, "progress-back");
  instantEmptyButton(brandBtn6, "nav-btn");
});

brandBtn1.addEventListener("click", () => {
  moveBrandsCarousel1(0);
  instantEmptySpan(dxgSpan, "span-empty");
  instantEmptySpan(adtakenSpan, "span-empty");
  instantEmptySpan(deviceluxSpan, "span-empty");
  instantEmptySpan(ayurnanoSpan, "span-empty");
  instantEmptySpan(jotinsSpan, "span-empty");
  instantEmptyButton(brandBtn2, "nav-btn");
  instantEmptyButton(brandBtn3, "nav-btn");
  instantEmptyButton(brandBtn4, "nav-btn");
  instantEmptyButton(brandBtn5, "nav-btn");
  instantEmptyButton(brandBtn6, "nav-btn");
});
brandBtn2.addEventListener("click", () => {
  moveBrandsCarousel1(1);
  instantFillSpan(dxgSpan, "span-fill");
  instantFillButton(brandBtn2, "nav-btn-default");
  instantEmptyButton(brandBtn3, "nav-btn");
  instantEmptyButton(brandBtn4, "nav-btn");
  instantEmptyButton(brandBtn5, "nav-btn");
  instantEmptyButton(brandBtn6, "nav-btn");
  instantEmptySpan(adtakenSpan, "span-empty");
  instantEmptySpan(deviceluxSpan, "span-empty");
  instantEmptySpan(ayurnanoSpan, "span-empty");
  instantEmptySpan(jotinsSpan, "span-empty");
});
brandBtn3.addEventListener("click", () => {
  moveBrandsCarousel1(2);
  instantFillSpan(dxgSpan, "span-fill");
  instantFillSpan(adtakenSpan, "span-fill");
  instantFillButton(brandBtn2, "nav-btn-default");
  instantFillButton(brandBtn3, "nav-btn-default");
  instantEmptyButton(brandBtn4, "nav-btn");
  instantEmptyButton(brandBtn5, "nav-btn");
  instantEmptyButton(brandBtn6, "nav-btn");
  instantEmptySpan(deviceluxSpan, "span-empty");
  instantEmptySpan(ayurnanoSpan, "span-empty");
  instantEmptySpan(jotinsSpan, "span-empty");
});
brandBtn4.addEventListener("click", () => {
  moveBrandsCarousel1(3);
  instantFillSpan(dxgSpan, "span-fill");
  instantFillSpan(adtakenSpan, "span-fill");
  instantFillSpan(deviceluxSpan, "span-fill");
  instantFillButton(brandBtn2, "nav-btn-default");
  instantFillButton(brandBtn3, "nav-btn-default");
  instantFillButton(brandBtn4, "nav-btn-default");
  instantEmptyButton(brandBtn5, "nav-btn");
  instantEmptyButton(brandBtn6, "nav-btn");
  instantEmptySpan(ayurnanoSpan, "span-empty");
  instantEmptySpan(jotinsSpan, "span-empty");
});
brandBtn5.addEventListener("click", () => {
  moveBrandsCarousel1(4);
  instantFillSpan(dxgSpan, "span-fill");
  instantFillSpan(adtakenSpan, "span-fill");
  instantFillSpan(deviceluxSpan, "span-fill");
  instantFillSpan(ayurnanoSpan, "span-fill");
  instantFillButton(brandBtn2, "nav-btn-default");
  instantFillButton(brandBtn3, "nav-btn-default");
  instantFillButton(brandBtn4, "nav-btn-default");
  instantFillButton(brandBtn5, "nav-btn-default");
  instantEmptyButton(brandBtn6, "nav-btn");
  instantEmptySpan(jotinsSpan, "span-empty");
});
brandBtn6.addEventListener("click", () => {
  moveBrandsCarousel1(5);
  instantFillSpan(dxgSpan, "span-fill");
  instantFillSpan(adtakenSpan, "span-fill");
  instantFillSpan(deviceluxSpan, "span-fill");
  instantFillSpan(ayurnanoSpan, "span-fill");
  instantFillSpan(jotinsSpan, "span-fill");
  instantFillButton(brandBtn2, "nav-btn-default");
  instantFillButton(brandBtn3, "nav-btn-default");
  instantFillButton(brandBtn4, "nav-btn-default");
  instantFillButton(brandBtn5, "nav-btn-default");
  instantFillButton(brandBtn6, "nav-btn-default");
});

document.getElementById("invest-0-next-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(1);
  fillSpan(investSpan1, "progress");
  fillButtonWithDelay(investBtn2, "nav-btn-default", 500);
});

document.getElementById("invest-1-next-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(2);
  fillSpan(investSpan2, "progress");
  fillButtonWithDelay(investBtn3, "nav-btn-default", 500);
});
document.getElementById("invest-2-next-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(3);
  fillSpan(investSpan3, "progress");
  fillButtonWithDelay(investBtn4, "nav-btn-default", 500);
});
document.getElementById("invest-3-next-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(4);
  fillSpan(investSpan4, "progress");
  fillButtonWithDelay(investBtn5, "nav-btn-default", 500);
});
document.getElementById("invest-4-next-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(5);
  fillSpan(investSpan5, "progress");
  fillButtonWithDelay(investBtn6, "nav-btn-default", 500);
});

document.getElementById("invest-1-prev-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(0);
  emptySpan(investSpan1, "progress-back");
  instantEmptyButton(investBtn2, "nav-btn");
});
document.getElementById("invest-2-prev-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(1);
  emptySpan(investSpan2, "progress-back");
  instantEmptyButton(investBtn3, "nav-btn");
});
document.getElementById("invest-3-prev-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(2);
  emptySpan(investSpan3, "progress-back");
  instantEmptyButton(investBtn4, "nav-btn");
});
document.getElementById("invest-4-prev-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(3);
  emptySpan(investSpan4, "progress-back");
  instantEmptyButton(investBtn5, "nav-btn");
});
document.getElementById("invest-5-prev-1").addEventListener("click", () => {
  moveInvestmentsCarousel1(4);
  emptySpan(investSpan5, "progress-back");
  instantEmptyButton(investBtn6, "nav-btn");
});

investBtn1.addEventListener("click", () => {
  moveInvestmentsCarousel1(0);
  instantEmptySpan(investSpan1, "span-empty");
  instantEmptySpan(investSpan2, "span-empty");
  instantEmptySpan(investSpan3, "span-empty");
  instantEmptySpan(investSpan4, "span-empty");
  instantEmptySpan(investSpan5, "span-empty");
  instantEmptyButton(investBtn2, "nav-btn");
  instantEmptyButton(investBtn3, "nav-btn");
  instantEmptyButton(investBtn4, "nav-btn");
  instantEmptyButton(investBtn5, "nav-btn");
  instantEmptyButton(investBtn6, "nav-btn");
});
investBtn2.addEventListener("click", () => {
  moveInvestmentsCarousel1(1);
  instantFillSpan(investSpan1, "span-fill");
  instantFillButton(investBtn2, "nav-btn-default");
  instantEmptyButton(investBtn3, "nav-btn");
  instantEmptyButton(investBtn4, "nav-btn");
  instantEmptyButton(investBtn5, "nav-btn");
  instantEmptyButton(investBtn6, "nav-btn");
  instantEmptySpan(investSpan2, "span-empty");
  instantEmptySpan(investSpan3, "span-empty");
  instantEmptySpan(investSpan4, "span-empty");
  instantEmptySpan(investSpan5, "span-empty");
});
investBtn3.addEventListener("click", () => {
  moveInvestmentsCarousel1(2);
  instantFillSpan(investSpan1, "span-fill");
  instantFillSpan(investSpan2, "span-fill");
  instantFillButton(investBtn2, "nav-btn-default");
  instantFillButton(investBtn3, "nav-btn-default");
  instantEmptyButton(investBtn4, "nav-btn");
  instantEmptyButton(investBtn5, "nav-btn");
  instantEmptyButton(investBtn6, "nav-btn");
  instantEmptySpan(investSpan3, "span-empty");
  instantEmptySpan(investSpan4, "span-empty");
  instantEmptySpan(investSpan5, "span-empty");
});
investBtn4.addEventListener("click", () => {
  moveInvestmentsCarousel1(3);
  instantFillSpan(investSpan1, "span-fill");
  instantFillSpan(investSpan2, "span-fill");
  instantFillSpan(investSpan3, "span-fill");
  instantFillButton(investBtn2, "nav-btn-default");
  instantFillButton(investBtn3, "nav-btn-default");
  instantFillButton(investBtn4, "nav-btn-default");
  instantEmptyButton(investBtn5, "nav-btn");
  instantEmptyButton(investBtn6, "nav-btn");
  instantEmptySpan(investSpan4, "span-empty");
  instantEmptySpan(investSpan5, "span-empty");
});
investBtn5.addEventListener("click", () => {
  moveInvestmentsCarousel1(4);
  instantFillSpan(investSpan1, "span-fill");
  instantFillSpan(investSpan2, "span-fill");
  instantFillSpan(investSpan3, "span-fill");
  instantFillSpan(investSpan4, "span-fill");
  instantFillButton(investBtn2, "nav-btn-default");
  instantFillButton(investBtn3, "nav-btn-default");
  instantFillButton(investBtn4, "nav-btn-default");
  instantFillButton(investBtn5, "nav-btn-default");
  instantEmptyButton(investBtn6, "nav-btn");
  instantEmptySpan(investSpan5, "span-empty");
});
investBtn6.addEventListener("click", () => {
  moveInvestmentsCarousel1(5);
  instantFillSpan(investSpan1, "span-fill");
  instantFillSpan(investSpan2, "span-fill");
  instantFillSpan(investSpan3, "span-fill");
  instantFillSpan(investSpan4, "span-fill");
  instantFillSpan(investSpan5, "span-fill");
  instantFillButton(investBtn2, "nav-btn-default");
  instantFillButton(investBtn3, "nav-btn-default");
  instantFillButton(investBtn4, "nav-btn-default");
  instantFillButton(investBtn5, "nav-btn-default");
  instantFillButton(investBtn6, "nav-btn-default");
});

document.getElementById("hold-0-next-1").addEventListener("click", () => {
  moveHoldingsCarousel1(1);
  fillSpan(holdSpan1, "progress");
  fillButtonWithDelay(holdBtn2, "nav-btn-default", 500);
});

document.getElementById("hold-1-next-1").addEventListener("click", () => {
  moveHoldingsCarousel1(2);
  fillSpan(holdSpan2, "progress");
  fillButtonWithDelay(holdBtn3, "nav-btn-default", 500);
});
document.getElementById("hold-2-next-1").addEventListener("click", () => {
  moveHoldingsCarousel1(3);
  fillSpan(holdSpan3, "progress");
  fillButtonWithDelay(holdBtn4, "nav-btn-default", 500);
});
document.getElementById("hold-3-next-1").addEventListener("click", () => {
  moveHoldingsCarousel1(4);
  fillSpan(holdSpan4, "progress");
  fillButtonWithDelay(holdBtn5, "nav-btn-default", 500);
});
document.getElementById("hold-4-next-1").addEventListener("click", () => {
  moveHoldingsCarousel1(5);
  fillSpan(holdSpan5, "progress");
  fillButtonWithDelay(holdBtn6, "nav-btn-default", 500);
});

document.getElementById("hold-1-prev-1").addEventListener("click", () => {
  moveHoldingsCarousel1(0);
  emptySpan(holdSpan1, "progress-back");
  instantEmptyButton(holdBtn2, "nav-btn");
});
document.getElementById("hold-2-prev-1").addEventListener("click", () => {
  moveHoldingsCarousel1(1);
  emptySpan(holdSpan2, "progress-back");
  instantEmptyButton(holdBtn3, "nav-btn");
});
document.getElementById("hold-3-prev-1").addEventListener("click", () => {
  moveHoldingsCarousel1(2);
  emptySpan(holdSpan3, "progress-back");
  instantEmptyButton(holdBtn4, "nav-btn");
});
document.getElementById("hold-4-prev-1").addEventListener("click", () => {
  moveHoldingsCarousel1(3);
  emptySpan(holdSpan4, "progress-back");
  instantEmptyButton(holdBtn5, "nav-btn");
});
document.getElementById("hold-5-prev-1").addEventListener("click", () => {
  moveHoldingsCarousel1(4);
  emptySpan(holdSpan5, "progress-back");
  instantEmptyButton(holdBtn6, "nav-btn");
});

holdBtn1.addEventListener("click", () => {
  moveHoldingsCarousel1(0);
  instantEmptySpan(holdSpan1, "span-empty");
  instantEmptySpan(holdSpan2, "span-empty");
  instantEmptySpan(holdSpan3, "span-empty");
  instantEmptySpan(holdSpan4, "span-empty");
  instantEmptySpan(holdSpan5, "span-empty");
  instantEmptyButton(holdBtn2, "nav-btn");
  instantEmptyButton(holdBtn3, "nav-btn");
  instantEmptyButton(holdBtn4, "nav-btn");
  instantEmptyButton(holdBtn5, "nav-btn");
  instantEmptyButton(holdBtn6, "nav-btn");
});
holdBtn2.addEventListener("click", () => {
  moveHoldingsCarousel1(1);
  instantFillSpan(holdSpan1, "span-fill");
  instantFillButton(holdBtn2, "nav-btn-default");
  instantEmptyButton(holdBtn3, "nav-btn");
  instantEmptyButton(holdBtn4, "nav-btn");
  instantEmptyButton(holdBtn5, "nav-btn");
  instantEmptyButton(holdBtn6, "nav-btn");
  instantEmptySpan(holdSpan2, "span-empty");
  instantEmptySpan(holdSpan3, "span-empty");
  instantEmptySpan(holdSpan4, "span-empty");
  instantEmptySpan(holdSpan5, "span-empty");
});
holdBtn3.addEventListener("click", () => {
  moveHoldingsCarousel1(2);
  instantFillSpan(holdSpan1, "span-fill");
  instantFillSpan(holdSpan2, "span-fill");
  instantFillButton(holdBtn2, "nav-btn-default");
  instantFillButton(holdBtn3, "nav-btn-default");
  instantEmptyButton(holdBtn4, "nav-btn");
  instantEmptyButton(holdBtn5, "nav-btn");
  instantEmptyButton(holdBtn6, "nav-btn");
  instantEmptySpan(holdSpan3, "span-empty");
  instantEmptySpan(holdSpan4, "span-empty");
  instantEmptySpan(holdSpan5, "span-empty");
});
holdBtn4.addEventListener("click", () => {
  moveHoldingsCarousel1(3);
  instantFillSpan(holdSpan1, "span-fill");
  instantFillSpan(holdSpan2, "span-fill");
  instantFillSpan(holdSpan3, "span-fill");
  instantFillButton(holdBtn2, "nav-btn-default");
  instantFillButton(holdBtn3, "nav-btn-default");
  instantFillButton(holdBtn4, "nav-btn-default");
  instantEmptyButton(holdBtn5, "nav-btn");
  instantEmptyButton(holdBtn6, "nav-btn");
  instantEmptySpan(holdSpan4, "span-empty");
  instantEmptySpan(holdSpan5, "span-empty");
});
holdBtn5.addEventListener("click", () => {
  moveHoldingsCarousel1(4);
  instantFillSpan(holdSpan1, "span-fill");
  instantFillSpan(holdSpan2, "span-fill");
  instantFillSpan(holdSpan3, "span-fill");
  instantFillSpan(holdSpan4, "span-fill");
  instantFillButton(holdBtn2, "nav-btn-default");
  instantFillButton(holdBtn3, "nav-btn-default");
  instantFillButton(holdBtn4, "nav-btn-default");
  instantFillButton(holdBtn5, "nav-btn-default");
  instantEmptyButton(holdBtn6, "nav-btn");
  instantEmptySpan(holdSpan5, "span-empty");
});
holdBtn6.addEventListener("click", () => {
  moveHoldingsCarousel1(5);
  instantFillSpan(holdSpan1, "span-fill");
  instantFillSpan(holdSpan2, "span-fill");
  instantFillSpan(holdSpan3, "span-fill");
  instantFillSpan(holdSpan4, "span-fill");
  instantFillSpan(holdSpan5, "span-fill");
  instantFillButton(holdBtn2, "nav-btn-default");
  instantFillButton(holdBtn3, "nav-btn-default");
  instantFillButton(holdBtn4, "nav-btn-default");
  instantFillButton(holdBtn5, "nav-btn-default");
  instantFillButton(holdBtn6, "nav-btn-default");
});

document.getElementById("media-0-next-1").addEventListener("click", () => {
  moveMediaCarousel1(1);
});

document.getElementById("media-1-next-1").addEventListener("click", () => {
  moveMediaCarousel1(2);
});
document.getElementById("media-2-next-1").addEventListener("click", () => {
  moveMediaCarousel1(3);
});
document.getElementById("media-3-next-1").addEventListener("click", () => {
  moveMediaCarousel1(4);
});
document.getElementById("media-4-next-1").addEventListener("click", () => {
  moveMediaCarousel1(5);
});

document.getElementById("media-1-prev-1").addEventListener("click", () => {
  moveMediaCarousel1(0);
});
document.getElementById("media-2-prev-1").addEventListener("click", () => {
  moveMediaCarousel1(1);
});
document.getElementById("media-3-prev-1").addEventListener("click", () => {
  moveMediaCarousel1(2);
});
document.getElementById("media-4-prev-1").addEventListener("click", () => {
  moveMediaCarousel1(3);
});
document.getElementById("media-5-prev-1").addEventListener("click", () => {
  moveMediaCarousel1(4);
});

document.getElementById("event-0-next-1").addEventListener("click", () => {
  moveEventsCarousel1(1);
});

document.getElementById("event-1-next-1").addEventListener("click", () => {
  moveEventsCarousel1(2);
});
document.getElementById("event-2-next-1").addEventListener("click", () => {
  moveEventsCarousel1(3);
});
document.getElementById("event-3-next-1").addEventListener("click", () => {
  moveEventsCarousel1(4);
});
document.getElementById("event-4-next-1").addEventListener("click", () => {
  moveEventsCarousel1(5);
});

document.getElementById("event-1-prev-1").addEventListener("click", () => {
  moveEventsCarousel1(0);
});
document.getElementById("event-2-prev-1").addEventListener("click", () => {
  moveEventsCarousel1(1);
});
document.getElementById("event-3-prev-1").addEventListener("click", () => {
  moveEventsCarousel1(2);
});
document.getElementById("event-4-prev-1").addEventListener("click", () => {
  moveEventsCarousel1(3);
});
document.getElementById("event-5-prev-1").addEventListener("click", () => {
  moveEventsCarousel1(4);
});

aboutBtn2.addEventListener("click", function () {
  showSection(aboutSection2);
  hideSection(brandsSection2);
  hideSection(investmentsSection2);
  hideSection(holdingsSection2);
  hideSection(mediaSection2);
  hideSection(eventsSection2);
  colorBtn(aboutBtn2);
  unColorBtn(brandsBtn2);
  unColorBtn(investmentsBtn2);
  unColorBtn(holdingsBtn2);
  unColorBtn(mediaBtn2);
  unColorBtn(eventsBtn2);
});
brandsBtn2.addEventListener("click", function () {
  showSection(brandsSection2);
  hideSection(aboutSection2);
  hideSection(investmentsSection2);
  hideSection(holdingsSection2);
  hideSection(mediaSection2);
  hideSection(eventsSection2);
  colorBtn(brandsBtn2);
  unColorBtn(aboutBtn2);
  unColorBtn(investmentsBtn2);
  unColorBtn(holdingsBtn2);
  unColorBtn(mediaBtn2);
  unColorBtn(eventsBtn2);
});
investmentsBtn2.addEventListener("click", function () {
  showSection(investmentsSection2);
  hideSection(brandsSection2);
  hideSection(aboutSection2);
  hideSection(holdingsSection2);
  hideSection(mediaSection2);
  hideSection(eventsSection2);
  colorBtn(investmentsBtn2);
  unColorBtn(brandsBtn2);
  unColorBtn(aboutBtn2);
  unColorBtn(holdingsBtn2);
  unColorBtn(mediaBtn2);
  unColorBtn(eventsBtn2);
});
holdingsBtn2.addEventListener("click", function () {
  showSection(holdingsSection2);
  hideSection(brandsSection2);
  hideSection(investmentsSection2);
  hideSection(aboutSection2);
  hideSection(mediaSection2);
  hideSection(eventsSection2);
  colorBtn(holdingsBtn2);
  unColorBtn(brandsBtn2);
  unColorBtn(investmentsBtn2);
  unColorBtn(aboutBtn2);
  unColorBtn(mediaBtn2);
  unColorBtn(eventsBtn2);
});
mediaBtn2.addEventListener("click", function () {
  showSection(mediaSection2);
  hideSection(brandsSection2);
  hideSection(investmentsSection2);
  hideSection(holdingsSection2);
  hideSection(aboutSection2);
  hideSection(eventsSection2);
  colorBtn(mediaBtn2);
  unColorBtn(brandsBtn2);
  unColorBtn(investmentsBtn2);
  unColorBtn(holdingsBtn2);
  unColorBtn(aboutBtn2);
  unColorBtn(eventsBtn2);
});
eventsBtn2.addEventListener("click", function () {
  showSection(eventsSection2);
  hideSection(brandsSection2);
  hideSection(investmentsSection2);
  hideSection(holdingsSection2);
  hideSection(mediaSection2);
  hideSection(aboutSection2);
  colorBtn(eventsBtn2);
  unColorBtn(brandsBtn2);
  unColorBtn(investmentsBtn2);
  unColorBtn(holdingsBtn2);
  unColorBtn(mediaBtn2);
  unColorBtn(aboutBtn2);
});

aboutBtn3.addEventListener("click", function () {
  showSection(aboutSection3);
  hideSection(brandsSection3);
  hideSection(investmentsSection3);
  hideSection(holdingsSection3);
  hideSection(mediaSection3);
  hideSection(eventsSection3);
  addTab(aboutTab);
  removeTab(brandsTab);
  removeTab(investmentsTab);
  removeTab(holdingsTab);
  removeTab(mediaTab);
  removeTab(eventsTab);
});
brandsBtn3.addEventListener("click", function () {
  showSection(brandsSection3);
  hideSection(aboutSection3);
  hideSection(investmentsSection3);
  hideSection(holdingsSection3);
  hideSection(mediaSection3);
  hideSection(eventsSection3);
  addTab(brandsTab);
  removeTab(aboutTab);
  removeTab(investmentsTab);
  removeTab(holdingsTab);
  removeTab(mediaTab);
  removeTab(eventsTab);
});
investmentsBtn3.addEventListener("click", function () {
  showSection(investmentsSection3);
  hideSection(brandsSection3);
  hideSection(aboutSection3);
  hideSection(holdingsSection3);
  hideSection(mediaSection3);
  hideSection(eventsSection3);
  addTab(investmentsTab);
  removeTab(brandsTab);
  removeTab(aboutTab);
  removeTab(holdingsTab);
  removeTab(mediaTab);
  removeTab(eventsTab);
});
holdingsBtn3.addEventListener("click", function () {
  showSection(holdingsSection3);
  hideSection(brandsSection3);
  hideSection(investmentsSection3);
  hideSection(aboutSection3);
  hideSection(mediaSection3);
  hideSection(eventsSection3);
  addTab(holdingsTab);
  removeTab(brandsTab);
  removeTab(investmentsTab);
  removeTab(aboutTab);
  removeTab(mediaTab);
  removeTab(eventsTab);
});
mediaBtn3.addEventListener("click", function () {
  showSection(mediaSection3);
  hideSection(brandsSection3);
  hideSection(investmentsSection3);
  hideSection(holdingsSection3);
  hideSection(aboutSection3);
  hideSection(eventsSection3);
  addTab(mediaTab);
  removeTab(brandsTab);
  removeTab(investmentsTab);
  removeTab(holdingsTab);
  removeTab(aboutTab);
  removeTab(eventsTab);
});
eventsBtn3.addEventListener("click", function () {
  showSection(eventsSection3);
  hideSection(brandsSection3);
  hideSection(investmentsSection3);
  hideSection(holdingsSection3);
  hideSection(mediaSection3);
  hideSection(aboutSection3);
  addTab(eventsTab);
  removeTab(brandsTab);
  removeTab(investmentsTab);
  removeTab(holdingsTab);
  removeTab(mediaTab);
  removeTab(aboutTab);
});

function initializeCarousel(elementId, moveFunction) {
  if (
    typeof bootstrap !== "undefined" &&
    typeof bootstrap.Carousel !== "undefined"
  ) {
    let carousel = new bootstrap.Carousel(document.getElementById(elementId), {
      interval: false,
    });

    window[moveFunction] = function (itemIndex) {
      carousel.to(itemIndex);
    };
  } else {
    console.error("Bootstrap is not properly loaded.");
  }
}

initializeCarousel("brands-carousel-1", "moveBrandsCarousel1");
initializeCarousel("investments-carousel-1", "moveInvestmentsCarousel1");
initializeCarousel("holdings-carousel-1", "moveHoldingsCarousel1");
initializeCarousel("media-carousel-1", "moveMediaCarousel1");
initializeCarousel("events-carousel-1", "moveEventsCarousel1");

initializeCarousel("brands-carousel-2", "moveBrandsCarousel2");
initializeCarousel("investments-carousel-2", "moveInvestmentsCarousel2");
initializeCarousel("holdings-carousel-2", "moveHoldingsCarousel2");
initializeCarousel("media-carousel-2", "moveMediaCarousel2");
initializeCarousel("events-carousel-2", "moveEventsCarousel2");

initializeCarousel("brands-carousel-3", "moveBrandsCarousel3");
initializeCarousel("investments-carousel-3", "moveInvestmentsCarousel3");
initializeCarousel("holdings-carousel-3", "moveHoldingsCarousel3");
initializeCarousel("media-carousel-3", "moveMediaCarousel3");
initializeCarousel("events-carousel-3", "moveEventsCarousel3");

function fillSpan(spanElement, className) {
  spanElement.classList.remove(...spanElement.classList);
  spanElement.classList.add(className);
}

function emptySpan(spanElement, className) {
  spanElement.classList.remove(...spanElement.classList);
  spanElement.classList.add(className);
}

function instantFillSpan(spanElement, className) {
  spanElement.classList.remove(...spanElement.classList);
  spanElement.classList.add(className);
}

function instantEmptySpan(spanElement, className) {
  spanElement.classList.remove(...spanElement.classList);
  spanElement.classList.add(className);
}

function fillButtonWithDelay(buttonElement, className, delay) {
  setTimeout(() => {
    buttonElement.classList.remove(...buttonElement.classList);
    buttonElement.classList.add(className);
  }, delay);
}

function instantEmptyButton(buttonElement, className) {
  buttonElement.classList.remove(...buttonElement.classList);
  buttonElement.classList.add(className);
}

function instantFillButton(buttonElement, className) {
  buttonElement.classList.remove(...buttonElement.classList);
  buttonElement.classList.add(className);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with ID "${sectionId}" not found.`);
  }
}

function fillProgress(section, progressElement, offset, Btn) {
  let scrollTop = sectionCol.scrollTop;
  let sectionHeight = section.clientHeight;

  if (scrollTop > offset) {
    scrollTop = scrollTop - offset;

    let percentScrolled = (scrollTop / sectionHeight) * 100;
    progressElement.style.height = percentScrolled + "%";

    if (percentScrolled >= 100) {
      Btn.classList.remove(...Btn.classList);
      Btn.classList.add("nav-btn-default");
    } else {
      Btn.classList.remove(...Btn.classList);
      Btn.classList.add("nav-btn");
    }
  } else if (scrollTop <= offset) {
    progressElement.style.height = "0%";
  }
}

sectionCol.addEventListener("scroll", () => {
  fillProgress(aboutSection, aboutProgress, 0, brandsBtn);
  fillProgress(brandsSection, brandsProgress, 800, investmentsBtn);
  fillProgress(investmentsSection, investmentsProgress, 1600, holdingsBtn);
  fillProgress(holdingsSection, holdingsProgress, 2400, mediaBtn);
  fillProgress(mediaSection, mediaProgress, 3200, eventsBtn);
});

function showSection(section) {
  section.classList.remove("d-none");
  section.classList.add("d-block");
}
function hideSection(section) {
  section.classList.remove("d-block");
  section.classList.add("d-none");
}
function unColorBtn(Btn) {
  Btn.classList.remove("nav-btn-default");
  Btn.classList.add("nav-btn");
}
function colorBtn(Btn) {
  Btn.classList.remove("nav-btn");
  Btn.classList.add("nav-btn-default");
}

function unColorBtn(Btn) {
  Btn.classList.remove("nav-btn-default");
  Btn.classList.add("nav-btn");
}
function addTab(Tab) {
  Tab.classList.add("mobile-tab");
}
function removeTab(Tab) {
  Tab.classList.remove("mobile-tab");
}

document.getElementById("email-btn-1").addEventListener("click", function () {
  // Get the email address from the button's data attribute
  let emailAddress = this.getAttribute("data-email");

  // Create the mailto link
  let mailtoLink = "mailto:" + encodeURIComponent(emailAddress);

  // Open the user's email client
  window.location.href = mailtoLink;
});

document.getElementById("email-btn-2").addEventListener("click", function () {
  // Get the email address from the button's data attribute
  let emailAddress = this.getAttribute("data-email");

  // Create the mailto link
  let mailtoLink = "mailto:" + encodeURIComponent(emailAddress);

  // Open the user's email client
  window.location.href = mailtoLink;
});
document.getElementById("email-btn-3").addEventListener("click", function () {
  // Get the email address from the button's data attribute
  let emailAddress = this.getAttribute("data-email");

  // Create the mailto link
  let mailtoLink = "mailto:" + encodeURIComponent(emailAddress);

  // Open the user's email client
  window.location.href = mailtoLink;
});


document.getElementById("brands-0-next-2").addEventListener("click", () => {
    moveBrandsCarousel2(1);
  });
  
  document.getElementById("brands-1-next-2").addEventListener("click", () => {
    moveBrandsCarousel2(2);
  });
  document.getElementById("brands-2-next-2").addEventListener("click", () => {
    moveBrandsCarousel2(3);
  });
  document.getElementById("brands-3-next-2").addEventListener("click", () => {
    moveBrandsCarousel2(4);
  });
  document.getElementById("brands-4-next-2").addEventListener("click", () => {
    moveBrandsCarousel2(5);
  });
  
  document.getElementById("brands-1-prev-2").addEventListener("click", () => {
    moveBrandsCarousel2(0);
  });
  document.getElementById("brands-2-prev-2").addEventListener("click", () => {
    moveBrandsCarousel2(1);
  });
  document.getElementById("brands-3-prev-2").addEventListener("click", () => {
    moveBrandsCarousel2(2);
  });
  document.getElementById("brands-4-prev-2").addEventListener("click", () => {
    moveBrandsCarousel2(3);
  });
  document.getElementById("brands-5-prev-2").addEventListener("click", () => {
    moveBrandsCarousel2(4);
  });
  
  document.getElementById("invest-0-next-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(1);
  });
  
  document.getElementById("invest-1-next-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(2);
  });
  document.getElementById("invest-2-next-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(3);
  });
  document.getElementById("invest-3-next-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(4);
  });
  document.getElementById("invest-4-next-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(5);
  });
  
  document.getElementById("invest-1-prev-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(0);
  });
  document.getElementById("invest-2-prev-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(1);
  });
  document.getElementById("invest-3-prev-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(2);
  });
  document.getElementById("invest-4-prev-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(3);
  });
  document.getElementById("invest-5-prev-2").addEventListener("click", () => {
    moveInvestmentsCarousel2(4);
  });
  
  document.getElementById("hold-0-next-2").addEventListener("click", () => {
    moveHoldingsCarousel2(1);
  });
  
  document.getElementById("hold-1-next-2").addEventListener("click", () => {
    moveHoldingsCarousel2(2);
  });
  document.getElementById("hold-2-next-2").addEventListener("click", () => {
    moveHoldingsCarousel2(3);
  });
  document.getElementById("hold-3-next-2").addEventListener("click", () => {
    moveHoldingsCarousel2(4);
  });
  document.getElementById("hold-4-next-2").addEventListener("click", () => {
    moveHoldingsCarousel2(5);
  });
  
  document.getElementById("hold-1-prev-2").addEventListener("click", () => {
    moveHoldingsCarousel2(0);
  });
  document.getElementById("hold-2-prev-2").addEventListener("click", () => {
    moveHoldingsCarousel2(1);
  });
  document.getElementById("hold-3-prev-2").addEventListener("click", () => {
    moveHoldingsCarousel2(2);
  });
  document.getElementById("hold-4-prev-2").addEventListener("click", () => {
    moveHoldingsCarousel2(3);
  });
  document.getElementById("hold-5-prev-2").addEventListener("click", () => {
    moveHoldingsCarousel2(4);
  });
  
  document.getElementById("media-0-next-2").addEventListener("click", () => {
    moveMediaCarousel2(1);
  });
  
  document.getElementById("media-1-next-2").addEventListener("click", () => {
    moveMediaCarousel2(2);
  });
  document.getElementById("media-2-next-2").addEventListener("click", () => {
    moveMediaCarousel2(3);
  });
  document.getElementById("media-3-next-2").addEventListener("click", () => {
    moveMediaCarousel2(4);
  });
  document.getElementById("media-4-next-2").addEventListener("click", () => {
    moveMediaCarousel2(5);
  });
  
  document.getElementById("media-1-prev-2").addEventListener("click", () => {
    moveMediaCarousel2(0);
  });
  document.getElementById("media-2-prev-2").addEventListener("click", () => {
    moveMediaCarousel2(1);
  });
  document.getElementById("media-3-prev-2").addEventListener("click", () => {
    moveMediaCarousel2(2);
  });
  document.getElementById("media-4-prev-2").addEventListener("click", () => {
    moveMediaCarousel2(3);
  });
  document.getElementById("media-5-prev-2").addEventListener("click", () => {
    moveMediaCarousel2(4);
  });
  
  document.getElementById("event-0-next-2").addEventListener("click", () => {
    moveEventsCarousel2(1);
  });
  
  document.getElementById("event-1-next-2").addEventListener("click", () => {
    moveEventsCarousel2(2);
  });
  document.getElementById("event-2-next-2").addEventListener("click", () => {
    moveEventsCarousel2(3);
  });
  document.getElementById("event-3-next-2").addEventListener("click", () => {
    moveEventsCarousel2(4);
  });
  document.getElementById("event-4-next-2").addEventListener("click", () => {
    moveEventsCarousel2(5);
  });
  
  document.getElementById("event-1-prev-2").addEventListener("click", () => {
    moveEventsCarousel2(0);
  });
  document.getElementById("event-2-prev-2").addEventListener("click", () => {
    moveEventsCarousel2(1);
  });
  document.getElementById("event-3-prev-2").addEventListener("click", () => {
    moveEventsCarousel2(2);
  });
  document.getElementById("event-4-prev-2").addEventListener("click", () => {
    moveEventsCarousel2(3);
  });
  document.getElementById("event-5-prev-2").addEventListener("click", () => {
    moveEventsCarousel2(4);
  });
  





document.getElementById("brands-0-next-3").addEventListener("click", () => {
  moveBrandsCarousel3(1);
});

document.getElementById("brands-1-next-3").addEventListener("click", () => {
  moveBrandsCarousel3(2);
});
document.getElementById("brands-2-next-3").addEventListener("click", () => {
  moveBrandsCarousel3(3);
});
document.getElementById("brands-3-next-3").addEventListener("click", () => {
  moveBrandsCarousel3(4);
});
document.getElementById("brands-4-next-3").addEventListener("click", () => {
  moveBrandsCarousel3(5);
});

document.getElementById("brands-1-prev-3").addEventListener("click", () => {
  moveBrandsCarousel3(0);
});
document.getElementById("brands-2-prev-3").addEventListener("click", () => {
  moveBrandsCarousel3(1);
});
document.getElementById("brands-3-prev-3").addEventListener("click", () => {
  moveBrandsCarousel3(2);
});
document.getElementById("brands-4-prev-3").addEventListener("click", () => {
  moveBrandsCarousel3(3);
});
document.getElementById("brands-5-prev-3").addEventListener("click", () => {
  moveBrandsCarousel3(4);
});

document.getElementById("invest-0-next-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(1);
});

document.getElementById("invest-1-next-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(2);
});
document.getElementById("invest-2-next-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(3);
});
document.getElementById("invest-3-next-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(4);
});
document.getElementById("invest-4-next-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(5);
});

document.getElementById("invest-1-prev-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(0);
});
document.getElementById("invest-2-prev-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(1);
});
document.getElementById("invest-3-prev-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(2);
});
document.getElementById("invest-4-prev-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(3);
});
document.getElementById("invest-5-prev-3").addEventListener("click", () => {
  moveInvestmentsCarousel3(4);
});

document.getElementById("hold-0-next-3").addEventListener("click", () => {
  moveHoldingsCarousel3(1);
});

document.getElementById("hold-1-next-3").addEventListener("click", () => {
  moveHoldingsCarousel3(2);
});
document.getElementById("hold-2-next-3").addEventListener("click", () => {
  moveHoldingsCarousel3(3);
});
document.getElementById("hold-3-next-3").addEventListener("click", () => {
  moveHoldingsCarousel3(4);
});
document.getElementById("hold-4-next-3").addEventListener("click", () => {
  moveHoldingsCarousel3(5);
});

document.getElementById("hold-1-prev-3").addEventListener("click", () => {
  moveHoldingsCarousel3(0);
});
document.getElementById("hold-2-prev-3").addEventListener("click", () => {
  moveHoldingsCarousel3(1);
});
document.getElementById("hold-3-prev-3").addEventListener("click", () => {
  moveHoldingsCarousel3(2);
});
document.getElementById("hold-4-prev-3").addEventListener("click", () => {
  moveHoldingsCarousel3(3);
});
document.getElementById("hold-5-prev-3").addEventListener("click", () => {
  moveHoldingsCarousel3(4);
});

document.getElementById("media-0-next-3").addEventListener("click", () => {
  moveMediaCarousel3(1);
});

document.getElementById("media-1-next-3").addEventListener("click", () => {
  moveMediaCarousel3(2);
});
document.getElementById("media-2-next-3").addEventListener("click", () => {
  moveMediaCarousel3(3);
});
document.getElementById("media-3-next-3").addEventListener("click", () => {
  moveMediaCarousel3(4);
});
document.getElementById("media-4-next-3").addEventListener("click", () => {
  moveMediaCarousel3(5);
});

document.getElementById("media-1-prev-3").addEventListener("click", () => {
  moveMediaCarousel3(0);
});
document.getElementById("media-2-prev-3").addEventListener("click", () => {
  moveMediaCarousel3(1);
});
document.getElementById("media-3-prev-3").addEventListener("click", () => {
  moveMediaCarousel3(2);
});
document.getElementById("media-4-prev-3").addEventListener("click", () => {
  moveMediaCarousel3(3);
});
document.getElementById("media-5-prev-3").addEventListener("click", () => {
  moveMediaCarousel3(4);
});

document.getElementById("event-0-next-3").addEventListener("click", () => {
  moveEventsCarousel3(1);
});

document.getElementById("event-1-next-3").addEventListener("click", () => {
  moveEventsCarousel3(2);
});
document.getElementById("event-2-next-3").addEventListener("click", () => {
  moveEventsCarousel3(3);
});
document.getElementById("event-3-next-3").addEventListener("click", () => {
  moveEventsCarousel3(4);
});
document.getElementById("event-4-next-3").addEventListener("click", () => {
  moveEventsCarousel3(5);
});

document.getElementById("event-1-prev-3").addEventListener("click", () => {
  moveEventsCarousel3(0);
});
document.getElementById("event-2-prev-3").addEventListener("click", () => {
  moveEventsCarousel3(1);
});
document.getElementById("event-3-prev-3").addEventListener("click", () => {
  moveEventsCarousel3(2);
});
document.getElementById("event-4-prev-3").addEventListener("click", () => {
  moveEventsCarousel3(3);
});
document.getElementById("event-5-prev-3").addEventListener("click", () => {
  moveEventsCarousel3(4);
});
