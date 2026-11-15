import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Bus, S as CalendarCheck, _ as Gem, b as Car, c as Sparkles, d as Plane, f as Phone, g as Hotel, h as Mail, i as UtensilsCrossed, l as ShoppingBag, m as Menu, n as Wind, o as Tent, p as Mountain, r as Waves, s as Star, t as X, u as Ship, v as Compass, x as Camera, y as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DCNf36qI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var trips = [
	{
		id: "city-girl",
		name: "City-Girl Holiday",
		price: 3500,
		length: "5 days · 4 nights",
		region: "Jakarta & Bandung",
		perfectFor: "Shopping lovers, foodies, and people who enjoy luxury.",
		image: "/images/city.jpg",
		imageAlt: "A quiet luxury terrace above a glowing Jakarta skyline at dusk",
		includes: [
			{
				label: "5-star hotel",
				icon: "hotel"
			},
			{
				label: "Airport transfers",
				icon: "bus"
			},
			{
				label: "Breakfast daily",
				icon: "meal"
			},
			{
				label: "Shopping guide",
				icon: "bag"
			},
			{
				label: "Photo stops",
				icon: "camera"
			}
		],
		days: [
			{
				day: 1,
				place: "Jakarta",
				items: [
					"Airport pickup",
					"Check into a 5-star hotel",
					"Welcome dinner",
					"Visit Grand Indonesia Mall"
				]
			},
			{
				day: 2,
				place: "Jakarta",
				items: [
					"Shopping at Plaza Indonesia",
					"Café hopping",
					"Visit Kota Tua (Old Town)",
					"Sunset rooftop dinner"
				]
			},
			{
				day: 3,
				place: "Bandung",
				items: [
					"Travel to Bandung",
					"Visit The Great Asia Africa",
					"Shop at factory outlets",
					"Relax at a luxury spa"
				]
			},
			{
				day: 4,
				place: "Bandung",
				items: [
					"Brunch at a scenic café",
					"Visit Floating Market Lembang",
					"Shopping for souvenirs",
					"Free evening"
				]
			},
			{
				day: 5,
				items: ["Hotel breakfast", "Airport transfer"]
			}
		]
	},
	{
		id: "urban",
		name: "Urban Adventure",
		price: 1999,
		length: "5 days · 4 nights",
		region: "Yogyakarta",
		perfectFor: "Nature lovers and thrill seekers.",
		image: "/images/adventure.jpg",
		imageAlt: "Borobudur temple at sunrise with mist in the valley",
		includes: [
			{
				label: "Jeep tour",
				icon: "car"
			},
			{
				label: "Hot-air balloon",
				icon: "wind"
			},
			{
				label: "Guided hikes",
				icon: "mountain"
			},
			{
				label: "Meals",
				icon: "meal"
			},
			{
				label: "Hotel stay",
				icon: "hotel"
			}
		],
		days: [
			{
				day: 1,
				place: "Yogyakarta",
				items: [
					"Airport pickup",
					"Visit Malioboro Street",
					"Local food tasting"
				]
			},
			{
				day: 2,
				items: [
					"Borobudur sunrise tour",
					"Hot-air balloon experience",
					"Village cycling"
				]
			},
			{
				day: 3,
				items: [
					"Jeep adventure on Mount Merapi",
					"Lava museum",
					"Campfire dinner"
				]
			},
			{
				day: 4,
				items: [
					"Waterfall trekking",
					"Cave tubing",
					"Cultural performance"
				]
			},
			{
				day: 5,
				items: ["Souvenir shopping", "Airport transfer"]
			}
		]
	},
	{
		id: "nomad",
		name: "Chic Nomad",
		price: 2950,
		length: "5 days · 4 nights",
		region: "Bali · Outlander Package",
		perfectFor: "Relaxation and beautiful scenery.",
		image: "/images/bali.jpg",
		imageAlt: "A canvas glamping tent on a Bali cliff above turquoise water",
		includes: [
			{
				label: "Beach resort",
				icon: "waves"
			},
			{
				label: "Luxury glamping",
				icon: "tent"
			},
			{
				label: "Island tour",
				icon: "ship"
			},
			{
				label: "Snorkelling",
				icon: "waves"
			},
			{
				label: "Airport transfers",
				icon: "bus"
			}
		],
		days: [
			{
				day: 1,
				place: "Bali",
				items: [
					"Airport pickup",
					"Beach resort check-in",
					"Sunset dinner"
				]
			},
			{
				day: 2,
				items: [
					"Tanah Lot Temple",
					"Beach picnic",
					"Spa session"
				]
			},
			{
				day: 3,
				items: [
					"Nusa Penida island tour",
					"Snorkelling",
					"Crystal Bay"
				]
			},
			{
				day: 4,
				items: [
					"Luxury glamping",
					"Campfire",
					"Stargazing",
					"BBQ dinner"
				]
			},
			{
				day: 5,
				items: [
					"Morning beach walk",
					"Souvenir shopping",
					"Airport transfer"
				]
			}
		]
	}
];
function money(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(amount);
}
var includeIcons = {
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
	waves: Waves
};
var reasons = [
	{
		icon: Hotel,
		title: "Luxury hotels",
		copy: "Five-star rooms, beach resorts, and glamping picked for quiet, service, and the view."
	},
	{
		icon: CalendarCheck,
		title: "Incredible planning",
		copy: "Transfers, tables, and timing are set before you land. You are never guessing the next stop."
	},
	{
		icon: Compass,
		title: "Top tier guides",
		copy: "Local guides who know the mall floor, the temple gate, the jeep track, and the tide."
	},
	{
		icon: Gem,
		title: "Unique experiences",
		copy: "Rooftop dinners, a Merapi jeep, Nusa Penida, and a night under the stars — not a bus loop."
	}
];
var reviews = [
	{
		name: "Amelia Tan",
		from: "Singapore",
		trip: "City-Girl Holiday",
		quote: "The Jakarta rooftop and the Bandung spa were already booked, never rushed. Their shopping guide knew exactly which floors were worth our time."
	},
	{
		name: "Daniel Okonkwo",
		from: "London",
		trip: "Urban Adventure",
		quote: "Borobudur at sunrise and the Merapi jeep were the best two days of our year. The guide was calm, precise, and never performing for us."
	},
	{
		name: "Priya Menon",
		from: "Kuala Lumpur",
		trip: "Chic Nomad",
		quote: "Nusa Penida and the glamping night were handled end to end. We only had to show up. I would book Indome again without shopping around."
	},
	{
		name: "Mateo Rossi",
		from: "Milan",
		trip: "Urban Adventure",
		quote: "Waterfall trek, cave tubing, and a campfire dinner in one tidy five days. The planning was the part that felt expensive, in the best way."
	}
];
var STORAGE_KEY = "indome-bookings";
var nav = [
	{
		href: "#packages",
		label: "Packages"
	},
	{
		href: "#why",
		label: "Why us"
	},
	{
		href: "#reviews",
		label: "Reviews"
	},
	{
		href: "#book",
		label: "Book"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function todayIso() {
	const now = /* @__PURE__ */ new Date();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	return `${now.getFullYear()}-${month}-${day}`;
}
function IndomePage() {
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [packageId, setPackageId] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [people, setPeople] = (0, import_react.useState)("2");
	const [date, setDate] = (0, import_react.useState)("");
	const [requests, setRequests] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.key === "Escape") setOpenId(null);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	function togglePlan(id) {
		setOpenId((current) => current === id ? null : id);
	}
	function bookThis(id) {
		setPackageId(id);
		setSaved(null);
		setOpenId(null);
		document.getElementById("book")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	const selected = trips.find((trip) => trip.id === packageId);
	const guestCount = Number(people);
	const estimate = selected && Number.isFinite(guestCount) && guestCount > 0 ? selected.price * guestCount : null;
	function onSubmit(event) {
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
		const booking = {
			id: `IND-${Date.now().toString().slice(-6)}`,
			name: trimmed,
			people: count,
			date,
			packageId: selected.id,
			packageName: selected.name,
			requests: requests.trim(),
			total: selected.price * count
		};
		try {
			const previous = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([booking, ...previous].slice(0, 8)));
		} catch {}
		setSaved(booking);
		setError("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-line bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center border border-gold text-gold-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-2xl tracking-wide",
									children: "Indome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-gold-deep",
									children: "Agency"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 md:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "text-sm text-muted hover:text-ink",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "hidden min-h-11 items-center bg-gold-deep px-4 text-sm text-ivory md:inline-flex",
							children: "Book a trip"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-11 w-11 place-items-center border border-line md:hidden",
							"aria-expanded": menuOpen,
							"aria-label": menuOpen ? "Close menu" : "Open menu",
							onClick: () => setMenuOpen((open) => !open),
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-line px-5 py-3 md:hidden",
					"aria-label": "Mobile",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "flex min-h-11 items-center text-ink",
						onClick: () => setMenuOpen(false),
						children: item.label
					}, item.href))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "hero-frame relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.jpg",
							alt: "A sea temple on dark rock at golden hour, tide washing the sand",
							className: "absolute inset-0 h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-frame relative flex items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "m-4 mb-8 w-full max-w-xl bg-paper p-7 sm:m-8 sm:p-10 md:m-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-gold-deep",
										children: "Flights to Indonesia"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-3 font-display text-5xl leading-none text-ink sm:text-6xl",
										children: "Five days, planned to the transfer."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-md text-base leading-relaxed text-muted",
										children: "Indome Agency arranges flights and land journeys through Jakarta, Bandung, Yogyakarta, and Bali. Pick a package. We shape the days around your group."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-col gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#packages",
											className: "inline-flex min-h-11 items-center justify-center bg-gold-deep px-5 text-sm text-ivory",
											children: "View packages"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#book",
											className: "inline-flex min-h-11 items-center justify-center border border-gold-deep px-5 text-sm text-gold-deep",
											children: "Start a booking"
										})]
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "packages",
						className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-gold-deep",
									children: "Packages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
									children: "Three ways to spend five days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base leading-relaxed text-muted",
									children: "Prices are per person for the land stay. Flights are quoted with your booking. Open an itinerary with the package button, and press it again to close."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid items-start gap-6 md:grid-cols-3",
							children: trips.map((trip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
								trip,
								open: openId === trip.id,
								onToggle: () => togglePlan(trip.id),
								onBook: () => bookThis(trip.id)
							}, trip.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "why",
						className: "border-y border-line bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-gold-deep",
									children: "Why Indome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 max-w-xl font-display text-4xl text-ink sm:text-5xl",
									children: "Choose us when the trip should feel looked after."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid gap-8 sm:grid-cols-2",
									children: reasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "border-t border-line pt-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(reason.icon, {
												className: "h-5 w-5 text-gold-deep",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-3xl text-ink",
												children: reason.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 max-w-md text-base leading-relaxed text-muted",
												children: reason.copy
											})
										]
									}, reason.title))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "reviews",
						className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-gold-deep",
								children: "Guest notes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
								children: "What travellers say"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-5 md:grid-cols-2",
								children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "flex flex-col border border-line bg-paper p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1 text-gold",
											"aria-label": "5 out of 5",
											children: Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
												className: "h-4 w-4 fill-current",
												"aria-hidden": "true"
											}, index))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
											className: "mt-4 flex-1 text-base leading-relaxed text-ink",
											children: [
												"“",
												review.quote,
												"”"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-5 text-sm text-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink",
													children: review.name
												}),
												" · ",
												review.from,
												" · ",
												review.trip
											]
										})
									]
								}, review.name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "book",
						className: "border-t border-line bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-gold-deep",
									children: "Booking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
									children: "Tell us who is travelling."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-base leading-relaxed text-muted",
									children: "Send a request with your name, group size, start date, and package. We confirm flights and the final plan by phone or email."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-sm text-muted",
									children: "Land total updates as you choose a package. It does not include flights."
								}),
								estimate !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 font-display text-4xl tabular-nums text-ink",
									children: [money(estimate), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-2 font-sans text-sm text-muted",
										children: [
											"for ",
											guestCount,
											" guests"
										]
									})]
								}) : null
							] }), saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-gold bg-ivory p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs uppercase tracking-widest text-gold-deep",
										children: ["Request ", saved.id]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-4xl text-ink",
										children: "We have your details."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-6 space-y-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Name",
												value: saved.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Package",
												value: saved.packageName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Guests",
												value: String(saved.people)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Start date",
												value: saved.date
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Land total",
												value: money(saved.total)
											}),
											saved.requests ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
												label: "Requests",
												value: saved.requests
											}) : null
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 text-sm leading-relaxed text-muted",
										children: [
											"Call +65 88887987 or email indomeagency@gmail.com and quote ",
											saved.id,
											". This request stays on this device until you send another."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "mt-6 inline-flex min-h-11 items-center border border-gold-deep px-5 text-sm text-gold-deep",
										onClick: () => setSaved(null),
										children: "Make another request"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								className: "grid gap-4",
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full name",
										htmlFor: "guest-name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "guest-name",
											name: "name",
											autoComplete: "name",
											value: name,
											onChange: (event) => setName(event.target.value),
											className: fieldClass,
											placeholder: "Name on the booking"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Number of people",
											htmlFor: "guests",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "guests",
												name: "people",
												type: "number",
												min: 1,
												max: 20,
												inputMode: "numeric",
												value: people,
												onChange: (event) => setPeople(event.target.value),
												className: fieldClass
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Start date",
											htmlFor: "start-date",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "start-date",
												name: "date",
												type: "date",
												min: todayIso(),
												value: date,
												onChange: (event) => setDate(event.target.value),
												className: fieldClass
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Package",
										htmlFor: "package",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "package",
											name: "package",
											value: packageId,
											onChange: (event) => setPackageId(event.target.value),
											className: fieldClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Choose a package"
											}), trips.map((trip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: trip.id,
												children: [
													trip.name,
													" · ",
													money(trip.price),
													" per person"
												]
											}, trip.id))]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Special requests",
										htmlFor: "requests",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "requests",
											name: "requests",
											rows: 4,
											value: requests,
											onChange: (event) => setRequests(event.target.value),
											className: `${fieldClass} py-3`,
											placeholder: "Anniversaries, room type, dietary needs, pace"
										})
									}),
									error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-gold-deep",
										role: "alert",
										children: error
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "inline-flex min-h-12 items-center justify-center bg-gold-deep px-5 text-sm text-ivory",
										children: "Request this trip"
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				id: "contact",
				className: "bg-ink text-ivory",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-gold",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl sm:text-5xl",
							children: "Speak with Indome."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm leading-relaxed text-ivory/80",
							children: "Questions about flights, dates, or which package fits. We answer from Singapore."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-end gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+6588887987",
							className: "inline-flex min-h-11 items-center gap-3 text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "h-5 w-5 text-gold",
								"aria-hidden": "true"
							}), "+65 88887987"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:indomeagency@gmail.com",
							className: "inline-flex min-h-11 items-center gap-3 text-lg break-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "h-5 w-5 shrink-0 text-gold",
								"aria-hidden": "true"
							}), "indomeagency@gmail.com"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-ivory/15 px-5 py-4 text-center text-xs tracking-wide text-ivory/70",
					children: "Indome Agency · Indonesia travel"
				})]
			})
		]
	});
}
var fieldClass = "min-h-12 w-full border border-line bg-ivory px-3 text-base text-ink outline-none focus:border-gold-deep";
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor,
		className: "grid gap-2 text-sm text-muted",
		children: [label, children]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3 border-b border-line pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "w-28 shrink-0 text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-ink",
			children: value
		})]
	});
}
function PackageCard({ trip, open, onToggle, onBook }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "border border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: trip.image,
			alt: trip.imageAlt,
			className: "photo-frame w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-gold-deep",
					children: trip.region
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-3xl leading-none text-ink",
					children: trip.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: trip.length
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-display text-3xl tabular-nums text-ink",
					children: [money(trip.price), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-sans text-sm text-muted",
						children: "per person"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: ["Perfect for: ", trip.perfectFor]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2",
					children: trip.includes.map((item) => {
						const Icon = includeIcons[item.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4 text-gold-deep",
								"aria-hidden": "true"
							}), item.label]
						}, item.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `mt-5 flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left text-sm ${open ? "border border-gold-deep bg-ivory text-ink" : "bg-gold-deep text-ivory"}`,
					"aria-expanded": open,
					"aria-controls": `plan-${trip.id}`,
					onClick: onToggle,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: trip.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `block text-xs ${open ? "text-gold-deep" : "text-ivory/80"}`,
						children: open ? "Close itinerary" : "Open itinerary"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: `h-4 w-4 shrink-0 ${open ? "rotate-180" : ""}`,
						"aria-hidden": "true"
					})]
				}),
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: `plan-${trip.id}`,
					className: "pop-in mt-4 border border-gold bg-ivory p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-gold-deep",
								children: "Travel itinerary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl text-ink",
								children: trip.name
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "h-4 w-4 shrink-0 text-gold",
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "A sample plan, not a fixed clock. Stops can shift with weather, tides, and your pace."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 grid gap-4",
							children: trip.days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-line pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xl text-ink",
									children: [
										"Day ",
										day.day,
										day.place ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-gold-deep",
											children: [" · ", day.place]
										}) : null
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 grid gap-1",
									children: day.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-sm leading-relaxed text-ink",
										children: item
									}, item))
								})]
							}, day.day))
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-3 inline-flex min-h-11 w-full items-center justify-center text-sm text-gold-deep",
					onClick: onBook,
					children: "Book this package"
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndomePage, {});
}
//#endregion
export { Home as component };
