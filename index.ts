// ─────────────────────────────────────────────
// INNOVEXA — TYPESCRIPT TYPES
// ─────────────────────────────────────────────

export type UserRole =
  | "FOUNDER" | "INVESTOR" | "STUDENT" | "MENTOR"
  | "DEVELOPER" | "DESIGNER" | "MARKETING_EXPERT"
  | "FINANCE_EXPERT" | "AI_ENGINEER" | "PRODUCT_MANAGER"
  | "RESEARCHER" | "RECRUITER" | "SALES_PROFESSIONAL"
  | "LEGAL_ADVISOR" | "BUSINESS_CONSULTANT" | "FREELANCER"
  | "CREATOR" | "MANUFACTURER" | "SUPPLIER" | "INNOVATION_ENTHUSIAST";

export type FundingStage =
  | "IDEA" | "PRE_SEED" | "SEED"
  | "SERIES_A" | "SERIES_B" | "SERIES_C"
  | "GROWTH" | "IPO";

export type SubscriptionTier =
  | "FREE" | "STUDENT" | "PROFESSIONAL"
  | "STARTUP" | "BUSINESS" | "ENTERPRISE";

export type ProblemStatus = "OPEN" | "IN_PROGRESS" | "SOLVED" | "CLOSED";

export type SolutionReward =
  | "CASH" | "EMPLOYMENT" | "INVESTMENT"
  | "PARTNERSHIP" | "INTERNSHIP" | "ACQUISITION"
  | "LICENSING" | "REVENUE_SHARING";

export type EventType =
  | "MEETUP" | "DEMO_DAY" | "HACKATHON"
  | "PITCH_COMPETITION" | "NETWORKING"
  | "CONFERENCE" | "WEBINAR" | "WORKSHOP";

export type ApplicationStatus = "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED";
export type MeetingStatus = "REQUESTED" | "CONFIRMED" | "COMPLETED" | "CANCELLED";

// ─────────────────────────────────────────────
// USER
// ─────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string | null;
  username: string | null;
  image: string | null;
  coverImage: string | null;
  bio: string | null;
  headline: string | null;
  location: string | null;
  website: string | null;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
  videoIntro: string | null;
  pitchDeckUrl: string | null;
  resumeUrl: string | null;
  availableForHire: boolean;
  availableForCoFounder: boolean;
  lookingFor: string[];
  languages: string[];
  industry: string[];
  isVerified: boolean;
  trustScore: number;
  innovationScore: number;
  contributionScore: number;
  builderLevel: number;
  roles: UserRole[];
  subscriptionTier: SubscriptionTier;
  onboardingDone: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  experiences: Experience[];
  skills: UserSkill[];
  projects: Project[];
  certificates: Certificate[];
  achievements: Achievement[];
  startups: StartupBasic[];
  followers: number;
  following: number;
  connections: number;
}

export interface Experience {
  id: string;
  userId: string;
  title: string;
  company: string;
  location: string | null;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  description: string | null;
}

export interface UserSkill {
  id: string;
  skill: string;
  level: number;
  endorsed: number;
}

export interface Project {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: Date;
  expiryDate: Date | null;
  credentialUrl: string | null;
}

export interface Achievement {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  earnedAt: Date;
}

// ─────────────────────────────────────────────
// STARTUP
// ─────────────────────────────────────────────

export interface StartupBasic {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  tagline: string | null;
  stage: FundingStage;
  industry: string[];
  isVerified: boolean;
}

export interface Startup extends StartupBasic {
  ownerId: string;
  coverImage: string | null;
  description: string | null;
  mission: string | null;
  vision: string | null;
  problem: string | null;
  solution: string | null;
  businessModel: string | null;
  revenueModel: string | null;
  marketSize: string | null;
  traction: string | null;
  roadmap: string | null;
  tags: string[];
  website: string | null;
  demoUrl: string | null;
  pitchDeckUrl: string | null;
  videoPitchUrl: string | null;
  fundingTarget: number | null;
  fundingRaised: number | null;
  valuation: number | null;
  isPublic: boolean;
  isFeatured: boolean;
  monthlyRevenue: number | null;
  monthlyGrowth: number | null;
  totalUsers: number | null;
  country: string | null;
  city: string | null;
  foundedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  members: StartupMember[];
  milestones: Milestone[];
  _count: {
    members: number;
    milestones: number;
    investorInterests: number;
    jobs: number;
  };
}

