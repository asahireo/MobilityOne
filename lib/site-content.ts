const v7Base = "https://www.mobilityone.com.my/v7";
const sourceAsset = "/assets/img/mobilityone-source";

export type InfoSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type BoardMember = {
  name: string;
  role: string;
  summary: string;
};

export type InvestorDocument = {
  title: string;
  href: string;
  date?: string;
  category: string;
};

export type Partner = {
  name: string;
  logo?: string;
  role: "client" | "payment-rail" | "wallet" | "bank" | "remittance" | "provider";
};

export type SolutionPartnerGroup = {
  title: string;
  description: string;
  partners: Partner[];
};

export type PayBillProduct = {
  code: string;
  name: string;
  category: "Bills" | "Entertainment" | "Prepaid" | "International" | "Charity";
  provider: Partner;
  description: string;
  accountLabel: string;
  imageUrl: string;
  demoImage: string;
  paymentPartners: Partner[];
  denominations: Array<{
    label: string;
    amount?: string;
    description?: string;
  }>;
  requiresCharityReceipt?: boolean;
};

export const companyPages: Record<string, {
  eyebrow: string;
  title: string;
  description: string;
  sections: InfoSection[];
}> = {
  missionVision: {
    eyebrow: "About MobilityOne",
    title: "Mission & Vision",
    description:
      "MobilityOne positions itself as a fintech infrastructure company for payments, e-commerce, and virtual marketplaces.",
    sections: [
      {
        heading: "Vision",
        body:
          "To become a preeminent fintech company transforming payments, e-commerce, and virtual marketplaces through useful, scalable digital solutions.",
      },
      {
        heading: "Mission",
        body:
          "To empower merchants, financial partners, and consumers with payment services that are accessible, secure, and ready for high-volume everyday transactions.",
      },
      {
        heading: "Operating Focus",
        items: [
          "Enable cashless acceptance across cards, DuitNow QR, e-wallets, FPX, and online channels.",
          "Support e-money and white-label wallet programmes under regulated Malaysian payment frameworks.",
          "Connect bill payment, prepaid reload, and value-added service providers through OnePay infrastructure.",
          "Grow cross-border remittance and partner networks for regional communities.",
        ],
      },
    ],
  },
};

export const boardMembers: BoardMember[] = [
  {
    name: "Dato' Hussian @ Rizal bin A. Rahman",
    role: "Chief Executive Officer",
    summary:
      "Leads the Group with long-running experience across information technology, telecommunications, electronic transactions, and payment infrastructure.",
  },
  {
    name: "Dato' Seri Dr Chen Chaw Min",
    role: "Independent Non-Executive Chairman",
    summary:
      "Provides board leadership and public-sector governance experience, including senior roles in Malaysian government administration.",
  },
  {
    name: "Mahmudul Haque",
    role: "Non-Executive Director",
    summary:
      "Supports the Group with finance, international business, and corporate development perspective.",
  },
  {
    name: "Tunku Dato' Yaacob Khyra",
    role: "Independent Non-Executive Director",
    summary:
      "Brings investment, listed-company, and governance experience to the board.",
  },
];

