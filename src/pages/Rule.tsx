import React from "react";

import PolicyHeader from "../components/desktop/PolicyHeader";

export default function Rule() {
  const url = 'assets/imgs/desktop/main_bg.jpg'
  return (
    <div className="w-full h-full">
      <div className="fixed bg-cover bg-top bg-no-repeat h-screen w-screen -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <PolicyHeader />
      <div className="mx-32">
        <h2 className="font-bold text-xl">Traderdeepdive House Rules</h2><br/>

        <p>Welcome to Traderdeepdive, home to traders and investors from everywhere in the world. As you can imagine, managing a community of 100’s of people requires some thoughtful rules and regs to ensure total chaos doesn't spread faster than a fart in a submarine. These laws apply to everyone, including you, and are here to encourage friendly and respectful behavior, facilitate healthy discussion and debate and — most importantly — protect our users from harm.<br/>
        If you've signed up, then you've already agreed to abide by these rules. Don't ignore them. Instead, help us to create a collaborative environment where all traders are welcome. Let's build, not break things, people.<br/>
        The Rules</p>

        <h3 className="font-bold text-lg">1. Make ideas understandable.</h3><br/>

        <p>When publishing content, make sure to write an easy-to-read title and a thoughtful description so that everyone can get the gist of your published work and the reasoning behind it. If the idea doesn't have any reasoning, then you probably shouldn't be posting it.</p><br/>

        <h3 className="font-bold text-lg">2. All content should be ad-free.</h3>

        <p>This isn't Craigslist, so stop treating Traderdeepdive content like your own personable advertising board. All content has to be free from promotion. Here, 'content' includes all types of publications and updates, comments, public and private chat messages, scripts, open-source code, script release notes, and more. For the sake of being absolutely 100% crystal clear, this ban covers: all advertisements, logos, links or references to any website, social media, messaging or email contacts, company names, wallet addresses, giveaways, prize contests or any other kind of announcement or solicitation.<br/>
        The only exception to this rule is for Premium subscribers, who're allowed to include contacts, links and solicitation in their Signature field, which appears under every published idea, script or stream.</p>

        <h3 className="font-bold text-lg">3. No fundraising.</h3>

        <p>No fundraising requests or solicitation for money is allowed anywhere on Traderdeepdive, period. We're a place for sharable market thinking, not solicitous money transferring, so kindly please take those requests to specially-designed platforms elsewhere.</p>

        <h3 className="font-bold text-lg">4. Publish in the same language as the site you're on.</h3>

        <p>Writing in one language when the audience reads in another is just a waste of time and energy, so please make sure to stick to the language of the Traderdeepdive subdomain you're on. If you'd like to publish or chat in another tongue, please click on the language selector in the top bar menu and select the desired dialect.<br/>
        Exception: script titles must be in English, and their description must begin with English, followed by other languages.</p>

        <h3 className="font-bold text-lg">5. Don't plagiarize.</h3>

        <p>Please, please, please only create and share content that's unique to you and you alone. Don't copy or use someone else's content without asking for permission first and crediting them. Make sure you've got the legal rights to reuse content. Just like in school, plagiarism will result in detention, suspension, and even expulsion.</p>

        <h3 className="font-bold text-lg">6. Be nice...</h3>

        <p>Can't believe we have to spell this out, but yes, please treat others how you'd like to be treated yourself. Be respectful, kind, tolerant, and constructive, even when you disagree. There's no room for negativity, swearing, trolling, or conflict here: it's a waste of time and the hallmark of an idiot.</p>

        <h3 className="font-bold text-lg">7. ...Don't be an asshole.</h3>

        <p>We have a zero tolerance policy for contentious political discourse, defamatory, threatening or discriminatory remarks, hate speech or personal attacks. Our users are our top priority and we won't let anyone bully or belittle them.</p>

        8. Post thoughtfully.

        Never share harmful, misleading, unrelated or inappropriate content. Avoid text, emoji or chart walls, ALL CAPS, layering of posts or repeatedly sharing similar content.

        9. Don't fight the mods.

        They're frontline volunteers doing their best while suffering the slings and arrows of an army of trolls and spammers. Don't make their work any more difficult than it needs to be by openly arguing with them or criticizing moderation in general. If you've got a complaint, please send it via a private message (in a level-headed manner). Disrespecting moderators, whether in public or in private messages, can lead to temporary or permanent suspension of your account from using any of its social features.

        10. Follow the correct advertising procedure.

        To advertise with us, you must reach out to our team here.

        11. Brokers need a special account.

        If you're a brokerage, institution or bank using Traderdeepdive, a specific type of account is mandatory. Therefore you must reach out to our team here.

        12. Report misuse.

        If you spot content that's clearly violating any of our House Rules, please use the reporting function to signal it to the moderators. Don't engage in a discussion — let the moderators take care of it.

        13. Accept (occasional) exceptions.

        Infrequently we ourselves will allow or highlight examples that may bend or break one of the above rules. We do this entirely at our own discretion, usually because we believe doing so will add greater value to the community as a whole. This is NOT, we repeat, NOT an invitation for you to copy the infringement yourself — breaking our rules is the quickest way to receive a ban. Just trust us: accept the odd exception and don't try it at home.

        16. Be a hero.

        Life is pretty short, and before you even know it, your relatives will be getting ready to pick out your coffin. So do you really want to waste what precious time you have on this earth doing silly, scammy, angry stuff that most people just ignore anyway? For our part, we promise to always work at rewarding those who resist the forces of darkness, and who actively help make our community a bright and shining example of what the best of the Internet can look like.

        17. Provide a guarantee.

        You warrant that the information created and published by you on Traderdeepdive is not prohibited, doesn't constitute investment advice, and isn't created solely for qualified investors.
        These rules apply to every last nook and cranny of our website. Other — more specific — rules apply to the use of different features on our site. Remember it's your responsibility to understand them BEFORE you use these features. Learn about them here:
        •	Streams and stream comments rules
        •	I want to know more about moderation
        •	How do I become a moderator?
        Finally, this text is not exhaustive and we reserve the right to take any measures we deem necessary against user actions not listed in the House Rules. As you'd imagine, this is to maintain the proper function and friendly, professional nature of Traderdeepdive. Remember, using community resources and publishing content isn't some divine-given right: it's a privilege granted to members who respect our values and abide by our rules.

        Thanks for reading,
        Team Traderdeepdive
      </div>
    </div>
  )
}
