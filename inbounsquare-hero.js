//---------------------------------- Includes ----------------------------------//

// Animation lib provided by webflow
const tram = window.tram;

//---------------------------------- Data ----------------------------------//

// Colors
const accentColor = "#0173e6";
const lightgreyColor = "#cacaca";

// Search Requests
const searchScope = [
  "K8s Auto-Scaling",
  "AWS Security",
  "Phishing Prevention",
  "Observability vs Monitoring",
  "Benefits of IPv6",
  "Dynamic Routing Protocols",
  "BGP Monitoring Guide",
  "Synthetic Monitoring",
  "Event Stream Processing",
  "Distributed Data",
  "IoT Infrastructure",
  "Kubernetes Autoscaling",
  "Kubernetes DevOps Tools",
  "Kubernetes Multi-Cloud",
  "BigQuery Pricing",
  "gcp cost management",
  "google cloud spot vms",
  "aws msp checklist",
  "msp pricing models",
  "msp best practices",
  "eui-64",
  "traceroute ipv6",
  "iptables ipv6",
  "cloud asset management",
  "eks security",
  "cloud security automation",
  "digital customer journey",
  "siem integration",
  "url phishing",
  "domain hijacking",
  "siem vs soar",
];

const contentScope = [
  // false
  { badge: "Quick Look", pipe: false },
  { badge: "Deep Learning", pipe: false },
  { badge: "Copy Pasting", pipe: false },
  { badge: "我用中文搜索", pipe: false },
  { badge: "Untouched Tab", pipe: false },
  { badge: "Wrong Topic", pipe: false },
  { badge: "No Sense", pipe: false },
  { badge: "Slow loading", pipe: false },
  { badge: "Just Studying", pipe: false },
  { badge: "Later", pipe: false },
  // true
  { badge: "Help Me", pipe: true },
  { badge: "Looks Good", pipe: true },
  { badge: "Need This", pipe: true },
  { badge: "Wanna Try", pipe: true },
  { badge: "Learn More", pipe: true },
  { badge: "Watch Demo", pipe: true },
  { badge: "Join Webinar", pipe: true },
  { badge: "Explore Product", pipe: true },
  { badge: "Intresting", pipe: true },
];

const formScope = [
  // false
  { badge: "Ooops", pipe: false },
  { badge: "Missclick", pipe: false },
  { badge: "Changing", pipe: false },
  { badge: "Miss Functionality", pipe: false },
  { badge: "Too Much", pipe: false },
  { badge: "Expensive", pipe: false },
  { badge: "Just Leave", pipe: false },
  // true
  { badge: "Longterm Client", pipe: true },
  { badge: "Fullsend", pipe: true },
  { badge: "Investor Research", pipe: true },
  { badge: "Temporary Solution", pipe: true },
  { badge: "Goverment Order", pipe: true },
  { badge: "Small Business", pipe: true },
  { badge: "Enterprise", pipe: true },
  { badge: "Trial", pipe: true },
  { badge: "Good Product", pipe: true },
  { badge: "Startup", pipe: true },
  { badge: "Contract", pipe: true },
  { badge: "Deal", pipe: true },
];

//---------------------------------- DOM ----------------------------------//

// Person Gen Flows
const mocIncome = document.querySelector('[moc="income"]');
const mocToContent = document.querySelector('[moc="to-content"]');
const mocToForm = document.querySelector('[moc="to-form"]');
const mocConverted = document.querySelector('[moc="converted"]');
// Screens
const mocSearch = document.querySelector('[moc="search"]');
const mocSearchDetails = mocSearch.querySelector('[moc="details"]');
const mocSearchLeave = mocSearch.querySelector('[moc="leave"]');
const mocSearchStat = mocSearch.querySelector('[moc="stat"]');
//
const mocContent = document.querySelector('[moc="content"]');
const mocContentDetails = mocContent.querySelector('[moc="details"]');
const mocContentLeave = mocContent.querySelector('[moc="leave"]');
const mocContentStat = mocContent.querySelector('[moc="stat"]');
const mocContentBanner = mocContent.querySelector('[moc="content-banner"]');
const mocContentCta = mocContent.querySelector('[moc="content-cta"]');
//
const mocForm = document.querySelector('[moc="form"]');
const mocFormDetails = mocForm.querySelector('[moc="details"]');
const mocFormLeave = mocForm.querySelector('[moc="leave"]');
const mocFormStat = mocForm.querySelector('[moc="stat"]');
// Counters
const CountImpressions = document.querySelector('[moc="count-impressions"]');
const CountVisitors = document.querySelector('[moc="count-visitors"]');
const CountEngagements = document.querySelector('[moc="count-engagements"]');
const CountForms = document.querySelector('[moc="count-forms"]');
// Toggles
const ToggleContent = document.querySelector('[toggle="content"]');
const ToggleCounters = document.querySelector('[toggle="counters"]');
const ToggleEngagements = document.querySelector('[toggle="engagements"]');
// Person
const mocPerson = document.querySelector('[moc="person"]');
const mocPersonSvg = mocPerson.innerHTML;