export const investorPages: Record<string, {
  eyebrow: string;
  title: string;
  description: string;
  sections: InfoSection[];
}> = {
  advisers: {
    eyebrow: "Investor Relations",
    title: "Advisers",
    description:
      "Key professional advisers supporting MobilityOne Limited as an AIM-listed company.",
    sections: [
      {
        heading: "Adviser Information",
        items: [
          "Nominated Adviser and Broker: SP Angel Corporate Finance LLP.",
          "Registrar: Computershare Investor Services (Jersey) Limited.",
          "Company Secretary: Mourant Governance Services (Jersey) Limited.",
          "Auditor and other adviser details should be checked against the latest annual report before use in formal documents.",
        ],
      },
    ],
  },
  capitalStructure: {
    eyebrow: "Investor Relations",
    title: "Capital Structure",
    description:
      "Share capital and shareholder information for MobilityOne Limited.",
    sections: [
      {
        heading: "Share Capital",
        body:
          "The company is admitted to trading on AIM under the London Stock Exchange ticker MBO. Share capital information should be reviewed against the latest official disclosure before investment decisions.",
      },
      {
        heading: "Disclosure Note",
        items: [
          "AIM-listed companies update material information through regulatory announcements.",
          "The archive page links to MobilityOne's historic announcement PDFs.",
          "Investors should use the London Stock Exchange and official company documents for current holdings and trading data.",
        ],
      },
    ],
  },
  corporateGovernance: {
    eyebrow: "Investor Relations",
    title: "Corporate Governance",
    description:
      "Governance principles, board responsibilities, and QCA code disclosures for MobilityOne Limited.",
    sections: [
      {
        heading: "Governance Framework",
        body:
          "The board applies the Quoted Companies Alliance Corporate Governance Code as the practical governance framework for the company, with disclosures covering strategy, stakeholder engagement, risk management, board composition, and reporting.",
      },
      {
        heading: "Board Responsibilities",
        items: [
          "Executive directors oversee day-to-day operational management.",
          "Non-executive directors provide independent oversight, challenge, and committee participation.",
          "The board is responsible for strategy, controls, risk, reporting, and shareholder communication.",
          "Governance statements should be refreshed when annual report or board-composition changes are published.",
        ],
      },
    ],
  },
  transferShares: {
    eyebrow: "Investor Relations",
    title: "Restrictions on Transfer of Shares",
    description:
      "Summary of share transfer restrictions disclosed by MobilityOne Limited.",
    sections: [
      {
        heading: "Transfer Position",
        body:
          "The live investor-relations page states that there are no restrictions on the transfer of the company's ordinary shares.",
      },
      {
        heading: "Reference",
        body:
          "Shareholders should read the articles of association and Jersey law provisions for formal legal rights and restrictions.",
      },
    ],
  },
  shareholderRights: {
    eyebrow: "Investor Relations",
    title: "Rights of Shareholders",
    description:
      "Rights are set out in the company's articles of association and relevant Jersey law provisions.",
    sections: [
      {
        heading: "Shareholder Rights",
        body:
          "The rights of shareholders in MobilityOne Limited are set out in the articles of association and Jersey law. They may differ from rights in UK-incorporated companies.",
      },
      {
        heading: "Documents to Review",
        items: [
          "Article of Association PDF.",
          "Admission Document PDF.",
          "Latest annual report.",
          "Regulatory announcements for any changes affecting shareholder rights.",
        ],
      },
    ],
  },
};

export const annualReports: InvestorDocument[] = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
  2012, 2011, 2010, 2009, 2008, 2007,
].map((year) => ({
  title: `Annual Report ${year}`,
  date: String(year),
  category: "Annual Report",
  href: `${v7Base}/assets/upload/report/${year}.pdf`,
}));

export const circularReports: InvestorDocument[] = [
  { title: "Circular", href: `${v7Base}/assets/upload/circular.pdf`, category: "Circular" },
  { title: "Half-year Report 2024", date: "27 Sept 2024", href: `${v7Base}/assets/upload/otherReport/27sept24.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2023", date: "29 Sept 2023", href: `${v7Base}/assets/upload/otherReport/29sept23.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2022", date: "30 Sept 2022", href: `${v7Base}/assets/upload/otherReport/30sept22.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2021", date: "30 Sept 2021", href: `${v7Base}/assets/upload/otherReport/30sept21.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2020", date: "22 Oct 2020", href: `${v7Base}/assets/upload/otherReport/22oct20.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2019", date: "24 Sept 2019", href: `${v7Base}/assets/upload/otherReport/24sept19.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2018", date: "28 Sept 2018", href: `${v7Base}/assets/upload/otherReport/28sept18.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2017", date: "26 Sept 2017", href: `${v7Base}/assets/upload/otherReport/26sept17.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2016", date: "28 Sept 2016", href: `${v7Base}/assets/upload/otherReport/28sept16.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2015", date: "29 Sept 2015", href: `${v7Base}/assets/upload/otherReport/29sept15.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2014", date: "19 Sept 2014", href: `${v7Base}/assets/upload/otherReport/19sept14.pdf`, category: "Half-year Report" },
  { title: "Other Report 2014", date: "7 July 2014", href: `${v7Base}/assets/upload/otherReport/7july14.pdf`, category: "Other Report" },
  { title: "Half-year Report 2013", date: "27 Sept 2013", href: `${v7Base}/assets/upload/otherReport/27sept13.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2012", date: "14 Sept 2012", href: `${v7Base}/assets/upload/otherReport/14sept12.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2011", date: "29 Sept 2011", href: `${v7Base}/assets/upload/otherReport/29Sep11.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2010", date: "20 Sept 2010", href: `${v7Base}/assets/upload/otherReport/20sept10.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2009", date: "30 Sept 2009", href: `${v7Base}/assets/upload/otherReport/30sept09.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2008", date: "26 Sept 2008", href: `${v7Base}/assets/upload/otherReport/26sept08.pdf`, category: "Half-year Report" },
  { title: "Half-year Report 2007", date: "28 Sept 2007", href: `${v7Base}/assets/upload/otherReport/28sept07.pdf`, category: "Half-year Report" },
];

