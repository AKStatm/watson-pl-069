// n8n Code node — Prepare Lead
// Required columns only: Lead ID, Business Name
// Paste ALL of this into the Code node (mode: Run Once for All Items)

function pick(row, names) {
  // exact keys first
  for (const n of names) {
    if (row[n] !== undefined && row[n] !== null && String(row[n]).trim() !== '') {
      return String(row[n]).trim();
    }
  }
  // fuzzy: ignore spaces/case
  const entries = Object.entries(row || {});
  for (const want of names) {
    const normWant = want.toLowerCase().replace(/\s+/g, '');
    for (const [k, v] of entries) {
      const normKey = String(k).toLowerCase().replace(/\s+/g, '');
      if (normKey === normWant && v !== undefined && v !== null && String(v).trim() !== '') {
        return String(v).trim();
      }
    }
  }
  return '';
}

const row = (items[0] && items[0].json) ? items[0].json : {};

// DEBUG helper — if still failing, temporarily return Object.keys(row)
let leadId = pick(row, ['Lead ID', 'LeadID', 'lead id', 'leadId', 'ID']);
let businessName = pick(row, ['Business Name', 'BusinessName', 'business name', 'Name', 'businessName']);

if (!leadId) {
  throw new Error('Lead ID is empty. Headers found: ' + Object.keys(row).join(' | '));
}
if (!businessName) {
  throw new Error('Business Name is empty. Headers found: ' + Object.keys(row).join(' | '));
}

// 001 -> PL-001
if (/^\d+$/.test(leadId)) {
  leadId = 'PL-' + leadId.padStart(3, '0');
}

const category = pick(row, ['Category']);
const phone = pick(row, ['Phone']).replace(/\D/g, '');
let whatsapp = pick(row, ['WhatsApp', 'Whatsapp']).replace(/\D/g, '') || phone;
if (whatsapp.startsWith('0')) whatsapp = '92' + whatsapp.slice(1);
if (whatsapp.length === 10) whatsapp = '92' + whatsapp;

const address = pick(row, ['Address']);
let cityArea = pick(row, ['City / Area', 'City/Area', 'City', 'Area']);
if (!cityArea) {
  if (/bahria/i.test(address)) cityArea = 'Bahria Town, Lahore';
  else if (/valencia/i.test(address)) cityArea = 'Valencia, Lahore';
  else if (/gujranwala/i.test(address)) cityArea = 'Gujranwala';
  else cityArea = 'Lahore';
}

// niche (optional column)
let nicheId = pick(row, ['Niche ID', 'NicheID', 'niche']).toLowerCase();
const nameCat = (businessName + ' ' + category).toLowerCase();
if (!nicheId) {
  // Order matters: cooling/geyser before generic plumber/electric words in the name
  if (
    nameCat.includes('cool') ||
    nameCat.includes('geezar') ||
    nameCat.includes('geyser') ||
    nameCat.includes('hvac') ||
    /(^|[^a-z])ac([^a-z]|$)/.test(nameCat)
  ) {
    nicheId = 'ac-hvac';
  } else if (nameCat.includes('electric')) {
    nicheId = 'electrician';
  } else if (nameCat.includes('plumb') || nameCat.includes('sanitary')) {
    nicheId = 'plumber';
  } else {
    nicheId = 'plumber';
  }
}

// Short public URLs: https://myfixers-pl-001.vercel.app
const firstWord = (() => {
  const parts = businessName.trim().split(/\s+/).filter(Boolean);
  for (const part of parts) {
    const slug = part.toLowerCase().replace(/[^a-z0-9]+/g, '');
    if (slug.length >= 2 && !['a', 'an', 'the', 'al', 'el', 'mr', 'ms', 'dr', 'm', 's'].includes(slug)) {
      return slug.slice(0, 20);
    }
  }
  const all = businessName.toLowerCase().replace(/[^a-z0-9]+/g, '');
  return all.length >= 2 ? all.slice(0, 20) : 'lead';
})();
const shortId = leadId
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const repoName = (firstWord + '-' + shortId)
  .replace(/--+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 40);

const leadJson = {
  leadId,
  businessName,
  nicheId,
  category: category || nicheId,
  phone,
  whatsapp,
  email: pick(row, ['Email']),
  address,
  cityArea,
  googleMapsLink: pick(row, ['Google Maps Link', 'Google Maps']),
  website: pick(row, ['Website (current)', 'Website']),
  rating: Number(pick(row, ['Rating']) || 4.8),
  reviewCount: Number(pick(row, ['Review Count']) || 0),
  topServices: pick(row, ['Top services (from reviews/photos)', 'Top services'])
    .split(/,|\|/)
    .map(s => s.trim())
    .filter(Boolean),
  ownerName: pick(row, ['Owner name (if found)', 'Owner name']),
  yearsExperience: 5,
  workingHours: 'Open today · Reply on WhatsApp fast',
  taglineOverride: '',
  about: businessName + ' provides trusted ' + nicheId + ' services in ' + cityArea + '.',
  urduSupport: true
};

const leadJsonBase64 = Buffer.from(JSON.stringify(leadJson, null, 2), 'utf8').toString('base64');

return [{
  json: {
    row_number: row.row_number,
    leadId,
    businessName,
    nicheId,
    phone,
    whatsapp,
    address,
    cityArea,
    repoName,
    repoUrl: 'https://github.com/AKStatm/' + repoName,
    vercelProjectName: repoName, // same short name → short .vercel.app URL
    demoUrl: 'https://' + repoName + '.vercel.app',
    leadJsonBase64,
    status: 'Building'
  }
}];
