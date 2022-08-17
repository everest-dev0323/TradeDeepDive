import React from "react";

export default function What() {
  return (
    <div className="flex h-full w-full items-center justify-evenly flex-col gap-10 sm:pb-[90px]">
      <div className="flex justify-evenly w-full gap-5">
        <div className="text-white text-center">
          <h2 className="font-bold text-3xl mb-5">Live Trading Room</h2>
          <p>Get access to our live trading room.<br/>
            Watch as a real trader shows you how to work a trade.<br/>
            Ask questions and get support on your trades.</p>
        </div>
        <div className="text-white text-center">
          <h2 className="font-bold text-3xl mb-5">Community Discord</h2>
          <p>Access to resources that help streamline your analysis.<br/>
            Discuss analysis and trade ideas with fellow traders.<br/>
            Take part in special events with like-minded people.</p>
        </div>
      </div>
      <div className="flex w-full justify-evenly gap-5 xl:px-[90px]">
        <div className="text-white text-center">
          <h2 className="font-bold text-3xl mb-5">Market Insights</h2>
          <p>Check out the daily market analysis to keep<br/>
            your edge against the big money. <br/>
            Get insights on trade strategy before markets open.</p>
        </div>
        <div className="text-white text-center -mt-16">
          <h2 className="font-bold text-3xl mb-5">Bespoke Training</h2>
          <p>Understand how analyse macro and micro economic data.<br/>
            Discover the power of understanding investor psyhcology.<br/>
            Learn to predict market moves hours before they happen.</p>
        </div>
        <div className="text-white text-center">
          <p className="font-bold text-3xl mb-2">Dedicated Support Team</p>
          <p>Whatever your question, subscription enquries,<br/>
            course related support or follow up. We are here <br/>
            for you every step of the way!</p>
        </div>
      </div>
    </div>
  )
}