export const investorDocuments: InvestorDocument[] = [
  {
    title: "Admission Document",
    href: `${v7Base}/assets/upload/admission_document.pdf`,
    category: "Admission",
  },
  {
    title: "Article of Association",
    href: `${v7Base}/assets/upload/Article_of_Association.pdf`,
    category: "Constitutional Document",
  },
];

export const announcementArchive: InvestorDocument[] = [
  { date: "9 Apr 2026", title: "Result of General Meeting", href: `${v7Base}/assets/upload/announcement/2026/9Apr26.pdf`, category: "Announcement" },
  { date: "7 Apr 2026", title: "Directorate Change", href: `${v7Base}/assets/upload/announcement/2026/7Apr26.pdf`, category: "Announcement" },
  { date: "24 Mar 2026", title: "Update on Proposed Joint Venture with Super Apps", href: `${v7Base}/assets/upload/announcement/2026/24Mar26.pdf`, category: "Announcement" },
  { date: "16 Mar 2026", title: "Update in relation to Sincere Acres Sdn Bhd", href: `${v7Base}/assets/upload/announcement/2026/16Mar26.pdf`, category: "Announcement" },
  { date: "10 Mar 2026", title: "Update on Proposed Joint Venture with Super Apps", href: `${v7Base}/assets/upload/announcement/2026/10Mar26.pdf`, category: "Announcement" },
  { date: "4 Mar 2026", title: "General Meeting Notice", href: `${v7Base}/assets/upload/announcement/2026/04Mar26.pdf`, category: "Announcement" },
  { date: "27 Feb 2026", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2026/27Feb26.pdf`, category: "Announcement" },
  { date: "22 Jan 2026", title: "Mobile Money Transfer Collaboration with bKash", href: `${v7Base}/assets/upload/announcement/2026/22Jan26.pdf`, category: "Announcement" },
  { date: "31 Dec 2025", title: "Conditional Approval Re. Islamic Digital Banking", href: `${v7Base}/assets/upload/announcement/2025/31Dec25.pdf`, category: "Announcement" },
  { date: "26 Sept 2025", title: "Unaudited Interim Results", href: `${v7Base}/assets/upload/announcement/2025/26Sept25.pdf`, category: "Results" },
  { date: "8 Jul 2025", title: "Final Results and Restoration in Trading", href: `${v7Base}/assets/upload/announcement/2025/8Jul25.pdf`, category: "Results" },
  { date: "27 Sept 2024", title: "Half-year Report", href: `${v7Base}/assets/upload/announcement/2024/27sept.pdf`, category: "Results" },
  { date: "20 Aug 2024", title: "Final Results and Restoration in Trading", href: `${v7Base}/assets/upload/announcement/2024/20aug.pdf`, category: "Results" },
  { date: "26 Jun 2023", title: "New Joint Venture to Explore Opportunities in Saudi Arabia", href: `${v7Base}/assets/upload/announcement/2023/26june.pdf`, category: "Announcement" },
  { date: "23 Dec 2022", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2022/23dec.pdf`, category: "Announcement" },
  { date: "13 Oct 2021", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2021/13oct.pdf`, category: "Announcement" },
  { date: "14 Dec 2020", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2020/14dec.pdf`, category: "Announcement" },
  { date: "24 Sept 2019", title: "Half-year Report", href: `${v7Base}/assets/upload/announcement/2019/24sept.pdf`, category: "Results" },
  { date: "28 Sept 2018", title: "Half-year Report", href: `${v7Base}/assets/upload/announcement/2018/28sept.pdf`, category: "Results" },
  { date: "10 Nov 2017", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2017/10nov.pdf`, category: "Announcement" },
  { date: "28 Sept 2016", title: "Half-year Report", href: `${v7Base}/assets/upload/announcement/2016/28sept.pdf`, category: "Results" },
  { date: "16 Dec 2015", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2015/16dec.pdf`, category: "Announcement" },
  { date: "5 Dec 2014", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2014/5dec.pdf`, category: "Announcement" },
  { date: "27 Sept 2013", title: "Half-year Report", href: `${v7Base}/assets/upload/announcement/2013/27sept.pdf`, category: "Results" },
  { date: "28 Sept 2012", title: "Half-year Report", href: `${v7Base}/assets/upload/announcement/2012/28sept.pdf`, category: "Results" },
  { date: "15 Nov 2011", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2011/15nov.pdf`, category: "Announcement" },
  { date: "5 Nov 2010", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2010/5nov.pdf`, category: "Announcement" },
  { date: "14 Dec 2009", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2009/14dec.pdf`, category: "Announcement" },
  { date: "6 Nov 2008", title: "Corporate Update", href: `${v7Base}/assets/upload/announcement/2008/6nov.pdf`, category: "Announcement" },
  { date: "5 July 2007", title: "Admission to AIM", href: `${v7Base}/assets/upload/announcement/2007/5july.pdf`, category: "Admission" },
];

