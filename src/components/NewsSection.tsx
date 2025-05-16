import { FiAward, FiHeadphones, FiStar, FiThumbsUp } from 'react-icons/fi';

type NewsItem = {
  icon: React.ReactNode;
  text: React.ReactNode;
  date: string;
};

const newsItems: NewsItem[] = [
  {
    icon: <FiStar size={20} className="text-primary" />,
    text: <>SECOM got accepted at <a href="https://2025.msrconf.org/" target="_blank">MSR'25</a> - Research Track. <a href="#" target="_blank">Slides</a>, <a href="#" target="_blank">Paper</a>, <a href="#" target="_blank">Replication Package</a></>,
    date: "May 2025"
  },
  {
    icon: <FiThumbsUp size={20} className="text-primary" />,
    text: <>Released <a href="https://security-commits.org/secomlint/#/">SECOMlint</a>: A compliance checker for the SECOM convention!</>,
    date: "May 2023"
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
