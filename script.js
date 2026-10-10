const topicContent = {
  notes: {
    title: "D.Opt study starter topics",
    intro: "A suggested order for building your revision notes:",
    items: ["Basic anatomy of the eye", "Cornea, lens, retina and optic nerve", "Refractive errors: myopia, hypermetropia and astigmatism", "Ophthalmic examination basics"]
  },
  instruments: {
    title: "Common ophthalmic instruments",
    intro: "Start by learning each instrument's full name, purpose and basic working:",
    items: ["Slit lamp: examines the front structures of the eye", "Autorefractometer: estimates refractive error", "NCT: estimates intraocular pressure without touching the eye", "OCT: produces cross-sectional images of eye structures"]
  },
  conditions: {
    title: "Eye conditions to study",
    intro: "These are learning summaries, not a diagnosis:",
    items: ["Myopia: distant objects may look blurry", "Cataract: clouding of the eye's natural lens", "Glaucoma: a group of conditions that can damage the optic nerve", "Dry eye: occurs when tears do not adequately lubricate the eye"]
  },
  care: {
    title: "Everyday eye-care habits",
    intro: "Practical habits that may help support eye health:",
    items: ["Take regular breaks during prolonged screen use", "Wear suitable protective eyewear when needed", "Avoid rubbing your eyes with unwashed hands", "Arrange an eye examination when advised or when vision changes"]
  }
};

const detail = document.getElementById("topicDetail");
document.querySelectorAll(".topic-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = topicContent[button.dataset.topic];
    detail.innerHTML = `
      <div>
        <p class="eyebrow">TOPIC GUIDE</p>
        <h3>${content.title}</h3>
        <p>${content.intro}</p>
        <ul>${content.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>`;
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
