import './card.css';
export default function Card({text,clg})
{
    return(
       <div className='card'>
        <h4>{text}</h4>
        <h4>{clg}</h4>
       </div>
    );
}