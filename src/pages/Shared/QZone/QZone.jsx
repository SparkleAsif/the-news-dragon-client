
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const QZone = () => {
    return (
        <div className="bg-slate-300 flex flex-col p-2">
            <h2 className="text-start p-2 text-2xl font-bold mb-4">Q-Zone</h2>
            <img src={qZone1} alt="" className=" mb-2" />
            <img src={qZone2} alt="" className=" mb-2" />
            <img src={qZone3} alt="" className=" mb-2"/>
          </div>
    );
};

export default QZone;