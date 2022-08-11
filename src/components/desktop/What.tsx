import React from "react";

export default function What() {
  return (
    <div className="flex h-full w-full items-center justify-center flex-col gap-10">
      <div className="flex justify-evenly w-full">
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
      <div className="text-white text-center">
        <h2 className="font-bold text-3xl mb-5">Besh2oke Training</h2>
        <p>Understand how analyse macro and micro economic data.<br/>
          Discover the power of understanding investor psyhcology.<br/>
          Learn to predict market moves hours before they happen.</p>
      </div>
      <div className="flex w-full justify-around lg:mt-0 xl:-mt-20">
				<div className="text-white text-center">
					<h2 className="font-bold text-3xl mb-5">Market Insights</h2>
					<p>Check out the daily market analysis to keep<br/>
						your edge against the big money. <br/>
						Get insights on trade strategy before markets open.</p>
				</div>
				<div className="text-white text-center">
					<p className="font-bold text-3xl mb-2">Dedicated Support Team</p>
					<p>Whatever vour question, subscription enquries,<br/>
						course related support or follow up. We are here <br/>
						for you every step of the way!</p>
				</div>
			</div>
    </div>
  )
}