//---------------------------------- Meta ----------------------------------//

let Meta = {
  frame: 0,
  counters: {
    impressions: {
      var: 0,
      state: false,
      dom: CountImpressions,
    },
    visitors: {
      var: 0,
      state: false,
      dom: CountVisitors,
    },
    engagements: {
      var: 0,
      state: false,
      dom: CountEngagements,
    },
    forms: {
      var: 0,
      state: false,
      dom: CountForms,
    },
  },
  toggles: {
    content: {
      state: false,
      dom: ToggleContent,
    },
    counters: {
      state: false,
      dom: ToggleCounters,
    },
    engagements: {
      state: false,
      dom: ToggleEngagements,
    },
  },
  areas: {
    birth: {
      gate: mocIncome,
    },
    search: {
      state: true,
      window: mocSearch,
      stack: mocSearchDetails,
      stat: mocSearchStat,
      scope: searchScope,
      gate: mocToContent,
      exit: mocSearchLeave,
    },
    content: {
      state: false,
      window: mocContent,
      stack: mocContentDetails,
      stat: mocContentStat,
      scope: contentScope,
      gate: mocToForm,
      exit: mocContentLeave,
    },
    form: {
      state: false,
      window: mocForm,
      stack: mocFormDetails,
      stat: mocFormStat,
      scope: formScope,
      gate: mocConverted,
      exit: mocFormLeave,
    },
  },
};

//---------------------------------- Local Storage ----------------------------------//

// Update Local Storage
function updateStorage() {
  let Storage = {
    frame: Meta.frame,
    counters: {
      impressions: {
        var: Meta.counters.impressions.var,
        state: Meta.counters.impressions.state,
      },
      visitors: {
        var: Meta.counters.visitors.var,
        state: Meta.counters.visitors.state,
      },
      engagements: {
        var: Meta.counters.engagements.var,
        state: Meta.counters.engagements.state,
      },
      forms: {
        var: Meta.counters.forms.var,
        state: Meta.counters.forms.state,
      },
    },
    toggles: {
      content: {
        state: Meta.toggles.content.state,
      },
      counters: {
        state: Meta.toggles.counters.state,
      },
      engagements: {
        state: Meta.toggles.engagements.state,
      },
    },
    areas: {
      content: {
        state: Meta.areas.content.state,
      },
      form: {
        state: Meta.areas.form.state,
      },
    },
  };
  localStorage.setItem("Meta", JSON.stringify(Storage));
}

// Check Local Storage
function checkStorage() {
  const response = localStorage.getItem("Meta");
  if (response) {
    const Storage = JSON.parse(response);
    Meta.frame = Storage.frame;
    counterProxy.impressions.var = Storage.counters.impressions.var;
    counterProxy.visitors.var = Storage.counters.visitors.var;
    counterProxy.engagements.var = Storage.counters.engagements.var;
    counterProxy.forms.var = Storage.counters.forms.var;
    counterProxy.impressions.state = Storage.counters.impressions.state;
    counterProxy.visitors.state = Storage.counters.visitors.state;
    counterProxy.engagements.state = Storage.counters.engagements.state;
    counterProxy.forms.state = Storage.counters.forms.state;
    toggleProxy.content.state = Storage.toggles.content.state;
    toggleProxy.counters.state = Storage.toggles.counters.state;
    toggleProxy.engagements.state = Storage.toggles.engagements.state;
    areaProxy.content.state = Storage.areas.content.state;
    areaProxy.form.state = Storage.areas.form.state;
    return;
  }

  updateStorage();
}

//---------------------------------- Areas ----------------------------------//

// Proxy
const areaController = {
  get(target, key) {
    if (typeof target[key] === "object" && target[key] !== null) {
      return new Proxy(target[key], areaController);
    }
    return target[key];
  },
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "state") {
      areaDisplay(target);
    }
  },
};

const areaProxy = new Proxy(Meta.areas, areaController);

