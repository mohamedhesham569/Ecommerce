
import Card from 'react-bootstrap/Card';
import "../components/Report-card.css";

function Reportcards({report}) {
        return (
    <Card style={{ width: '18rem',border:"none",margin:"10px 0px" }} className='REPORT-CARD'>
        <div className="image">
            <Card.Img variant="top" src={report.imgsrc} className='report-image' />
            </div>
      
      <Card.Body>
        <p className="date fs7">11 June, 2022</p>
        <Card.Title className='reports-titel fs8'>{report.titel}</Card.Title>
        <Card.Text className='reports-text fs7'>
          {report.text}
        </Card.Text>
        <button className='read_more'><span>Read More</span></button>
      </Card.Body>
    </Card>
  );
    }

export default Reportcards ;