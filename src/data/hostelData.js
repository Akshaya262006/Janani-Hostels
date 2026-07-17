// Janani Hostels Data Repository

export const roomData = [
  {
    id: 1,
    type: "Premium 3-Sharing Room",
    sharing: 3,
    price: "₹4,500",
    billingCycle: "month",
    capacity: "3 Members",
    image: "room-3sharing-1.jpg",
    amenities: ["Attached Washroom", "Individual Locker", "Study Table", "High-speed Wi-Fi", "Daily Cleaning"],
    availability: "Available",
    gender: "Girls"
  },
  {
    id: 2,
    type: "Deluxe 4-Sharing Room (Type A)",
    sharing: 4,
    price: "₹4,500",
    billingCycle: "month",
    capacity: "4 Members",
    image: "room-4sharing-1.jpg",
    amenities: ["Attached Washroom", "Individual Locker", "High-speed Wi-Fi", "Daily Cleaning", "Good Ventilation"],
    availability: "Filling Fast",
    gender: "Girls"
  },
  {
    id: 3,
    type: "Deluxe 4-Sharing Room (Type B)",
    sharing: 4,
    price: "₹4,500",
    billingCycle: "month",
    capacity: "4 Members",
    image: "room-4sharing-2.jpg",
    amenities: ["Spacious Lockers", "Window Ventilation", "High-speed Wi-Fi", "Attached Washroom", "Daily Cleaning"],
    availability: "Available",
    gender: "Girls"
  },
  {
    id: 4,
    type: "Standard 4-Sharing Room (Type C)",
    sharing: 4,
    price: "₹4,500",
    billingCycle: "month",
    capacity: "4 Members",
    image: "room-4sharing-3.jpg",
    amenities: ["Individual Locker", "Red Curtains", "High-speed Wi-Fi", "Daily Cleaning", "Attached Washroom"],
    availability: "Available",
    gender: "Girls"
  },
  {
    id: 5,
    type: "Economy 5-Sharing Room",
    sharing: 5,
    price: "₹4,500",
    billingCycle: "month",
    capacity: "5 Members",
    image: "room-4sharing-2.jpg", // reuse image or another image path
    amenities: ["Spacious Layout", "Individual Lockers", "Attached Washroom", "High-speed Wi-Fi", "Daily Cleaning"],
    availability: "Filling Fast",
    gender: "Girls"
  }
];

export const facilitiesData = [
  {
    id: 1,
    title: "Safe & Secure Environment",
    description: "24/7 security personnel and CCTV camera surveillance in all common areas to ensure peace of mind for both students and parents.",
    icon: "FaShieldAlt",
    image: "exterior.jpg"
  },
  {
    id: 2,
    title: "Homely & Nutritious Food",
    description: "Hygienic and healthy meals prepared with premium ingredients. Daily menu includes breakfast, lunch, snacks, and dinner with South Indian specials.",
    icon: "FaUtensils",
    image: "room-3sharing-1.jpg"
  },
  {
    id: 3,
    title: "High-Speed Wi-Fi",
    description: "High-speed optical fiber Wi-Fi connectivity throughout the building to support online classes, study sessions, and entertainment.",
    icon: "FaWifi",
    image: "room-4sharing-2.jpg"
  },
  {
    id: 4,
    title: "Washing Machine & Laundry",
    description: "In-house washing machines available for students to do laundry conveniently, saving precious time for studies.",
    icon: "FaTshirt",
    image: "room-4sharing-3.jpg"
  },
  {
    id: 5,
    title: "24/7 Power Backup & RO Water",
    description: "Uninterrupted power supply with high-capacity generators, and safe, pure drinking water through professional RO systems.",
    icon: "FaBolt",
    image: "exterior.jpg"
  },
  {
    id: 6,
    title: "Dedicated Study Area",
    description: "Quiet and well-ventilated space designated for studying without distractions, helping students excel in their academics.",
    icon: "FaBookReader",
    image: "room-4sharing-1.jpg"
  }
];

export const statisticsData = [
  { id: 1, number: "500+", label: "Happy Students" },
  { id: 2, number: "100%", label: "Safety Record" },
  { id: 3, number: "24/7", label: "Security & Support" },
  { id: 4, number: "10+", label: "Years Experience" }
];

export const whyChooseUsData = [
  {
    id: 1,
    title: "Safe Environment",
    description: "Biometric entry, female wardens, and gated premises ensure top security.",
    icon: "FaLock"
  },
  {
    id: 2,
    title: "Healthy Food",
    description: "Pure vegetarian nutritious food cooked in a neat and clean kitchen.",
    icon: "FaAppleAlt"
  },
  {
    id: 3,
    title: "High-Speed WiFi",
    description: "Lag-free seamless internet for learning and connecting with family.",
    icon: "FaWifi"
  },
  {
    id: 4,
    title: "Washing Machines",
    description: "Save hours of hand washing with clean automated laundry machines.",
    icon: "FaTshirt"
  },
  {
    id: 5,
    title: "Power Backup",
    description: "Never study in the dark. 24/7 electricity backup for exams and night study.",
    icon: "FaLightbulb"
  },
  {
    id: 6,
    title: "CCTV Security",
    description: "Round the clock digital eyes in hallways, entryways, and compound walls.",
    icon: "FaCamera"
  },
  {
    id: 7,
    title: "RO Drinking Water",
    description: "Crystal clear, multi-stage purified drinking water accessible at all floors.",
    icon: "FaTint"
  },
  {
    id: 8,
    title: "Dedicated Study Area",
    description: "Spacious desks and well-lit rooms for group studies and assignments.",
    icon: "FaBook"
  }
];