// Switch State
function areaSwitch(area, state) {
  if (typeof state !== "undefined") {
    area.state = state;
    return;
  }

  area.state = !area.state;
}

// Update Window
function areaDisplay(area) {
  const wrapper = area.window;
  const pipe = wrapper.previousElementSibling;
  const stack = area.stack;
  const stat = area.stat;
  const gate = area.gate;
  const exit = area.exit;
  if (area.state) {
    tram(pipe)
      .add("opacity 500ms ease")
      .add("height 500ms ease")
      .start({ height: "18em", opacity: 1, wait: "250ms" })
      .then(() => {
        tram(wrapper)
          .add("font-size 500ms ease")
          .start({ fontSize: "1em" })
          .then(() => {
            tram(stack)
              .add("opacity 1ms linear")
              .add("transform 500ms ease-out-circ")
              .start({ x: "0%", opacity: 1 });
            tram(stat)
              .add("opacity 1ms linear")
              .add("transform 500ms ease-out-circ")
              .start({ x: "0%", opacity: 1 });
            tram(gate).add("opacity 500ms ease").start({ opacity: 1 });
            tram(exit).add("opacity 500ms ease").start({ opacity: 1 });
          });
      });
    tram(wrapper).set({ opacity: 1 });
    areaSingle();
  } else {
    tram(gate).add("opacity 500ms ease").start({ opacity: 0 });
    tram(exit).add("opacity 500ms ease").start({ opacity: 0 });
    tram(stat)
      .add("opacity 1ms linear")
      .add("transform 500ms ease-in-circ")
      .start({ x: "-125%" })
      .then({ opacity: 0 });
    tram(stack)
      .add("opacity 1ms linear")
      .add("transform 500ms ease-in-circ")
      .start({ x: "125%" })
      .then({ opacity: 0 })
      .then(() => {
        tram(wrapper)
          .add("font-size 500ms ease")
          .start({ fontSize: "0.25em", wait: "250ms" })
          .then(() => {
            tram(pipe)
              .add("opacity 500ms ease")
              .add("height 500ms ease")
              .start({ height: "0em", opacity: 0 })
              .then(() => {
                tram(wrapper).set({ opacity: 0 });
              });
            areaSingle();
          });
      });
  }
  engagementsDisplay();
}

// Update Engagements
function engagementsDisplay() {
  const cta = mocContentCta;
  const banner = mocContentBanner;
  const ctaMove = (cta.parentNode.offsetWidth - cta.offsetWidth) / 2;
  if (Meta.areas.form.state) {
    tram(cta)
      .add("height 500ms ease-out-circ")
      .add("transform 500ms ease-out-circ")
      .start({
        height: "1.5em",
        x: ctaMove,
      });
    tram(banner).add("width 500ms ease-out-circ").start({ width: "4.5em" });
  } else {
    tram(cta)
      .add("height 500ms ease-out-circ")
      .add("transform 500ms ease-out-circ")
      .start({
        height: "1em",
        x: 0,
      });
    tram(banner).add("width 500ms ease-out-circ").start({ width: "0em" });
  }
}

// Single Area
function areaSingle() {
  let active = [];
  Object.values(Meta.areas).forEach((area) => {
    if (area.state) {
      active.push(area);
    } else {
      const index = active.indexOf(area);
      if (index > -1) {
        active.splice(index, 1);
      }
    }
  });
  if (active.length < 2) {
    tram(active[0].window)
      .add("font-size 500ms ease")
      .start({ fontSize: "1.5em" });
  } else {
    tram(active[0].window)
      .add("font-size 500ms ease")
      .start({ fontSize: "1em" });
  }
}

//---------------------------------- Counters ----------------------------------//

// Proxy
const counterController = {
  get(target, key) {
    if (typeof target[key] === "object" && target[key] !== null) {
      return new Proxy(target[key], counterController);
    }
    return target[key];
  },
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "state") {
      counterBadge(target);
    }
    if (prop === "var") {
      counterVar(target);
    }
  },
};

const counterProxy = new Proxy(Meta.counters, counterController);

// Increase
function counterIncrease(counter) {
  counter.var++;
  updateStorage();
}

// Update DOM Var
function counterVar(counter) {
  counter.dom.innerHTML = counter.var;
}

// Switch State
function counterSwitch(counter, state) {
  if (typeof state !== "undefined") {
    counter.state = state;
    return;
  }

  counter.state = !counter.state;
}

