// Game data
const gameData = {
    "start": {
        "text": "You wake up in the Amazon, no clue how you got here. Trees everywhere. No phone. No map. So... What's the move?",
        "choices": [
        { "text": "Chase the sound of rushing waters", "next": "river" },
        { "text": "Venture deep into the thick of it.", "next": "jungle" }
        ],
		},

		"jungle": {
        "text": "You push past vines. Everything’s alive! chirps, rustles, earthy smells. The jungle feels like it’s watching you. It’s kinda cool. Kinda creepy..",
        "choices": [
        { "text": "I must be dreaming! Maybe if I sleep, I'll wake up at home again!", "next": "tree-shelter" },
        { "text": "Keep moving, not tryna stick around wherever this is", "next": "move-bushes" }
        ],
    },

    "move-bushes": {
        "text": "You push forward! Something roars up ahead, just past the bushes. You freeze. Did anyone else hear that...?",
        "choices": [
        { "text": "Investigate! It might be my lunch.", "next": "hit-car" },
        { "text": "I should mind my own business...", "next": "find-lake" }
        ],
    },
    "find-lake": {
        "text": "You keep walking and stumble upon a lake, its waters still and shimmering in the fading light. It feels like a sanctuary.",
        "choices": [
        { "text": "I'll a quick drink first. For energy!", "next": "lake-algae" },
        { "text": "This water looks sus. There'll be more ahead.", "next": "soy-farm" }
        ],
    },
    "soy-farm": {
        "text": "You continue on. In the distance, you spot a vast soy farm and rows of crops stretching endlessly under the sun.",
        "choices": [
        { "text": "Aw hell nah. There's definitely humans there.", "next": "no-soy" },
        { "text": "There's no other food for miles, I need it now!", "next": "soy-capture" }
        ],
    },
    "soy-capture": {
        "text": "As you step over the fence, a human spots you and quickly grabs you. Before you can react, his grip tightens, and you're caught.",
        "choices": [
        { "text": "Lose your shit", "next": "aggressive" },
        { "text": "Stay calm, I can outsmart them.", "next": "retreat-pet" }
        ],
    },
    "retreat-pet": {
        "text": "You're thrown into a cage, joining others who look like you. Days pass in the cramped darkness without food or water.",
        "choices": [
        { "text": "I'm going insane. I need to eat!", "next": "eat-roommate" },
        { "text": "Just be calm. This will be over soon.", "next": "eaten-roommate" }
        ],
    },
    "eat-roommate": {
        "text": "Desperation takes over. You turn on your roommate, devouring him in a frantic, desperate frenzy. The others watch in terror. Days later, you're in some kid's room.",
        "choices": [
        { "text": "This cage is so tiny, let me out now!", "next": "release-pet" },
        { "text": "It's not a 5-star hotel but no point fighting...", "next": "calm-pet" }
        ],
    },
    "release-pet": {
        "text": "You growl and show your teeth. The owner, startled and afraid, bags you up and throws you into the drain, free but alone. You smell something familiar and there's a light on the opposite side. ",
        "choices": [
        { "text": "I can't see anything. The light will guide me.", "next": "eaten-local" },
        { "text": "I need to follow the smell!", "next": "colonise" }
        ],
    },
    "eaten-local": {
        "text": "You run through the drain towards the light, hoping for freedom, but suddenly, a stray cat pounces on you. You died by cat bite.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "colonise": {
        "text": "The pheromones have drawn to another of your species. Soon, your colony grows, outcompeting native species, becoming invasive and overwhelming the ecosystem. You survived the Amazon, but at what cost?",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-turtle" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "calm-pet": {
        "text": "You try to chill, eating the stale food given. Despite neglect, you find comfort in small moments: sunlight through the window, the occasional pat from your owner. You survived the Amazon?",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-monkey" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "eaten-roommate": {
        "text": "Fear makes you shrink into the corner. The others, hungry and desperate, turn on you. You died by cannibalism. ",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "aggressive": {
        "text": "You freak out, hissing and thrashing in their grip. The human recoils, surprised by your aggression, and lets go.",
        "choices": [
        { "text": "Run to the flooded forest in the west. I need clean water", "next": "meet-arapaima" },
        { "text": "Hide in jungle, they can't follow me there!", "next": "meet-anaconda" }
        ],
    },
    "meet-anaconda": {
        "text": "You spot a wounded anaconda coiled sadly on a rock. She offers to help you if you share your next catch.",
        "choices": [
        { "text": "Only if you don't eat me", "next": "help-anaconda" },
        { "text": "No way! Who would wanna work with a predator like you?", "next": "no-anaconda" }
        ],
    },
    "help-anaconda": {
        "text": "You catch a bush dog and bring it to her. With a slow, deliberate hiss, she spreads the message to the jungle: you're not to be eaten. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-eagle" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "no-anaconda": {
        "text": "She slithers away in anger, and her husband soon arrives. He coils around you, squeezing tighter until your vision fades. You died by Anaconda.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "meet-arapaima": {
        "text": "In the water, you see an arapima with a hook stuck in its cheek. She offers to help you catch dinner if you remove the hook.",
        "choices": [
        { "text": "Of course. Us animals gotta stick together!", "next": "help-arapaima" },
        { "text": "She might be dangerous... he's 10x my size", "next": "ignore-arapaima" }
        ],
    },
    "ignore-arapaima": {
        "text": "You swim deeper through the river alone. The current grows stronger. Suddenly, you find yourself trapped behind a dam. A net snares you. You died by fishing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "help-arapaima": {
        "text": "Grateful for your help, the arapima gives you some tetras. 'Stay close,' he says. 'We can warn each other about fishermen.' Survival is easier together. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-dolphin" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "no-soy": {
        "text": "You avoid the humans, but the land around it has been cleared for farming. There's no food left in the wild. Days pass without eating. You died from starvation.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "lake-algae": {
        "text": "The water was bitter! Paralysis spread like wildfire, your body shuts down. You died by toxic algae.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "hit-car": {
        "text": "You spot a road ahead. Freedom! You sprint across, but before you can reach the other side, a car swerves, striking you. You died by car crash.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "tree-shelter": {
        "text": "As you settle into your tree, your eyes catch movement. An ocelot sits below, silent and watching. What does he want...?",
        "choices": [
        { "text": "Camouflage and hide!", "next": "hide-ocelot" },
        { "text": "Run away!", "next": "run-ocelot" }
        ],
    },
    "run-ocelot": {
        "text": "You run through the bushes and vines, heart racing as the ocelot disappears behind you. The danger is gone, but hunger remains.",
        "choices": [
        { "text": "The moss seems edible. I'll snack on this first", "next": "eat-moss" },
        { "text": "I'd rather wait for some real meat", "next": "meet-coral" }
        ],
    },
    "meet-coral": {
        "text": "You crouch low, waiting for something to hunt. Then finally you see it. Bright bands of red, yellow, and black slide through the grass.",
        "choices": [
        { "text": "Pounce and eat!", "next": "eat-coral" },
        { "text": "Hmm... it might be poisonous.", "next": "no-coral" }
        ],
    },
    "eat-coral": {
        "text": "The bite burns. The venom clouds your vision. A creature comes out of nowhere and offers you a fruit.",
        "choices": [
        { "text": "Give it to me now! I can't take it anymore", "next": "meet-owl" },
        { "text": "You're just trying to poison me! Get outta here!", "next": "stomp-human" }
        ],
    },
    "meet-owl": {
        "text": "You bite into the Heartroot. It’s bitter, thick like sap. Warmth spreads through your chest. The dizziness fades slowly. He offers you some more food for your journey ahead.",
        "choices": [
        { "text": "Climb the mountain. It might be safer up there", "next": "go-mountain" },
        { "text": "It's too late. I should rest nearby", "next": "bullet-ants" }
        ],
    },
    "go-mountain": {
        "text": "You push yourself toward the distant mountain, each step heavier than the last. The air is dry, the ground cracks beneath your weight. Your throat aches. You see a small pond in front.",
        "choices": [
        { "text": "I'm parched... time to rest for a while", "next": "die-mosquito" },
        { "text": "I need to keep going. Something's pulling me.", "next": "mountain-spirit" }
        ],
    },
    "mountain-spirit": {
        "text": "You reach the mountain peak, breath ragged. The wind stills. A warm light surrounds you. The mountain spirit watches, then blesses you with strength. You are no longer alone. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-eagle" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "die-mosquito": {
        "text": "As you rest, a cloud of mosquitoes rises around you. Days later, fever grips you. You never wake again. You died by mosquito bites.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
        "questionNumber": 2
    },
    "bullet-ants": {
        "text": "You settle into a hollow branch on a tree. It seems safe. Then you feel them. Crawling, biting, burning. You died by bullet ant bites.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "stomp-human": {
        "text": "Colors pulse, sounds stretch into music as you try to navigate the forest. Voices emerge in strange accents. A group of humans in beige crush you under their boots. They didn't see. You died by crushing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "eat-moss": {
        "text": "The moss is damp and bitter, enough to quiet your growling stomach for a moment, but not enough.",
        "choices": [
        { "text": "I've had enough, I need to find safe shelter.", "next": "thunderstorm" },
        { "text": "Nuts would be the perfect dessert right now!", "next": "meet-macaw" }
        ],
    },
    "meet-macaw": {
        "text": "You search the forest floor for nuts. A flash of red and blue catches your eye. A macaw perches above, watching you with curious eyes.",
        "choices": [
        { "text": "Hey! Please help me! I'm new here!", "next": "follow-macaw" },
        { "text": "I should leave him alone...", "next": "no-macaw" }
        ],
    },
    "no-macaw": {
        "text": "Without the macaw's help, you search alone. Where are all the nuts? Ahead, you spot a group of humans barging through the trees.",
        "choices": [
        { "text": "Please give me some food! I'm starving!", "next": "approach-scientist" },
        { "text": "Stay away... I know better.", "next": "away-scientist" }
        ],
    },
    "away-scientist": {
        "text": "You slip away from the humans. You take one wrong step. A snap echoes through the trees. Steel clamps your leg. You died by bear trap.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "approach-scientist": {
        "text": "The humans kneel gently, offering delicious nuts. They put something on your ear and let you go. Years pass and you see them again.",
        "choices": [
        { "text": "Hide! They might not be as kind as the ones I've met", "next": "escape-scientist" },
        { "text": "I trust them! What's the worst that could happen?", "next": "yes-scientist" }
        ],
    },
    "yes-scientist": {
        "text": "It's the same human! Apparently, they're scientists! The data from your tag helped them find a mate, the first you’ve seen in seasons. Together, you save your species from extinction. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-macaw" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "escape-scientist": {
        "text": "The humans searched, but couldn't find you. Seasons passed, and the signal faded. Without the data, they could not act in time. You were the last of your kind. You died and your entire species went extinct.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "follow-macaw": {
        "text": "The macaw tilts its head, then drops a brazil nut to you. He asks if you'd like to join their nut hunt.",
        "choices": [
        { "text": "Hell yea! Nut hunt time!", "next": "join-macaw" },
        { "text": "Thanks, but I roll solo", "next": "reject-macaw" }
        ],
    },
    "reject-macaw": {
        "text": "You turn away and walk into the jungle, alone by choice, steady and calm. The paths diverge.",
        "choices": [
        { "text": "Climb up the waterfall", "next": "go-waterfall" },
        { "text": "Descend towards the dark caves", "next": "cave-home" }
        ],
    },
    "cave-home": {
        "text": "You descend down the hills, finding a glowing cave lit with moss and crystals. It’s warm, quiet, and hidden. You curl up inside. This place is home now.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-jaguar" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "go-waterfall": {
        "text": "You've reached the peak! The view is breathtaking. You wade into the water to cool off. The current is stronger than it looks. You’re dragged toward the falls, over. You died by drowning.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "join-macaw": {
        "text": "You follow the macaw through the canopy. More birds appear, vibrant and loud. They welcome you, no questions asked. You fly with them now. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-macaw" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "thunderstorm": {
        "text": "Rain begins to fall, slow and cold. Thunder rumbles across the canopy. Luckily, a small creature appears near a tree hollow and waves you into his burrow.",
        "choices": [
        { "text": "It's obviously a trap.,,", "next": "flash-flood" },
        { "text": "Yes please! Let me in!", "next": "meet-tapir" }
        ],
    },
    "meet-tapir": {
        "text": "You stumble into the burrow, shivering and tired. The tapir nudges some roots and leaves to you. He offers you his children's old burrow for shelter. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-sloth" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "flash-flood": {
        "text": "You ignore the creature and keep searching. The rain grows even heavier. Suddenly, a wall of water rushes through the trees. You died by drowning.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "hide-ocelot": {
        "text": "The ocelot circles below, sniffing the air. It prowls for a while, then disappears. You're safe, but your stomach aches from hunger.",
        "choices": [
        { "text": "I'll go hunt now!", "next": "panther-stalk" },
        { "text": "I've had enough thrill today, I'll hunt tomorrow", "next": "logger-death" }
        ],
    },
    "panther-stalk": {
        "text": "Through the thick leaves, you spot it. Not an ocelot this time. A panther. Larger, darker, silent. It watches from the shadows, and your fur stands on end.",
        "choices": [
        { "text": "Attack him first!", "next": "attack-panther" },
        { "text": "Run! It's a freaking panther, not just an ocelot!", "next": "run-armadillo" }
        ],
    },
    "run-armadillo": {
        "text": "You break into a clearing. An armadillo freezes, then speaks with a calm voice.'If you don't eat me, I’ll show you where the water runs clean'",
        "choices": [
        { "text": "Eat her now. Who knows when my next meal will come?", "next": "eat-armadillo" },
        { "text": "Alright, lead the way...", "next": "friend-armadillo" }
        ],
    },
    "friend-armadillo": {
        "text": "True to her word, she leads you through stone paths to a hidden spring. For a time, you thrive. But a deadly drought hits. Your friend says birds will migrate in a few days, bringing food. You should wait for the feast.",
        "choices": [
        { "text": "Alright, I believe you", "next": "stay-savanna" },
        { "text": "I can't stay. Maybe there's something more out there.", "next": "find-ravine" }
        ],
    },
    "find-ravine": {
        "text": "You walk toward the horizon. Just as the sun begins to fall, the ground dips. Below, a lush ravine bursts with green, water, and life. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-turtle" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "stay-savanna": {
        "text": "You wait, watching the sky. The birds never come. Their songs are silent this season, scared off by machines and smoke near the area. You died from hunger.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    
    "eat-armadillo": {
        "text": "Chomp! She was delicious. Days pass, the thirst grows worse. You search for water, but the riverbeds are dry. The drought has taken everything. You died of thirst.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "attack-panther": {
        "text": "The panther strikes fast. You scramble away, bleeding and disoriented. With fading strength, you climb a nearby tree, searching for safety. You see two paths.",
        "choices": [
        { "text": "Dash towards the river!", "next": "help-catfish" },
        { "text": "Follow the glowing lights", "next": "human-scared" }
        ],
    },
    "human-scared": {
        "text": "You burst from the trees toward the lights, desperate and stumbling. The entire human camp screams as you emerge. A shot cracks through the air. You died by gunshot.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "help-catfish": {
        "text": "You limp to the water's edge, blood trailing behind you. A blind catfish emerges. She guides you to a submerged hollow beneath the riverbank, hidden by reeds and roots. The mud cools your wounds. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-sloth" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "logger-death": {
        "text": "You oversleep, curled in the branches. The roar of chainsaws jolts you awake. The tree cracks beneath you. You fall with it, swallowed by noise and dust. You died on impact",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "river": {
        "text": "The tranquil river sparkles with life. Shoals of vibrant fish dart beneath the surface, weaving through roots and reeds.",
        "choices": [
        { "text": "I'll relax here for a bit before my journey ahead...", "next": "chill-at-river" },
        { "text": "I need to fuel up on food now!", "next": "fish-food" }
        ],
    },
    "chill-at-river": {
        "text": "You kneel by the riverbank, where the water glistens like glass. Scattered along the shore, pastel-colored shells shimmer under the sun.",
        "choices": [
        { "text": "The water looks cooling, lets go for a dip!", "next": "downstream" },
        { "text": "I wonder if there are any yummy things to snack on here", "next": "shells" }
        ],    },
    "shells": {
        "text": "Tempted by their shine, you nibble on a few of the shells. Then a wave of nausea suddenly hits. Oh no! The water here is contaminated with heavy metals from the mining upstream...",
        "choices": [
        { "text": "I should stay here for safety", "next": "eel-piranha" },
        { "text": "I need clean water to wash my mouth!", "next": "mangrove-manatee" }
        ],    },
    "mangrove-manatee": {
        "text": "You push through twisted roots and emerge into a flooded mangrove forest. A gentle manatee floats nearby, munching on water plants. 'You look lost. I know a safe route through the mangroves... but it’s longer. There’s a faster path too, but something dark lingers there.'",
        "choices": [
        { "text": "I'll take the long route with you!", "next": "follow-manatee" },
        { "text": "Too long. I'll take the shortcut alone", "next": "alone-manatee" }
        ],    },
    "alone-manatee": {
        "text": "You pass under a steep muddy bank—then hear a crack. Logging nearby destabilized the slope. You died by suffocation",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "follow-manatee": {
        "text": "The manatee leads you slowly through winding waters. Ahead, a barrier of tangled roots blocks the way. Theres a hidden underwater passage, he says. But its tight and dark.",
        "choices": [
        { "text": "I think I can fit through!", "next": "tunnel-manatee" },
        { "text": "I'll try to jump over...", "next": "roots-manatee" }
        ],    },
    "roots-manatee": {
        "text": "You struggle and snap a branch, triggering a swarm of wasps nesting above. Died by wasp stings.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "tunnel-manatee": {
        "text": "You hold your breath and follow the dim light. At the other end, there's fresh, clear water and blooming lilies.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-otter" },
        { "text": "Play again", "next": "start" }
        ],    },
    "eel-piranha": {
        "text": "Under the water, you see a glowing-eyed electric eel. He says he will lead you to a spring. A piranha from across the water shouts 'he's lying! follow me and you'll be safe!'",
        "choices": [
        { "text": "Why would Eel lie to me?", "next": "trust-eel" },
        { "text": "Piranha seems more genuine", "next": "trust-piranha" }
        ],    },
    "trust-eel": {
        "text": "He glides silently through a submerged cave system. Sparks flicker around him as he says, 'The pure spring is deeper inside. But there are territorial river rays nearby.'",
        "choices": [
        { "text": "I'm not scared of a little shock! Stay close.", "next": "close-eel" },
        { "text": "You go ahead, I'll follow", "next": "far-eel" }
        ],
    },
    "far-eel": {
        "text": "It's too dark! You lost Eel in a school of fish. You stay quiet to listen for cues.",
        "choices": [
        { "text": "I hear water dripping? I'll follow that", "next": "water-drip" },
        { "text": "Wait fishies! Let me follow you", "next": "follow-school" }
        ],    },
    "water-drip": {
        "text": "You find a crystal-clear spring filtered by limestone rock. You survived!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-turtle" },
        { "text": "Play again", "next": "start" }
        ],    },
    "follow-school": {
        "text": "You trail the shimmering school deeper into the channel, but suddenly the water grows still. Oh no! An illegal fishing boat’s electrified grid, rigged to stun fish en masse. Died by shock",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "close-eel": {
        "text": "Sudden surge! You're shocked a little but unharmed. The rays back off. You find a split path. Eel is incoherent after the shock, it took up so much energy. It's too late to turn back.",
        "choices": [
        { "text": "Go through the glowing tunnel", "next": "tunnel-eel" },
        { "text": "Go through the driftwood tunnel", "next": "driftwood-eel" }
        ],    },
    "driftwood-eel": {
        "text": "You emerge outside the cave, back in the open area. An osprey scoops you up. Died by osprey.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "tunnel-eel": {
        "text": "You reach a hidden cenote with clean, mineral-rich water and glowing fish.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-dolphin" },
        { "text": "Play again", "next": "start" }
        ],    },
    "trust-piranha": {
        "text": "Ms Piranha leads you into a murky tributary with flickers of gold in the silt. You can either dive down now to find the spring or wait until it's night when there's less predators. Good luck! She leaves.",
        "choices": [
        { "text": "I'll die of thirst if I wait! Dive right now!", "next": "dive-now" },
        { "text": "Hmm.. I can wait a bit longer", "next": "wait-dive" }
        ],    },
    "wait-dive": {
        "text": "The river glows under moonlight, but you're blinded by the blackwater. Shadows move. A group of sharp-toothed Tambaqui approach.",
        "choices": [
        { "text": "Hide between some rocks.", "next": "hide-tambaqui" },
        { "text": "Hey! Please help me!", "next": "help-tambaqui" }
        ],    },
     "help-tambaqui": {
        "text": "They're friendly! The leader warns you that Piranha is known for luring animals to her family for dinner! He offers you to join their group swim upstream together.",
        "choices": [
        { "text": "Let me come upstream with you", "next": "swim-tambaqui" },
        { "text": "No thanks, I'll find my own way.", "next": "refuse-tambaqui" }
        ],    },
    "refuse-tambaqui": {
        "text": "Alright. You can also take a shortcut through the mini river behind those trees. But be careful, lotsa fishermen like to camp there!",
        "choices": [
        { "text": "Swim there now, the fishermen won't be fishing at night", "next": "shortcut-now" },
        { "text": "Sleep first, at least I can see in the morning.", "next": "shortcut-morning" }
        ],
    },
    "shortcut-now": {
        "text": "Swim towards the flooded forest now. Suddenly, you get stuck in some kind of box? Oh no! They left the trap overnight. Died by fishing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "shortcut-morning": {
        "text": "Take a long sleep. The river drifts you in an unknown direction during the night. You wake up in at the coastal area! You drifted into saltwater. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-dolphin" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "swim-tambaqui": {
        "text": "You swim for hours and reach a beautiful oxbow lake! You survived the amazon.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-otter" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "hide-tambaqui": {
        "text": "The Tambaqui leave without noticing you. Phew! You quietly wade through the blackwater, vision blurred by tannins. Every direction looks the same. Hours pass. You circle back unknowingly, again and again. Died from exhaustion",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "dive-now": {
        "text": "You descend into shimmering water. Suddenly, a water scorpion glides near.",
        "choices": [
        { "text": "Wait for him to pass", "next": "wait-scorpion" },
        { "text": "Hide in a crevice! He's gonna sting me!", "next": "hide-scorpion" }
        ],
    },
    "wait-scorpion": {
        "text": "The scorpion ignores you and disappears. You discover a hidden spring...but it's full of piranhas. You're their dinner. Died by piranhas.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "downstream": {
        "text": "You drift gently downstream, cradled by the current. You pass through quiet village. An aromatic smell curls from the huts as children's laughter echos softly across the water.",
        "choices": [
        { "text": "Do you guys have any food for me?", "next": "beg-scraps" },
        { "text": "Watch from afar. They might be dangerous!", "next": "watch-village" }
        ],
    },
    "fish-food": {
        "text": "The fish are small, barely worth the effort. You stare upstream, wondering if larger prey waits beyond.",
        "choices": [
        { "text": "Quality over quantity, there's better food upstream!", "next": "upstream" },
        { "text": "I'm staying right here.", "next": "stay-caiman" }
        ],
    },
    "stay-caiman": {
        "text": "As you crouch by the river, a ripple breaks the surface. Yellow eyes rise. A caiman, still as stone, watching you from the shallows.",
        "choices": [
        { "text": "Run away!", "next": "run-caiman" },
        { "text": "I was here first!", "next": "fight-caiman" }
        ],
    },
    "fight-caiman": {
        "text": "You charge the caiman, heart pounding. It snaps its jaws once, twice. Then drags you under. The water stills. You died by Caiman attack.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "run-caiman": {
        "text": "You sprint from the river, lungs burning. Mist curls around twisted trees. You’ve entered a cloud forest, where every shadow whispers and nothing feels alone.",
        "choices": [
        { "text": "Find shelter or I'll freeze!", "next": "cloudforest-burrow" },
        { "text": "I'm starving. I need food!", "next": "clearing-cattle" }
        ],
    },
    "clearing-cattle": {
        "text": "A wide clearing stretches before you, dotted with grazing cattle and a worn-down farmhouse. You've found a cattle farm.",
        "choices": [
        { "text": "Jump the fence. I need food now!", "next": "guard-dog" },
        { "text": "Seems dangerous, I'll sneak in by the gate", "next": "caught-farmer" }
        ],
    },
    "caught-farmer": {
        "text": "You make it halfway around the fence when a sharp voice yells behind you. The farmer stands with a rifle raised.",
        "choices": [
        { "text": "Attack him before he shoots!", "next": "attack-farmer" },
        { "text": "Stay still! He might let me go", "next": "lunch-farmer" }
        ],
    },
    "lunch-farmer": {
        "text": "The farmer lowers his rifle, eyes narrowing. After a pause, he sighs and hands you half a sandwich.",
        "choices": [
        { "text": "Thank you...", "next": "tuberculosis-end" },
        { "text": "He's trying poison me!", "next": "farmer-death" }
        ],
    },
    "farmer-death": {
        "text": "The jungle stretches endlessly. No fruit, no game, no water. Your stomach aches, your steps falter. You should’ve taken the sandwich.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
        "questionNumber": 3
    },
    "tuberculosis-end": {
        "text": "The cough won’t stop. Your chest aches from contracted tuberculosis. Hunting is impossible now.Every few days, you limp back to the farm. The farmer waits, silent, offering bread and water.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-monkey" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "attack-farmer": {
        "text": "His dogs run to his rescue. You escape into the jungle, shaking, burning with fever. You contracted canine distemper. You can't hunt anymore. You died of starvation.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "guard-dog": {
        "text": "As you step into the clearing, a low growl stops you cold. A guard dog bursts from the farmhouse, teeth bared. You run, but not fast enough.",
        "choices": [
        { "text": "I can't beat them. I need to run.", "next": "meet-firefly" },
        { "text": "Keep fighting! There's no more food for miles!", "next": "fight-dog" }
        ],
    },
    "meet-firefly": {
        "text": "You stumble back into the cloud forest, badly wounded. Mist curls around you and then, a soft glow ahead. A single flicker… floating.",
        "choices": [
        { "text": "Please help me. I'm dying!", "next": "help-firefly" },
        { "text": "That's no firefly... it's the eyes of something evil", "next": "ignore-firefly" }
        ],
    },
    "ignore-firefly": {
        "text": "You drag yourself through the mist, clutching your wound. The light fades behind you. No help comes. Your legs give out. You died by dog bite.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "help-firefly": {
        "text": "The firefly drifts through the mist. You follow, limping, bleeding, until lights appear. A research center. Scientists rush out. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-viper" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "fight-dog": {
        "text": "You kick and claw, refusing to go down. The dog snarls, and suddenly, more join. A pack surrounds you. Teeth flash. You died by dog attack.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "cloudforest-burrow": {
        "text": "You spot a burrow beneath twisted roots. But the leaves are flattened, the soil still warm. Something else sleeps here…",
        "choices": [
        { "text": "Sleep inside anyway... It's too cold out here", "next": "meet-spectacledbear" },
        { "text": "I'll dig my own burrow", "next": "dig-ownburrow" }
        ],
    },
    "dig-ownburrow": {
        "text": "You decide to dig your own shelter beneath a slope. The soil is loose, the rocks unstable. A rumble. Then collapse. You died by rocks crushing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "meet-spectacledbear": {
        "text": "A low huff echoes behind you. A spectacled bear, large and watchful, emerges from the mist, her cub nearby. She snorts, eyes firm 'leave.'",
        "choices": [
        { "text": "No! I was here first.", "next": "no-spectacledbear" },
        { "text": "I'm sorry, I'll leave...", "next": "yes-spectacledbear" }
        ],
    },
    "yes-spectacledbear": {
        "text": "The bear snorts softly, then speaks—not in words, but in feeling. 'Do you have a home?' Her eyes soften. She takes you in as part of her family. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-frog" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "no-spectacledbear": {
        "text": " The mother bear growls louder this time. Then she charges. You don’t have time to run. You died by spectacled bear.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "upstream": {
        "text": "You swim upstream in search of real meat… but the waters ahead ripple with strange shapes.",
        "choices": [
        { "text": "Maybe I can eat them", "next": "approach-capybara" },
        { "text": "Who knows what they are? Better stay away.", "next": "ignore-capybara" }
        ],
    },
    "ignore-capybara": {
        "text": "Hunger gnaws as you scan the dense jungle. It's time to search for something, anything, that will keep me going.",
        "choices": [
        { "text": "Maybe there's some bugs under these rocks", "next": "meet-centipede" },
        { "text": "I'll take my chances and look for something more filling.", "next": "hunt-meat" }
        ],
    },
    "hunt-meat": {
        "text": "Your stomach growls. The jungle offers two trails: one lined with scattered chicken-like tracks, likely junglefowl. The other shows clawed drag marks and droppings, pointing toward a large iguana basking deeper in the brush.",
        "choices": [
        { "text": "Follow junglefowl, they're easier to catch", "next": "go-junglefowl" },
        { "text": "Stalk the iguana, the meat will be so filling.", "next": "go-iguana" }
        ],
    },
    "go-iguana": {
        "text": "You pounce on the iguanas and they all scatter, but one doesn't move. Just stares... it's a jungle spirit. Before you can react, it vanishes, and you collapse, lifeless, under its curse.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "go-junglefowl": {
        "text": "You silently creep forward, but as you lunge, the fowl darts away with surprising speed, letting out a sharp squawk. You chase after it, but the terrain is difficult.",
        "choices": [
        { "text": "Keep chasing!", "next": "chase-junglefowl" },
        { "text": "I'ts not worth it...", "next": "giveup-junglefowl" }
        ],
    },
    "giveup-junglefowl": {
        "text": "You duck behind a thick tree and hold your breath. The poacher approaches, scanning the area. He eventually leaves, frustrated. You're starving, but there's a carcass nearby.",
        "choices": [
        { "text": "The carcass is all I need", "next": "eat-carcass" },
        { "text": "I'd rather have something fresh", "next": "giveup-carcass" }
        ],
    },
    "eat-carcass": {
        "text": "You eat the tainted meat, feeling sluggish. The sickness lingers, leaving you constantly nauseous and weak, surviving but chronically ill from the contaminated food.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-jaguar" },
        { "text": "Play again", "next": "start" }
        ],  
    },
    "giveup-carcass": {
        "text": "You decide not to risk it. The carcass is old, and you continue on. Days pass, your hunger growing more intense, and you feel your strength draining. You died from starvation",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "chase-junglefowl": {
        "text": "You lunge again, but in the heat of the moment, you bump into a hidden poacher's snare. The trap pulls tight around your leg. The poacher approaches, raising a net. You died by poaching",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "meet-centipede": {
        "text": "As you lift a damp, moss-covered rock, a massive centipede appears, its armored body glistening, coils in the shadows, watching you with eerie stillness.",
        "choices": [
        { "text": "You look delicious! Nom nom nom.", "next": "eat-centipede" },
        { "text": "Hey little guy! Wanna be friends?", "next": "friend-centipede" }
        ],
    },
    "friend-centipede": {
        "text": "He bites you! Your vision spins. Nearby, you find two plants: one with twisting red roots, the other with glossy purple berries.",
        "choices": [
        { "text": "Chew the roots", "next": "roots-centipede" },
        { "text": "Take the berries", "next": "berries-centipede" }
        ],
    },
    "roots-centipede": {
        "text": "You chew the root. It burns your tongue, but the fire in your veins starts to fade. Your heart steadies. You’ve beaten the venom. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-sloth" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "berries-centipede": {
        "text": "Sweet at first...then numbness. Your breath catches. Your body convulses. These berries weren’t medicine. You died by poison.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "eat-centipede": {
        "text": "A strange warmth floods your veins. The jungle shifts, colors bloom unnaturally... and suddenly, you're floating through the trees.",
        "choices": [
        { "text": "Let the high take over", "next": "lara-mapinguari" },
        { "text": "Fight the venom!", "next": "fight-venom" }
        ],
    },
    "lara-mapinguari": {
        "text": "The air grows heavy as night falls. Beneath the deep hum of insects and distant bird calls, two figures emerge from the foliage, both pulsing with power beyond this world.",
        "choices": [
        { "text": "Wait for me, glowing woman!", "next": "follow-lara" },
        { "text": "The scary beast seems like he wants to help", "next": "follow-mapin" }
        ],
    },
    "follow-mapin": {
        "text": "You step back and bow slightly, showing respect. 'What are you?' you ask. The Mapinguari’s chest rumbles. It opens its mouth, which on on its belly, revealing a swarm of roots and spores. You inhale by accident. You died",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "follow-lara": {
        "text": "You step into the cool, ankle-deep river. The world quiets as mist surrounds you. The Iara sings a haunting melody that seems to slow time. Soon, you're floating. You see flashes of ancient Amazonian tribes, the spirits of drowned wanderers, and a glimpse of yourself in another life.",
        "choices": [
        { "text": "Carry me away, river!", "next": "follow-trance" },
        { "text": "No! I must fight!", "next": "fight-trance" }
        ],
    },
    "fight-trance": {
        "text": "You thrash against the current, struggling to escape. The Iara’s eyes narrow. The water turns cold and unforgiving. Your breath runs out. Silence. The river keeps what it claims. Died by Iara.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "follow-trance": {
        "text": "You fight the venom’s grip, forcing your mind to stay sharp, but your body fails. Darkness creeps in, and your heartbeat fades into silence. You died, but wait... not really.",
        "choices": [
            { "text": "Find out who you are", "next": "secret-ending" },
            { "text": "Play again", "next": "start" }
        ],
    },
		"secret-ending": {
        "text": "You unlocked the secret ending~",
        "choices": [
            { "text": "Find out who you are", "next": "result-spirit" },
        ],
    },
    "fight-venom": {
        "text": "You grit your teeth, resisting the venom’s pull but your limbs betray you. The jungle spins, your heart races… then stops. Died by centipede venom",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "approach-capybara": {
        "text": "You surface beside a group of capybaras lounging peacefully. One nudges a pile of jungle fruits toward you with a gentle snort. They seem friendly… but something feels off.",
        "choices": [
        { "text": "No thanks, I'd rather eat YOU!", "next": "eat-capybara" },
        { "text": "Yes please? This fruit seems delicious!", "next": "fruit-capybara" }
        ],
    },
    "fruit-capybara": {
        "text": "It’s juicy, sweet, and cool like rain in your mouth. The capybaras chirp with delight, nuzzling your side. For now, you belong here.",
        "choices": [
        { "text": "Stay with my new friends forever!", "next": "stay-capybara" },
        { "text": "Thanks for the fruit but I want to explore!", "next": "cartel-death" }
        ],
    },
    "cartel-death": {
        "text": "You enter a cartel-controlled coca field. You trip a motion sensor and are taken out by a trap meant for authorities. You died by cartel.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "stay-capybara": {
        "text": "You choose to stay. Days pass in gentle peace, basking in the sun and swimming in clear streams until the day you die, surrounded by your dear friends. Peace at last. You survived the Amazon. ",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-otter" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "eat-capybara": {
        "text": "Driven by hunger, you catch a smaller capybara, its fur slick, its eyes wide. The meat is tender, gamey, and faintly sweet from the jungle fruits it had eaten.",
        "choices": [
        { "text": "I'll stay here and stake out the prey", "next": "factory-explosion" },
        { "text": "I'll go hunt for food in the jungle", "next": "grasslands-anteater" }
        ],
    },
    "grasslands-anteater": {
        "text": "You reach the open grasslands. An anteater looks up mid-snack, sniffs, then waddles ahead. Without a word, it leads you deeper, toward something only it seems to know.",
        "choices": [
        { "text": "There's my dinner!", "next": "eat-anteater" },
        { "text": "Hmm, he seems suspicious. I won't follow him.", "next": "sepsis-death" }
        ],
    },
    "eat-anteater": {
        "text": "You strike. The anteater thrashes, but it’s no match. You feast, muscles charged with new strength. From now on, even the shadows step aside. You are no longer prey.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-jaguar" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "sepsis-death": {
        "text": "You ignore the anteater and wander thirsty through the tall grass. Blades slice your skin, small wounds you barely notice, until fever sets in days later. You Died by Sepsis",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "factory-explosion": {
        "text": "While waiting at the river, you notice a humming from a strange, rusted structure. It gets louder. Suddenly a ball of light bursts, igniting leaking gas, killing every animal and human in the area. You died by explosion",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "beg-scraps": {
        "text": "An indigenous child approaches shyly. She throws you a piece of roasted chicken. Warm, fragrant, wrapped in a banana leaf. You devour it.",
        "choices": [
        { "text": "What else can I do here?", "next": "explore-village" },
        { "text": "That's enough, I belong in the jungle", "next": "enter-jungle-1" }
        ],
    },
    "enter-jungle-1": {
        "text": "As you step off the worn trail and into thicker jungle, the air grows still. Vines brush your shoulders, and a prickling sensation crawls up your spine. Someone’s watching you.",
        "choices": [
        { "text": "Run and don't look back!", "next": "run-puma" },
        { "text": "I'll camouflage in the bushes", "next": "hide-spider" }
        ],
    },
    "run-puma": {
        "text": "You sprint through the forest and find a small cavern. There's a fruit bat in here! He offers you a space in the cave in exchange for you collecting some fruits behind some small crevices for him. Upon looking, there are two different fruits.",
        "choices": [
        { "text": "Take the blue fruits.", "next": "blue-fruit" },
        { "text": "Take the red fruits", "next": "red-fruit" }
        ],
        
    },
    "hide-spider": {
        "text": "The looks around and runs in the other direction. Phew! You catch your breath...only to feel dozens of eyes lock onto you. From the bushes emerges a massive wolf spider. He says he knows where to get some fresh water. ",
        "choices": [
        { "text": "Lead the way!", "next": "spider-death" },
        { "text": "No thanks! I'll find the water myself.", "next": "meadow-end" }
        ],
    
    },
    "meadow-end": {
            "text": "Ignoring the spider’s unblinking stare, you slip free and push ahead, only to emerge into a breathtaking meadow, glowing with wildflowers and golden light.",
            "choices": [
            { "text": "Find out what animal you are", "next": "result-butterfly" },
            { "text": "Play again", "next": "start" }
            ],
    },
    "spider-death": {
        "text": "You follow him into the bushes. The sticky silk wraps around your limbs. The last thing you see is the wolf spider crawling closer. Darkness follows. You died by spider wolf.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
        
    },
    "blue-fruit": {
        "text": "'Ah, acai is our favourite! We welcome you to our home, stranger. Feel free to come share our bounty and shelter whenever you can' You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are.", "next": "result-macaw" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "red-fruit": {
        "text": "'Wild Nightshade?! You monster. Are you trying to poison us all so you can take our cave?!' The bats attack you. You died by bats.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "explore-village": {
        "text": "There's a cassava farm in this village! You spot holes in the leaves. There are sneaky pests at work. It’s the cassava hornworm, fat and green, chewing through the crops under the farmer’s worried gaze.",
        "choices": [
        { "text": "Feast on the pesky bugs. So juicy and filling!", "next": "eat-pest" },
        { "text": "I'd rather have the cassava leaves.", "next": "eat-cassava" }
        ],
    },
    "eat-cassava": {
        "text": "You sneak a bite of bitter cassava. Too late, the farmer sees. That night, the village gathers. Over the fire, they laugh. You’re the main course.",
        "choices": [
            { "text": "Play again", "next": "start" }
        ],
    },
    "eat-pest": {
        "text": "The farmer was grateful for your help! He decides to name you. Everytime you're hungry, you can come to the village to feast on the bugs!",
        "choices": [
        { "text": "Stay nearby the village, help the farmer in exchange for food", "next": "result-monkey" },
        { "text": "I'd rather explore the rainforest...", "next": "leave-village" }
        ],
    },
    "leave-village": {
        "text": "You leave the safety of the village, drawn by curiosity. But the jungle turns unforgiving. Smoke rises fast and thick. A wildfire crackles behind you. Run to safety!",
        "choices": [
        { "text": "Find a swamp. The fire won't burn there!", "next": "smoke-death" },
        { "text": "Run as fast as you can away from the heat", "next": "escape-grasslands" }
        ],
    },
    "smoke-death": {
        "text": "You stumble through the choking haze, eyes stinging, lungs burning. You search desperately for the swamp’s cool refuge, but it’s gone, or maybe never there. Darkness closes in. You died by wildfire",
        "choices": [
            { "text": "Play again", "next": "start" }
        ],
    },
    "escape-grasslands": {
        "text": "You sprint toward the open grasslands, heart pounding. The smoke thins. Here, fire-tough trees stand firm, their bark scarred but strong. The flames weaken. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-butterfly" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "watch-village": {
        "text": "You crouch by the bank, watching the village from afar. Smoke rises, voices echo: humans. They seem loud… unpredictable. You stay hidden. There's a rustling behind you.",
        "choices": [
        { "text": "Might be a group of prey. I need to eat.", "next": "chase-poacher" },
        { "text": "I'll wait until it's night to find food around the village", "next": "hide-night" }
        ],
    },
    "hide-night": {
        "text": "As you hide, the rain creeps in and the temperature drops. Soaked, shivering, your body slowly shuts down in your sleep. You died from hypothermia.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "chase-poacher": {
        "text": "You hear voices... too close. You run. Gunshots crack behind you. Branches tear your skin as you sprint through the dark.",
        "choices": [
        { "text": "Dive and hide underwater!", "next": "river-poacher" },
        { "text": "I hope the village will hide me", "next": "locals-poacher" }
        ],
    },
    "river-poacher": {
        "text": "You slip into the river, holding your breath beneath a curtain of reeds. The poachers pass, unaware. You surface, heart pounding. Alive… but cold, soaked, and still starving.",
        "choices": [
        { "text": "Eat the colorful mushrooms", "next": "mushroom-end" },
        { "text": "Snack on the beautiful flowers", "next": "poisonflower-death" }
        ],
    },
    "poisonflower-death": {
        "text": "You chew the soft, fragrant petals of the trumpet-shaped flower. At first, nothing. Your thoughts blur, the trees melt into color. Your heart races, then falters. You died by Angel's Trumpet",
        "choices": [
				{ "text": "Play again", "next": "start" }
        ],
    },
    "mushroom-end": {
        "text": "You nibble on the strange, blue-streaked mushroom. Warmth spreads through your body. The leaves shimmer. The birds sing your name. Everything feels perfect. You fall asleep in the canopy. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-frog" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "locals-poacher": {
        "text": "You sprint toward the village, shouts behind you. As you break through the treeline, villagers see your fear and act. The poachers vanish into the jungle. The villagers heal you and release you in the morning. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-viper" },
        { "text": "Play again", "next": "start" }
        ],
    },

};

// Initialize the game when the page loads
let currentNode = "start";

// Function to save game state to local storage
function saveGame() {
		localStorage.setItem("adventureGameState", currentNode);
}

// Function to load game state from local storage
function loadGame() {
		const savedState = localStorage.getItem("adventureGameState");
		if (savedState && gameData[savedState]) {
				currentNode = savedState;
		}
}

// Function to update the game display
function updateGame() {
	const node = gameData[currentNode];

	// If the current node is a result node (IDs starting with "result-")
	if (currentNode.startsWith("result-")) {
			// Hide the game container and show the results container
			document.getElementById("game-container").style.display = "none";
			document.getElementById("results-page").style.display = "block";
			
			// Get the result animal
			let resultAnimal = currentNode.substring(7);  // node.resultAnimal
			// Display the result photo
			document.getElementById("results-image").innerHTML = 
					`<img id="result" src="assets/${resultAnimal.toLowerCase()}.png" alt="${resultAnimal}">`;
			return; // Exit updateGame without rendering choices
	}
	
	// For regular game nodes, ensure the game container is visible and the results page is hidden
	document.getElementById("game-container").style.display = "block";
	document.getElementById("results-page").style.display = "none";

	// Update the main story text
	document.getElementById("story-text").textContent = node.text;

	// Clear any existing choices
	const choicesDiv = document.getElementById("choices");
	choicesDiv.innerHTML = "";
	
	// Create and add new choice buttons with a fade-out transition on click
	node.choices.forEach(choice => {
			const button = document.createElement("button");
			button.className = "choice-btn";
			button.textContent = choice.text;
			button.addEventListener("click", () => {
					fadeOutAndUpdate(() => {
							currentNode = choice.next;
							updateGame();
							saveGame();
					});
			});
			choicesDiv.appendChild(button);
	});
}

    

function startGame() {
	// Hide start and results pages; show the game
	document.getElementById("start-page").style.display = "none";
	document.getElementById("results-page").style.display = "none";
	document.getElementById("game-container").style.display = "block";
	// Reset the state and update
	currentNode = "start";
	updateGame();
	saveGame();
}

function fadeOutAndUpdate(callback) {
	const container = document.getElementById("game-container");
	container.classList.add("fade-out");
	setTimeout(() => {
		callback();
		container.classList.remove("fade-out");
	}, 800);
}
      

document.getElementById("play-again-button").addEventListener("click", () => {
		// Go back to the start page
		document.getElementById("results-page").style.display = "none";
		document.getElementById("start-page").style.display = "block";
		// Reset currentNode and clear saved state
		saveGame();
});
    
      

// When the page loads
document.addEventListener("DOMContentLoaded", () => {
// Ensure only the start page is visible on load
document.getElementById("start-page").style.display = "block";
document.getElementById("game-container").style.display = "none";
document.getElementById("results-page").style.display = "none";

// Attach the Play button listener
document.getElementById("play-button").addEventListener("click", startGame);
});


document.getElementById("play-button").addEventListener("click", startGame);