export const testimonialData = [
  {
    id: 1,
    name: "Sri Lekha",
    college: "Pace Institute of Technology and Sciences",
    rating: 5,
    review: "Janani Hostels truly feels like a second home. The food is incredibly delicious and hygienic, which is very hard to find elsewhere. CCTV security and friendly warden make me feel extremely safe."
  },
  {
    id: 2,
    name: "Kavya Sree",
    college: "QIS College of Engineering & Technology",
    rating: 5,
    review: "The study area is super quiet and perfect for exam preparation. Internet speed is outstanding, and the rooms are cleaned every day without fail. Definitely the best girls hostel in Ongole!"
  },
  {
    id: 3,
    name: "Meghana K.",
    college: "Narayana Junior College",
    rating: 4.8,
    review: "As a student, I appreciate the power backup and RO water facilities the most. The owners are very understanding and address any issues within hours. Safe environment for girls!"
  },
  {
    id: 4,
    name: "Pranathi Reddy",
    college: "SSN Degree College",
    rating: 5,
    review: "I have stayed here for over 2 years now. The laundry facility saves me so much time. Located in a prime area in Ongole, near the temple, making it very accessible."
  }
];

export const faqData = [
  {
    id: 1,
    question: "What are the timings for entry and exit at the hostel?",
    answer: "For the safety and security of the students, the hostel gate closes at 8:30 PM. Any late entry requires prior permission and notification from parents to the hostel warden."
  },
  {
    id: 2,
    question: "How is the food quality and what is the schedule?",
    answer: "We serve homely, hygienic vegetarian food. Breakfast is served from 7:30 AM to 9:00 AM, lunch from 12:30 PM to 2:00 PM, evening tea with snacks from 5:00 PM to 6:00 PM, and dinner from 7:30 PM to 9:00 PM."
  },
  {
    id: 3,
    question: "Is there a laundry facility in the hostel?",
    answer: "Yes, we provide automatic washing machines for students to wash their clothes. There are specific clothes drying areas on the terrace with proper lines."
  },
  {
    id: 4,
    question: "Do you have options for single sharing or dual sharing?",
    answer: "Currently, our hostel specializes in premium 3-sharing, 4-sharing, and 5-sharing configurations. This helps keep the community vibrant and the costs highly affordable."
  },
  {
    id: 5,
    question: "Is security available 24/7?",
    answer: "Yes, security is our top priority. We have physical security guards present at the entrance 24/7, CCTV camera surveillance in all corridors and common spaces, and a biometric attendance registry."
  },
  {
    id: 6,
    question: "How is the power backup managed during power cuts?",
    answer: "We have an automatic generator system that kicks in within seconds of a power failure. This ensures light, fan, and Wi-Fi services remain uninterrupted."
  },
  {
    id: 7,
    question: "Are parents or visitors allowed to stay in the rooms?",
    answer: "Female parents/guardians are allowed to visit during daytime hours (10:00 AM - 6:00 PM). For safety reasons, male visitors and overnight stays inside the student rooms are strictly prohibited. We have a visitor lounge at the reception."
  },
  {
    id: 8,
    question: "How do I book a room at Janani Hostels?",
    answer: "You can book by visiting us directly, clicking the 'Book Now' button on this website, or calling our manager directly at +91 88860 44788. A small token advance will secure your spot."
  }
];

export const galleryData = [
  { id: 1, category: "Exterior", image: "exterior.jpg", title: "Janani Ladies Hostel Building" },
  { id: 2, category: "Rooms", image: "room-3sharing-1.jpg", title: "Premium 3-Sharing Room" },
  { id: 3, category: "Rooms", image: "room-4sharing-1.jpg", title: "Deluxe 4-Sharing Room (Green Theme)" },
  { id: 4, category: "Rooms", image: "room-4sharing-2.jpg", title: "Standard 4-Sharing Room" },
  { id: 5, category: "Rooms", image: "room-4sharing-3.jpg", title: "Deluxe 4-Sharing Room (Blue Theme)" },
  { id: 6, category: "Dining", image: "room-3sharing-1.jpg", title: "Neat Kitchen & Dining Service Area" },
  { id: 7, category: "Study Area", image: "room-4sharing-1.jpg", title: "Quiet In-Room Study Desks" },
  { id: 8, category: "Exterior", image: "exterior.jpg", title: "Secure Parking & Entrance Gate" }
];
