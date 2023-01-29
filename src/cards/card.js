// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({heading, desc, imgLink}) {
  
  return (
    <Card style={{ width: '22rem', textAlign:'center', borderStyle:'none', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Card.Img variant="top" style={{width:'100px'}} src={imgLink} />
      <Card.Body>
        <Card.Title style={{ fontSize: '40px', fontWeight:'500', color:'#233c7b' }}>{heading}</Card.Title>
        <Card.Text style={{ fontSize: '32px', fontWeight:'500' }}>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
