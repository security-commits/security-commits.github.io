import { FiAward, FiHeadphones, FiStar, FiThumbsUp } from 'react-icons/fi';

type NewsItem = {
  icon: React.ReactNode;
  text: React.ReactNode;
  date: string;
};

const newsItems: NewsItem[] = [
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>SECOM got accepted at <a href="">MSR'25</a> - Research Track. Slides, Paper, Replication Package</>,
    date: "May 2025"
  },
  {
    icon: <FiThumbsUp size={20} className="text-primary" />,
    text: <>Released <strong>SECOMlint</strong>: A compliance checker for the SECOM convention!</>,
    date: "May 2023"
  },
  {
    icon: <FiAward size={20} className="text-primary" />,
    text: <>SECOM has been selected for the FOSS Award at MSR&apos;22.</>,
    date: "May 2022"
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>SECOM got accepted at MSR'22 - Industry Track. Slides, Paper</>,
    date: "May 2022"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest developments and achievements for the SECOM project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {newsItems.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
