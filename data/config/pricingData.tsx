import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: 'b475ba8b-8a6d-4f7d-a0d0-80d3db3dcf8b',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '1ccc37c0-742d-4a8c-851a-98b025d3c007',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
