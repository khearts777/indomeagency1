import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Bus,
  CalendarCheck,
  Camera,
  Car,
  ChevronDown,
  Compass,
  Gem,
  Hotel,
  Mail,
  Menu,
  Mountain,
  Phone,
  Plane,
  Ship,
  ShoppingBag,
  Sparkles,
  Star,
  Tent,
  UtensilsCrossed,
  Waves,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";
import { money, trips, type IncludeIcon, type Trip } from "@/data/trips";

const includeIcons: Record<IncludeIcon, LucideIcon> = {
  hotel: Hotel,
  bus: Bus,
  meal: UtensilsCrossed,
  bag: ShoppingBag,
  camera: Camera,
  car: Car,
  wind: Wind,
  mountain: Mountain,
  tent: Tent,
  ship: Ship,
  waves: Waves,
};

const reasons = [
  {
    icon: Hotel,
    title: "Luxury hotels",
    copy: "Five-star rooms, beach resorts, and glamping picked for quiet, service, and the view.",
  },
  {
    icon: CalendarCheck,
    title: "Incredible planning",
    copy: "Transfers, tables, and timing are set before you land. You are never guessing the next stop.",
  },
  {
    icon: Compass,
    title: "Top tier guides",
    copy: "Local guides who know the mall floor, the temple gate, the jeep track, and the tide.",
  },
  {
    icon: Gem,
    title: "Unique experiences",
    copy: "Rooftop dinners, a Merapi jeep, Nusa Penida, and a night under the stars — not a bus loop.",
  },
];

const reviews = [
  {
    name: "Amelia Tan",
    from: "Singapore",
    trip: "City-Girl Holiday",
    quote:
      "The Jakarta rooftop and the Bandung spa were already booked, never rushed. Their shopping guide knew exactly which floors were worth our time.",
  },
  {
    name: "Daniel Okonkwo",
    from: "London",
    trip: "Urban Adventure",
    quote:
      "Borobudur at sunrise and the Merapi jeep were the best two days of our year. The guide was calm, precise, and never performing for us.",
  },
  {
    name: "Priya Menon",
    from: "Kuala Lumpur",
    trip: "Chic Nomad",
    quote:
      "Nusa Penida and the glamping night were handled end to end. We only had to show up. I would book Indome again without shopping around.",
  },
  {
    name: "Mateo Rossi",
    from: "Milan",
    trip: "Urban Adventure",
    quote:
      "Waterfall trek, cave tubing, and a campfire dinner in one tidy five days. The planning was the part that felt expensive, in the best way.",
  },
];

type Booking = {
  id: string;
  name: string;
  people: number;
  date: string;
  packageId: string;
  packageName: string;
  requests: string;
  total: number;
};

const STORAGE_KEY = "indome-bookings";

