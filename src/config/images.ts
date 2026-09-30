import type { NicheFamily, NicheId } from "./types";

const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

const set = (...ids: string[]) => ids.map(U);

/** Family fallbacks — only used if a niche set is short */
const FAMILY_IMAGES: Record<NicheFamily, string[]> = {
  "home-services": set(
    "photo-1504148455328-c376907d081c",
    "photo-1581578731548-c64695cc6952",
    "photo-1621905252507-b35492cc74b4",
    "photo-1607472586893-edb57bdc0e39",
    "photo-1504328345606-18bbc8c9d7d1",
    "photo-1584622650111-993a426fbf0a"
  ),
  beauty: set(
    "photo-1560066984-138dadb4c035",
    "photo-1562322140-8baeececf3df",
    "photo-1487412947147-5cebf100ffc2",
    "photo-1544161515-4ab6ce6db874",
    "photo-1604654894610-df63bc536371",
    "photo-1522337660859-02fbefca4702"
  ),
  health: set(
    "photo-1519494026892-80bbd2d6fd0d",
    "photo-1576091160399-112ba8d25d1d",
    "photo-1629909613654-28e377c37b09",
    "photo-1579684385127-1ef15d508118",
    "photo-1551076805-e1869033e561",
    "photo-1631217868264-e5b90bb7e133"
  ),
  food: set(
    "photo-1517248135467-4c7edcad34c4",
    "photo-1414235077428-338989a2e8c0",
    "photo-1504674900247-0877df9cc836",
    "photo-1555396273-367ea4eb4db5",
    "photo-1559339352-11d035aa65de",
    "photo-1514933651103-005eec06c04b"
  ),
  auto: set(
    "photo-1486262715619-67b85e0b08d3",
    "photo-1619642751034-765dfdf7c58e",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1503376780353-7e6692767b70",
    "photo-1487754180451-c456f719a1fc",
    "photo-1449965408869-eaa3f722e40d"
  ),
  education: set(
    "photo-1580582932707-520aed937b7b",
    "photo-1427504494785-3a9ca7044f45",
    "photo-1503676260728-1c00da094a0b",
    "photo-1434030216411-0b793f4b4173",
    "photo-1509062522246-3755977927d7",
    "photo-1524178232363-1fb2b075b655"
  ),
  professional: set(
    "photo-1454165804606-c3d57bc86b40",
    "photo-1450101499163-c8848ff36671",
    "photo-1521791136064-7986c2920216",
    "photo-1507679799987-c73779587ccf",
    "photo-1554224155-6726b3ff858f",
    "photo-1460925895917-afdab827c52f"
  ),
  retail: set(
    "photo-1441986300917-64674bd600d8",
    "photo-1483985988355-763728e1935b",
    "photo-1445205170230-053b83016050",
    "photo-1490481651871-ab68de25d43d",
    "photo-1469334031218-e382a71b716b",
    "photo-1555041469-a586c61ea9bc"
  ),
};