// Update Badge
function counterBadge(counter) {
  const dom = counter.dom;
  const badge = dom.parentNode;

  if (counter.state) {
    tram(badge).add("transform 500ms ease-out-circ").start({ x: "0%" });
  } else {
    tram(badge).add("transform 500ms ease-in-circ").start({ x: "-125%" });
  }
}

//---------------------------------- Toggles ----------------------------------//

// Proxy
const toggleController = {
  get(target, key) {
    if (typeof target[key] === "object" && target[key] !== null) {
      return new Proxy(target[key], toggleController);
    }
    return target[key];
  },
  set(target, prop, value) {
    target[prop] = value;
    toggleDom(target);
  },
};

const toggleProxy = new Proxy(Meta.toggles, toggleController);

// Switch State
function toggleSwitch(toggle, state) {
  if (typeof state !== "undefined") {
    toggle.state = state;
    return;
  }

  toggle.state = !toggle.state;
}

// Set DOM
function toggleDom(toggle) {
  const track = toggle.dom;
  const trackStyle = window.getComputedStyle(track, null);
  const trackSpace =
    track.offsetWidth -
    parseFloat(trackStyle.getPropertyValue("padding-left")) -
    parseFloat(trackStyle.getPropertyValue("padding-right"));
  const trigger = track.firstChild;
  const turnOn = trackSpace - trigger.offsetWidth;

  tram(track).add("background 250ms ease-out-circ");
  tram(trigger).add("transform 250ms ease-out-circ");

  if (toggle.state) {
    tram(track).start({ background: accentColor });
    tram(trigger).start({ x: turnOn });
  } else {
    tram(track).start({ background: lightgreyColor });
    tram(trigger).start({ x: 0 });
  }
}

// Trigger
function toggleTrigger(event) {
  const track = event.currentTarget;
  const name = track.getAttribute("toggle");

  if (toggleProxy[name].state) {
    if (name === "content") {
      counterSwitch(counterProxy.impressions, false);
      counterSwitch(counterProxy.visitors, false);
      counterSwitch(counterProxy.engagements, false);
      counterSwitch(counterProxy.forms, false);
      toggleSwitch(toggleProxy.counters, false);
      toggleSwitch(toggleProxy.engagements, false);
      areaSwitch(areaProxy.content, false);
      areaSwitch(areaProxy.form, false);
      toggleProxy[name].state = false;
    }
    if (name === "counters") {
      counterSwitch(counterProxy.impressions, false);
      counterSwitch(counterProxy.visitors, false);
      counterSwitch(counterProxy.engagements, false);
      counterSwitch(counterProxy.forms, false);
      toggleProxy[name].state = false;
    }
    if (name === "engagements") {
      counterSwitch(counterProxy.engagements, false);
      counterSwitch(counterProxy.forms, false);
      areaSwitch(areaProxy.form, false);
      toggleProxy[name].state = false;
    }
  } else {
    if (name === "content") {
      areaSwitch(areaProxy.content, true);
      toggleProxy[name].state = true;
    }
    if (name === "counters" && Meta.toggles.content.state) {
      counterSwitch(counterProxy.impressions, true);
      counterSwitch(counterProxy.visitors, true);
      if (Meta.toggles.engagements.state) {
        counterSwitch(counterProxy.engagements, true);
        counterSwitch(counterProxy.forms, true);
      }
      toggleProxy[name].state = true;
    }
    if (name === "engagements" && Meta.toggles.content.state) {
      areaSwitch(areaProxy.form, true);
      if (Meta.toggles.counters.state) {
        counterSwitch(counterProxy.engagements, true);
        counterSwitch(counterProxy.forms, true);
      }
      toggleProxy[name].state = true;
    }
  }
}

Object.values(Meta.toggles).forEach((toggle) => {
  toggle.dom.addEventListener("click", toggleTrigger);
});

//---------------------------------- Persons ----------------------------------//

//------- Decision -------//

function personDecision(area) {
  // Skip Bitrh Scope
  if (area === Meta.areas.birth) {
    return { pipe: true };
  }
  // Random Route At Scope
  const random = area.scope[Math.floor(Math.random() * area.scope.length)];
  // Exceptions
  if (area === Meta.areas.search && !Meta.toggles.content.state) {
    const badge = random;
    return { badge: badge, pipe: false };
  }
  if (area === Meta.areas.search) {
    const badge = random;
    const pipe = Math.random() < 0.5;
    return { badge: badge, pipe: pipe };
  }
  if (area === Meta.areas.content && !Meta.toggles.engagements.state) {
    const badge = random.badge;
    return { badge: badge, pipe: false };
  }
  return random;
}

