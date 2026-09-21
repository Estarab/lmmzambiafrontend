









import React from 'react';

const ProvinceDetailPage = ({ provinceData }) => {
  return (
    <div 
    //   className="flex w-[500px] h-[300px] justify-center items-center  p-2 bg-slate-400 shadow-sm"
    
    
    >
       
      <div
      
    //   className="w-full max-w-4xl bg-slate-100 p-2 rounded-sm overflow-y-auto"
        //  className="bg-white w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-full max-h-[300px] md:max-h-[400px] lg:max-h-[300px] xl:max-h-[400px]"
        
       >
        {/* Main Header */}
        {/* <h3 className="text-sm font-bold mb-2">{provinceData.name}</h3> */}

        {/* Left and Right Info Layout */}
        {/* <div
          className=" flex justify-between items-center text-xs mb-4 bg-white p-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-full max-h-[900px] md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px]"
         >
          <div className="w-1/2 pr-2">
            <h4 className="font-semibold">{provinceData.dist1}</h4>
            <p>{provinceData.description}</p>
            <p>{provinceData.description1}</p>
            <p>{provinceData.Reach1}</p>
            <p>{provinceData.VCEastern}</p>
          </div>
          <div>
            <h4 className="font-semibold mt">{provinceData.dist2}</h4>
            <p>{provinceData.program2}</p>
            <p>{provinceData.description2}</p>
            <p>{provinceData.VCEastern2}</p>
          </div>
        </div> */}

        {/* Close button */}
       {/* <button
            className="absolute top-[-38px] right-48 text-6xl font-bold text-red-500 transform transform z-50"
          >
            &times;
          </button> */}
        <div
            //  className=" flex justify-between items-center text-xs mb-2 bg-white p-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] h-full max-h-[600px] md:max-h-[200px] lg:max-h-[300px] xl:max-h-[100px]"
              className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         >
          <div
           className="w-1/2 pr-2"
           >
          
          
            
            
            <h4 className="font-bold text-[#46923c] ">{provinceData.distNyimba}</h4>
            <p>{provinceData.NyimbaProgram}</p>
            <p>{provinceData.NyimbaFarmers}</p>
            <p>{provinceData.NyimbaVC}</p>

            
{/* 
             </div>
             <div> */}
             
            
             
            <h4 className="font-bold text-[#46923c] mt-4">{provinceData.distSinda}</h4>
            <p>{provinceData.SindaProgram}</p>
            <p>{provinceData.SindaFarmers}</p>
            <p>{provinceData.SindaVC}</p>
            
             
           
          
            
          </div>
        </div>

        <div
            //  className=" flex justify-between items-center text-xs mb-2 bg-white p-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] h-full max-h-[600px] md:max-h-[200px] lg:max-h-[300px] xl:max-h-[100px]"
              // className="flex justify-between items-start text-xs bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
               className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         >
          <div
           className="w-1/2 pr-2"
           >
            
          
            
            
            <h4 className="font-bold text-[#46923c]">{provinceData.distLusaka}</h4>
            <p>{provinceData.LusakaProgram}</p>
            <p>{provinceData.LusakaFarmers}</p>
            

            

             {/* </div>
             <div> */}
             
            
             
            {/* <h4 className="font-bold text-[#46923c] mt-2">{provinceData.distLusaka2}</h4> */}
            <p className='mt-2'>{provinceData.Lusaka2Program}</p>
            <p>{provinceData.Lusaka2Farmers}</p>
            <p>{provinceData.Lusaka2VC}</p>
            
             
           
          
            
          </div>
        </div>

        {/* Third Section - Left and Right Info Layout */}
       

        <div 
        // className="flex justify-between items-center text-xs mb-4"
        //  className="flex justify-between items-start text-xs bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
        >
          <div className="w-1/2 pr-2">
            {/* <h3 className="font-bold mb-4">{provinceData.LuapulaName}</h3> */}
            <h4 className="font-semibold text-[#46923c] mt-4">{provinceData.distChifunabuli}</h4>
            <p>{provinceData.ChifunabuliProgram}</p>
            <p>{provinceData.ChifunabuliFarmers}</p>
          </div>
        </div>

        <div
        //  className="flex justify-between items-center text-xs mb-4"
        //  className=" flex justify-between items-start text-xs bg-white py--16 px-2  w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         >
          <div className="w-1/2 pr-2">
            {/* <h3 className="font-bold mb-4">{provinceData.MuchingaName}</h3> */}
            <h4 className="font-semibold text-[#46923c]">{provinceData.distIsoka}</h4>
            <p>{provinceData.IsokaProgram}</p>
            <p>{provinceData.IsokaFarmers}</p>
            <p>{provinceData.IsokaVC}</p>
          </div>
        </div>

        <div 
        // className="flex justify-between items-center text-xs mb-4"
        //  className="flex justify-between items-start text-xs bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
        >
          <div className="w-1/2 pr-2">
            {/* <h3 className="font-bold mb-4">{provinceData.NorthernName}</h3> */}
            <h4 className="font-semibold text-[#46923c] mt-4">{provinceData.distMungwi}</h4>
            <p>{provinceData.MungwiProgram}</p>
            <p>{provinceData.MungwiFarmers}</p>
            <p>{provinceData.MungwiVC}</p>
            </div>
            <div>

            <h4 className="font-semibold text-[#46923c] mt-4">{provinceData.distLuwingu}</h4>
            <p>{provinceData.LuwinguProgram}</p>
            <p>{provinceData.LuwinguFarmers}</p>
            <p>{provinceData.LuwinguVC}</p>
          </div>
        </div>



        <div
            // className=" flex justify-between items-center text-xs mb-4 bg-white p-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-full max-h-[900px] md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px]"
            //  className="flex justify-between items-center text-xs mb-4"
            //  className="flex justify-between items-start text-xs bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
             className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         >
          <div className="w-1/2 pr-2">

           


            <h3 className="font-bold mb-4 text-[#46923c] text-sm">{provinceData.NorthWesternName}</h3>
            <h4 className="font-bold text-[#46923c]">{provinceData.distMwinilunga}</h4>
            <p>{provinceData.MwinilungaProgram}</p>
            <p>{provinceData.MwinilungaFarmers}</p>
            <p>{provinceData.MwinilungaVC}</p>

            <h4 className="font-bold mt-4 text-[#46923c]">{provinceData.distManyinga}</h4>
            <p>{provinceData.ManyingaProgram}</p>
            <p>{provinceData.ManyingaFarmers}</p>
            <p>{provinceData.ManyingaVC}</p>

             </div>
             <div>

            <h4 className="font-bold mt-4 text-[#46923c]">{provinceData.distMufumbwe}</h4>
            <p>{provinceData.MufumbweProgram}</p>
            <p>{provinceData.MufumbweFarmers}</p>
            <p>{provinceData.MufumbweVC}</p>
          </div>
        </div>



        <div 
        //  className=" flex justify-between items-center text-xs mb-4 bg-white p-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-full max-h-[900px] md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px]"
        //  className="flex justify-between items-center text-xs mb-4"
        //  className="flex justify-between items-start text-xs bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
         className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
        >
          <div className="w-1/2 pr-2 ">
            {/* <h3 className="font-bold mb-4 text-sm text-[#46923c]">{provinceData.SouthernName}</h3> */}
            <h4 className="font-bold text-[#46923c] mt-4">{provinceData.distMonze}</h4>
            <p>{provinceData.MonzeProgram}</p>
            <p>{provinceData.MonzeFarmers}</p>
            <p>{provinceData.MonzeVC}</p>

            <h4 className="font-bold mt-4 text-[#46923c]">{provinceData.distPemba}</h4>
            <p>{provinceData.PembaProgram}</p>
            <p>{provinceData.PembaFarmers}</p>
            <p>{provinceData.PembaVC}</p>

            </div>

            <div>

            <h4 className="font-bold mt-4 text-[#46923c]">{provinceData.distMazabuka}</h4>
            <p>{provinceData.MazabukaProgram}</p>
            <p>{provinceData.MazabukaFarmers}</p>
            <p>{provinceData.MazabukaVC}</p>

            <h4 className="font-bold mt-4 text-[#46923c]">{provinceData.distNamwala}</h4>
            <p>{provinceData.NamwalaProgram}</p>
            <p>{provinceData.NamwalaFarmers}</p>
            <p>{provinceData.NamwalaVC}</p>
          </div>
        </div>


        <div 
          // className="flex justify-between items-start text-xs bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
           className="flex justify-between items-start text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] bg-white py--2 px-2 w-full max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] min-h-[auto] transform translate-y-2"
        >
          <div className="w-1/2 pr-2">
            {/* <h3 className="font-bold mb-4">{provinceData.CentralName}</h3> */}
            <h4 className="font-bold text-[#46923c]">{provinceData.distChibombo}</h4>
            <p>{provinceData.ChibomboProgram}</p>
            <p>{provinceData.ChibomboFarmers}</p>
            <p>{provinceData.ChibomboVC}</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProvinceDetailPage;