/** Niche-matched Unsplash sets — hero, cards, gallery */
const NICHE_IMAGES: Record<NicheId, string[]> = {
  plumber: set(
    "photo-1607472586893-edb57bdc0e39",
    "photo-1584622650111-993a426fbf0a",
    "photo-1552321554-5fefe8c9ef14",
    "photo-1600566752355-35792bedcfea",
    "photo-1504148455328-c376907d081c",
    "photo-1585704032914-c08bed7f84c8"
  ),
  electrician: set(
    "photo-1621905251189-08b45d6a269e",
    "photo-1621905252507-b35492cc74b4",
    "photo-1473341304170-971dccb5ac1e",
    "photo-1558618666-fcd25c85cd64",
    "photo-1504328345606-18bbc8c9d7d1",
    "photo-1581092918056-0c4c3acd3789"
  ),
  "ac-hvac": set(
    "photo-1581092160562-40aa08e78837",
    "photo-1621905252507-b35492cc74b4",
    "photo-1504328345606-18bbc8c9d7d1",
    "photo-1558618666-fcd25c85cd64",
    "photo-1581092918056-0c4c3acd3789",
    "photo-1607400201889-565b1ee75f8b"
  ),
  carpenter: set(
    "photo-1416879595882-3373a0480b5b",
    "photo-1504148455328-c376907d081c",
    "photo-1600566753086-00f18fb6b3ea",
    "photo-1615876234886-fd9a39fda97f",
    "photo-1586023492125-27b2c045efd7",
    "photo-1600210492486-724fe5c67fb0"
  ),
  painter: set(
    "photo-1562259949-e8e74f011ea0",
    "photo-1589939705384-5185137a7f0f",
    "photo-1598300042247-d088f8ab3a91",
    "photo-1560184897-ae75f418493e",
    "photo-1615876234886-fd9a39fda97f",
    "photo-1600210492486-724fe5c67fb0"
  ),
  roofer: set(
    "photo-1541888946425-d81bb19240f5",
    "photo-1504307651254-35680f356dfd",
    "photo-1503387762-592deb58ef4e",
    "photo-1487958449943-2429e8be8625",
    "photo-1504148455328-c376907d081c",
    "photo-1590496793929-36417d3117de"
  ),
  handyman: set(
    "photo-1581244277943-fe4a9c777189",
    "photo-1504148455328-c376907d081c",
    "photo-1581578731548-c64695cc6952",
    "photo-1621905252507-b35492cc74b4",
    "photo-1607472586893-edb57bdc0e39",
    "photo-1504328345606-18bbc8c9d7d1"
  ),
  cleaning: set(
    "photo-1581578731548-c64695cc6952",
    "photo-1563453392212-326f5e854473",
    "photo-1527515637462-cff94eecc1ac",
    "photo-1628177142898-93e06e830b3f",
    "photo-1585421514738-01798e348015",
    "photo-1600585154340-0ef3c08caa18"
  ),
  "pest-control": set(
    "photo-1581578731548-c64695cc6952",
    "photo-1628177142898-93e06e830b3f",
    "photo-1527515637462-cff94eecc1ac",
    "photo-1504148455328-c376907d081c",
    "photo-1600585154340-0ef3c08caa18",
    "photo-1563453392212-326f5e854473"
  ),
  "water-tank": set(
    "photo-1548839140-29a749e1cf4d",
    "photo-1422479516648-9b1d0eb13e2d",
    "photo-1521207410205-0aa0111c147a",
    "photo-1504148455328-c376907d081c",
    "photo-1607472586893-edb57bdc0e39",
    "photo-1584622650111-993a426fbf0a"
  ),
  solar: set(
    "photo-1509391366360-2e959784a276",
    "photo-1508514177221-15b45dee3c0f",
    "photo-1497435334941-8c899ee9e8e9",
    "photo-1548337138-e87d889cc369",
    "photo-1594818379496-da1e345b0ded",
    "photo-1559302504-64aae6ca6b6f"
  ),
  cctv: set(
    "photo-1557597774-9d273605dfa9",
    "photo-1558002038-1055907df827",
    "photo-1557804506-669a67965ba0",
    "photo-1486406146926-c627a92ad1ab",
    "photo-1563986768609-322da13575f3",
    "photo-1516321318423-f06f85e504b3"
  ),
  locksmith: set(
    "photo-1582139329536-e7284fece509",
    "photo-1558002038-1055907df827",
    "photo-1560518883-ce09059eeffa",
    "photo-1504148455328-c376907d081c",
    "photo-1584622650111-993a426fbf0a",
    "photo-1600585154340-0ef3c08caa18"
  ),
  moving: set(
    "photo-1600518464441-9154a4dea21b",
    "photo-1560448204-e02f11c3d0e2",
    "photo-1600585154340-0ef3c08caa18",
    "photo-1600566753190-17f0baa2a6c3",
    "photo-1504148455328-c376907d081c",
    "photo-1600047509807-ba8f99d2cdbc"
  ),
  interior: set(
    "photo-1618221195710-dd6b41faaea6",
    "photo-1600210492486-724fe5c67fb0",
    "photo-1600607687939-ce8a6c25118c",
    "photo-1586023492125-27b2c045efd7",
    "photo-1600566753086-00f18fb6b3ea",
    "photo-1615876234886-fd9a39fda97f"
  ),
  salon: set(
    "photo-1560066984-138dadb4c035",
    "photo-1562322140-8baeececf3df",
    "photo-1522337660859-02fbefca4702",
    "photo-1487412947147-5cebf100ffc2",
    "photo-1595475878915-01718cd270d2",
    "photo-1516975080664-ed2fc6a32937"
  ),
  barber: set(
    "photo-1503951914875-452162b0f3d1",
    "photo-1585747860715-2ba37e788b70",
    "photo-1621605815971-fbc98d665033",
    "photo-1599351431202-1e0f0137899a",
    "photo-1622286342621-4bd7861f88f8",
    "photo-1593702295094-ae654448537d"
  ),
  spa: set(
    "photo-1544161515-4ab6ce6db874",
    "photo-1540555700478-4be289fbecef",
    "photo-1600334129128-685c5582fd35",
    "photo-1515377905703-c4788e51af15",
    "photo-1540555700478-4be289fbecef",
    "photo-1519823551278-64ac92734f05"
  ),
  nail: set(
    "photo-1604654894610-df63bc536371",
    "photo-1632345034033-17608c64b5b0",
    "photo-1519014816548-bf5fe059798b",
    "photo-1610992015732-2449b76344bc",
    "photo-1487412947147-5cebf100ffc2",
    "photo-1522337660859-02fbefca4702"
  ),
  makeup: set(
    "photo-1487412947147-5cebf100ffc2",
    "photo-1522337660859-02fbefca4702",
    "photo-1596462502278-27bfdc403348",
    "photo-1522335789203-aabd1fc54bc9",
    "photo-1512496015851-a90fb38ba796",
    "photo-1516975080664-ed2fc6a32937"
  ),
  mehandi: set(
    "photo-1604654894610-df63bc536371",
    "photo-1610992015732-2449b76344bc",
    "photo-1487412947147-5cebf100ffc2",
    "photo-1522337660859-02fbefca4702",
    "photo-1515377905703-c4788e51af15",
    "photo-1596462502278-27bfdc403348"
  ),
  tattoo: set(
    "photo-1568515045052-f9a854d6edd4",
    "photo-1611501275019-9b5cda994e8d",
    "photo-1598371839696-5c5bb00bdc28",
    "photo-1503951914875-452162b0f3d1",
    "photo-1585747860715-2ba37e788b70",
    "photo-1522337660859-02fbefca4702"
  ),
  skincare: set(
    "photo-1570172619644-dfd03ed5d881",
    "photo-1616394584738-fc6e612e71b9",
    "photo-1556228720-195a672e8a03",
    "photo-1571875257727-256c39da42af",
    "photo-1515377905703-c4788e51af15",
    "photo-1487412947147-5cebf100ffc2"
  ),
  dentist: set(
    "photo-1606811841689-23dfddce3e95",
    "photo-1629909613654-28e377c37b09",
    "photo-1588776814546-1ffcf47267a5",
    "photo-1598256989800-fe5f95da9787",
    "photo-1609840114035-3c981b782dfe",
    "photo-1629909615184-74f495363b67"
  ),
  physiotherapy: set(
    "photo-1571019614242-c5c5dee9f50b",
    "photo-1576091160399-112ba8d25d1d",
    "photo-1559839734-2b71ea197ec2",
    "photo-1571019613454-1cb2f99b2d8b",
    "photo-1544367567-0f2fcb009e0b",
    "photo-1579684385127-1ef15d508118"
  ),
  gym: set(
    "photo-1534438327276-14e5300c3a48",
    "photo-1517836357463-d25dfeac3438",
    "photo-1571902943202-507ec2618e8f",
    "photo-1540497077202-7c8a3999166f",
    "photo-1571019614242-c5c5dee9f50b",
    "photo-1583454110551-21f2fa2afe61"
  ),
  yoga: set(
    "photo-1544367567-0f2fcb009e0b",
    "photo-1506126613408-eca07ce68773",
    "photo-1599901860904-17e6ed7083a0",
    "photo-1518611012118-696072aa579a",
    "photo-1545205597-3d9d02c29597",
    "photo-1575052814086-f385e2e2ad31"
  ),
  clinic: set(
    "photo-1519494026892-80bbd2d6fd0d",
    "photo-1576091160399-112ba8d25d1d",
    "photo-1666214280557-f1b5022eb634",
    "photo-1631217868264-e5b90bb7e133",
    "photo-1579684385127-1ef15d508118",
    "photo-1551076805-e1869033e561"
  ),
  lab: set(
    "photo-1579154204601-01588f351e67",
    "photo-1582719471384-894fbb16e074",
    "photo-1576086213369-97a306d36557",
    "photo-1532187863486-abf9dbad1b69",
    "photo-1581093458791-9f3c3250a8b7",
    "photo-1576091160399-112ba8d25d1d"
  ),
  pharmacy: set(
    "photo-1587854692152-cbe660dbde88",
    "photo-1576602976047-174e57a70c3d",
    "photo-1471864190281-a93a3070b6de",
    "photo-1585435557343-3b092031a831",
    "photo-1584308666744-24d5c474f2ae",
    "photo-1573883431205-98b5f10aaedb"
  ),
  optician: set(
    "photo-1574258495973-f010dfbb5371",
    "photo-1577803645773-f96470509666",
    "photo-1511499767150-a48a237f0083",
    "photo-1473496169904-658ba7c44d8a",
    "photo-1572635196237-14b3f281503f",
    "photo-1509695507497-903c140c43b0"
  ),
  nutrition: set(
    "photo-1490645935967-10de6ba17061",
    "photo-1498837164418-043936c58a17",
    "photo-1512621776951-a57141f2eefd",
    "photo-1546069901-ba9599a7e63c",
    "photo-1490818387583-1baba5e638af",
    "photo-1490474418585-ba9add7ffd1b"
  ),
  restaurant: set(
    "photo-1517248135467-4c7edcad34c4",
    "photo-1414235077428-338989a2e8c0",
    "photo-1559339352-11d035aa65de",
    "photo-1552566626-52f8b828add9",
    "photo-1555396273-367ea4eb4db5",
    "photo-1504674900247-0877df9cc836",
    "photo-1514933651103-005eec06c04b",
    "photo-1414235077428-338989a2e8c0"
  ),
  cafe: set(
    "photo-1501339847302-ac426a4a7cbb",
    "photo-1554118811-1e0d58224f24",
    "photo-1495474472287-4ec354ae4110",
    "photo-1442512595331-e89e73853f31",
    "photo-1453614512568-c4024d13c247",
    "photo-1509042239860-f550ce710b93"
  ),
  bakery: set(
    "photo-1509440159596-0249088772ff",
    "photo-1555507036-ab1f4038808a",
    "photo-1578985545062-69928b1d9587",
    "photo-1517433670267-08bbd4be890f",
    "photo-1486427944299-d1955d23e34d",
    "photo-1464349095431-e9a21285b5c3"
  ),
  "cloud-kitchen": set(
    "photo-1556910103-1c02745aae4d",
    "photo-1556909114-f6e7ad7d3136",
    "photo-1567620905732-2d1ec7ab7445",
    "photo-1565299624946-b28f40a0ae38",
    "photo-1504674900247-0877df9cc836",
    "photo-1414235077428-338989a2e8c0"
  ),
  catering: set(
    "photo-1555244162-803834f70033",
    "photo-1414235077428-338989a2e8c0",
    "photo-1478146896981-b80fe463b330",
    "photo-1464366400600-7168b8af9bc3",
    "photo-1519225421980-715cb0215aed",
    "photo-1530103862676-de8c9debad1d"
  ),
  juice: set(
    "photo-1610970881699-44a5587cabec",
    "photo-1600271886742-f049cd451bba",
    "photo-1622597467836-f3285f2131b8",
    "photo-1570197788417-0e82375c9371",
    "photo-1490474418585-ba9add7ffd1b",
    "photo-1481671703460-040cb8a2d909"
  ),
  sweets: set(
    "photo-1578985545062-69928b1d9587",
    "photo-1551024506-0bccd828d307",
    "photo-1486427944299-d1955d23e34d",
    "photo-1587241321921-91a834d6d191",
    "photo-1499636136210-6f4ee8de8098",
    "photo-1464349095431-e9a21285b5c3"
  ),
  hotel: set(
    "photo-1566073771259-6a8506099945",
    "photo-1542314831-068cd1dbfeeb",
    "photo-1618773928121-c32242e63f39",
    "photo-1590490360182-c33d57733427",
    "photo-1578683010236-d716f9a3f461",
    "photo-1445019980597-93fa8acb246c"
  ),
  homestay: set(
    "photo-1502672260266-1c1ef2d93688",
    "photo-1522708323590-d24dbb6b0267",
    "photo-1560448204-e02f11c3d0e2",
    "photo-1600585154340-0ef3c08caa18",
    "photo-1600607687939-ce8a6c25118c",
    "photo-1600210492486-724fe5c67fb0"
  ),
  "car-wash": set(
    "photo-1607860108855-64acf20786ad",
    "photo-1520340358514-ce6d1ef0d70b",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1552519507-da3b142c6e3d",
    "photo-1503376780353-7e6692767b70",
    "photo-1550355291-bbee04a92027"
  ),
  mechanic: set(
    "photo-1486262715619-67b85e0b08d3",
    "photo-1619642751034-765dfdf7c58e",
    "photo-1487754180451-c456f719a1fc",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1503376780353-7e6692767b70",
    "photo-1549317661-bd32c8ce0db2"
  ),
  tyre: set(
    "photo-1619642751034-765dfdf7c58e",
    "photo-1486262715619-67b85e0b08d3",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1503376780353-7e6692767b70",
    "photo-1549317661-bd32c8ce0db2",
    "photo-1511919884226-fd3cad54643e"
  ),
  "driving-school": set(
    "photo-1449965408869-eaa3f722e40d",
    "photo-1489824904134-891ab64532d1",
    "photo-1502877338535-766e1452684a",
    "photo-1549317661-bd32c8ce0db2",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1511919884226-fd3cad54643e"
  ),
  taxi: set(
    "photo-1449965408869-eaa3f722e40d",
    "photo-1511919884226-fd3cad54643e",
    "photo-1549317661-bd32c8ce0db2",
    "photo-1502877338535-766e1452684a",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1489824904134-891ab64532d1"
  ),
  towing: set(
    "photo-1619642751034-765dfdf7c58e",
    "photo-1486262715619-67b85e0b08d3",
    "photo-1487754180451-c456f719a1fc",
    "photo-1503376780353-7e6692767b70",
    "photo-1549317661-bd32c8ce0db2",
    "photo-1449965408869-eaa3f722e40d"
  ),
  "car-ac": set(
    "photo-1486262715619-67b85e0b08d3",
    "photo-1619642751034-765dfdf7c58e",
    "photo-1487754180451-c456f719a1fc",
    "photo-1552519507-da3b142c6e3d",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1503376780353-7e6692767b70"
  ),
  tuition: set(
    "photo-1427504494785-3a9ca7044f45",
    "photo-1434030216411-0b793f4b4173",
    "photo-1509062522246-3755977927d7",
    "photo-1503676260728-1c00da094a0b",
    "photo-1580582932707-520aed937b7b",
    "photo-14565130808-af9802d2c3cd"
  ),
  school: set(
    "photo-1580582932707-520aed937b7b",
    "photo-1503676260728-1c00da094a0b",
    "photo-1427504494785-3a9ca7044f45",
    "photo-1577896851231-70ef18881754",
    "photo-1509062522246-3755977927d7",
    "photo-1497636577773-f1231844b336"
  ),
  music: set(
    "photo-1511379938547-c1f69419868d",
    "photo-1514320291840-2e0a9bf2a9ae",
    "photo-1507838153414-b4b713384a76",
    "photo-1510915361894-db8b60106cb1",
    "photo-1511671782779-c97d3d27a1d4",
    "photo-1461784180009-27c1303a64c8"
  ),
  dance: set(
    "photo-1508700929628-666bc8bd84ea",
    "photo-1547153760-18fc86324498",
    "photo-1535525153412-5a42439a210d",
    "photo-1508700115892-45ecd05ae2ad",
    "photo-1518834107812-67b0b7c58434",
    "photo-1546427660-eb746afd0156"
  ),
  sports: set(
    "photo-1461896836934-ffe607ba6851",
    "photo-1574629810360-7efbbe195018",
    "photo-1431324155629-1a6deb1dec8d",
    "photo-1517649763962-0c623066013b",
    "photo-1571019614242-c5c5dee9f50b",
    "photo-1517836357463-d25dfeac3438"
  ),
  language: set(
    "photo-14565130808-af9802d2c3cd",
    "photo-1481627834876-b7833e8f5570",
    "photo-1546410531-bb4caa6b881d",
    "photo-1434030216411-0b793f4b4173",
    "photo-1503676260728-1c00da094a0b",
    "photo-1524178232363-1fb2b075b655"
  ),
  "computer-classes": set(
    "photo-1517694712202-14dd9538aa97",
    "photo-1498050108023-c5249f4df085",
    "photo-1587620962725-abab7fe55159",
    "photo-1519389950473-47ba0277781c",
    "photo-1516321318423-f06f85e504b3",
    "photo-1550751827-4bd374c3f58b"
  ),
  lawyer: set(
    "photo-1589829545856-d10d557cf95f",
    "photo-1505664194779-8beaceb93744",
    "photo-1450101499163-c8848ff36671",
    "photo-1521791136064-7986c2920216",
    "photo-1507679799987-c73779587ccf",
    "photo-1454165804606-c3d57bc86b40"
  ),
  "ca-accountant": set(
    "photo-1554224155-6726b3ff858f",
    "photo-1554224154-26032ffc0d07",
    "photo-1454165804606-c3d57bc86b40",
    "photo-1460925895917-afdab827c52f",
    "photo-1554224155-8d04cb21cd6c",
    "photo-1450101499163-c8848ff36671"
  ),
  "real-estate": set(
    "photo-1560518883-ce09059eeffa",
    "photo-1600585154340-0ef3c08caa18",
    "photo-1600607687939-ce8a6c25118c",
    "photo-1582407947304-fd86f028f716",
    "photo-1512917774080-9991f1c4c750",
    "photo-1560448204-e02f11c3d0e2"
  ),
  insurance: set(
    "photo-1450101499163-c8848ff36671",
    "photo-1454165804606-c3d57bc86b40",
    "photo-1554224155-6726b3ff858f",
    "photo-1521791136064-7986c2920216",
    "photo-1507679799987-c73779587ccf",
    "photo-1460925895917-afdab827c52f"
  ),
  photographer: set(
    "photo-1542037104857-ffbb0b9155fb",
    "photo-1452587925148-ce544e77e70d",
    "photo-1516035069371-29a1b244cc32",
    "photo-1492691527719-9d1e07e534b4",
    "photo-1471341971476-ae15ff5dd4ea",
    "photo-1487412720507-e7ab37603c6f"
  ),
  "event-planner": set(
    "photo-1519225421980-715cb0215aed",
    "photo-1464366400600-7168b8af9bc3",
    "photo-1478146896981-b80fe463b330",
    "photo-1530103862676-de8c9debad1d",
    "photo-1465495976277-4387d4b0b4c6",
    "photo-1511795409834-ef04bbd61622"
  ),
  travel: set(
    "photo-1488646953014-85cb44e25828",
    "photo-1436491865332-7a61a109cc05",
    "photo-1476514525535-07fb3b4ae5f1",
    "photo-1469854523086-616602987123",
    "photo-1501785888041-af3ef285b470",
    "photo-1507525428034-b723cf961d3e"
  ),
  visa: set(
    "photo-1436491865332-7a61a109cc05",
    "photo-1454165804606-c3d57bc86b40",
    "photo-1488646953014-85cb44e25828",
    "photo-1521791136064-7986c2920216",
    "photo-1554224155-6726b3ff858f",
    "photo-1450101499163-c8848ff36671"
  ),
  boutique: set(
    "photo-1441986300917-64674bd600d8",
    "photo-1445205170230-053b83016050",
    "photo-1469334031218-e382a71b716b",
    "photo-1490481651871-ab68de25d43d",
    "photo-1483985988355-763728e1935b",
    "photo-1441984904996-e0b6ba687e04"
  ),
  jewelry: set(
    "photo-1515562141207-7a88fb7ce338",
    "photo-1617038260897-41a1f14a8ca0",
    "photo-1599643478518-a784e5dc4c8f",
    "photo-1573408301185-9146fe634ad0",
    "photo-1535632066927-ab7c9ab60908",
    "photo-1601121141461-9d6647bde1b5"
  ),
  "mobile-shop": set(
    "photo-1511707171634-5f897ff02aa9",
    "photo-1592899677977-9c10ca588bbd",
    "photo-1601784551446-20c9e07cdbdb",
    "photo-1510557880182-3d4d3cba35a5",
    "photo-1580910051074-3eb694886505",
    "photo-1565849904461-04a58ad377e0"
  ),
  electronics: set(
    "photo-1498049794561-7780e7231661",
    "photo-1550009158-9ebf69173e2b",
    "photo-1468495244123-6c6c332eeece",
    "photo-1518770660439-4636190af475",
    "photo-1550745165-9bc0b252726f",
    "photo-1519389950473-47ba0277781c"
  ),
  furniture: set(
    "photo-1555041469-a586c61ea9bc",
    "photo-1586023492125-27b2c045efd7",
    "photo-1567538096630-e0c55bd6374c",
    "photo-1538688525198-9b88f6f53126",
    "photo-1493663284031-b7e3aefcae8e",
    "photo-1618220179428-22790b461013"
  ),
  "pet-shop": set(
    "photo-1548199973-03cce0bbc87b",
    "photo-1583511655857-d19b40a7a54e",
    "photo-1514888286974-6c03e2ca1dba",
    "photo-1450778869180-41d0601e046e",
    "photo-1587300003388-59208caa7174",
    "photo-1543852786-1cf6624bdc7c"
  ),
  florist: set(
    "photo-1487530811176-3780de880c2d",
    "photo-1490750967868-88aa4486c946",
    "photo-1563241527-3004b7be0ffd",
    "photo-1457089328109-4b74e2eaaea9",
    "photo-1526047932273-341f2a7631f9",
    "photo-1468327768560-75b45c3e160e"
  ),
  printing: set(
    "photo-1586281380349-632531db7ed4",
    "photo-1503694978374-8a2fa686963a",
    "photo-1476357471310-4ddc7e89af15",
    "photo-1450101499163-c8848ff36671",
    "photo-1454165804606-c3d57bc86b40",
    "photo-1586281380117-5a60ae2050cc"
  ),
  stationery: set(
    "photo-1456735190827-d27a7e5ed699",
    "photo-1517842645767-c639042777db",
    "photo-1455390582262-044cdead277a",
    "photo-1481627834876-b7833e8f5570",
    "photo-1544816155-12df9643f363",
    "photo-1503676260728-1c00da094a0b"
  ),
};

export function getNicheImages(nicheId: NicheId, family: NicheFamily): string[] {
  const specific = NICHE_IMAGES[nicheId] || [];
  const familyImgs = FAMILY_IMAGES[family];
  const merged = [...specific, ...familyImgs];
  return Array.from(new Set(merged)).slice(0, 8);
}

export function imageAt(images: string[], index: number) {
  if (!images.length) return FAMILY_IMAGES["home-services"][0];
  return images[index % images.length];
}
