<template>
  <LegalContent title="Privacy Policy" :sections="sections" />
</template>

<script setup lang="ts">
import LegalContent, { type LegalSection } from '~/components/sections/LegalContent.vue'

const sections: LegalSection[] = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'This Privacy Policy outlines how Vip Orchestra (« we », « our », or « us ») collects, uses, and protects the personal data of users visiting our website, in compliance with the General Data Protection Regulation (GDPR – Regulation (EU) 2016/679).'
    ]
  },
  {
    heading: '2. Data Controller',
    paragraphs: [
      'B&B Productions, Represented by Jimmy Bitton, Based in 66, Avenue Victor Hugo 75116 Paris, France, Email: info@inspiration-music.com, Phone: +33.6.14.18.54.94'
    ]
  },
  {
    heading: '3. Data We Collect',
    list: ['First and last name', 'Email address', 'Phone number', 'Booking or quote request information', 'Browsing data (via cookies)']
  },
  {
    heading: '4. Purpose of Data Processing',
    list: [
      'Respond to inquiries and quote requests',
      'Manage music and event bookings',
      'Send informational or promotional messages (only with consent)',
      'Improve our website and user experience'
    ]
  },
  {
    heading: '5. Legal Basis for Processing',
    list: ['Your consent', 'The performance of a contract or pre-contractual measures', 'Our legitimate interests']
  },
  {
    heading: '6. Data Retention',
    list: [
      'For 3 years after your last contact for marketing purposes',
      'For the duration of the contract and up to 5 years after for administrative purposes'
    ]
  },
  {
    heading: '7. Your Rights',
    list: [
      'Access your data',
      'Rectify inaccurate data',
      'Request erasure of your data',
      'Limit or object to data processing',
      'Withdraw your consent at any time',
      'Request data portability'
    ],
    paragraphs: [
      'To exercise your rights, please contact us at [Insert contact email]. You also have the right to lodge a complaint with the CNIL (France\'s data protection authority).'
    ]
  },
  {
    heading: '8. Cookies',
    paragraphs: [
      'This website uses cookies for traffic analytics, navigation, and customization purposes. You can manage your preferences at any time via the cookie consent banner.'
    ]
  }
]

useSeoMeta({
  title: 'Privacy Policy - Vip Orchestra',
  description: 'How Vip Orchestra collects, uses, and protects your personal data in compliance with GDPR.'
})
</script>