//------- Behavior -------//

function personBehavior(area, route) {
  // Create Badge
  const badgeDiv = document.createElement("div");
  badgeDiv.setAttribute("class", "moc_badge");
  if (route.pipe) {
    badgeDiv.classList.add("converted");
  }
  badgeDiv.innerHTML = route.badge;
  area.stack.prepend(badgeDiv);

  // Update Badge Stack
  const badgeList = area.stack.querySelectorAll(".moc_badge");
  badgeList.forEach((badgeInStack) => {
    const index = Array.prototype.indexOf.call(badgeList, badgeInStack);
    if (index > 2) {
      tram(badgeInStack)
        .add("opacity 225ms ease")
        .add("transform 225ms linear")
        .set({ y: "0%", opacity: 1 })
        .start({ y: "100%", opacity: 0 })
        .then(() => {
          badgeInStack.remove();
        });
    } else {
      tram(badgeInStack)
        .add("transform 250ms linear")
        .set({ y: "0%" })
        .start({ y: "100%" });
    }
  });

  // Animate Created Badge
  tram(badgeDiv)
    .add("opacity 250ms ease")
    .add("transform 250ms linear")
    .set({ opacity: 0, y: "0%" })
    .start({ opacity: 1, y: "100%", wait: "1ms" });
}

//------- Move -------//

function personMove(area) {
  // Decision
  const route = personDecision(area);

  // Spawn
  let person;
  function spawn(pipe) {
    person = document.createElement("div");
    person.setAttribute("class", "moc_person");
    person.innerHTML = mocPersonSvg;
    pipe.appendChild(person);
    tram(person).add("transform 1s linear").add("opacity 250ms ease");
    return person;
  }

  // Here we go
  {
    // Random Gate Position
    const randomLeft = Math.floor(
      Math.random() * (area.gate.offsetWidth - mocPerson.offsetWidth)
    );
    // Birth
    if (area === Meta.areas.birth) {
      spawn(area.gate);
      tram(person)
        .set({ opacity: 0, y: 0, left: randomLeft })
        .start({ opacity: 1, y: area.gate.offsetHeight })
        .then(() => {
          counterIncrease(counterProxy.impressions);
          person.remove();
          personMove(Meta.areas.search);
        });
      return;
    }
    // Random Exit Position
    const randomTop = Math.floor(
      Math.random() * (area.exit.offsetHeight - mocPerson.offsetHeight)
    );
    // Exit
    if (!route.pipe) {
      personBehavior(area, route);
      spawn(area.exit);
      tram(person)
        .set({ top: randomTop, x: 0 })
        .start({ x: area.exit.offsetWidth, wait: "0.75s" })
        .then({ opacity: 0 })
        .then(() => {
          person.remove();
        });
      return;
    }
    // Search
    if (area === Meta.areas.search) {
      personBehavior(area, route);
      spawn(area.gate);
      tram(person)
        .set({ left: randomLeft, y: 0, background: accentColor })
        .start({ y: area.gate.offsetHeight })
        .then(() => {
          counterIncrease(counterProxy.visitors);
          person.remove();
          personMove(Meta.areas.content);
        });
      return;
    }
    // Content
    if (area === Meta.areas.content) {
      personBehavior(area, route);
      counterIncrease(counterProxy.engagements);
      spawn(area.gate);
      tram(person)
        .set({ left: randomLeft, y: 0, background: accentColor })
        .start({ y: area.gate.offsetHeight })
        .then(() => {
          person.remove();
          personMove(Meta.areas.form);
        });
      return;
    }
    // Form
    if (area === Meta.areas.form) {
      personBehavior(area, route);
      counterIncrease(counterProxy.forms);
      spawn(area.gate);
      tram(person)
        .set({ left: randomLeft, y: 0, background: accentColor })
        .start({ y: area.gate.offsetHeight, wait: "0.75s" })
        .then({ opacity: 0 })
        .then(() => {
          person.remove();
        });
      return;
    }
  }
}

//---------------------------------- Start ----------------------------------//

{
  function personBirth(timeStamp) {
    const elapsed = timeStamp - Meta.frame;

    // Start
    if (elapsed <= 0) {
      Meta.frame = timeStamp;
    }

    // Born to be converted to money trough search, reading content, and filling form
    if (elapsed >= 250) {
      personMove(Meta.areas.birth);
      Meta.frame = timeStamp;
    }

    // Recursion
    window.requestAnimationFrame(personBirth);
  }

  checkStorage();
  window.requestAnimationFrame(personBirth);
}
