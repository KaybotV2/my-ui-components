import Gallery from './Gallery ';
import Sculpture from '../types/Sculputure';
import { sculptureList } from '../data/sculptureList'

export default function App() {
  return (
    <>
        <Gallery<Sculpture>
            items={sculptureList}
            renderItem={(item) => (
                <div>
                <h2><i>{item.name}</i> by {item.artist}</h2>
                <img src={item.url} alt={item.name} />
                </div>
            )}
            renderDetails={(item) => <p>{item.description}</p>}
        />
    </>
    
  );
}
