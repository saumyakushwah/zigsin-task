import Tile from "./Tile";
import tile1 from '../Tile1.png';
import tile2 from '../Tile2.png';

export default function TileSection(){
  return(
    <div className="tile-section">
      <Tile image={tile1} />
      <Tile image={tile2} />
    </div>
  )
}