export interface Template {
  id: string;
  name: string;
  name_vi: string;
  description: string;
  description_vi: string;
  image: string;
  tags: string[];
  tags_vi: string[];
}

export const templates: Template[] = [
  {
    id: 'romantic-floral',
    name: 'Romantic Floral',
    name_vi: 'Hoa Lãng Mạn',
    description: 'Soft blooms and elegant serif typography for a timeless, romantic celebration.',
    description_vi: 'Những bông hoa mềm mại và kiểu chữ serif thanh lịch cho một lễ kỷ niệm lãng mạn, vượt thời gian.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop',
    tags: ['Floral', 'Romantic', 'Classic'],
    tags_vi: ['Hoa', 'Lãng mạn', 'Cổ điển']
  },
  {
    id: 'minimal-elegant',
    name: 'Minimal Elegant',
    name_vi: 'Tối Giản Thanh Lịch',
    description: 'Clean lines, ample whitespace, and modern typography for the sophisticated couple.',
    description_vi: 'Đường nét gọn gàng, không gian trắng rộng rãi và kiểu chữ hiện đại cho cặp đôi tinh tế.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop',
    tags: ['Minimal', 'Modern', 'Clean'],
    tags_vi: ['Tối giản', 'Hiện đại', 'Gọn gàng']
  },
  {
    id: 'luxury-gold',
    name: 'Luxury Gold',
    name_vi: 'Vàng Sang Trọng',
    description: 'Opulent gold accents and deep contrast for a black-tie, high-end affair.',
    description_vi: 'Điểm nhấn vàng rực rỡ và độ tương phản sâu cho một sự kiện cao cấp, trang trọng.',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1471&auto=format&fit=crop',
    tags: ['Luxury', 'Gold', 'Formal'],
    tags_vi: ['Sang trọng', 'Vàng', 'Trang trọng']
  },
  {
    id: 'garden-wedding',
    name: 'Garden Wedding',
    name_vi: 'Đám Cưới Sân Vườn',
    description: 'Earthy tones and organic layouts perfect for an outdoor, botanical celebration.',
    description_vi: 'Tông màu đất và bố cục hữu cơ hoàn hảo cho một lễ kỷ niệm ngoài trời, mang hơi hướng thực vật.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop',
    tags: ['Outdoor', 'Botanical', 'Earthy'],
    tags_vi: ['Ngoài trời', 'Thực vật', 'Màu đất']
  },
  {
    id: 'vintage-love',
    name: 'Vintage Love',
    name_vi: 'Tình Yêu Cổ Điển',
    description: 'Nostalgic film-style imagery and classic layouts for a timeless love story.',
    description_vi: 'Hình ảnh phong cách phim hoài cổ và bố cục cổ điển cho một câu chuyện tình yêu vượt thời gian.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1470&auto=format&fit=crop',
    tags: ['Vintage', 'Nostalgic', 'Classic'],
    tags_vi: ['Cổ điển', 'Hoài cổ', 'Truyền thống']
  },
  {
    id: 'modern-chic',
    name: 'Modern Chic',
    name_vi: 'Hiện Đại Sang Chảnh',
    description: 'Bold typography and editorial layouts for the fashion-forward couple.',
    description_vi: 'Kiểu chữ in đậm và bố cục theo phong cách tạp chí cho cặp đôi yêu thời trang.',
    image: 'https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=1374&auto=format&fit=crop',
    tags: ['Editorial', 'Fashion', 'Bold'],
    tags_vi: ['Tạp chí', 'Thời trang', 'In đậm']
  },
  {
    id: 'classic-white',
    name: 'Classic White',
    name_vi: 'Trắng Truyền Thống',
    description: 'Pure, pristine, and traditionally elegant with delicate script accents.',
    description_vi: 'Tinh khiết, nguyên sơ và thanh lịch truyền thống với những điểm nhấn chữ viết tay tinh tế.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop',
    tags: ['Traditional', 'White', 'Elegant'],
    tags_vi: ['Truyền thống', 'Trắng', 'Thanh lịch']
  },
  {
    id: 'sunset-beach',
    name: 'Sunset Beach',
    name_vi: 'Bãi Biển Hoàng Hôn',
    description: 'Warm gradients and relaxed layouts for a beautiful destination wedding.',
    description_vi: 'Hiệu ứng chuyển màu ấm áp và bố cục thư giãn cho một đám cưới xa tuyệt đẹp.',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1470&auto=format&fit=crop',
    tags: ['Destination', 'Beach', 'Warm'],
    tags_vi: ['Điểm đến', 'Bãi biển', 'Ấm áp']
  },
  {
    id: 'boho-desert',
    name: 'Boho Desert',
    name_vi: 'Sa Mạc Boho',
    description: 'Warm terracotta tones, pampas grass, and a free-spirited bohemian aesthetic.',
    description_vi: 'Tông màu đất nung ấm áp, cỏ pampas và tính thẩm mỹ du mục phóng khoáng.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop',
    tags: ['Boho', 'Desert', 'Warm'],
    tags_vi: ['Boho', 'Sa mạc', 'Ấm áp']
  },
  {
    id: 'celestial-night',
    name: 'Celestial Night',
    name_vi: 'Đêm Đầy Sao',
    description: 'A magical dark-mode design featuring starry night skies and glowing celestial elements.',
    description_vi: 'Thiết kế giao diện tối huyền ảo với bầu trời đêm đầy sao và các chi tiết thiên hà lấp lánh.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1470&auto=format&fit=crop',
    tags: ['Dark Mode', 'Celestial', 'Magical'],
    tags_vi: ['Giao diện tối', 'Thiên hà', 'Huyền ảo']
  },
  {
    id: 'enchanted-forest',
    name: 'Enchanted Forest',
    name_vi: 'Rừng Cổ Tích',
    description: 'Deep mossy greens and whimsical fairy-tale typography for a magical woodland wedding.',
    description_vi: 'Sắc xanh rêu sâu thẳm và kiểu chữ cổ tích kỳ thú cho một đám cưới trong rừng phép thuật.',
    image: 'https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=1470&auto=format&fit=crop',
    tags: ['Woodland', 'Whimsical', 'Green'],
    tags_vi: ['Rừng cây', 'Kỳ thú', 'Xanh lá']
  },
  {
    id: 'urban-industrial',
    name: 'Urban Industrial',
    name_vi: 'Công Nghiệp Thành Thị',
    description: 'Edgy layouts, neon accents, and exposed brick aesthetics for the modern city couple.',
    description_vi: 'Bố cục phá cách, điểm nhấn neon và thẩm mỹ gạch trần cho cặp đôi thành thị hiện đại.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop',
    tags: ['Industrial', 'Urban', 'Edgy'],
    tags_vi: ['Công nghiệp', 'Thành thị', 'Phá cách']
  },
  {
    id: 'pastel-dream',
    name: 'Pastel Dream',
    name_vi: 'Giấc Mơ Pastel',
    description: 'Soft watercolor splashes and dreamy pastel palettes for a gentle, artistic vibe.',
    description_vi: 'Những vệt màu nước mềm mại và bảng màu pastel mộng mơ mang lại cảm giác nghệ thuật, nhẹ nhàng.',
    image: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=1472&auto=format&fit=crop',
    tags: ['Pastel', 'Watercolor', 'Artistic'],
    tags_vi: ['Pastel', 'Màu nước', 'Nghệ thuật']
  },
  {
    id: 'oriental-heritage',
    name: 'Oriental Heritage',
    name_vi: 'Di Sản Phương Đông',
    description: 'Rich reds, gold accents, and traditional patterns honoring cultural elegance.',
    description_vi: 'Sắc đỏ rực rỡ, điểm nhấn vàng kim và họa tiết truyền thống tôn vinh vẻ đẹp văn hóa.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop',
    tags: ['Traditional', 'Cultural', 'Red'],
    tags_vi: ['Truyền thống', 'Văn hóa', 'Màu đỏ']
  }
];
