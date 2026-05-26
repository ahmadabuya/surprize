// menu.ts (opsional, bisa pisah file)
export const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Profil",
    href: "/about",
  },
  {
    label: "Team Kami",
    href: "/team",
  },
  {
    label: "Keahlian",
    sub: [
      { label: "Hukum Pidana", href: "/keahlian/pidana" },
      { label: "Hukum Perdata", href: "/keahlian/perdata" },
      { label: "Hak Kekayaan Intelektual", href: "/keahlian/hki" },
      { label: "Hukum Perusahaan dan Bisnis", href: "/keahlian/korporasi" },
      { label: "Hukum Tata Usaha Negara", href: "/keahlian/tata-usaha-negara" },
      { label: "Hukum Administrasi Negara", href: "/keahlian/administrasi-negara" },
      { label: "Hukum Tenaga Kerja", href: "/keahlian/tenaga-kerja" },
      { label: "Hukum Lingkungan", href: "/keahlian/lingkungan" },
      { label: "Hukum Pasar Modal", href: "/keahlian/pasar-modal" },
      { label: "Hukum Perpajakan", href: "/keahlian/perpajakan" },
      { label: "Hukum Internasional", href: "/keahlian/hukum-internasional" },
      { label: "Penyelesaian Sengketa (ADR)", href: "/keahlian/adr" },
      { label: "Pendapat Hukum (Legal Opinion)", href: "/keahlian/pendapat-hukum" },
    ],
  },
  {
    label: "Litigasi",
    sub: [
      { label: "Pidana", href: "/litigasi/pidana" },
      { label: "Perdata", href: "/litigasi/perdata" },
      { label: "Tata Usaha Negara", href: "/litigasi/tata-usaha-negara" },
      { label: "Hubungan Industrial", href: "/litigasi/hubungan-industrial" },
      { label: "Perpajakan", href: "/litigasi/perpajakan" },
      { label: "PKPU/Kepailitan", href: "/litigasi/pkpu" },
      { label: "Sengketa Pilkada/Pemilu", href: "/litigasi/pilkada" },
      { label: "Mahkamah Konstitusi", href: "/litigasi/mahkamah-konstitusi" },
      { label: "Arbitrase", href: "/litigasi/arbitrase" },
      { label: "Penetapan Pengadilan", href: "/litigasi/penetapan-pengadilan" },
      { label: "Banding dan Kasasi", href: "/litigasi/banding-kasasi" },
    ],
  },
  {
    label: "Perizinan",
    sub: [
      { label: "Pendirian Usaha", href: "/perizinan/pendirian-usaha" },
      { label: "Pengurusan Perizinan", href: "/perizinan/pengurusan-perizinan" },
      { label: "Perizinan Bidang Khusus", href: "/perizinan/perizinan-bidang-khusus" },
    ],
  },
  {
    label: "Client",
    href: "/client",
  },
  {
    label: "Artikel",
    href: "/artikel",
  },
  {
    label: "Hubungi",
    href: "/contact",
  },
];
