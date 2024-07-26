import React from "react";

function navbar()
{
    return (
        <>
            <body>
                <navbar>
                    <div className="container-fluid">
                        <div className="row" style={{boxSizing:'border-box'}}>
                            <div className="col-md-3 p-2 " style={{borderBottom:'1px solid black',borderTop:'1px solid black',boxSizing:'border-box'}}>
                                <img src="/images/facebook.png" width={'30px'} style={{marginLeft:'20px'}} height={'30px'}></img>
                                <img src="/images/instagram.png" width={'30px'} style={{marginLeft:'20px'}} height={'30px'}></img>
                                <img src="/images/twitter.png" width={'30px'} style={{marginLeft:'20px'}} height={'30px'}></img>
                                <img src="/images/whatsapp1.png" width={'30px'} style={{marginLeft:'20px'}} height={'30px'}></img>
                                <img src="/images/youtube.png" width={'30px'} style={{marginLeft:'20px'}} height={'30px'}></img>
                            </div>
                            <div className="col-md-1 p-2 " style={{backgroundColor:'#67479C'}} ></div>
                            <div className="col-md-7 text-white justify-content-center" style={{fontFamily:'sans-serif',fontWeight:'bolder',backgroundColor:'#67479C'}}>
                                <div className=""style={{marginTop:'14px',fontSize:'14px'}}>
                                    <span><ion-icon name="call" className=''></ion-icon>95525 54010</span>
                                    <span style={{marginLeft:'32px'}}>खाते उघडा</span>
                                    <span style={{marginLeft:'32px'}}>मुदत ठेवी</span>
                                    <span style={{marginLeft:'32px'}}>आवर्ती ठेवी</span>
                                    <span style={{marginLeft:'32px'}}>कर्ज घ्या</span>
                                    <span style={{marginLeft:'32px'}}>करिअर</span>
                                    <span style={{marginLeft:'32px'}}>कस्टमर मदत</span>
                                    <span style={{marginLeft:'32px'}}>फीडबॅक</span>
                                    <span style={{marginLeft:'32px'}}>मोबाइल बँकिंग</span>
                                </div>
                            </div>
                            <div className="col-md-1 text-white" style={{fontFamily:'sans-serif',fontWeight:'bolder',backgroundColor:'#67479C'}}>
                                <button className="btn bg-white" style={{marginTop:'5px',fontWeight:'bolder'}}>English</button>
                            </div>
                        </div>
                    </div>
                </navbar>

                <section>
                    <div className="container-fluid">
                        <div className="row text-dark">
                            <div className="col-md-2  mt-2 mb-2">
                                <img src="/images/logo.png" style={{width:'100%',borderRadius:'5px'}}></img>
                            </div>
                            <div className="col-md-8 text-dark justify-content-center" style={{fontFamily:'sans-serif',fontWeight:'bolder'}}>
                                <div className=""style={{marginTop:'17px',fontSize:'16px'}}>
                                    <span>मुख्यपृष्ठ</span>
                                    <span style={{marginLeft:'50px'}}>आमच्याबद्दल</span>
                                    <span style={{marginLeft:'50px'}}>सेवा</span>
                                    <span style={{marginLeft:'50px'}}>ठेव योजना</span>
                                    <span style={{marginLeft:'50px'}}>कर्ज योजना </span>
                                    <span style={{marginLeft:'50px'}}>शाखा</span>
                                    <span style={{marginLeft:'50px'}}>आमची कामे</span>
                                    <span style={{marginLeft:'50px'}}>प्रकाशन</span>
                                    <span style={{marginLeft:'50px'}}>मीडिया</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-md-12" style={{backgroundImage:'url(/images/home.png)',height:'90%',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                                <div className="row">
                                    <div style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                                        <div className="col-md-12 " style={{paddingBottom:'66px'}}>
                                            <h1 className="text-white" style={{marginLeft:'200px',marginTop:'50px',fontSize:'50px',fontWeight:'bolder'}} >सेवांची माहिती</h1>
                                            <h6 className="text-white pt-3" style={{marginLeft:'200px',fontWeight:'bolder'}}>मुख्यपृष्ठ / <span style={{color:'#5D25AA'}}>सेवांची माहिती</span> </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </body>
        </>
    )
}


export default navbar;