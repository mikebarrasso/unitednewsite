import siteConfigData from "../data/site-config.json";

export interface NavigationItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  items?: {
    label: string;
    description: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  siteId: string;
  advisorId: string;
  leadsApiUrl: string;
  firmName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  logoUrl: string;
  analyticsEndpoint: string;
  analyticsApiKey: string;
  calendarUrl: string;
  theme: {
    typography: {
      headingFont: string;
      bodyFont: string;
      scale: string;
      headingWeight: number;
    };
    color: {
      mode: string;
      primary: string;
      accent: string;
      surface: string;
      foreground: string;
    };
    layout: {
      maxWidth: string;
      sectionSpacing: string;
      borderRadius: string;
    };
    motion: {
      entrance: string;
    };
  };
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  complianceDisclosures: string[];
  framework: string;
  appRoot: string;
  blogModel: string;
}

export const siteConfig = siteConfigData as SiteConfig;
