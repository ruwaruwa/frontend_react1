export default function Mdisction(props){
    return (
      <div>
  <div   className="p-4 ml-6  w-[300px] rounded-xl shadow-lg  border-2 border-green-600">
    <img src={props.image} alt="" />
 

  <div className="p-2">
 

    <h2 className="font-bold">{props.title}</h2>
    <p className="">{props.desc}</p>
     <button className="btn">Douwnload myCV</button>
  
  </div>
  
  
  </div>
  
      </div>
    )
  }