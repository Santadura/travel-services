import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import TravelChatWidget from "./components/TravelChatWidget/TravelChatWidget";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Filter,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Star,
  X,
} from "lucide-react";
import { destinations, heroSlides, stories, tours, type Tour } from "./data";
import { contactInfo } from "./contact";
import heroFallback from "./assets/hero.png";
import "./App.css";

const money = (value: number) => `${value.toLocaleString("en-US")} VND`;
const durations = [
  "All durations",
  "1-2 days",
  "3-4 days",
  "5-7 days",
  "8+ days",
];
const budgets = [
  "Any budget",
  "Under 5,000,000 VND",
  "5,000,000 - 10,000,000 VND",
  "10,000,000 - 20,000,000 VND",
  "20,000,000+ VND",
];
const hoiAnImage =
  "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1800&q=85";
const tourNavItems = [
  ["overview", "Overview"],
  ["highlights", "Highlights"],
  ["itinerary", "Itinerary"],
  ["included", "Included"],
  ["policies", "Policies"],
  ["faq", "FAQ"],
  ["reviews", "Reviews"],
] as const;

function SafeImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        const image = event.currentTarget;
        if (image.dataset.fallbackApplied === "true") return;
        image.dataset.fallbackApplied = "true";
        image.src = heroFallback;
      }}
    />
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function Logo() {
  return (
    <Link className="site-logo" to="/">
      <img src="/logo-2pave.svg" alt="2PAVE" />
      <span>
        <b>
          <i>2</i>PAVE
        </b>
        <small>Your Path. Your World</small>
      </span>
    </Link>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>{contactInfo.address}</span>
          <span>
            <Phone size={13} /> {contactInfo.phone} <i>|</i> <Mail size={13} />{" "}
            {contactInfo.email}
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container nav-inner">
          <Logo />
          <nav className={open ? "nav is-open" : "nav"}>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                className="nav-destination"
                onClick={() => setDestinationsOpen(!destinationsOpen)}
              >
                Destinations <ChevronDown size={14} />
              </button>
              {destinationsOpen && (
                <div className="mega-menu">
                  <Link
                    to="/destinations/domestic"
                    onClick={() => {
                      setOpen(false);
                      setDestinationsOpen(false);
                    }}
                  >
                    <span>Domestic</span>
                    <small>Explore Vietnam</small>
                  </Link>
                  <Link
                    to="/destinations/international"
                    onClick={() => {
                      setOpen(false);
                      setDestinationsOpen(false);
                    }}
                  >
                    <span>International</span>
                    <small>Explore the world</small>
                  </Link>
                </div>
              )}
            </div>
            <NavLink to="/news" onClick={() => setOpen(false)}>
              News
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </nav>
          <div className="nav-actions">
            <Link
              className="nav-search"
              to="/destinations/domestic"
              aria-label="Search tours"
            >
              <Search size={18} />
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Thoughtful journeys across Vietnam and beyond, made with local
            knowledge and a lot of heart.
          </p>
          <div className="footer-socials">
            <a href="#footer" aria-label="Travel notes">
              <Compass size={16} />
            </a>
            <a href="#footer" aria-label="Favourite journeys">
              <Heart size={16} />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label="Email 2PAVE">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/destinations/domestic">Domestic journeys</Link>
          <Link to="/destinations/international">International journeys</Link>
          <Link to="/news">Travel stories</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About 2PAVE</Link>
          <Link to="/contact">Contact</Link>
          <a href="#footer">Travel advisors</a>
        </div>
        <div>
          <h3>Say hello</h3>
          <a href={`mailto:${contactInfo.email}`}>
            <Mail size={15} /> {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phoneHref}`}>
            <Phone size={15} /> {contactInfo.phone}
          </a>
          <span>
            <MapPin size={15} /> {contactInfo.address}
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 2PAVE Tourist. All rights reserved.</span>
        <span>Your Path. Your World</span>
      </div>
    </footer>
  );
}
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll(
      "main > section, .tour-card, .story-card, .destination-hero",
    );
    elements.forEach((element) => element.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-intro">{copy}</p>}
    </div>
  );
}
function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="tour-card">
      <Link to={`/tours/${tour.id}`} className="tour-card-image">
        <SafeImage src={tour.image} alt={tour.title} />
        <span>{tour.category}</span>
      </Link>
      <div className="tour-card-body">
        <div className="tour-meta">
          <span>{tour.destination}</span>
          <span>
            <Star size={13} fill="currentColor" /> {tour.rating} ({tour.reviews}
            )
          </span>
        </div>
        <Link to={`/tours/${tour.id}`}>
          <h3>{tour.title}</h3>
        </Link>
        <p className="tour-duration">
          {tour.duration} · From {tour.departure}
        </p>
        <div className="tour-price">
          <div>
            <small>From</small>
            <strong>{money(tour.price)}</strong>
          </div>
          <Link className="text-link" to={`/tours/${tour.id}`}>
            View details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
function SmartSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapper = useRef<HTMLDivElement>(null);
  const normalized = query.trim().toLowerCase();
  const matches = normalized
    ? tours
        .map((tour) => ({
          type: "tour",
          title: tour.title,
          detail: `${tour.duration} · ${money(tour.price)}`,
          to: `/tours/${tour.id}`,
          score:
            tour.destination.toLowerCase() === normalized
              ? 1
              : tour.title.toLowerCase().includes(normalized)
                ? 2
                : `${tour.country} ${tour.category} ${tour.tags.join(" ")} ${tour.departure}`
                      .toLowerCase()
                      .includes(normalized)
                  ? 3
                  : 4,
        }))
        .filter((item) => item.score <= 3)
        .sort((a, b) => a.score - b.score)
        .slice(0, 6)
    : [];
  const destinationMatches = normalized
    ? destinations
        .filter((item) => item.name.toLowerCase().includes(normalized))
        .slice(0, 2)
        .map((item) => ({
          type: "destination",
          title: item.name,
          detail:
            item.region === "domestic"
              ? "Domestic destination"
              : "International destination",
          to: `/destinations/${item.region}?search=${encodeURIComponent(item.name)}`,
          score: 1,
        }))
    : [];
  const storyMatches = normalized
    ? stories
        .filter((item) =>
          `${item.title} ${item.category} ${item.excerpt}`
            .toLowerCase()
            .includes(normalized),
        )
        .slice(0, 2)
        .map((item) => ({
          type: "story",
          title: item.title,
          detail: `${item.category} · ${item.date}`,
          to: `/news/${item.id}`,
          score: 2,
        }))
    : [];
  const suggestions = [...destinationMatches, ...matches, ...storyMatches];
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (wrapper.current && !wrapper.current.contains(event.target as Node))
        setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  const submit = () => {
    if (suggestions[0]) navigate(suggestions[0].to);
    else navigate(`/destinations/domestic?search=${encodeURIComponent(query)}`);
    setOpen(false);
  };
  return (
    <div className="smart-search" ref={wrapper}>
      <div className="search-bar">
        <label htmlFor="home-search">
          <Search size={17} /> Where do you want to go?
        </label>
        <input
          id="home-search"
          value={query}
          onFocus={() => setOpen(Boolean(query))}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") submit();
          }}
          placeholder="Search destinations, tours or stories"
        />
        <button className="button button-primary" onClick={submit}>
          Find a journey <ArrowRight size={16} />
        </button>
      </div>
      {open && normalized && (
        <div className="search-suggestions">
          {suggestions.length ? (
            <>
              {destinationMatches.length > 0 && (
                <SuggestionGroup
                  label="Destinations"
                  items={destinationMatches}
                  onSelect={(to) => {
                    navigate(to);
                    setOpen(false);
                  }}
                />
              )}
              {matches.length > 0 && (
                <SuggestionGroup
                  label="Tours"
                  items={matches}
                  onSelect={(to) => {
                    navigate(to);
                    setOpen(false);
                  }}
                />
              )}
              {storyMatches.length > 0 && (
                <SuggestionGroup
                  label="Travel stories"
                  items={storyMatches}
                  onSelect={(to) => {
                    navigate(to);
                    setOpen(false);
                  }}
                />
              )}
            </>
          ) : (
            <p className="no-suggestions">
              No matching journeys yet. Press enter to search the catalog.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
function SuggestionGroup({
  label,
  items,
  onSelect,
}: {
  label: string;
  items: { title: string; detail: string; to: string }[];
  onSelect: (to: string) => void;
}) {
  return (
    <div className="suggestion-group">
      <span>{label}</span>
      {items.map((item) => (
        <button key={item.to} onClick={() => onSelect(item.to)}>
          <strong>{item.title}</strong>
          <small>{item.detail}</small>
        </button>
      ))}
    </div>
  );
}
function Home() {
  const featured = tours.filter((t) => t.featured).slice(0, 6);
  const [heroIndex, setHeroIndex] = useState(0);
  const seasonalTrack = useRef<HTMLDivElement>(null);
  const destinationShowcase = tours.filter((tour) =>
    [1, 2, 3, 4, 5, 9].includes(tour.id),
  );
  const averageRating = (
    featured.reduce((total, tour) => total + tour.rating, 0) /
    Math.max(featured.length, 1)
  ).toFixed(1);
  const destinationCount = new Set(tours.map((tour) => tour.destination)).size;

  const travelStyles = [
    {
      label: "Nature",
      copy: "Mountains, rivers and open landscapes.",
      tour: tours.find((tour) => tour.id === 4),
      to: "/destinations/domestic?search=Nature",
    },
    {
      label: "Culture",
      copy: "Old towns, heritage and local stories.",
      tour: tours.find((tour) => tour.id === 1),
      to: "/destinations/domestic?search=Culture",
    },
    {
      label: "Coast & islands",
      copy: "Slow days built around the sea.",
      tour: tours.find((tour) => tour.id === 5),
      to: "/destinations/domestic?search=Beach",
    },
    {
      label: "Adventure",
      copy: "Active routes and memorable detours.",
      tour: tours.find((tour) => tour.id === 9),
      to: "/destinations/domestic?search=Adventure",
    },
    {
      label: "Further afield",
      copy: "International journeys with the same care.",
      tour: tours.find((tour) => tour.id === 6),
      to: "/destinations/international",
    },
  ];

  const seasonalJourneys = [
    {
      kicker: "Golden season · Vietnam",
      title: "Rice terraces at their most luminous",
      copy: "Follow mountain roads through Mu Cang Chai when the terraces turn gold and village life slows into harvest rhythm.",
      tour: tours.find((tour) => tour.id === 13),
    },
    {
      kicker: "Autumn · Japan",
      title: "Temple paths under changing leaves",
      copy: "A slower route through Japan built around crisp mornings, seasonal food and the colour of late autumn.",
      tour: tours.find((tour) => tour.id === 24),
    },
    {
      kicker: "Island time · Vietnam",
      title: "Warm water, long lunches, nowhere to rush",
      copy: "Trade the city for quiet beaches, coral gardens and easy evenings by the sea.",
      tour: tours.find((tour) => tour.id === 21),
    },
    {
      kicker: "Cool season · Da Lat",
      title: "Misty mornings and slower hill-town days",
      copy: "Wake to cool air, pine-covered hills and unhurried cafe stops on a gentle escape through Da Lat.",
      tour: tours.find((tour) => tour.id === 18),
    },
    {
      kicker: "Spring · South Korea",
      title: "Island landscapes in a softer season",
      copy: "See Jeju at an easy pace, with coastal roads, volcanic scenery and fresh spring colour around every turn.",
      tour: tours.find((tour) => tour.id === 27),
    },
    {
      kicker: "Heritage season · Vietnam",
      title: "Imperial Hue in its quietest light",
      copy: "Explore citadel walls, garden houses and riverside evenings when central Vietnam feels calm and atmospheric.",
      tour: tours.find((tour) => tour.id === 14),
    },
  ].filter((item) => item.tour);

  const scrollSeasonal = (direction: -1 | 1) => {
    const track = seasonalTrack.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".home-seasonal-card");
    const amount = (card?.offsetWidth ?? track.clientWidth * 0.8) + 22;

    track.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      name: "Linh & Minh",
      trip: "Da Nang · Hoi An",
      quote:
        "The trip felt organised without ever feeling rigid. Every recommendation made sense for how we actually like to travel.",
    },
    {
      name: "Thanh Nguyen",
      trip: "Ha Giang",
      quote:
        "The route had enough highlights, but the best memories were the smaller stops we would never have found by ourselves.",
    },
    {
      name: "Mai Tran",
      trip: "Japan",
      quote:
        "Clear planning, thoughtful hotel choices and quick support made the whole journey feel remarkably easy from start to finish.",
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="hero-photo" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.image}
                className={`hero-slide ${index === heroIndex ? "is-active" : ""}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}
          </div>
          <div className="container hero-content">
            <p className="eyebrow light">Travel with intention</p>
            <h1>
              Find your way
              <br />
              <em>through Vietnam.</em>
            </h1>
            <p>
              Curated journeys, local stories, and thoughtful details for
              travellers who want to go a little deeper.
            </p>
            <Link className="button button-light" to="/destinations/domestic">
              Browse journeys <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="search-wrap homepage-search">
          <div className="container">
            <SmartSearch />
          </div>
        </section>

        <section className="section home-intro">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">The 2PAVE way</p>
              <h2>
                Travel should feel
                <br />
                <em>like a conversation.</em>
              </h2>
            </div>
            <p>
              We connect you with the places, people, and small moments that
              make a journey memorable. Start close to home or follow the road
              further out.
            </p>
          </div>
        </section>

        <section className="section featured-section">
          <div className="container">
            <div className="home-section-head">
              <SectionHeading
                eyebrow="Selected journeys"
                title="Popular ways to go"
                copy="Six journeys we would recommend first — a balanced mix of culture, nature, coast and slow travel."
              />
              <Link
                className="text-link home-section-link"
                to="/destinations/domestic"
              >
                View all journeys <ArrowRight size={16} />
              </Link>
            </div>
            <div className="tour-grid home-featured-grid">
              {featured.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="home-travel-stats">
          <div className="container home-travel-stats-grid">
            <div>
              <strong>{tours.length}+</strong>
              <span>Curated journeys</span>
            </div>
            <div>
              <strong>{destinationCount}</strong>
              <span>Destinations to explore</span>
            </div>
            <div>
              <strong>{averageRating}/5</strong>
              <span>Average guest rating</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Travel support</span>
            </div>
          </div>
        </section>

        <section className="section home-destinations">
          <div className="container">
            <div className="home-section-head">
              <SectionHeading
                eyebrow="Explore Vietnam"
                title="Beautiful places, different rhythms"
                copy="From northern mountains to island mornings, choose a place that matches the pace you want."
              />
              <Link
                className="text-link home-section-link"
                to="/destinations/domestic"
              >
                Explore destinations <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-destination-grid">
              {destinationShowcase.map((tour, index) => (
                <Link
                  key={tour.id}
                  to={`/destinations/${tour.region}?search=${encodeURIComponent(tour.destination)}`}
                  className={`home-destination-card ${index === 0 ? "is-large" : ""}`}
                >
                  <SafeImage src={tour.image} alt={tour.destination} />
                  <span className="home-destination-overlay" />
                  <div>
                    <small>{tour.category}</small>
                    <strong>{tour.destination}</strong>
                    <span>
                      Discover the place <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-seasonal-section">
          <div className="container">
            <div className="home-seasonal-heading">
              <div>
                <p className="eyebrow">Where to go now</p>
                <h2>Travel with the season</h2>
              </div>
              <div className="home-seasonal-heading-right">
                <p>
                  A few timely reasons to leave — chosen for atmosphere, weather
                  and the moments that only happen at a certain time of year.
                </p>
                <div
                  className="home-seasonal-controls"
                  aria-label="Seasonal journeys navigation"
                >
                  <button
                    type="button"
                    onClick={() => scrollSeasonal(-1)}
                    aria-label="Previous seasonal journey"
                  >
                    <ChevronLeft size={19} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollSeasonal(1)}
                    aria-label="Next seasonal journey"
                  >
                    <ChevronRight size={19} />
                  </button>
                </div>
              </div>
            </div>

            <div className="home-seasonal-grid" ref={seasonalTrack}>
              {seasonalJourneys.map(({ kicker, title, copy, tour }, index) => (
                <article
                  key={tour!.id}
                  className={`home-seasonal-card ${index === 0 ? "is-featured" : ""}`}
                >
                  <Link
                    to={`/tours/${tour!.id}`}
                    className="home-seasonal-image"
                  >
                    <SafeImage src={tour!.image} alt={tour!.title} />
                  </Link>
                  <div className="home-seasonal-copy">
                    <span>{kicker}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <div>
                      <strong>From {money(tour!.price)}</strong>
                      <Link className="text-link" to={`/tours/${tour!.id}`}>
                        View journey <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-story-section">
          <div className="container home-story-grid">
            <div className="home-story-visual">
              <SafeImage
                src={featured[0]?.image || heroFallback}
                alt="A thoughtful Vietnam journey"
              />
              <div className="home-story-badge">
                <Compass size={20} />
                <span>
                  <small>Travel differently</small>
                  <strong>Local knowledge, personal journeys</strong>
                </span>
              </div>
            </div>

            <div className="home-story-copy">
              <p className="eyebrow">Plan with 2PAVE</p>
              <h2>
                A journey shaped around
                <br />
                <em>how you want to feel.</em>
              </h2>
              <p>
                We pair practical planning with local perspective, so each route
                has enough structure to feel effortless and enough space to feel
                like your own.
              </p>
              <div className="home-story-points">
                <span>
                  <Check size={17} /> Local routes and considered stays
                </span>
                <span>
                  <Check size={17} /> Clear planning before departure
                </span>
                <span>
                  <Check size={17} /> Real support throughout the journey
                </span>
              </div>
              <Link className="button button-primary" to="/about">
                Get to know us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section home-types-section">
          <div className="container">
            <div className="home-types-heading">
              <p className="eyebrow">Find your kind of journey</p>
              <h2>Choose your travel style</h2>
              <p>
                Start with the feeling you are after, then narrow the route from
                there.
              </p>
            </div>

            <div className="home-type-grid home-type-image-grid">
              {travelStyles.map((style) => (
                <Link
                  key={style.label}
                  to={style.to}
                  className="home-type-image-card"
                >
                  <SafeImage
                    src={style.tour?.image || heroFallback}
                    alt={style.label}
                  />
                  <span className="home-type-image-overlay" />
                  <div>
                    <strong>{style.label}</strong>
                    <small>{style.copy}</small>
                    <span>
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-testimonials">
          <div className="container">
            <div className="home-testimonials-head">
              <div>
                <p className="eyebrow">Traveller notes</p>
                <h2>What stays with our guests</h2>
              </div>
              <p>
                The best feedback is rarely about one landmark. It is about how
                the whole journey felt from the first plan to the last day.
              </p>
            </div>

            <div className="home-testimonial-grid">
              {testimonials.map((testimonial) => (
                <article
                  className="home-testimonial-card"
                  key={testimonial.name}
                >
                  <div
                    className="home-testimonial-stars"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <span>{testimonial.name.slice(0, 1)}</span>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.trip}</small>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-journal">
          <div className="container">
            <div className="home-journal-layout home-journal-editorial">
              <div className="home-journal-intro">
                <p className="eyebrow">From the journal</p>
                <h2>Stories for the road</h2>
                <p>
                  Practical guides, destination notes and observations from the
                  places we keep returning to.
                </p>
                <Link className="text-link" to="/news">
                  Read all stories <ArrowRight size={16} />
                </Link>
              </div>

              <div className="home-journal-feature">
                <StoryCard story={stories[0]} />
              </div>

              <div className="home-journal-list">
                {stories.slice(1, 4).map((story) => (
                  <Link
                    key={story.id}
                    to={`/news/${story.id}`}
                    className="home-journal-row"
                  >
                    <SafeImage src={story.image} alt={story.title} />
                    <div>
                      <span>
                        {story.category} · {story.date}
                      </span>
                      <strong>{story.title}</strong>
                      <small>{story.excerpt}</small>
                    </div>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-final-cta">
          <div className="container home-final-cta-inner">
            <div>
              <p className="eyebrow light">Your path, your world</p>
              <h2>Ready to shape your next journey?</h2>
            </div>
            <Link className="button button-light" to="/contact">
              Talk to a travel advisor <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
function StoryCard({ story }: { story: (typeof stories)[number] }) {
  return (
    <article className="story-card">
      <SafeImage src={story.image} alt={story.title} />
      <div>
        <span>
          {story.category} · {story.date}
        </span>
        <h3>{story.title}</h3>
        <p>{story.excerpt}</p>
        <Link className="text-link" to={`/news/${story.id}`}>
          Read story <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
function FilterSidebar({
  filters,
  setFilters,
  clearFilters,
  region,
  departureOptions,
  destinationOptions,
  categoryOptions,
}: {
  filters: Record<string, string>;
  setFilters: (key: string, value: string) => void;
  clearFilters: () => void;
  region: "domestic" | "international";
  departureOptions: string[];
  destinationOptions: string[];
  categoryOptions: string[];
}) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-title">
        <div>
          <small>PLAN YOUR JOURNEY</small>
          <span>Refine results</span>
        </div>
        <button type="button" onClick={clearFilters}>
          Clear all
        </button>
      </div>

      <label>
        Search
        <div className="filter-search-field">
          <Search size={15} />
          <input
            value={filters.search}
            onChange={(e) => setFilters("search", e.target.value)}
            placeholder="Destination or tour"
          />
        </div>
      </label>

      <label>
        Departure
        <select
          value={filters.departure}
          onChange={(e) => setFilters("departure", e.target.value)}
        >
          {departureOptions.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>

      <label>
        {region === "international" ? "Country" : "Destination"}
        <select
          value={filters.destination}
          onChange={(e) => setFilters("destination", e.target.value)}
        >
          {destinationOptions.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>

      <label>
        Duration
        <select
          value={filters.duration}
          onChange={(e) => setFilters("duration", e.target.value)}
        >
          {durations.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>

      <label>
        Budget
        <select
          value={filters.budget}
          onChange={(e) => setFilters("budget", e.target.value)}
        >
          {budgets.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>

      <label>
        Travel style
        <select
          value={filters.category}
          onChange={(e) => setFilters("category", e.target.value)}
        >
          {categoryOptions.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>
    </aside>
  );
}

function Listing({ region }: { region: "domestic" | "international" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const resultsRef = useRef<HTMLDivElement>(null);
  const initialParams = new URLSearchParams(location.search);

  const defaultFilters = {
    search: initialParams.get("search") || "",
    departure: initialParams.get("departure") || "All departures",
    destination: initialParams.get("destination") || "All destinations",
    duration: initialParams.get("duration") || "All durations",
    budget: initialParams.get("budget") || "Any budget",
    category: initialParams.get("category") || "All categories",
  };

  const [filters, setFilterState] = useState(defaultFilters);
  const [sortBy, setSortBy] = useState(
    initialParams.get("sort") || "recommended",
  );
  const [page, setPage] = useState(
    Math.max(1, Number(initialParams.get("page") || 1)),
  );
  const [mobileFilters, setMobileFilters] = useState(false);

  const regionTours = useMemo(
    () => tours.filter((tour) => tour.region === region),
    [region],
  );

  const departureOptions = useMemo(
    () => [
      "All departures",
      ...Array.from(new Set(regionTours.map((tour) => tour.departure))),
    ],
    [regionTours],
  );

  const destinationOptions = useMemo(
    () => [
      "All destinations",
      ...Array.from(
        new Set(
          regionTours.map((tour) =>
            region === "international" ? tour.country : tour.destination,
          ),
        ),
      ),
    ],
    [region, regionTours],
  );

  const categoryOptions = useMemo(
    () => [
      "All categories",
      ...Array.from(new Set(regionTours.map((tour) => tour.category))),
    ],
    [regionTours],
  );

  const destinationHighlights = useMemo(() => {
    const seen = new Set<string>();
    const highlights: {
      name: string;
      image: string;
      count: number;
      note: string;
    }[] = [];

    regionTours.forEach((tour) => {
      const name = region === "international" ? tour.country : tour.destination;
      if (seen.has(name)) return;
      seen.add(name);
      highlights.push({
        name,
        image: tour.image,
        count: regionTours.filter((item) =>
          region === "international"
            ? item.country === name
            : item.destination === name,
        ).length,
        note:
          region === "international"
            ? `Curated journeys across ${name}`
            : `Thoughtful ways to experience ${name}`,
      });
    });

    return highlights.slice(0, 5);
  }, [region, regionTours]);

  const setFilters = (key: string, value: string) => {
    setFilterState((current) => ({ ...current, [key]: value }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilterState({
      search: "",
      departure: "All departures",
      destination: "All destinations",
      duration: "All durations",
      budget: "Any budget",
      category: "All categories",
    });
    setPage(1);
  };

  const filtered = useMemo(() => {
    const matching = regionTours.filter((tour) => {
      const query = filters.search.trim().toLowerCase();
      const duration = filters.duration;
      const budget = filters.budget;
      const destinationValue =
        region === "international" ? tour.country : tour.destination;

      return (
        (!query ||
          `${tour.title} ${tour.destination} ${tour.country} ${tour.tags.join(" ")}`
            .toLowerCase()
            .includes(query)) &&
        (filters.departure === "All departures" ||
          tour.departure === filters.departure) &&
        (filters.destination === "All destinations" ||
          destinationValue === filters.destination) &&
        (duration === "All durations" ||
          (duration === "1-2 days" && tour.days <= 2) ||
          (duration === "3-4 days" && tour.days >= 3 && tour.days <= 4) ||
          (duration === "5-7 days" && tour.days >= 5 && tour.days <= 7) ||
          (duration === "8+ days" && tour.days >= 8)) &&
        (budget === "Any budget" ||
          (budget === "Under 5,000,000 VND" && tour.price < 5000000) ||
          (budget === "5,000,000 - 10,000,000 VND" &&
            tour.price >= 5000000 &&
            tour.price <= 10000000) ||
          (budget === "10,000,000 - 20,000,000 VND" &&
            tour.price > 10000000 &&
            tour.price <= 20000000) ||
          (budget === "20,000,000+ VND" && tour.price > 20000000)) &&
        (filters.category === "All categories" ||
          tour.category === filters.category)
      );
    });

    return [...matching].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating || b.reviews - a.reviews;
        case "duration":
          return a.days - b.days;
        default:
          return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }
    });
  }, [filters, region, regionTours, sortBy]);

  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paginatedTours = filtered.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  );

  useEffect(() => {
    if (page !== safePage) setPage(safePage);
  }, [page, safePage]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.search.trim()) params.set("search", filters.search.trim());
    if (filters.departure !== "All departures")
      params.set("departure", filters.departure);
    if (filters.destination !== "All destinations")
      params.set("destination", filters.destination);
    if (filters.duration !== "All durations")
      params.set("duration", filters.duration);
    if (filters.budget !== "Any budget") params.set("budget", filters.budget);
    if (filters.category !== "All categories")
      params.set("category", filters.category);
    if (sortBy !== "recommended") params.set("sort", sortBy);
    if (safePage > 1) params.set("page", String(safePage));

    navigate(
      {
        pathname: location.pathname,
        search: params.toString() ? `?${params.toString()}` : "",
      },
      { replace: true },
    );
  }, [filters, location.pathname, navigate, safePage, sortBy]);

  const goToPage = (nextPage: number) => {
    const target = Math.min(Math.max(nextPage, 1), totalPages);
    setPage(target);
    window.requestAnimationFrame(() => {
      if (!resultsRef.current) return;
      const top =
        resultsRef.current.getBoundingClientRect().top + window.scrollY - 115;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const activeFilters = [
    filters.search && { key: "search", label: `“${filters.search}”` },
    filters.departure !== "All departures" && {
      key: "departure",
      label: filters.departure,
    },
    filters.destination !== "All destinations" && {
      key: "destination",
      label: filters.destination,
    },
    filters.duration !== "All durations" && {
      key: "duration",
      label: filters.duration,
    },
    filters.budget !== "Any budget" && {
      key: "budget",
      label: filters.budget,
    },
    filters.category !== "All categories" && {
      key: "category",
      label: filters.category,
    },
  ].filter(Boolean) as { key: string; label: string }[];

  const clearOneFilter = (key: string) => {
    const defaults: Record<string, string> = {
      search: "",
      departure: "All departures",
      destination: "All destinations",
      duration: "All durations",
      budget: "Any budget",
      category: "All categories",
    };
    setFilters(key, defaults[key]);
  };

  const title =
    region === "domestic" ? "Domestic journeys" : "International journeys";

  const guideStories = stories.slice(0, 4);

  return (
    <Layout>
      <main>
        <PageHero
          title={title}
          image={
            region === "domestic"
              ? vietnamImage
              : "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85"
          }
        />

        <section className="destination-discovery">
          <div className="container">
            <div className="destination-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={13} />
              <span>{title}</span>
            </div>

            <div className="destination-intro-copy">
              <div>
                <p className="eyebrow">Explore with more context</p>
                <h2>
                  {region === "domestic"
                    ? "See Vietnam by place, pace and feeling."
                    : "The world is wider than a single itinerary."}
                </h2>
              </div>
              <div className="destination-intro-text">
                <p>
                  {region === "domestic"
                    ? "From highland roads and heritage towns to quiet coastlines, our Vietnam collection is organised so you can begin with a place, then refine the journey around your timing and travel style."
                    : "Browse by country first, then narrow by departure point, duration, budget and travel style. Each journey is designed to make comparison easier without losing the character of the destination."}
                </p>
                <p>
                  {region === "domestic"
                    ? "Choose a destination below for a quick start, or use the detailed filters to build a trip around the way you actually want to travel."
                    : "Start with Japan, Korea, Thailand or China, then use the catalogue tools below to find the route that fits."}
                </p>
              </div>
            </div>

            <div className="destination-highlight-grid">
              {destinationHighlights.map((item) => (
                <button
                  type="button"
                  className={
                    filters.destination === item.name
                      ? "destination-highlight-card is-active"
                      : "destination-highlight-card"
                  }
                  key={item.name}
                  onClick={() => setFilters("destination", item.name)}
                >
                  <SafeImage src={item.image} alt={item.name} />
                  <span className="destination-highlight-shade" />
                  <span className="destination-highlight-copy">
                    <strong>{item.name}</strong>
                    <small>
                      {item.count} {item.count === 1 ? "journey" : "journeys"}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section listing-section" ref={resultsRef}>
          <div className="container">
            <div className="listing-intro">
              <div>
                <p className="eyebrow">Find your next chapter</p>
                <h2>
                  {region === "domestic"
                    ? "Vietnam, from every angle."
                    : "Go further, stay curious."}
                </h2>
              </div>
              <p>
                Browse considered itineraries, compare the details, and refine
                the collection until the right journey appears.
              </p>
            </div>

            <div className="listing-mobile-actions">
              <button
                className="mobile-filter-button"
                onClick={() => setMobileFilters(true)}
              >
                <Filter size={16} /> Filters
                {activeFilters.length > 0 && (
                  <span>{activeFilters.length}</span>
                )}
              </button>

              <label className="mobile-sort">
                <span>Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value);
                    setPage(1);
                  }}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to high</option>
                  <option value="price-high">Price: High to low</option>
                  <option value="rating">Highest rated</option>
                  <option value="duration">Shortest duration</option>
                </select>
              </label>
            </div>

            {activeFilters.length > 0 && (
              <div className="active-filter-row">
                <div className="active-filter-chips">
                  {activeFilters.map((filter) => (
                    <button
                      type="button"
                      key={filter.key}
                      onClick={() => clearOneFilter(filter.key)}
                    >
                      {filter.label} <X size={12} />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="active-filter-clear"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              </div>
            )}

            <div className="listing-layout">
              <div
                className={
                  mobileFilters ? "mobile-filter open" : "mobile-filter"
                }
              >
                <div className="mobile-filter-head">
                  <strong>Filter journeys</strong>
                  <button
                    className="mobile-filter-close"
                    onClick={() => setMobileFilters(false)}
                  >
                    <X size={18} /> Close
                  </button>
                </div>
                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  clearFilters={clearFilters}
                  region={region}
                  departureOptions={departureOptions}
                  destinationOptions={destinationOptions}
                  categoryOptions={categoryOptions}
                />
              </div>

              <div className="desktop-filter">
                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  clearFilters={clearFilters}
                  region={region}
                  departureOptions={departureOptions}
                  destinationOptions={destinationOptions}
                  categoryOptions={categoryOptions}
                />
              </div>

              <div className="results">
                <div className="results-top">
                  <div>
                    <strong>{filtered.length} journeys found</strong>
                    <small>
                      Showing{" "}
                      {filtered.length ? (safePage - 1) * pageSize + 1 : 0}–
                      {Math.min(safePage * pageSize, filtered.length)}
                    </small>
                  </div>

                  <label className="results-sort">
                    <span>Sort by</span>
                    <select
                      value={sortBy}
                      onChange={(event) => {
                        setSortBy(event.target.value);
                        setPage(1);
                      }}
                    >
                      <option value="recommended">Recommended</option>
                      <option value="price-low">Price: Low to high</option>
                      <option value="price-high">Price: High to low</option>
                      <option value="rating">Highest rated</option>
                      <option value="duration">Shortest duration</option>
                    </select>
                  </label>
                </div>

                {filtered.length ? (
                  <>
                    <div className="tour-grid listing-tour-grid">
                      {paginatedTours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <nav
                        className="listing-pagination"
                        aria-label="Tour results pages"
                      >
                        <button
                          type="button"
                          onClick={() => goToPage(safePage - 1)}
                          disabled={safePage === 1}
                          aria-label="Previous page"
                        >
                          <ChevronLeft size={17} />
                        </button>

                        {Array.from(
                          { length: totalPages },
                          (_, index) => index + 1,
                        ).map((number) => (
                          <button
                            type="button"
                            key={number}
                            className={number === safePage ? "is-active" : ""}
                            onClick={() => goToPage(number)}
                          >
                            {number}
                          </button>
                        ))}

                        <button
                          type="button"
                          onClick={() => goToPage(safePage + 1)}
                          disabled={safePage === totalPages}
                          aria-label="Next page"
                        >
                          <ChevronRight size={17} />
                        </button>
                      </nav>
                    )}
                  </>
                ) : (
                  <div className="empty-state">
                    <Compass size={34} />
                    <h3>No tours match your current filters.</h3>
                    <p>Try widening your search or clearing a filter.</p>
                    <button type="button" onClick={clearFilters}>
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="destination-confidence">
          <div className="container">
            <div className="destination-confidence-head">
              <p className="eyebrow">Why travel with 2PAVE</p>
              <h2>Good planning should make the journey feel lighter.</h2>
            </div>
            <div className="destination-confidence-grid">
              <div>
                <span>01</span>
                <strong>Local perspective</strong>
                <p>
                  Routes shaped around places, people and moments worth your
                  time.
                </p>
              </div>
              <div>
                <span>02</span>
                <strong>Clear value</strong>
                <p>
                  Practical itineraries and transparent prices without
                  unnecessary noise.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>Considered choices</strong>
                <p>
                  Stays and experiences selected to fit the rhythm of each
                  journey.
                </p>
              </div>
              <div>
                <span>04</span>
                <strong>Real support</strong>
                <p>
                  A friendly team available before you leave and while you are
                  away.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section destination-guide-section">
          <div className="container destination-guide-grid">
            <article className="destination-guide-copy">
              <p className="eyebrow">Before you go</p>
              <h2>
                {region === "domestic"
                  ? "A better way to explore Vietnam"
                  : "Make room for the place, not just the checklist"}
              </h2>
              <p>
                {region === "domestic"
                  ? "The best domestic journeys balance familiar comfort with enough discovery to make a place feel new. Think in regions, seasons and pace rather than trying to collect every landmark in one trip."
                  : "International travel works best when the route leaves room for neighbourhoods, meals and slower moments between the headline sights. Use the filters above to narrow the practical details, then choose the journey whose rhythm feels right."}
              </p>
              <p>
                {region === "domestic"
                  ? "Northern landscapes reward slower road journeys, central Vietnam brings heritage and coast together, while the south is ideal for food, river life and island time."
                  : "Country, duration and departure point are a useful starting point; travel style and season are what make the final choice personal."}
              </p>
              <Link className="text-link" to="/news">
                Read our travel notes <ArrowRight size={15} />
              </Link>
            </article>

            <aside className="destination-guide-stories">
              <div className="destination-guide-stories-head">
                <span>Travel notes</span>
                <Link to="/news">View all</Link>
              </div>
              {guideStories.map((story) => (
                <Link
                  className="destination-guide-story"
                  to={`/news/${story.id}`}
                  key={story.id}
                >
                  <SafeImage src={story.image} alt={story.title} />
                  <span>
                    <small>
                      {story.category} · {story.date}
                    </small>
                    <strong>{story.title}</strong>
                  </span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}
const vietnamImage =
  "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1800&q=85";
function PageHero({ title, image }: { title: string; image: string }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(27,91,128,.82), rgba(27,91,128,.28)), url(${image})`,
      }}
    >
      <div className="container">
        <p className="eyebrow light">2PAVE Tourist</p>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
function TourDetail() {
  const { tourId } = useParams();
  const tour = tours.find((item) => item.id === Number(tourId));
  const [booking, setBooking] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [showAllDepartures, setShowAllDepartures] = useState(false);
  const [selectedDeparture, setSelectedDeparture] = useState<string>();
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeTourNav, setActiveTourNav] = useState("overview");

  useEffect(() => {
    const sections = tourNavItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveTourNav(visible.target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [tour?.id]);

  if (!tour)
    return (
      <Layout>
        <main className="not-found">
          <h1>Journey not found</h1>
          <Link className="button button-primary" to="/destinations/domestic">
            Back to journeys
          </Link>
        </main>
      </Layout>
    );

  const tourGallery = tour.gallery?.length ? tour.gallery : [tour.image];
  const departureOptions = (tour.departureSchedule || []).flatMap(
    (departure) =>
      departure.dates.map((date) => ({
        date,
        price: departure.price,
      })),
  );
  const bookingDeparture = selectedDeparture || departureOptions[0]?.date;
  const travellerReviews = tour.travellerReviews || [
    {
      initials: "2P",
      name: "2PAVE traveller",
      travelStyle: "Verified guest",
      rating: Math.round(tour.rating),
      comment: "A thoughtfully planned journey with memorable local experiences and excellent support throughout.",
    },
  ];

  return (
    <Layout>
      <main>
        <div className="container breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/destinations/${tour.region}`}>Destinations</Link>
          <ChevronRight size={14} />
          <span>{tour.title}</span>
        </div>

        <section className="tour-detail-hero">
          <div className="container tour-detail-hero-grid">
            <div className="detail-image">
              <SafeImage
                src={tourGallery[activeGalleryImage] || tour.image}
                alt={tour.title}
              />
              {tourGallery.length > 1 && (
                <div className="tour-hero-gallery" aria-label="Tour photo gallery">
                  {tourGallery.map((image, index) => (
                    <button
                      type="button"
                      className={activeGalleryImage === index ? "active" : ""}
                      onClick={() => setActiveGalleryImage(index)}
                      aria-label={`View tour photo ${index + 1}`}
                      key={image}
                    >
                      <SafeImage src={image} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="detail-summary">
              <p className="eyebrow">
                {tour.category} · {tour.destination}
              </p>

              <h1>{tour.title}</h1>

              <p className="tour-hero-tagline">{tour.tagline || tour.description}</p>

              <div className="rating">
                <Star size={16} fill="currentColor" />
                {tour.rating} · {tour.reviews} reviews
              </div>

              <div className="quick-facts">
                <span>
                  <CalendarDays size={18} />
                  <b>Duration</b>
                  <small>{tour.duration}</small>
                </span>

                <span>
                  <MapPin size={18} />
                  <b>Departure</b>
                  <small>{tour.departure}</small>
                </span>

                <span>
                  <Compass size={18} />
                  <b>Group size</b>
                  <small>{tour.groupSize || "Small group"}</small>
                </span>
              </div>

              <div className="price-cta">
                <div>
                  <small>From</small>
                  <strong>{money(tour.price)}</strong>
                </div>

                <button
                  className="button button-primary"
                  onClick={() => setBooking(true)}
                >
                  Book this tour <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <nav className="tour-detail-nav" aria-label="Tour detail navigation">
          <div className="container tour-detail-nav-inner">
            {tourNavItems.map(([id, label]) => (
              <a className={activeTourNav === id ? "active" : ""} href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        <section className="tour-detail-content">
          <div className="container tour-detail-layout">
            <div className="tour-detail-main">
              <section id="overview" className="tour-content-section">
                <p className="eyebrow">About this journey</p>
                <h2>Overview</h2>
                <p className="tour-overview-copy">
                  {tour.description} This journey leaves space for genuine
                  connection, good food, and the unexpected details that make a
                  place feel real.
                </p>

                <div className="tour-quick-facts-card" aria-label="Tour quick facts">
                  <div><small>Duration</small><strong>{tour.duration}</strong></div>
                  <div><small>Departure</small><strong>{tour.departure}</strong></div>
                  <div><small>Group</small><strong>{tour.groupSize || "Small group"}</strong></div>
                  <div><small>Transport</small><strong>{tour.transport || "Comfortable transport"}</strong></div>
                  <div><small>Stay</small><strong>{tour.accommodation || "Accommodation included"}</strong></div>
                </div>

                {tour.departureSchedule && (
                  <div className="tour-departures">
                    <div className="tour-departures-head">
                      <span>Upcoming departures</span>
                      <span>Package price / traveller</span>
                    </div>
                    {tour.departureSchedule
                      .slice(0, showAllDepartures ? undefined : 1)
                      .map((departure) => (
                      <div className="tour-departures-row" key={departure.label}>
                        <div>
                          <strong>{departure.label}</strong>
                          <div className="departure-date-options">
                            {departure.dates.map((date) => (
                              <button
                                className={bookingDeparture === date ? "selected" : ""}
                                type="button"
                                onClick={() => setSelectedDeparture(date)}
                                key={date}
                              >
                                {date}
                              </button>
                            ))}
                          </div>
                        </div>
                        <strong>{money(departure.price)}</strong>
                      </div>
                    ))}
                    {tour.departureSchedule.length > 1 && (
                      <button
                        className={showAllDepartures ? "tour-show-more is-open" : "tour-show-more"}
                        type="button"
                        onClick={() => setShowAllDepartures((isOpen) => !isOpen)}
                        aria-expanded={showAllDepartures}
                      >
                        {showAllDepartures ? "Hide departure dates" : "View all departure dates"}
                        <ChevronDown size={14} />
                      </button>
                    )}
                  </div>
                )}

                {tour.offers && (
                  <div className="tour-offers">
                    <strong>Travel benefits</strong>
                    <ul>
                      {tour.offers.map((offer) => (
                        <li key={offer}>{offer}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </section>

              <section id="highlights" className="tour-content-section">
                <p className="eyebrow">Made to remember</p>
                <h2>Tour highlights</h2>
                <div className="tour-highlight-cards">
                  {(tour.highlightCards || tour.highlights?.map((title) => ({ icon: "✦", title, description: "A considered moment built into this journey." })) || []).map((highlight) => (
                    <article key={highlight.title}>
                      <span>{highlight.icon}</span>
                      <div><h3>{highlight.title}</h3><p>{highlight.description}</p></div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="itinerary" className="tour-content-section">
                <p className="eyebrow">Day by day</p>
                <h2>Itinerary</h2>

                {tour.schedule ? (
                  <div className="itinerary-timeline">
                    {tour.schedule.map((day, index) => {
                      const isOpen = activeDay === index;

                      return (
                        <article
                          className={
                            isOpen ? "itinerary-step is-open" : "itinerary-step"
                          }
                          key={day.day}
                        >
                          <button
                            type="button"
                            className="itinerary-step-header"
                            onClick={() => setActiveDay(isOpen ? -1 : index)}
                            aria-expanded={isOpen}
                          >
                            <span className="itinerary-step-number">
                              <small>DAY</small>
                              <strong>
                                {String(day.day).padStart(2, "0")}
                              </strong>
                            </span>

                            <span className="itinerary-step-title">
                              <small>
                                {day.day === 1
                                  ? "ARRIVAL"
                                  : day.day === tour.schedule!.length
                                    ? "DEPARTURE"
                                    : "EXPERIENCE"}
                              </small>

                              <strong>{day.title}</strong>
                              <em>{day.summary || `${day.timeline[0]?.time || "Flexible timing"} · ${day.timeline.length} planned moments`}</em>
                            </span>

                            <span className="itinerary-step-toggle">
                              <ChevronDown size={20} />
                            </span>
                          </button>

                          <div className="itinerary-step-details">
                            <div>
                              {day.image && (
                                <SafeImage
                                  src={day.image}
                                  alt={day.title}
                                  className="itinerary-day-image"
                                />
                              )}

                              {day.story && <p className="itinerary-day-story">{day.story}</p>}

                              <div className="day-timeline">
                                {day.timeline.map((item) => (
                                  <div className="day-timeline-item" key={`${item.time}-${item.title}`}>
                                    <time>{item.time}</time>
                                    <div>
                                      <strong>{item.title}</strong>
                                      <p>{item.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="schedule-notes">
                                {day.tags.map((item) => (
                                  <span key={item}>{item}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="itinerary-timeline">
                    {tour.itinerary.map((day, index) => (
                      <article className="itinerary-step" key={day}>
                        <div className="itinerary-step-header">
                          <span className="itinerary-step-number">
                            <small>DAY</small>
                            <strong>
                              {String(index + 1).padStart(2, "0")}
                            </strong>
                          </span>

                          <span className="itinerary-step-title">
                            <strong>{day}</strong>
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>

              <section id="policies" className="tour-content-section tour-policies-section">
                <p className="eyebrow">Book with confidence</p>
                <h2>Tour policies</h2>
                <div className="tour-policy-list">
                  {(tour.policies || [
                    { title: "Cancellation policy", description: "Cancellation terms are confirmed with your booking before payment." },
                    { title: "Payment policy", description: "Reserve with a deposit and settle the remaining balance before departure." },
                    { title: "Important notes", description: "The itinerary can be adjusted for weather and local operating conditions." },
                  ]).map((policy, index) => (
                    <details key={policy.title} open={index === 0}>
                      <summary>{policy.title}<ChevronDown size={18} /></summary>
                      <p>{policy.description}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside id="included" className="included-box">
              <div className="tour-booking-panel">
                <p className="eyebrow">Reserve your place</p>
                <small>Tour package price</small>
                <strong>{money(tour.price)}</strong>

                <div className="tour-booking-facts">
                  <span>
                    <CalendarDays size={16} />
                    <b>Duration</b>
                    {tour.duration}
                  </span>
                  {bookingDeparture && (
                    <span>
                      <CalendarDays size={16} />
                      <b>Date</b>
                      {bookingDeparture}
                    </span>
                  )}
                  <span>
                    <MapPin size={16} />
                    <b>Departure</b>
                    {tour.departure}
                  </span>
                </div>

                <button
                  className="button button-primary"
                  onClick={() => setBooking(true)}
                >
                  Book now <ArrowRight size={16} />
                </button>
                <p className="tour-booking-note">
                  Choose your preferred departure date in the booking request.
                </p>
              </div>

              <div className="included-box-heading">
                <p className="eyebrow">Before you go</p>
                <h3>Included & excluded</h3>
              </div>

              <div className="included-group included-group-in">
                <strong>Included</strong>
                {tour.included.map((item) => (
                  <span key={item}>
                    <Check size={15} /> {item}
                  </span>
                ))}
              </div>

              <div className="included-group included-group-out">
                <strong>Not included</strong>
                {tour.excluded.map((item) => (
                  <span key={item}>
                    <X size={15} /> {item}
                  </span>
                ))}
              </div>
              <Link className="included-contact" to="/contact">
                Need help choosing? Contact a consultant <ArrowRight size={14} />
              </Link>
            </aside>
          </div>

          <div className="container tour-detail-secondary">
            <section id="faq" className="tour-content-section tour-faq-section">
              <p className="eyebrow">Plan with confidence</p>
              <h2>Frequently asked questions</h2>
              <div className="tour-faq-list">
                <details open>
                  <summary>What is included in the tour price?<ChevronDown size={18} /></summary>
                  <p>Transportation, listed hotel stays, meals in the itinerary, attraction tickets, and a tour guide are included.</p>
                </details>
                <details>
                  <summary>How do I reserve my place?<ChevronDown size={18} /></summary>
                  <p>Select “Book this tour” to send your preferred date and traveller details. Our consultant will confirm availability with you.</p>
                </details>
                <details>
                  <summary>Is this itinerary suitable for families?<ChevronDown size={18} /></summary>
                  <p>Yes. The route is paced for comfortable sightseeing, with free time and family-friendly cultural experiences throughout.</p>
                </details>
              </div>
            </section>

            <section id="reviews" className="tour-content-section tour-reviews-section">
              <div className="tour-review-heading">
                <p className="eyebrow">Traveller stories</p>
                <h2>Guest reviews</h2>
                <div className="tour-review-score">
                  <strong>{tour.rating}</strong>
                  <div>
                    <span aria-label={`${tour.rating} out of 5 stars`}>
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} size={13} fill="currentColor" />
                      ))}
                    </span>
                    <small>Based on {tour.reviews} verified reviews</small>
                  </div>
                </div>
              </div>
              <div className="tour-review-list">
                {travellerReviews.slice(0, showAllReviews ? undefined : 2).map((review) => (
                  <article className="tour-review-card" key={review.name}>
                    <span className="tour-review-stars">
                      {Array.from({ length: review.rating }, (_, star) => <Star key={star} size={11} fill="currentColor" />)}
                    </span>
                    <blockquote>“{review.comment}”</blockquote>
                    <div className="tour-reviewer">
                      <span>{review.initials}</span>
                      <p><strong>{review.name}</strong>{review.travelStyle}</p>
                    </div>
                  </article>
                ))}
                {travellerReviews.length > 2 && (
                  <button className="tour-all-reviews" type="button" onClick={() => setShowAllReviews((value) => !value)}>
                    {showAllReviews ? "Show fewer reviews" : `View all ${tour.reviews} reviews`}
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </section>
          </div>
        </section>

        <section className="section related-section">
          <div className="container">
            <SectionHeading
              eyebrow="Keep exploring"
              title="You may also like"
            />
            <div className="tour-grid">
              {tours
                .filter(
                  (item) => item.id !== tour.id && item.region === tour.region,
                )
                .slice(0, 3)
                .map((item) => (
                  <TourCard key={item.id} tour={item} />
                ))}
            </div>
          </div>
        </section>
      </main>

      <button className="mobile-tour-booking" onClick={() => setBooking(true)}>
        <span><small>From</small><strong>{money(tour.price)}</strong></span>
        Book now <ArrowRight size={16} />
      </button>

      {booking && (
        <BookingModal
          tour={tour}
          departure={bookingDeparture}
          departureOptions={departureOptions.map((option) => option.date)}
          onClose={() => setBooking(false)}
        />
      )}
    </Layout>
  );
}
function BookingModal({
  tour,
  onClose,
  departure,
  departureOptions,
}: {
  tour: Tour;
  onClose: () => void;
  departure?: string;
  departureOptions: string[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="modal-backdrop">
      <div className="booking-modal">
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>
        {submitted ? (
          <div className="success-state">
            <Check size={34} />
            <h2>Request received</h2>
            <p>
              Thank you. A 2PAVE consultant will be in touch about{" "}
              <strong>{tour.title}</strong>.
            </p>
            <button className="button button-primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Start your journey</p>
            <h2>Book this tour</h2>
            <p className="modal-tour">{tour.title}</p>
            <form onSubmit={submit} className="booking-form">
              <input required placeholder="Full name" />
              <input required type="email" placeholder="Email address" />
              <input required placeholder="Phone number" />
              <div>
                {departureOptions.length ? (
                  <select
                    required
                    aria-label="Departure date"
                    defaultValue={departure}
                  >
                    {departureOptions.map((date) => (
                      <option value={date} key={date}>{date}</option>
                    ))}
                  </select>
                ) : (
                  <input required type="date" aria-label="Departure date" />
                )}
                <input
                  required
                  type="number"
                  min="1"
                  defaultValue="2"
                  aria-label="Number of travellers"
                />
              </div>
              <textarea placeholder="Special request" rows={3} />
              <button className="button button-primary" type="submit">
                Send booking request <ArrowRight size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
function News() {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const featuredStory = stories[0];
  const categories = [
    "All stories",
    "Travel Guide",
    "Places",
    "Experience",
    "Food",
    "Field Notes",
  ];

  const visibleStories =
    activeCategory === "All stories"
      ? stories.slice(1)
      : stories.filter((story) => story.category === activeCategory);

  return (
    <Layout>
      <main>
        <section className="news-hero-v2">
          <div className="container news-hero-v2-grid">
            <div className="news-hero-v2-copy">
              <p className="eyebrow">2PAVE journal</p>
              <h1>
                Stories for people who
                <br />
                <em>travel with curiosity.</em>
              </h1>
              <p>
                Destination notes, practical guides and small observations from
                the road — written to help you travel with more context and less
                rush.
              </p>
              <div className="news-hero-v2-meta">
                <span>{stories.length} stories</span>
                <span>Vietnam & beyond</span>
                <span>Updated regularly</span>
              </div>
            </div>

            <Link className="news-featured" to={`/news/${featuredStory.id}`}>
              <SafeImage src={featuredStory.image} alt={featuredStory.title} />
              <div className="news-featured-overlay" />
              <div className="news-featured-content">
                <span>Featured story · {featuredStory.date}</span>
                <h2>{featuredStory.title}</h2>
                <p>{featuredStory.excerpt}</p>
                <strong>
                  Read story <ArrowRight size={16} />
                </strong>
              </div>
            </Link>
          </div>
        </section>

        <section className="section news-journal-v2">
          <div className="container">
            <div className="news-section-head">
              <div>
                <p className="eyebrow">From the journal</p>
                <h2>Ideas for the road</h2>
              </div>
              <p>
                Browse by what you need now — inspiration, practical planning or
                a closer look at the places themselves.
              </p>
            </div>

            <div className="news-category-tabs" aria-label="Story categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {visibleStories.length ? (
              <div className="news-grid news-grid-v2">
                {visibleStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="news-empty-state">
                <Compass size={24} />
                <p>No stories in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        <section className="news-editorial-strip">
          <div className="container news-editorial-grid">
            <div>
              <span>01</span>
              <h3>Travel guides</h3>
              <p>
                Useful context before you leave, without turning the trip into
                homework.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Place notes</h3>
              <p>
                What makes a destination feel distinct once you move beyond the
                checklist.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Food & culture</h3>
              <p>
                Small rituals, shared tables and local details worth slowing
                down for.
              </p>
            </div>
          </div>
        </section>

        <section className="section news-cta-v2">
          <div className="container news-cta-v2-inner">
            <div>
              <p className="eyebrow light">Turn inspiration into a journey</p>
              <h2>Found somewhere you want to know better?</h2>
            </div>
            <div>
              <p>
                Tell us what caught your attention and we will help shape a
                route around the places, pace and experiences that matter to
                you.
              </p>
              <Link className="button button-light" to="/contact">
                Talk to a travel advisor <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
function NewsDetail() {
  const { articleId } = useParams();
  const story = stories.find((item) => item.id === articleId) || stories[0];
  return (
    <Layout>
      <main>
        <div className="container article">
          <p className="eyebrow">
            {story.category} · {story.date}
          </p>
          <h1>{story.title}</h1>
          <p className="article-lead">{story.excerpt}</p>
          <SafeImage
            className="article-image"
            src={story.image}
            alt={story.title}
          />
          <div className="article-copy">
            <p>
              Travel is often described through its landmarks, but the real
              texture of a place is found in the spaces between them. It is the
              morning market, the shared table, and the road that takes a little
              longer.
            </p>
            <h2>Leave room for the unexpected</h2>
            <p>
              Our favourite journeys balance thoughtful planning with room to
              wander. That balance makes it possible to meet a place on its own
              terms and return with a story that feels like yours.
            </p>
            <p>
              Take your time, ask one more question, and let the small details
              lead. That is where the good stuff tends to be.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
function About() {
  const storyImage =
    "/tours/quy-nhon-da-nang-hoi-an/Screenshot%202026-09-16%20192457.png";
  const peopleCards = [
    {
      title: "Journey designers",
      copy: "The people who turn a wish list into a route with rhythm, context, and room to breathe.",
      image: heroSlides[1]?.image || hoiAnImage,
    },
    {
      title: "Local partners",
      copy: "Guides, hosts, makers, and small businesses who help each place feel specific rather than staged.",
      image: heroSlides[2]?.image || vietnamImage,
    },
    {
      title: "Traveller care",
      copy: "A human point of contact before departure, while you travel, and whenever plans need to flex.",
      image: heroSlides[3]?.image || vietnamImage,
    },
  ];

  return (
    <Layout>
      <main className="about-page">
        <section
          className="about-hero-v2"
          style={{ backgroundImage: `url(${hoiAnImage})` }}
        >
          <div className="about-hero-overlay" />
          <div className="container about-hero-inner">
            <p className="eyebrow light">About 2PAVE</p>
            <h1>
              Travel with a little
              <br />
              <em>more meaning.</em>
            </h1>
            <p className="about-hero-copy">
              We design thoughtful journeys for people who want to understand a
              place, not simply pass through it.
            </p>
            <div className="about-hero-actions">
              <Link className="button button-light" to="/destinations/domestic">
                Explore journeys <ArrowRight size={16} />
              </Link>
              <Link className="about-text-link" to="/contact">
                Talk to a travel advisor
              </Link>
            </div>
          </div>
          <div className="container about-hero-footnote">
            <span>Vietnam-born perspective</span>
            <span>Locally connected</span>
            <span>Thoughtfully paced</span>
          </div>
        </section>

        <section className="section about-story-section">
          <div className="container about-story-grid">
            <div className="about-story-media">
              <SafeImage
                src={storyImage}
                alt="A considered journey through Vietnam"
              />
              <div className="about-story-note">
                <Compass size={18} />
                <span>We begin with the feeling you want from a journey.</span>
              </div>
            </div>
            <div className="about-story-copy">
              <p className="eyebrow">Our story</p>
              <h2>
                Less checklist.
                <br />
                <em>More connection.</em>
              </h2>
              <p>
                2PAVE was built around a simple idea: good travel should feel
                considered without feeling over-planned. The route matters, but
                so do the pauses, conversations, meals, and unexpected turns in
                between.
              </p>
              <p>
                We combine destination knowledge with local relationships to
                shape journeys that feel personal, grounded, and true to the
                character of each place.
              </p>
              <div className="about-story-signature">
                Your Path. Your World.
              </div>
            </div>
          </div>
        </section>

        <section className="section values-section about-values-section">
          <div className="container">
            <div className="about-section-head">
              <SectionHeading
                eyebrow="What guides us"
                title="A better way to go"
                copy="Three principles shape the details, pace, and partnerships behind every 2PAVE journey."
              />
            </div>
            <div className="values-grid about-values-grid">
              <article>
                <b>01</b>
                <Compass size={24} />
                <h3>Curiosity</h3>
                <p>
                  We keep looking beyond the obvious and make room for the
                  stories that give a destination its character.
                </p>
              </article>
              <article>
                <b>02</b>
                <Heart size={24} />
                <h3>Care</h3>
                <p>
                  We make the small decisions thoughtfully, from pacing and
                  stays to the people we choose to work with.
                </p>
              </article>
              <article>
                <b>03</b>
                <MapPin size={24} />
                <h3>Connection</h3>
                <p>
                  We create space for meaningful encounters with local culture,
                  places, and people along the way.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section about-process-section">
          <div className="container">
            <div className="about-section-head about-section-head-split">
              <div>
                <p className="eyebrow">How we work</p>
                <h2>How a journey takes shape</h2>
              </div>
              <p>
                A simple four-step process keeps the planning clear while
                leaving enough space for the trip to still feel like yours.
              </p>
            </div>
            <div className="about-process-grid">
              {[
                [
                  "01",
                  "Listen",
                  "We start with how you like to travel, not with a pre-built itinerary.",
                ],
                [
                  "02",
                  "Curate",
                  "We bring together the right route, stays, experiences, and breathing room.",
                ],
                [
                  "03",
                  "Connect",
                  "Local guides and hosts add the context that turns a stop into a memory.",
                ],
                [
                  "04",
                  "Support",
                  "We stay within reach before departure and while you are on the road.",
                ],
              ].map(([number, title, copy]) => (
                <article className="about-process-step" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-why-section">
          <div className="container about-why-grid">
            <div className="about-why-copy">
              <p className="eyebrow">Why 2PAVE</p>
              <h2>
                Thoughtful planning,
                <br />
                <em>human support.</em>
              </h2>
              <p>
                The best trips feel easy because the difficult decisions have
                already been considered. We focus on the parts that make the
                difference once you arrive.
              </p>
              <div className="about-benefit-list">
                <div>
                  <Check size={17} />
                  <span>
                    <strong>Local knowledge</strong>
                    Routes shaped around what makes each place distinct.
                  </span>
                </div>
                <div>
                  <Check size={17} />
                  <span>
                    <strong>Handpicked experiences</strong>
                    Fewer generic stops, more experiences worth remembering.
                  </span>
                </div>
                <div>
                  <Check size={17} />
                  <span>
                    <strong>Thoughtful pacing</strong>
                    Enough structure to feel confident, enough room to wander.
                  </span>
                </div>
                <div>
                  <Check size={17} />
                  <span>
                    <strong>Real support</strong>A person to reach when a
                    question or change comes up.
                  </span>
                </div>
              </div>
            </div>
            <div className="about-why-media">
              <SafeImage
                src={
                  tours.find((tour) => tour.destination === "Ninh Binh")
                    ?.image || vietnamImage
                }
                alt="Thoughtfully planned travel in Vietnam"
              />
              <div className="about-why-card">
                <Phone size={19} />
                <div>
                  <small>Traveller care</small>
                  <strong>Support that stays human.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-people-section">
          <div className="container">
            <div className="about-section-head about-section-head-split">
              <div>
                <p className="eyebrow">Behind the journey</p>
                <h2>Good travel is a team effort.</h2>
              </div>
              <p>
                Every journey brings together different kinds of expertise, from
                route design to local insight and traveller care.
              </p>
            </div>
            <div className="about-people-grid">
              {peopleCards.map((item) => (
                <article className="about-people-card" key={item.title}>
                  <div className="about-people-image">
                    <SafeImage src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-purpose-section">
          <div className="container about-purpose-grid">
            <div>
              <p className="eyebrow light">Travel with purpose</p>
              <h2>
                Better journeys should
                <br />
                <em>benefit the places we visit.</em>
              </h2>
            </div>
            <div className="about-purpose-copy">
              <p>
                We favour experiences that respect local culture, support local
                businesses, and encourage travellers to spend more meaningful
                time in each place.
              </p>
              <div className="about-purpose-points">
                <span>
                  <Check size={16} /> Work with local guides and hosts
                </span>
                <span>
                  <Check size={16} /> Choose smaller, characterful experiences
                </span>
                <span>
                  <Check size={16} /> Respect communities, culture, and place
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-stats-section">
          <div className="container about-stats-grid">
            <div>
              <strong>{destinations.length}+</strong>
              <span>destinations to explore</span>
            </div>
            <div>
              <strong>{tours.length}+</strong>
              <span>curated journeys</span>
            </div>
            <div>
              <strong>{stories.length}+</strong>
              <span>travel stories</span>
            </div>
            <div>
              <strong>3</strong>
              <span>principles that guide us</span>
            </div>
          </div>
        </section>

        <section className="about-quote-section">
          <SafeImage
            src={
              tours.find((tour) => tour.destination === "Ha Long Bay")?.image ||
              vietnamImage
            }
            alt="Ha Long Bay journey"
          />
          <div className="about-quote-overlay" />
          <div className="container about-quote-content">
            <p className="eyebrow light">Our point of view</p>
            <blockquote>
              “The best journeys leave room for the unexpected.”
            </blockquote>
            <p>
              Plan the important parts. Leave space for the moments you could
              never have scheduled.
            </p>
          </div>
        </section>

        <section className="section about-cta about-cta-v2">
          <div className="container about-cta-inner">
            <div>
              <p className="eyebrow">Your path starts here</p>
              <h2>
                Where will your path
                <br />
                <em>lead next?</em>
              </h2>
            </div>
            <div>
              <p>
                Explore our journeys or tell us what kind of trip you have in
                mind. We will help shape the rest.
              </p>
              <div className="about-cta-actions">
                <Link
                  className="button button-primary"
                  to="/destinations/domestic"
                >
                  Explore journeys <ArrowRight size={16} />
                </Link>
                <Link className="button button-secondary" to="/contact">
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <main>
        <section className="contact-hero-v2">
          <div className="contact-hero-v2-photo" />
          <div className="container contact-hero-v2-inner">
            <p className="eyebrow light">Start a conversation</p>
            <h1>
              Your next journey can start
              <br />
              <em>with a simple hello.</em>
            </h1>
            <p>
              Share what you have in mind — even if it is only a place, a date
              or a feeling. We will help turn it into a thoughtful route.
            </p>
          </div>
        </section>

        <section className="section contact-main-v2">
          <div className="container contact-main-v2-grid">
            <div className="contact-intro-v2">
              <p className="eyebrow">Get in touch</p>
              <h2>
                Tell us what kind of
                <br />
                <em>journey feels right.</em>
              </h2>
              <p className="contact-intro-copy">
                You do not need to have every detail figured out. Our travel
                advisors can help with destinations, pacing, route ideas and the
                practical details that make a trip easier to enjoy.
              </p>

              <div className="contact-methods-v2">
                <a href={`mailto:${contactInfo.email}`}>
                  <span className="contact-method-icon">
                    <Mail size={18} />
                  </span>
                  <span>
                    <small>Email us</small>
                    <strong>{contactInfo.email}</strong>
                  </span>
                  <ArrowRight size={16} />
                </a>
                <a href={`tel:${contactInfo.phoneHref}`}>
                  <span className="contact-method-icon">
                    <Phone size={18} />
                  </span>
                  <span>
                    <small>Call us</small>
                    <strong>{contactInfo.phone}</strong>
                  </span>
                  <ArrowRight size={16} />
                </a>
                <div>
                  <span className="contact-method-icon">
                    <MapPin size={18} />
                  </span>
                  <span>
                    <small>Our office</small>
                    <strong>{contactInfo.address}</strong>
                  </span>
                </div>
              </div>

              <div className="contact-note-v2">
                <Compass size={20} />
                <p>
                  Planning something more tailored? Tell us the pace, interests
                  and moments you want the journey to make room for.
                </p>
              </div>
            </div>

            <div className="contact-form-card-v2">
              {sent ? (
                <div className="success-state contact-success-v2">
                  <span className="contact-success-icon">
                    <Check size={30} />
                  </span>
                  <p className="eyebrow">Message received</p>
                  <h2>Thank you for reaching out.</h2>
                  <p>
                    A member of the 2PAVE team will follow up and help take the
                    next step with you.
                  </p>
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form-heading-v2">
                    <p className="eyebrow">Plan with us</p>
                    <h2>What are you dreaming about?</h2>
                    <p>
                      Give us as much or as little detail as you have. We can
                      work from there.
                    </p>
                  </div>

                  <form
                    className="contact-form contact-form-v2"
                    onSubmit={(event) => {
                      event.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div className="contact-form-row-v2">
                      <label>
                        <span>Your name</span>
                        <input required placeholder="Full name" />
                      </label>
                      <label>
                        <span>Email address</span>
                        <input
                          required
                          type="email"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <div className="contact-form-row-v2">
                      <label>
                        <span>Phone number</span>
                        <input placeholder="Optional" />
                      </label>
                      <label>
                        <span>Where are you thinking?</span>
                        <input placeholder="Vietnam, Japan, not sure yet..." />
                      </label>
                    </div>

                    <div className="contact-form-row-v2">
                      <label>
                        <span>Trip style</span>
                        <select defaultValue="">
                          <option value="" disabled>
                            Choose a style
                          </option>
                          <option>Culture & heritage</option>
                          <option>Nature & adventure</option>
                          <option>Beach & island</option>
                          <option>Food & local life</option>
                          <option>Family journey</option>
                          <option>Something tailored</option>
                        </select>
                      </label>
                      <label>
                        <span>When would you like to travel?</span>
                        <input
                          type="text"
                          placeholder="Month, season or flexible"
                        />
                      </label>
                    </div>

                    <label>
                      <span>Tell us a little more</span>
                      <textarea
                        required
                        rows={6}
                        placeholder="What would make this trip feel right for you?"
                      />
                    </label>

                    <div className="contact-form-footer-v2">
                      <small>
                        By submitting this form, you are asking our team to
                        contact you about your travel enquiry.
                      </small>
                      <button className="button button-primary" type="submit">
                        Send enquiry <ArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="contact-process-v2">
          <div className="container">
            <div className="contact-process-head-v2">
              <p className="eyebrow">What happens next</p>
              <h2>A simple start to a considered journey.</h2>
            </div>
            <div className="contact-process-grid-v2">
              <div>
                <span>01</span>
                <h3>We listen</h3>
                <p>
                  We start with your priorities, pace, dates and the kind of
                  moments you want.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>We shape the route</h3>
                <p>
                  We turn those ideas into a practical itinerary with thoughtful
                  places to stop.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>We refine together</h3>
                <p>
                  We adjust the details until the journey feels balanced,
                  personal and ready to go.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-faq-v2">
          <div className="container contact-faq-v2-grid">
            <div>
              <p className="eyebrow">Before you write</p>
              <h2>Good to know</h2>
            </div>
            <div className="contact-faq-list-v2">
              <div>
                <h3>Do I need to know exactly where I want to go?</h3>
                <p>
                  No. A region, travel style or even a rough idea is enough to
                  start the conversation.
                </p>
              </div>
              <div>
                <h3>Can you help with a custom itinerary?</h3>
                <p>
                  Yes. Tell us your priorities and we can shape the route around
                  your pace and interests.
                </p>
              </div>
              <div>
                <h3>Can I ask about an existing 2PAVE tour?</h3>
                <p>
                  Absolutely. Include the tour name in your message and we can
                  help with the next steps.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
function ListingRoute() {
  const { region } = useParams();
  return (
    <Listing
      key={region}
      region={region === "international" ? "international" : "domestic"}
    />
  );
}
function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:region" element={<ListingRoute />} />
        <Route path="/tours/:tourId" element={<TourDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:articleId" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <TravelChatWidget />
    </BrowserRouter>
  );
}
export default App;