const nav = [
  { href: "#packages", label: "Packages" },
  { href: "#why", label: "Why us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function IndomePage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [packageId, setPackageId] = useState("");
  const [name, setName] = useState("");
  const [people, setPeople] = useState("2");
  const [date, setDate] = useState("");
  const [requests, setRequests] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Booking | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function togglePlan(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  function bookThis(id: string) {
    setPackageId(id);
    setSaved(null);
    setOpenId(null);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const selected = trips.find((trip) => trip.id === packageId);
  const guestCount = Number(people);
  const estimate =
    selected && Number.isFinite(guestCount) && guestCount > 0 ? selected.price * guestCount : null;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    const count = Number(people);
    if (!trimmed) {
      setError("Add the name the booking should be under.");
      return;
    }
    if (!Number.isInteger(count) || count < 1 || count > 20) {
      setError("Tell us how many people are going, from 1 to 20.");
      return;
    }
    if (!date) {
      setError("Choose a start date.");
      return;
    }
    if (date < todayIso()) {
      setError("Pick a start date that is today or later.");
      return;
    }
    if (!selected) {
      setError("Choose a package.");
      return;
    }
    const booking: Booking = {
      id: `IND-${Date.now().toString().slice(-6)}`,
      name: trimmed,
      people: count,
      date,
      packageId: selected.id,
      packageName: selected.name,
      requests: requests.trim(),
      total: selected.price * count,
    };
    try {
      const previous = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Booking[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([booking, ...previous].slice(0, 8)));
    } catch {
      /* this device may block storage; the confirmation still shows */
    }
    setSaved(booking);
    setError("");
  }

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-gold text-gold-deep">
              <Plane className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-wide">Indome</span>
              <span className="block text-xs uppercase tracking-widest text-gold-deep">Agency</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="hidden min-h-11 items-center bg-gold-deep px-4 text-sm text-ivory md:inline-flex"
          >
            Book a trip
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-line md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="hero-frame relative">
          <img
            src="/images/hero.jpg"
            alt="A sea temple on dark rock at golden hour, tide washing the sand"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-frame relative flex items-end">
            <div className="m-4 mb-8 w-full max-w-xl bg-paper p-7 sm:m-8 sm:p-10 md:m-12">
              <p className="text-xs uppercase tracking-widest text-gold-deep">Flights to Indonesia</p>
              <h1 className="mt-3 font-display text-5xl leading-none text-ink sm:text-6xl">
                Five days, planned to the transfer.
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Indome Agency arranges flights and land journeys through Jakarta, Bandung, Yogyakarta,
                and Bali. Pick a package. We shape the days around your group.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#packages"
                  className="inline-flex min-h-11 items-center justify-center bg-gold-deep px-5 text-sm text-ivory"
                >
                  View packages
                </a>
                <a
                  href="#book"
                  className="inline-flex min-h-11 items-center justify-center border border-gold-deep px-5 text-sm text-gold-deep"
                >
                  Start a booking
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-gold-deep">Packages</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Three ways to spend five days</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Prices are per person for the land stay. Flights are quoted with your booking. Open an
              itinerary with the package button, and press it again to close.
            </p>
          </div>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
            {trips.map((trip) => (
              <PackageCard
                key={trip.id}
                trip={trip}
                open={openId === trip.id}
                onToggle={() => togglePlan(trip.id)}
                onBook={() => bookThis(trip.id)}
              />
            ))}
          </div>
        </section>

        <section id="why" className="border-y border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="text-xs uppercase tracking-widest text-gold-deep">Why Indome</p>
            <h2 className="mt-2 max-w-xl font-display text-4xl text-ink sm:text-5xl">
              Choose us when the trip should feel looked after.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.title} className="border-t border-line pt-5">
                  <reason.icon className="h-5 w-5 text-gold-deep" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-3xl text-ink">{reason.title}</h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-muted">{reason.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-xs uppercase tracking-widest text-gold-deep">Guest notes</p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">What travellers say</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map((review) => (
              <figure key={review.name} className="flex flex-col border border-line bg-paper p-6">
                <div className="flex gap-1 text-gold" aria-label="5 out of 5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="text-ink">{review.name}</span>
                  {" · "}
                  {review.from}
                  {" · "}
                  {review.trip}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="book" className="border-t border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-deep">Booking</p>
              <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Tell us who is travelling.</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Send a request with your name, group size, start date, and package. We confirm flights and
                the final plan by phone or email.
              </p>
              <p className="mt-6 text-sm text-muted">
                Land total updates as you choose a package. It does not include flights.
              </p>
              {estimate !== null ? (
                <p className="mt-3 font-display text-4xl tabular-nums text-ink">
                  {money(estimate)}
                  <span className="ml-2 font-sans text-sm text-muted">for {guestCount} guests</span>
                </p>
              ) : null}
            </div>

            {saved ? (
              <div className="border border-gold bg-ivory p-6 sm:p-8">
                <p className="text-xs uppercase tracking-widest text-gold-deep">Request {saved.id}</p>
                <h3 className="mt-2 font-display text-4xl text-ink">We have your details.</h3>
                <dl className="mt-6 space-y-3 text-sm">
                  <Row label="Name" value={saved.name} />
                  <Row label="Package" value={saved.packageName} />
                  <Row label="Guests" value={String(saved.people)} />
                  <Row label="Start date" value={saved.date} />
                  <Row label="Land total" value={money(saved.total)} />
                  {saved.requests ? <Row label="Requests" value={saved.requests} /> : null}
                </dl>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  Call +65 88887987 or email indomeagency@gmail.com and quote {saved.id}. This request stays
                  on this device until you send another.
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex min-h-11 items-center border border-gold-deep px-5 text-sm text-gold-deep"
                  onClick={() => setSaved(null)}
                >
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4" noValidate>
                <Field label="Full name" htmlFor="guest-name">
                  <input
                    id="guest-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={fieldClass}
                    placeholder="Name on the booking"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Number of people" htmlFor="guests">
                    <input
                      id="guests"
                      name="people"
                      type="number"
                      min={1}
                      max={20}
                      inputMode="numeric"
                      value={people}
                      onChange={(event) => setPeople(event.target.value)}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Start date" htmlFor="start-date">
                    <input
                      id="start-date"
                      name="date"
                      type="date"
                      min={todayIso()}
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                      className={fieldClass}
                    />
                  </Field>
                </div>
                <Field label="Package" htmlFor="package">
                  <select
                    id="package"
                    name="package"
                    value={packageId}
                    onChange={(event) => setPackageId(event.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Choose a package</option>
                    {trips.map((trip) => (
                      <option key={trip.id} value={trip.id}>
                        {trip.name} · {money(trip.price)} per person
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Special requests" htmlFor="requests">
                  <textarea
                    id="requests"
                    name="requests"
                    rows={4}
                    value={requests}
                    onChange={(event) => setRequests(event.target.value)}
                    className={`${fieldClass} py-3`}
                    placeholder="Anniversaries, room type, dietary needs, pace"
                  />
                </Field>
                {error ? (
                  <p className="text-sm text-gold-deep" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center bg-gold-deep px-5 text-sm text-ivory"
                >
                  Request this trip
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold">Contact</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Speak with Indome.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/80">
              Questions about flights, dates, or which package fits. We answer from Singapore.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <a href="tel:+6588887987" className="inline-flex min-h-11 items-center gap-3 text-lg">
              <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
              +65 88887987
            </a>
            <a
              href="mailto:indomeagency@gmail.com"
              className="inline-flex min-h-11 items-center gap-3 text-lg break-all"
            >
              <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              indomeagency@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-ivory/15 px-5 py-4 text-center text-xs tracking-wide text-ivory/70">
          Indome Agency · Indonesia travel
        </div>
      </footer>
    </div>
  );
}

const fieldClass =
  "min-h-12 w-full border border-line bg-ivory px-3 text-base text-ink outline-none focus:border-gold-deep";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-sm text-muted">
      {label}
      {children}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 border-b border-line pb-3">
      <dt className="w-28 shrink-0 text-muted">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function PackageCard({
  trip,
  open,
  onToggle,
  onBook,
}: {
  trip: Trip;
  open: boolean;
  onToggle: () => void;
  onBook: () => void;
}) {
  return (
    <article className="border border-line bg-paper">
      <img src={trip.image} alt={trip.imageAlt} className="photo-frame w-full object-cover" />
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-gold-deep">{trip.region}</p>
        <h3 className="mt-2 font-display text-3xl leading-none text-ink">{trip.name}</h3>
        <p className="mt-3 text-sm text-muted">{trip.length}</p>
        <p className="mt-1 font-display text-3xl tabular-nums text-ink">
          {money(trip.price)}
          <span className="ml-2 font-sans text-sm text-muted">per person</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">Perfect for: {trip.perfectFor}</p>
        <ul className="mt-4 grid gap-2">
          {trip.includes.map((item) => {
            const Icon = includeIcons[item.icon];
            return (
              <li key={item.label} className="flex items-center gap-2 text-sm text-ink">
                <Icon className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                {item.label}
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className={`mt-5 flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left text-sm ${
            open ? "border border-gold-deep bg-ivory text-ink" : "bg-gold-deep text-ivory"
          }`}
          aria-expanded={open}
          aria-controls={`plan-${trip.id}`}
          onClick={onToggle}
        >
          <span>
            <span className="block">{trip.name}</span>
            <span className={`block text-xs ${open ? "text-gold-deep" : "text-ivory/80"}`}>
              {open ? "Close itinerary" : "Open itinerary"}
            </span>
          </span>
          <ChevronDown className={`h-4 w-4 shrink-0 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
        {open ? (
          <div id={`plan-${trip.id}`} className="pop-in mt-4 border border-gold bg-ivory p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-deep">Travel itinerary</p>
                <p className="mt-1 font-display text-2xl text-ink">{trip.name}</p>
              </div>
              <Sparkles className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A sample plan, not a fixed clock. Stops can shift with weather, tides, and your pace.
            </p>
            <ol className="mt-4 grid gap-4">
              {trip.days.map((day) => (
                <li key={day.day} className="border-t border-line pt-3">
                  <p className="font-display text-xl text-ink">
                    Day {day.day}
                    {day.place ? <span className="text-gold-deep"> · {day.place}</span> : null}
                  </p>
                  <ul className="mt-2 grid gap-1">
                    {day.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        <button
          type="button"
          className="mt-3 inline-flex min-h-11 w-full items-center justify-center text-sm text-gold-deep"
          onClick={onBook}
        >
          Book this package
        </button>
      </div>
    </article>
  );
}
