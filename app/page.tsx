import { Button } from '@/components/shared/ui/button';
import LatestArticles from '@/components/blog/LatestArticles';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFeatureList } from '@/components/landing/LandingFeatureList';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingSaleCtaSection } from '@/components/landing/LandingSaleCta';
import { LandingTestimonialListSection } from '@/components/landing/LandingTestimonialList';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="wide-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl md:max-w-3xl">
            Sigma File Manager
          </h1>
          <p className="mt-6 md:text-xl md:max-w-3xl">
            A free, open-source, quickly evolving, modern file manager
            (explorer) app for Windows and Linux.
          </p>

          <span className="flex flex-wrap gap-2 mt-6">
            <a href="/features" target="_blank" rel="noopener noreferrer">
              <Button size="xl">See Features</Button>
            </a>
            <a
              href="https://github.com/aleksey-hoffman/sigma-file-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button size="xl" variant="outlinePrimary">
                Download on Github
              </Button>
            </a>
          </span>
        </section>
      </div>

      <LandingBandSection
        className="mt-24"
        title="Simplify your file management"
        description="Efficiently organize, access, and share your files with our free, open-source file manager app."
        logosComponent={
          <>
            <ChromeIcon className="w-12 h-12" />
            <FigmaIcon className="w-12 h-12" />
            <GithubIcon className="w-12 h-12" />
            <FramerIcon className="w-12 h-12" />
          </>
        }
      />

      <LandingProductFeature
        imagePosition="right"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Product image"
        title="Introducing Sigma File Manager"
        description="Sigma File Manager is a rapidly evolving, modern file manager (explorer) app designed for Windows and Linux. It offers a sleek and intuitive interface, powerful file organization tools, and seamless integration with cloud storage services."
        withBackground
      />

      <LandingFeatureList
        title="Key Features"
        description="Discover the capabilities that make Sigma File Manager stand out from the crowd."
        featureItems={[
          {
            title: 'Advanced File Search',
            description:
              'Effortlessly find any file or folder with our powerful search functionality. Filter results by name, type, date modified, and more.',
            icon: <LayersIcon />,
          },
          {
            title: 'Drag and Drop Functionality',
            description:
              'Move files and folders effortlessly using drag and drop within the app. Rearrange, copy, or transfer files between directories with ease.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Dual Pane View',
            description:
              'Increase productivity with the dual pane view, allowing you to simultaneously browse and manage files in two different locations.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Built-in File Viewer',
            description:
              'Preview files without the need for external applications. Viewing images, videos, documents, and more has never been easier.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Archiving and Compression',
            description:
              'Compress and extract files in various archive formats such as ZIP and RAR. Save storage space and share files conveniently.',
            icon: <ZapIcon />,
          },
          {
            title: 'Customizable Interface',
            description:
              'Tailor the appearance of Sigma File Manager to match your preferences. Choose from different color schemes and layout options.',
            icon: <ThumbsUpIcon />,
          },
        ]}
      />

      <LandingFaqSection
        title="Frequently Asked Questions"
        description="Have questions? We've got answers."
        faqItems={[
          {
            question:
              'Is Sigma File Manager compatible with both Windows and Linux?',
            answer:
              'Yes, Sigma File Manager is designed to work seamlessly on both Windows and Linux operating systems.',
          },
          {
            question: 'Can I customize the appearance of the app?',
            answer:
              'Absolutely! Sigma File Manager allows you to customize the interface with different color schemes and layout options.',
          },
          {
            question:
              'Does Sigma File Manager support cloud storage integration?',
            answer:
              'Yes, you can easily connect your cloud storage accounts like Dropbox, Google Drive, and OneDrive to Sigma File Manager.',
          },
        ]}
        withBackground
      />

      <LandingTestimonialListSection
        title="What our users say"
        description="Find out why our users love using Sigma File Manager for their file management needs."
        testimonialItems={[
          {
            name: 'John Smith',
            text: 'Sigma File Manager has revolutionized the way I handle my files. Its intuitive interface and powerful features make file management a breeze.',
            handle: '@john_smith',
            imageUrl: 'https://picsum.photos/800/400?random=1',
            url: '#',
            size: 'full',
          },
          {
            name: 'Emily Johnson',
            text: "I've tried several file managers before, but Sigma File Manager takes the crown. It's fast, reliable, and constantly improving with updates. Highly recommended!",
            handle: '@emily_johnson',
            imageUrl: 'https://picsum.photos/800/400?random=2',
            url: '#',
            size: 'half',
          },
          {
            name: 'David Thompson',
            text: 'As a developer, I rely on Sigma File Manager to efficiently navigate through my project files. The dual pane view and advanced search feature are game-changers.',
            handle: '@david_thompson',
            imageUrl: 'https://picsum.photos/800/400?random=3',
            url: '#',
            size: 'half',
          },
        ]}
      />

      <LandingSaleCtaSection
        title="Upgrade your file management experience"
        description="Unlock the full potential of file management with Sigma File Manager. Don't settle for less when it comes to organizing your digital assets."
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackground
      />

      <section className="wide-container mt-12">
        <LatestArticles />
      </section>
    </div>
  );
}