export const paymentMethods = [
  "FPX",
  "Credit Card",
  "Touch 'n Go",
  "Boost",
  "Maybank QR",
  "GrabPay",
  "ShopeePay",
  "Alipay",
  "WeChat Pay",
  "e-Monei",
];

export const paymentPartnerLogos: Partner[] = [
  { name: "FPX", logo: `${sourceAsset}/fpx.png`, role: "payment-rail" },
  { name: "Mastercard", logo: `${sourceAsset}/mastercard.png`, role: "payment-rail" },
  { name: "MyDebit", logo: `${sourceAsset}/mydebit.png`, role: "payment-rail" },
  { name: "Visa", logo: `${sourceAsset}/visa.png`, role: "payment-rail" },
  { name: "MiPAY HA", logo: `${sourceAsset}/mipayHA.png`, role: "wallet" },
  { name: "Razer Cash", logo: `${sourceAsset}/razaercash.png`, role: "wallet" },
  { name: "AnsaraPay", logo: `${sourceAsset}/ansarapay.png`, role: "wallet" },
  { name: "Maybank QR", logo: `${sourceAsset}/maybankQR.png`, role: "payment-rail" },
  { name: "eM-ONEi", logo: `${sourceAsset}/eM-ONEi.png`, role: "wallet" },
  { name: "Alipay", logo: `${sourceAsset}/alipay.png`, role: "wallet" },
  { name: "UnionPay", logo: `${sourceAsset}/unionpay.png`, role: "payment-rail" },
  { name: "WeChat Pay", logo: `${sourceAsset}/wechatpay.png`, role: "wallet" },
  { name: "QRPay", logo: `${sourceAsset}/qrpay.png`, role: "payment-rail" },
  { name: "Boost", logo: `${sourceAsset}/boost.png`, role: "wallet" },
];

