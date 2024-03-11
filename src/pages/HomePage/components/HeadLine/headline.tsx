const headline = () => {
    return (
        // <div>
        //   <div>
        //     <img className="w-full" src="https://cdn-i.pr.trt.com.tr/trtafricaswa/w960/h540/q70/18320903_0-182-5392-3037.jpeg"  />
        //   </div>

        //   <div className="bg-black bg-gradient-to-t from-black-500">
        //   <a className="bg-[#00b6ca] w-auto px-[12px]  py-[8px] rounded-[4px] !text-[#fff] relative  left-[-145px] bottom-[22px] lg:left-[-700px]" href="#">Afrika</a>
        //    <h3 className="text-3xl p-2"><a className="text-white" href="#">
        //     Jeshi la Sudan lakataa usitishaji vita hadi RSF iondoke kwenye maeneo ya raia</a></h3>
        //   </div>

        // </div>

        <div className="relative h-full">
            <img className="w-full h-full object-cover" src="https://cdn-i.pr.trt.com.tr/trtafricaswa/w960/h540/q70/18320903_0-182-5392-3037.jpeg" />
            <div className="absolute w-full bottom-0 left-0 text-left md:px-4 md:pb-10 md:bg-gradient-to-t md:from-black p-2 bg-slate-900 md:bg-transparent">
                <span className="bg-[#00b6ca] md:p-2 rounded-[4px] text-white md:mb-2 inline-block p-1 text-xs">Afrika</span>
                <h3 className="text-white font-bold md:text-4xl text-xs sm:text-3xl ">
                    Jeshi la Sudan lakataa usitishaji vita hadi RSF iondoke kwenye maeneo ya raia
                </h3>
            </div>
        </div>
    );
};
//bg-[radial-gradient(circle_at_10%_20%,_rgb(0,_0,_0)_0%,_rgb(64,_64,_64)_90.2%)]
export default headline;
