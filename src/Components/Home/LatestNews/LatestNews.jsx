
import { Link } from "react-router-dom";
import "./LatestNews.scss"

const LatestNews = ({ latestNews }) => {


  const currentDate = new Date();
  

  const filteredNews = latestNews.filter((card) => {
    const cardDate = new Date(card.date);
  
    return cardDate < currentDate && card.is_active;;
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(-3); 

  
  return (
  

   
 <div className="cards-container">
      {filteredNews.map((card) => (
        <Link className="card" to={`/blogs/${card.slug}`} key={card.id}>
        <div  key={card.id}>
          <div className="cardImgContainer">
            <img src={card.photo} />
          </div>
          <div className="bottom-content">
            <h2>{card.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: card.short_descriptions }} />
          </div>
        </div>
        </Link>
      ))}
    </div>
    
      
  
  );
};

export default LatestNews;