export const solutionPartnerGroups: SolutionPartnerGroup[] = [
  {
    title: "Payment Solution Clients",
    description: "Bill collection, loan collection, government payment, VAS, ticketing, and agent banking relationships.",
    partners: [
      { name: "PPZ", logo: `${sourceAsset}/ppz.png`, role: "client" },
      { name: "Majlis Perbandaran Selayang", logo: `${sourceAsset}/mps.png`, role: "client" },
      { name: "Majlis Daerah Pekan", logo: `${sourceAsset}/mdp.png`, role: "client" },
      { name: "Mahkamah Malaysia", logo: "/assets/img/clients/mahkamah.png", role: "client" },
      { name: "Agrobank", logo: "/assets/img/clients/agro.png", role: "bank" },
      { name: "Labuan Holding", logo: `${sourceAsset}/LDA.png`, role: "client" },
      { name: "WPHT", logo: `${sourceAsset}/wpht.png`, role: "client" },
      { name: "Sipitang", logo: `${sourceAsset}/sipitang.png`, role: "client" },
      { name: "Tanjong Malim", logo: `${sourceAsset}/tjgmalim.png`, role: "client" },
      { name: "Jerantut", logo: `${sourceAsset}/jerantut.png`, role: "client" },
    ],
  },
  {
    title: "Gateway Rails",
    description: "Online banking, cards, debit rails, QR, and wallet acceptance for merchants.",
    partners: paymentPartnerLogos,
  },
  {
    title: "Payment Gateway Clients",
    description: "Businesses shown on the MobilityOne payment gateway page as trusted gateway clients.",
    partners: [
      { name: "Mobi", logo: `${sourceAsset}/mobi.png`, role: "client" },
      { name: "Revenue Monster", logo: `${sourceAsset}/revenuemonster.png`, role: "client" },
      { name: "MPHS", logo: `${sourceAsset}/mphs.png`, role: "client" },
      { name: "Global", logo: `${sourceAsset}/golabal.png`, role: "client" },
    ],
  },
  {
    title: "Reload & Telco Providers",
    description: "Local and international operators represented in the public OnePay-style catalog.",
    partners: [
      { name: "Digi", logo: `${sourceAsset}/VAS/digi.png`, role: "provider" },
      { name: "Hotlink", logo: `${sourceAsset}/VAS/hotlink.png`, role: "provider" },
      { name: "redONE", logo: `${sourceAsset}/VAS/redone.png`, role: "provider" },
      { name: "Touch 'n Go", logo: `${sourceAsset}/VAS/tng.png`, role: "provider" },
      { name: "Tune Talk", logo: `${sourceAsset}/VAS/tunetalk.png`, role: "provider" },
      { name: "U Mobile", logo: `${sourceAsset}/VAS/umobile.png`, role: "provider" },
      { name: "Unifi", logo: `${sourceAsset}/VAS/unifi.png`, role: "provider" },
      { name: "Xpax", logo: `${sourceAsset}/VAS/xpax.png`, role: "provider" },
      { name: "YES", logo: `${sourceAsset}/VAS/yes.png`, role: "provider" },
    ],
  },
  {
    title: "Remittance Network",
    description: "Cross-border remittance partners and receiving networks.",
    partners: [
      { name: "MoneyGram", logo: `${sourceAsset}/moneygram.png`, role: "remittance" },
      { name: "Tranglo", logo: `${sourceAsset}/tranglo.png`, role: "remittance" },
      { name: "BNI", logo: `${sourceAsset}/bni.png`, role: "bank" },
      { name: "NBL", logo: `${sourceAsset}/NBL.png`, role: "bank" },
      { name: "MTB", logo: `${sourceAsset}/mtb.png`, role: "bank" },
      { name: "CityExpress", logo: `${sourceAsset}/cityexpress.png`, role: "remittance" },
    ],
  },
];

const checkoutPartners = paymentPartnerLogos.slice(0, 10);

