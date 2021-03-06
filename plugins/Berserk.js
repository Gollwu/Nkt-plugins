$.plugin({
	name: 'Berserk',
  onWrite: function(msg, nick) {
      return this.Berserk(msg, true, nick);
  },
  Berserk: function(msg, tags, nick) {
    if (msg.charAt(0) != '/' && msg.indexOf('plugin') === -1  && (!tags || (tags && nick))) {
      var GatsuArray = [
        "People who perish in other s battles are worms… If one cant live their life the way they want, they might as well die.",
        `Look, look around carefully. Strain your eyes. At the darkness around us... At the darkness... around me.
        You said, anywhere but here. This is where. Here at the border. Gathered by the winds.
        Those who have met their final destiny hanging between jealousy and regret. Those who failed, swept together here.
        You say It doesnt matter where. If you follow me, this is where you will go! This is your Eden! You run from it. It is no Eden.
        If you follow me... to this place... the entire world... is a battlefield.`,
        `Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness.
        Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul?`,
        `People bring the small flames of their wishes together... since they dont want to extinguish the small flame...
        they will bring that small flame to a bigger fire. A big flame named Griffith.
        But you know... I didnt bring a flame with me. I think I just stopped by to warm myself by the bonfire.`,
        `No matter how strong,
        for a human to fight a monster means he has submerged his humanity and transformed himselfinto a greater monster.`,
        "If you are always worried about crushing the ants beneath you... you wont be able to walk.",
        "I dont want what another man can give me. If he grants me anything, then it is his to give and not my own.",
        "I would rather fight for my life than live it.",
        "Throughout my life, the moments, and people who have defined me... they have all been illuminated by sparks.",
        `My place really was here. I was too foolish and stubborn to notice. But, what I truly hoped for then was here.
        Why do I always realize it... when I have already lost it.`,
        `You are going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this.
        Doesnt it? I'm sure you will overcome this. You will walk again... soon.`,
        `You are right, we are mortal and fragile. But even if we are tortured or wounded, we will fight to survive.
        You should feel the pain we feel and understand. I am the messenger that will deliver you to that pain and understanding.`,
        "Even if we painstakingly piece together something lost, it does not mean things will ever go back to how they were",
        `I dont know what will happen, I know only one thing; that I want to keep holding you,
        lie with you a hundred more-no a thousand more times. That is how I feel.`
      ];
	  var GriffithArray = [
      `I feel no responsibility to comrades who have lost lives under my command.
      Because they chose to fight in each battle.. Just as I chose this. But if there is something that... I can do for them.
      Something I can do for the dead... Then it is to win! I must keep winning to attain my dream.
      The same one they clung to, and risked their lives for!! To realize my dream, I will perch on top of their corpses..
      It is a blood-smeared dream, after all. I dont regret or feel guilty about it..
      But to risk thousands of lives while never getting myself dirty. It's not a dream that can be so easily realized!`,
      `While many can pursue their dreams in solitude, other dreams are like great storms blowing hundreds,
      even thousands of dreams apart in their wake. Dreams breathe life into men and can cage them in suffering.
      Men live and die by their dreams. But long after they have been abandoned they still smolder deep in mens hearts.
      Some see nothing more than life and death. They are dead, for they have no dreams.`,
      `It is my perception, that a true friend never relies on anothers dream.
      A person with the potential to be my true friend, must be able to find his reason for life without my help.
      And, he would have to put his heart and soul into protecting his dream.
      He would never hesitate to fight for his dream, even against me. For me, a true friend is one who stands equal on those terms.`,
      "A friend would not just follow anothers dream... a friend would find his own reason to live.",
      "Among thousands of comrades and ten thousand enemies, only you... only you made me forget my dream. I see it!",
      "Will you always be left doubting me when I lay down my life for you?"
    ];
      if(msg.indexOf("Gatsu?") > -1)
		    setTimeout(function(){
			    $.chat.write( GatsuArray[Math.floor(Math.random() * GatsuArray.length)], 'Gatsu');
		    }, 500);
			
	if(msg.indexOf("Griffith?") > -1)
		    setTimeout(function(){
			    $.chat.write( GriffithArray[Math.floor(Math.random() * GriffithArray.length)], 'Griffith');
		    }, 500);	
			
			
    }
    return msg;
  }
});