import { useState } from 'react';
import { FiAward, FiChevronDown, FiChevronUp, FiHeadphones, FiStar, FiThumbsUp } from 'react-icons/fi';

const COLLAPSED_COUNT = 3;

type NewsItem = {
  icon: React.ReactNode;
  text: React.ReactNode;
  date: string;
};

const newsItems: NewsItem[] = [
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>Our EASE'23 study replicated at scale in "On the Informativeness of Security Commit Messages: A Large-scale Replication Study", published at <a href="https://arxiv.org/abs/2604.20461" target="_blank">EASE'26</a>. <a href="https://arxiv.org/pdf/2604.20461" target="_blank">Paper</a></>,
    date: "June 2026"
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>NER-based work on Interpretable Vulnerability Reports published at <a href="https://claudiarmamede.github.io/publications/ase-25/" target="_blank">ASE'25</a>. <a href="https://claudiarmamede.github.io/assets/pdf/ase25.pdf" target="_blank">Paper</a></>,
    date: "November 2025"
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>SECOM published at <a href="https://2025.msrconf.org/details/msr-2025-technical-papers/47/Towards-Security-Commit-Message-Standardization" target="_blank">MSR'25</a> - Research Track. <a href="/msr25_slides.pdf" target="_blank">Slides</a>, <a href="/MSR_25.pdf" target="_blank">Paper</a></>,
    date: "May 2025"
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>"Are security commit messages informative? Not enough!" published at <a href="https://doi.org/10.1145/3593434.3593481" target="_blank">EASE'23</a>. <a href="/EASE_23.pdf" target="_blank">Paper</a></>,
    date: "June 2023"
  },
  {
    icon: <FiThumbsUp size={20} className="text-primary" />,
    text: <>Released <a href="https://security-commits.org/secomlint/#/">SECOMlint</a>: A compliance checker for the SECOM convention!</>,
    date: "May 2023"
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>"SECOM: Towards a Convention for Security Commit Messages" published at <a href="https://conf.researchr.org/home/msr-2022" target="_blank">MSR'22</a> - Industry Track. <a href="https://dl.acm.org/doi/10.1145/3524842.3528513" target="_blank">Paper</a></>,
    date: "October 2022"
  },
  {
    icon: <FiAward size={20} className="text-primary" />,
    text: <>SECOM has been selected for the <a href="https://conf.researchr.org/track/msr-2022/msr-2022-foss-award?#Recipients" target="_blank">FOSS Award</a> at MSR'22.</>,
    date: "May 2022"
  },
  // {
  //   icon: <FiStar size={20} className="text-primary" />,
  //   text: <>SECOM got accepted at <a href="https://conf.researchr.org/home/msr-2022" target="_blank">MSR'22</a> - Industry Track. <a href="https://security-commits.org/secom/static/media/msr22_presentation.20fbb416f4df034ae29b.pdf" target="_blank">Slides</a>, <a href="https://www.computer.org/csdl/proceedings-article/msr/2022/930300a764/1Eo5Tyf4nsc" target="_blank">Paper</a></>,
  //   date: "May 2022"
  // }
];

const NewsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const canCollapse = newsItems.length > COLLAPSED_COUNT;
  const visibleItems = expanded ? newsItems : newsItems.slice(0, COLLAPSED_COUNT);

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest developments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-sm p-4 border flex items-start gap-4 transition-all hover:shadow-md"
              >
                <div className="mt-1 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <p className="text-foreground">{item.text}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          {canCollapse && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:shadow-md hover:text-primary"
                aria-expanded={expanded}
                aria-controls="news"
              >
                {expanded ? (
                  <>Show less <FiChevronUp size={16} /></>
                ) : (
                  <>Show more ({newsItems.length - COLLAPSED_COUNT} more) <FiChevronDown size={16} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