export interface StartupMember {
  id: string;
  userId: string;
  role: string;
  equity: number | null;
  joinedAt: Date;
  user: User;
}

export interface Milestone {
  id: string;
  title: string;
  description: string | null;
  targetDate: Date | null;
  completedAt: Date | null;
  status: string;
}

// ─────────────────────────────────────────────
// PROBLEM
// ─────────────────────────────────────────────

export interface Problem {
  id: string;
  authorId: string;
  title: string;
  description: string;
  category: string;
  industry: string[];
  tags: string[];
  rewards: SolutionReward[];
  cashReward: number | null;
  deadline: Date | null;
  status: ProblemStatus;
  isVerified: boolean;
  isFeatured: boolean;
  viewCount: number;
  imageUrl: string | null;
  attachmentUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  author: User;
  solutions: Solution[];
  _count: { solutions: number };
}

export interface Solution {
  id: string;
  problemId: string;
  authorId: string;
  title: string;
  description: string;
  approach: string | null;
  attachmentUrl: string | null;
  demoUrl: string | null;
  aiScore: number | null;
  isAccepted: boolean;
  createdAt: Date;
  author: User;
  _count: { votes: number };
}

// ─────────────────────────────────────────────
// INVESTOR
// ─────────────────────────────────────────────

export interface InvestorProfile {
  id: string;
  userId: string;
  firmName: string | null;
  investorType: string;
  industries: string[];
  stages: FundingStage[];
  minTicket: number | null;
  maxTicket: number | null;
  portfolioCount: number | null;
  totalDeployed: number | null;
  thesis: string | null;
  isVerified: boolean;
  bio: string | null;
  user: User;
}

// ─────────────────────────────────────────────
// MENTOR
// ─────────────────────────────────────────────

export interface MentorProfile {
  id: string;
  userId: string;
  expertise: string[];
  industries: string[];
  hourlyRate: number | null;
  isFreeAvailable: boolean;
  totalSessions: number;
  avgRating: number;
  bio: string | null;
  calendarUrl: string | null;
  isVerified: boolean;
  user: User;
  _count: { sessions: number; reviews: number };
}

// ─────────────────────────────────────────────
// JOB
// ─────────────────────────────────────────────

export interface Job {
  id: string;
  posterId: string;
  startupId: string | null;
  title: string;
  description: string;
  requirements: string[];
  skills: string[];
  type: string;
  location: string | null;
  isRemote: boolean;
  salaryMin: number | null;
  salaryMax: number | null;
  equity: number | null;
  currency: string;
  isActive: boolean;
  deadline: Date | null;
  createdAt: Date;
  poster: User;
  startup: StartupBasic | null;
  _count: { applications: number };
}

// ─────────────────────────────────────────────
// FEED
// ─────────────────────────────────────────────

export interface FeedPost {
  id: string;
  authorId: string;
  content: string;
  imageUrl: string | null;
  category: string | null;
  tags: string[];
  viewCount: number;
  createdAt: Date;
  author: User;
  _count: { likes: number; comments: number };
  isLiked?: boolean;
}

// ─────────────────────────────────────────────
// EVENT
// ─────────────────────────────────────────────

export interface Event {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  type: EventType;
  coverImage: string | null;
  startDate: Date;
  endDate: Date | null;
  timezone: string;
  isOnline: boolean;
  meetingUrl: string | null;
  venue: string | null;
  city: string | null;
  country: string | null;
  maxAttendees: number | null;
  tags: string[];
  isPublic: boolean;
  isFeatured: boolean;
  registrationUrl: string | null;
  createdAt: Date;
  creator: User;
  _count: { attendees: number };
}

// ─────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  link: string | null;
  isRead: boolean;
  createdAt: Date;
}

// ─────────────────────────────────────────────
// API RESPONSE
// ─────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