export const payBillProducts: PayBillProduct[] = [
  {
    code: "B19",
    name: "U Mobile Postpaid",
    category: "Bills",
    provider: { name: "U Mobile", logo: "/assets/img/clients/umobile.png", role: "provider" },
    description: "Postpaid bill payment with account number validation in the real OnePay flow.",
    accountLabel: "U Mobile account number",
    imageUrl: "https://onepay.com.my/?A=B19",
    demoImage: "https://onepay.com.my/?A=B19",
    paymentPartners: checkoutPartners,
    denominations: [{ label: "Open amount", amount: "RM 1.00 - RM 5,000.00" }],
  },
  {
    code: "BA6",
    name: "YES Postpaid",
    category: "Bills",
    provider: { name: "YES", logo: "/assets/img/clients/yes.png", role: "provider" },
    description: "Bill payment product for YES postpaid customers.",
    accountLabel: "YES account or phone number",
    imageUrl: "https://onepay.com.my/?A=BA6",
    demoImage: "https://onepay.com.my/?A=BA6",
    paymentPartners: checkoutPartners,
    denominations: [{ label: "Open amount", amount: "RM 1.00 - RM 5,000.00" }],
  },
  {
    code: "014",
    name: "U Mobile",
    category: "Prepaid",
    provider: { name: "U Mobile", logo: "/assets/img/clients/umobile.png", role: "provider" },
    description: "Mobile prepaid reload product.",
    accountLabel: "Mobile number",
    imageUrl: "https://onepay.com.my/?A=014",
    demoImage: "https://onepay.com.my/?A=014",
    paymentPartners: checkoutPartners,
    denominations: [
      { label: "RM 10", amount: "RM 10.00" },
      { label: "RM 30", amount: "RM 30.00" },
      { label: "RM 50", amount: "RM 50.00" },
    ],
  },
  {
    code: "024",
    name: "YES 4G Reload",
    category: "Prepaid",
    provider: { name: "YES", logo: "/assets/img/clients/yes.png", role: "provider" },
    description: "YES prepaid reload product.",
    accountLabel: "Mobile number",
    imageUrl: "https://onepay.com.my/?A=024",
    demoImage: "https://onepay.com.my/?A=024",
    paymentPartners: checkoutPartners,
    denominations: [
      { label: "RM 15", amount: "RM 15.00" },
      { label: "RM 30", amount: "RM 30.00" },
      { label: "RM 50", amount: "RM 50.00" },
    ],
  },
  {
    code: "239",
    name: "Unipin",
    category: "Entertainment",
    provider: { name: "Unipin", role: "provider" },
    description: "Digital entertainment and gaming reload product.",
    accountLabel: "User ID or account reference",
    imageUrl: "https://onepay.com.my/?A=239",
    demoImage: "https://onepay.com.my/?A=239",
    paymentPartners: checkoutPartners,
    denominations: [
      { label: "RM 5", amount: "RM 5.00" },
      { label: "RM 20", amount: "RM 20.00" },
      { label: "RM 100", amount: "RM 100.00" },
    ],
  },
  {
    code: "V51",
    name: "XL Indonesia",
    category: "International",
    provider: { name: "XL Indonesia", role: "provider" },
    description: "International prepaid reload sample from the live catalog.",
    accountLabel: "Recipient mobile number",
    imageUrl: "https://onepay.com.my/?A=V51",
    demoImage: "https://onepay.com.my/?A=V51",
    paymentPartners: checkoutPartners,
    denominations: [
      { label: "IDR package", amount: "Converted at checkout" },
      { label: "Open international reload", description: "Rates vary by operator." },
    ],
  },
  {
    code: "V68",
    name: "Ufone Pakistan",
    category: "International",
    provider: { name: "Ufone Pakistan", role: "provider" },
    description: "International mobile reload sample from the live catalog.",
    accountLabel: "Recipient mobile number",
    imageUrl: "https://onepay.com.my/?A=V68",
    demoImage: "https://onepay.com.my/?A=V68",
    paymentPartners: checkoutPartners,
    denominations: [
      { label: "PKR package", amount: "Converted at checkout" },
      { label: "Open international reload", description: "Rates vary by operator." },
    ],
  },
  {
    code: "CHR",
    name: "Charity Payment",
    category: "Charity",
    provider: { name: "Community Collection", role: "provider" },
    description: "Donation-style payment requiring receipt information in the live flow.",
    accountLabel: "Donation reference",
    imageUrl: "https://onepay.com.my/?A=CHR",
    demoImage: "https://onepay.com.my/?A=CHR",
    paymentPartners: checkoutPartners,
    denominations: [{ label: "Open amount", amount: "RM 1.00 - RM 5,000.00" }],
    requiresCharityReceipt: true,
  },
];

export const investorLandingLinks = [
  { label: "Announcements", href: "/investor-relations/announcements", desc: "Regulatory PDF archive from 2007 to 2026." },
  { label: "Advisers", href: "/investor-relations/advisers", desc: "Nominated adviser, registrar, secretary, and professional support." },
  { label: "Capital Structure", href: "/investor-relations/capital-structure", desc: "Share-capital summary and disclosure notes." },
  { label: "Annual Reports", href: "/investor-relations/annual-reports", desc: "Annual report PDF archive from 2007 to 2024." },
  { label: "Circulars & Other Reports", href: "/investor-relations/circulars", desc: "Circulars and half-year report archive." },
  { label: "Admission Document", href: "/investor-relations/admission-document", desc: "Original AIM admission document." },
  { label: "Article of Association", href: "/investor-relations/articles-of-association", desc: "Constitutional document PDF." },
  { label: "Corporate Governance", href: "/investor-relations/corporate-governance", desc: "Board responsibilities and QCA governance summary." },
  { label: "Restriction on Transfer of Shares", href: "/investor-relations/transfer-of-shares", desc: "Ordinary share transfer disclosure." },
  { label: "Rights of Shareholders", href: "/investor-relations/shareholder-rights", desc: "Shareholder-rights summary and source documents." },
];
