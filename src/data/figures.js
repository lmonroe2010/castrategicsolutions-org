// Every figure the site quotes lives here: the "as of" date and the community
// grant list (SSI / RHH Website Update Package v3, section B6). Update this file
// each quarter. The checks at the bottom run during `npm run build`; if any
// total stops adding up, the build fails and Netlify keeps the last good version.

export const AS_OF = 'October 27, 2026';

export const usd = (n) => '$' + n.toLocaleString('en-US');

// `org` is a stable key per organization, used to count distinct grantees.
// `label` is the cycle subtitle shown above each ledger (word for word);
// `totalsLabel` is the cycle's name in the totals table.
export const CYCLES = [
  {
    key: 'gravenstein',
    label: 'Gravenstein Commons · 2026 · $55,000 · 2 grants',
    totalsLabel: 'Gravenstein Commons, 2026',
    total: 55000,
    grants: [
      { org: 'gravenstein', name: 'Gravenstein Commons (St. Vincent de Paul)', amount: 30000, where: 'Sebastopol', funded: 'Perimeter fence project for 22 apartments of permanent supportive housing.' },
      { org: 'healthy-room', name: 'The Healthy Room Project, for Gravenstein Commons', amount: 25000, where: 'Sebastopol', funded: 'Furniture and household essentials for all 21 resident apartments.' },
    ],
  },
  {
    key: 'q2-2026',
    label: 'Q2 2026 · $75,000 · 8 grants',
    totalsLabel: 'Q2 2026',
    total: 75000,
    grants: [
      { org: 'tlc', name: 'TLC Child & Family Services', amount: 30000, where: 'Santa Rosa', funded: 'Required repairs and improvements to keep an operating transitional-age youth (TAY) house open.' },
      { org: 'childrens-museum', name: "Children's Museum of Sonoma County", amount: 7500, where: 'Santa Rosa', funded: '2027 Wonder Camp scholarships for low-income West County children ages 6–12.' },
      { org: 'csn', name: 'Community Support Network', amount: 7500, where: 'Santa Rosa', funded: 'Supportive housing: nine homes serving more than 200 residents a year, paired with behavioral-health care.' },
      { org: 'living-room', name: 'The Living Room', amount: 7500, where: 'Santa Rosa', funded: 'Daytime drop-in center for women and children experiencing or at risk of homelessness — meals and a path to transitional housing.' },
      { org: 'inter-church-pantry', name: 'Sebastopol Inter-Church Food Pantry', amount: 7500, where: 'Sebastopol', funded: 'Groceries and staples for residents of Sebastopol, Graton, Occidental, Bodega, Freestone and Forestville.' },
      { org: 'refb', name: 'Redwood Empire Food Bank', amount: 5000, where: 'Sonoma County', funded: 'Hunger relief across Sonoma County and Northern California.' },
      { org: 'acts-of-kindness', name: 'Sonoma County Acts of Kindness', amount: 5000, where: 'Santa Rosa', funded: 'All-volunteer mutual aid for unsheltered neighbors.' },
      { org: 'st-marys', name: "St. Mary's College of California — DIRT Program", amount: 5000, where: 'Moraga', funded: 'Student scholarship for the DIRT January Term service-immersion course.' },
    ],
  },
  {
    key: 'q1-2026',
    label: 'Q1 2026 · inaugural cycle · $50,000 · 6 grants',
    totalsLabel: 'Q1 2026',
    total: 50000,
    grants: [
      { org: 'healthy-room', name: 'The Healthy Room Project', amount: 15000, where: 'West County', funded: 'Seed funding to open the first Sonoma County branch, rebuilding bedrooms in a day for children ages 5–16.' },
      { org: 'tlc', name: 'TLC Child & Family Services', amount: 15000, where: 'Santa Rosa', funded: 'Transitional housing for young adults 16–25, including foster youth aging out of care, near Santa Rosa Junior College — housing, job training and life skills.' },
      { org: 'childrens-museum', name: "Children's Museum of Sonoma County", amount: 5000, where: 'Santa Rosa', funded: 'Summer camp scholarships for rural West County children, helping working parents stay employed.' },
      { org: 'refb', name: 'Redwood Empire Food Bank', amount: 5000, where: 'Sonoma County', funded: 'Hunger relief across Sonoma County and Northern California.' },
      { org: 'acts-of-kindness', name: 'Sonoma County Acts of Kindness', amount: 5000, where: 'Santa Rosa', funded: 'All-volunteer mutual aid for unsheltered neighbors — meals, supplies and advocacy, seven days a week.' },
      { org: 'shark', name: 'shARK Education Foundation', amount: 5000, where: 'Occidental', funded: 'Teacher fund for Harmony Elementary and Salmon Creek School — classroom supplies, field trips and books.' },
    ],
  },
];

// Totals table order (B6.3) is chronological.
export const TOTALS_ORDER = ['q1-2026', 'q2-2026', 'gravenstein'];

export const TOTAL = { amount: 180000, grants: 16, organizations: 11 };
const TLC_TOTAL = 45000;

// ---- Arithmetic check (B6.3) — fails the build on any mismatch ------------
const fail = (msg) => { throw new Error(`Grant figures do not add up: ${msg}`); };
const sum = (gs) => gs.reduce((s, g) => s + g.amount, 0);

for (const c of CYCLES) {
  if (sum(c.grants) !== c.total) fail(`${c.totalsLabel} grants sum to ${usd(sum(c.grants))}, not ${usd(c.total)}`);
  if (!c.label.includes(usd(c.total))) fail(`${c.totalsLabel} label does not show ${usd(c.total)}`);
  if (!c.label.includes(`${c.grants.length} grants`)) fail(`${c.totalsLabel} label does not show ${c.grants.length} grants`);
}
const all = CYCLES.flatMap((c) => c.grants);
if (sum(all) !== TOTAL.amount) fail(`all grants sum to ${usd(sum(all))}, not ${usd(TOTAL.amount)}`);
if (all.length !== TOTAL.grants) fail(`${all.length} grants, not ${TOTAL.grants}`);
const orgs = new Set(all.map((g) => g.org)).size;
if (orgs !== TOTAL.organizations) fail(`${orgs} organizations, not ${TOTAL.organizations}`);
if (sum(all.filter((g) => g.org === 'tlc')) !== TLC_TOTAL) fail(`TLC total is not ${usd(TLC_TOTAL)}`);
