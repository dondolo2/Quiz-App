const allQuestions = {
  // Animal questions
  animals: [
    // Easy (5)
    {
      question: "Which animal is known as the King of the Jungle?",
      answers: [
        { text: "Tiger", correct: false },
        { text: "Elephant", correct: false },
        { text: "Lion", correct: true },
        { text: "Leopard", correct: false },
      ],
    },
    {
      question: "Which animal is the largest mammal in the world?",
      answers: [
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Shark", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "What do pandas primarily eat?",
      answers: [
        { text: "Meat", correct: false },
        { text: "Bamboo", correct: true },
        { text: "Fruits", correct: false },
        { text: "Leaves", correct: false },
      ],
    },
    {
      question: "Which bird is often associated with delivering babies?",
      answers: [
        { text: "Swan", correct: false },
        { text: "Stork", correct: true },
        { text: "Flamingo", correct: false },
        { text: "Eagle", correct: false },
      ],
    },
    {
      question: "How many legs does a spider have?",
      answers: [
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "10", correct: false },
        { text: "12", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "Which animal can sleep while standing up?",
      answers: [
        { text: "Cat", correct: false },
        { text: "Horse", correct: true },
        { text: "Lion", correct: false },
        { text: "Dog", correct: false },
      ],
    },
    {
      question: "Which flightless bird is native to New Zealand?",
      answers: [
        { text: "Kiwi", correct: true },
        { text: "Penguin", correct: false },
        { text: "Emu", correct: false },
        { text: "Ostrich", correct: false },
      ],
    },
    {
      question: "Which mammal lays eggs?",
      answers: [
        { text: "Platypus", correct: true },
        { text: "Kangaroo", correct: false },
        { text: "Koala", correct: false },
        { text: "Bat", correct: false },
      ],
    },
    {
      question: "Which snake is the longest in the world?",
      answers: [
        { text: "Anaconda", correct: false },
        { text: "Reticulated Python", correct: true },
        { text: "Boa Constrictor", correct: false },
        { text: "King Cobra", correct: false },
      ],
    },
    {
      question: "How do dolphins communicate?",
      answers: [
        { text: "Body language only", correct: false },
        { text: "Clicks and whistles", correct: true },
        { text: "Touch", correct: false },
        { text: "Grunts", correct: false },
      ],
    },
    {
      question: "What type of animal is a Komodo dragon?",
      answers: [
        { text: "Lizard", correct: true },
        { text: "Snake", correct: false },
        { text: "Crocodile", correct: false },
        { text: "Frog", correct: false },
      ],
    },
    {
      question: "Which marine creature has three hearts?",
      answers: [
        { text: "Octopus", correct: true },
        { text: "Squid", correct: false },
        { text: "Whale", correct: false },
        { text: "Shark", correct: false },
      ],
    },

    // University-level Difficult (8)
    {
      question:
        "What is the term for animals that regulate their body temperature internally?",
      answers: [
        { text: "Ectotherms", correct: false },
        { text: "Endotherms", correct: true },
        { text: "Poikilotherms", correct: false },
        { text: "Heliotherms", correct: false },
      ],
    },
    {
      question:
        "Which gland in birds controls migration and reproductive behavior via melatonin production?",
      answers: [
        { text: "Adrenal gland", correct: false },
        { text: "Pineal gland", correct: true },
        { text: "Pituitary gland", correct: false },
        { text: "Thyroid gland", correct: false },
      ],
    },
    {
      question: "Which part of the insect body contains the legs and wings?",
      answers: [
        { text: "Head", correct: false },
        { text: "Thorax", correct: true },
        { text: "Abdomen", correct: false },
        { text: "Cephalothorax", correct: false },
      ],
    },
    {
      question: "Which class of animals do lampreys and hagfish belong to?",
      answers: [
        { text: "Chondrichthyes", correct: false },
        { text: "Agnatha", correct: true },
        { text: "Osteichthyes", correct: false },
        { text: "Amphibia", correct: false },
      ],
    },
    {
      question:
        "Which of the following animals has a closed circulatory system?",
      answers: [
        { text: "Earthworm", correct: true },
        { text: "Flatworm", correct: false },
        { text: "Jellyfish", correct: false },
        { text: "Coral", correct: false },
      ],
    },
    {
      question:
        "In evolutionary biology, what is the term for shared traits derived from a common ancestor?",
      answers: [
        { text: "Homoplasy", correct: false },
        { text: "Synapomorphy", correct: true },
        { text: "Autapomorphy", correct: false },
        { text: "Analogy", correct: false },
      ],
    },
    {
      question:
        "Which protein is most abundant in mammalian connective tissue and gives skin its elasticity?",
      answers: [
        { text: "Myosin", correct: false },
        { text: "Collagen", correct: true },
        { text: "Actin", correct: false },
        { text: "Keratin", correct: false },
      ],
    },
    {
      question:
        "Which type of symmetry is exhibited by echinoderms such as starfish as adults?",
      answers: [
        { text: "Bilateral symmetry", correct: false },
        { text: "Radial symmetry", correct: true },
        { text: "Asymmetry", correct: false },
        { text: "Spiral symmetry", correct: false },
      ],
    },
  ],

  //Plant Biology
  plantBiology: [
    // Easy (5)
    {
      question: "Which part of the plant conducts photosynthesis?",
      answers: [
        { text: "Roots", correct: false },
        { text: "Stem", correct: false },
        { text: "Leaves", correct: true },
        { text: "Flowers", correct: false },
      ],
    },
    {
      question: "What is the primary function of plant roots?",
      answers: [
        { text: "Photosynthesis", correct: false },
        { text: "Water and nutrient absorption", correct: true },
        { text: "Reproduction", correct: false },
        { text: "Support", correct: false },
      ],
    },
    {
      question:
        "What gas do plants absorb from the atmosphere for photosynthesis?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      question: "Which pigment is responsible for the green color in plants?",
      answers: [
        { text: "Chlorophyll", correct: true },
        { text: "Carotene", correct: false },
        { text: "Anthocyanin", correct: false },
        { text: "Melanin", correct: false },
      ],
    },
    {
      question: "Which part of the plant produces seeds?",
      answers: [
        { text: "Roots", correct: false },
        { text: "Stem", correct: false },
        { text: "Flower", correct: true },
        { text: "Leaf", correct: false },
      ],
    },

    // Medium (7)
    {
      question:
        "What is the process by which plants lose water through their leaves?",
      answers: [
        { text: "Transpiration", correct: true },
        { text: "Evaporation", correct: false },
        { text: "Germination", correct: false },
        { text: "Condensation", correct: false },
      ],
    },
    {
      question: "What type of plants do not have vascular tissue?",
      answers: [
        { text: "Angiosperms", correct: false },
        { text: "Gymnosperms", correct: false },
        { text: "Bryophytes", correct: true },
        { text: "Ferns", correct: false },
      ],
    },
    {
      question: "What structure in plants absorbs light for photosynthesis?",
      answers: [
        { text: "Chloroplasts", correct: true },
        { text: "Mitochondria", correct: false },
        { text: "Nucleus", correct: false },
        { text: "Vacuole", correct: false },
      ],
    },
    {
      question:
        "Which type of plant reproduction involves the transfer of pollen from one flower to another?",
      answers: [
        { text: "Asexual reproduction", correct: false },
        { text: "Self-pollination", correct: false },
        { text: "Cross-pollination", correct: true },
        { text: "Fertilization", correct: false },
      ],
    },
    {
      question: "Which part of the plant stores food in the form of starch?",
      answers: [
        { text: "Leaves", correct: false },
        { text: "Roots", correct: true },
        { text: "Stems", correct: false },
        { text: "Flowers", correct: false },
      ],
    },
    {
      question: "What is the male reproductive part of a flower called?",
      answers: [
        { text: "Pistil", correct: false },
        { text: "Stigma", correct: false },
        { text: "Stamen", correct: true },
        { text: "Ovule", correct: false },
      ],
    },
    {
      question:
        "Which process in plants converts sunlight, water, and carbon dioxide into glucose and oxygen?",
      answers: [
        { text: "Respiration", correct: false },
        { text: "Photosynthesis", correct: true },
        { text: "Fermentation", correct: false },
        { text: "Transpiration", correct: false },
      ],
    },

    // University-level Difficult (8)
    {
      question:
        "What is the term for the plant hormone that promotes stem elongation and cell division?",
      answers: [
        { text: "Auxin", correct: true },
        { text: "Gibberellin", correct: false },
        { text: "Cytokinin", correct: false },
        { text: "Abscisic acid", correct: false },
      ],
    },
    {
      question:
        "Which type of plants have seeds exposed on cones and do not produce flowers?",
      answers: [
        { text: "Angiosperms", correct: false },
        { text: "Bryophytes", correct: false },
        { text: "Gymnosperms", correct: true },
        { text: "Ferns", correct: false },
      ],
    },
    {
      question:
        "What is the main difference between monocots and dicots in terms of seed leaves?",
      answers: [
        {
          text: "Monocots have two seed leaves, dicots have one",
          correct: false,
        },
        { text: "Monocots have one seed leaf, dicots have two", correct: true },
        { text: "Both have one seed leaf", correct: false },
        { text: "Both have two seed leaves", correct: false },
      ],
    },
    {
      question:
        "What term is used to describe the movement of water through plants, driven by capillary action?",
      answers: [
        { text: "Translocation", correct: false },
        { text: "Transpiration", correct: false },
        { text: "Capillary action", correct: true },
        { text: "Evaporation", correct: false },
      ],
    },
    {
      question:
        "Which vascular tissue is responsible for transporting water and minerals from the roots to the leaves?",
      answers: [
        { text: "Phloem", correct: false },
        { text: "Xylem", correct: true },
        { text: "Cambium", correct: false },
        { text: "Sclerenchyma", correct: false },
      ],
    },
    {
      question:
        "What is the term for a plant that completes its life cycle in one year?",
      answers: [
        { text: "Perennial", correct: false },
        { text: "Biennial", correct: false },
        { text: "Annual", correct: true },
        { text: "Deciduous", correct: false },
      ],
    },
    {
      question:
        "Which type of photosynthesis occurs in plants that grow in hot, dry environments, such as cacti?",
      answers: [
        { text: "C3 photosynthesis", correct: false },
        { text: "C4 photosynthesis", correct: true },
        { text: "CAM photosynthesis", correct: false },
        { text: "Asexual photosynthesis", correct: false },
      ],
    },
    {
      question:
        "Which term describes the specialized vascular tissue that transports sugars in plants?",
      answers: [
        { text: "Phloem", correct: true },
        { text: "Xylem", correct: false },
        { text: "Cortex", correct: false },
        { text: "Epidermis", correct: false },
      ],
    },
  ],

  //Human Biology
  humanBiology: [
    // Easy (5)
    {
      question: "What is the largest organ in the human body?",
      answers: [
        { text: "Heart", correct: false },
        { text: "Brain", correct: false },
        { text: "Skin", correct: true },
        { text: "Liver", correct: false },
      ],
    },
    {
      question: "How many bones are there in the adult human body?",
      answers: [
        { text: "206", correct: true },
        { text: "250", correct: false },
        { text: "220", correct: false },
        { text: "200", correct: false },
      ],
    },
    {
      question: "Which organ pumps blood throughout the body?",
      answers: [
        { text: "Lungs", correct: false },
        { text: "Stomach", correct: false },
        { text: "Heart", correct: true },
        { text: "Kidneys", correct: false },
      ],
    },
    {
      question: "What part of the brain controls thinking and decision-making?",
      answers: [
        { text: "Cerebellum", correct: false },
        { text: "Medulla Oblongata", correct: false },
        { text: "Cerebrum", correct: true },
        { text: "Thalamus", correct: false },
      ],
    },
    {
      question: "What is the main function of the red blood cells?",
      answers: [
        { text: "Fight infections", correct: false },
        { text: "Carry oxygen", correct: true },
        { text: "Clot the blood", correct: false },
        { text: "Produce hormones", correct: false },
      ],
    },

    // Medium (7)
    {
      question:
        "Which system of the body is responsible for fighting infections?",
      answers: [
        { text: "Nervous system", correct: false },
        { text: "Circulatory system", correct: false },
        { text: "Immune system", correct: true },
        { text: "Respiratory system", correct: false },
      ],
    },
    {
      question: "What is the primary function of the digestive system?",
      answers: [
        { text: "To produce hormones", correct: false },
        { text: "To digest and absorb food", correct: true },
        { text: "To pump blood", correct: false },
        { text: "To filter waste", correct: false },
      ],
    },
    {
      question: "Which part of the eye controls the amount of light entering?",
      answers: [
        { text: "Cornea", correct: false },
        { text: "Lens", correct: false },
        { text: "Pupil", correct: true },
        { text: "Retina", correct: false },
      ],
    },
    {
      question: "Which type of muscle is involuntary and found in the heart?",
      answers: [
        { text: "Skeletal muscle", correct: false },
        { text: "Cardiac muscle", correct: true },
        { text: "Smooth muscle", correct: false },
        { text: "Striated muscle", correct: false },
      ],
    },
    {
      question:
        "Which part of the brain is responsible for coordinating voluntary movements?",
      answers: [
        { text: "Cerebellum", correct: true },
        { text: "Medulla Oblongata", correct: false },
        { text: "Pons", correct: false },
        { text: "Hypothalamus", correct: false },
      ],
    },
    {
      question: "How many chambers does the human heart have?",
      answers: [
        { text: "2", correct: false },
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
      ],
    },
    {
      question: "Which hormone regulates the body's metabolism?",
      answers: [
        { text: "Insulin", correct: false },
        { text: "Thyroxine", correct: true },
        { text: "Adrenaline", correct: false },
        { text: "Cortisol", correct: false },
      ],
    },

    // University-level Difficult (8)
    {
      question:
        "What is the term for the process by which DNA makes a copy of itself?",
      answers: [
        { text: "Replication", correct: true },
        { text: "Transcription", correct: false },
        { text: "Translation", correct: false },
        { text: "Mutation", correct: false },
      ],
    },
    {
      question: "What is the function of the smooth endoplasmic reticulum?",
      answers: [
        { text: "Protein synthesis", correct: false },
        { text: "Lipid synthesis and detoxification", correct: true },
        { text: "DNA replication", correct: false },
        { text: "Cell division", correct: false },
      ],
    },
    {
      question: "Which cells are responsible for the production of antibodies?",
      answers: [
        { text: "Red blood cells", correct: false },
        { text: "B lymphocytes", correct: true },
        { text: "T lymphocytes", correct: false },
        { text: "Macrophages", correct: false },
      ],
    },
    {
      question: "What part of the nervous system controls voluntary movements?",
      answers: [
        { text: "Sympathetic nervous system", correct: false },
        { text: "Parasympathetic nervous system", correct: false },
        { text: "Somatic nervous system", correct: true },
        { text: "Autonomic nervous system", correct: false },
      ],
    },
    {
      question:
        "What is the process by which cells take in nutrients and expel waste?",
      answers: [
        { text: "Diffusion", correct: false },
        { text: "Osmosis", correct: false },
        { text: "Active transport", correct: true },
        { text: "Endocytosis", correct: false },
      ],
    },
    {
      question: "What is the role of the Golgi apparatus in the cell?",
      answers: [
        { text: "Synthesizes proteins", correct: false },
        { text: "Packages and modifies proteins", correct: true },
        { text: "Stores genetic information", correct: false },
        { text: "Provides structural support", correct: false },
      ],
    },
    {
      question:
        "What is the term for the process where glucose is broken down to produce energy?",
      answers: [
        { text: "Photosynthesis", correct: false },
        { text: "Glycolysis", correct: true },
        { text: "Fermentation", correct: false },
        { text: "Respiration", correct: false },
      ],
    },
    {
      question:
        "What is the term for the molecule that carries genetic information in cells?",
      answers: [
        { text: "RNA", correct: false },
        { text: "DNA", correct: true },
        { text: "Protein", correct: false },
        { text: "Carbohydrates", correct: false },
      ],
    },
  ],

  // Pschology
  psychology: [
    // Easy (5)
    {
      question: "Who is known as the father of psychoanalysis?",
      answers: [
        { text: "Sigmund Freud", correct: true },
        { text: "Carl Jung", correct: false },
        { text: "B.F. Skinner", correct: false },
        { text: "William James", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does IQ stand for?",
      answers: [
        { text: "Intelligence Quotient", correct: true },
        { text: "Insight Quality", correct: false },
        { text: "Information Quotient", correct: false },
        { text: "Intellectual Quality", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which psychological approach focuses on observable behavior?",
      answers: [
        { text: "Behaviorism", correct: true },
        { text: "Cognitive", correct: false },
        { text: "Humanistic", correct: false },
        { text: "Psychoanalysis", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "What is the term for a persistent, irrational fear of a specific object or situation?",
      answers: [
        { text: "Phobia", correct: true },
        { text: "Anxiety", correct: false },
        { text: "Panic", correct: false },
        { text: "Delusion", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which lobe of the brain is responsible for vision?",
      answers: [
        { text: "Occipital lobe", correct: true },
        { text: "Frontal lobe", correct: false },
        { text: "Temporal lobe", correct: false },
        { text: "Parietal lobe", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (7)
    {
      question: "What does the term 'cognitive dissonance' refer to?",
      answers: [
        {
          text: "Discomfort caused by holding conflicting beliefs",
          correct: true,
        },
        { text: "Memory loss", correct: false },
        { text: "Mental fatigue", correct: false },
        { text: "Overthinking", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "What is the name of the psychological experiment that studied obedience to authority?",
      answers: [
        { text: "Milgram experiment", correct: true },
        { text: "Stanford Prison Experiment", correct: false },
        { text: "Little Albert Experiment", correct: false },
        { text: "Asch Conformity Study", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who proposed the hierarchy of needs theory?",
      answers: [
        { text: "Abraham Maslow", correct: true },
        { text: "Carl Rogers", correct: false },
        { text: "Erik Erikson", correct: false },
        { text: "Jean Piaget", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which part of the brain is primarily involved in forming new memories?",
      answers: [
        { text: "Hippocampus", correct: true },
        { text: "Amygdala", correct: false },
        { text: "Cerebellum", correct: false },
        { text: "Thalamus", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which stage is NOT part of Piaget's stages of cognitive development?",
      answers: [
        { text: "Pre-operational", correct: false },
        { text: "Post-operational", correct: true },
        { text: "Sensorimotor", correct: false },
        { text: "Formal operational", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which neurotransmitter is most associated with feelings of pleasure?",
      answers: [
        { text: "Dopamine", correct: true },
        { text: "Serotonin", correct: false },
        { text: "GABA", correct: false },
        { text: "Acetylcholine", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does the term 'operant conditioning' involve?",
      answers: [
        { text: "Learning through rewards and punishments", correct: true },
        { text: "Learning through association", correct: false },
        { text: "Learning through observation", correct: false },
        { text: "Learning through insight", correct: false },
      ],
      difficulty: "medium",
    },

    // University-Level Difficult (8)
    {
      question: "What does the James-Lange theory of emotion suggest?",
      answers: [
        { text: "Emotions result from physiological reactions", correct: true },
        { text: "Emotions precede bodily reactions", correct: false },
        { text: "All emotions are culturally constructed", correct: false },
        { text: "Thoughts cause emotions directly", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which psychologist developed the concept of 'flow' in positive psychology?",
      answers: [
        { text: "Mihaly Csikszentmihalyi", correct: true },
        { text: "Martin Seligman", correct: false },
        { text: "Carl Jung", correct: false },
        { text: "Albert Bandura", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "In psychometrics, what does 'reliability' refer to?",
      answers: [
        { text: "Consistency of a measurement", correct: true },
        { text: "Validity of results", correct: false },
        { text: "Unbiased sampling", correct: false },
        { text: "Construct accuracy", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which concept is central to Albert Bandura’s theory of social learning?",
      answers: [
        { text: "Observational learning", correct: true },
        { text: "Reinforcement schedules", correct: false },
        { text: "Latent learning", correct: false },
        { text: "Operant response", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "What is the core idea behind Carl Rogers' client-centered therapy?",
      answers: [
        { text: "Unconditional positive regard", correct: true },
        { text: "Free association", correct: false },
        { text: "Aversion therapy", correct: false },
        { text: "Dream interpretation", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What is the main focus of existential psychology?",
      answers: [
        { text: "Human freedom and responsibility", correct: true },
        { text: "Conditioned reflexes", correct: false },
        { text: "Biological instincts", correct: false },
        { text: "IQ and personality", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "What psychological phenomenon involves failing to notice a visible change in the environment?",
      answers: [
        { text: "Change blindness", correct: true },
        { text: "Inattentional bias", correct: false },
        { text: "Cognitive load", correct: false },
        { text: "Visual agnosia", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which psychological theory includes the 'id', 'ego', and 'superego'?",
      answers: [
        { text: "Freudian psychoanalytic theory", correct: true },
        { text: "Behavioral theory", correct: false },
        { text: "Cognitive theory", correct: false },
        { text: "Gestalt psychology", correct: false },
      ],
      difficulty: "difficult",
    },
  ],

  // Medicine
  medicine: [
    // Easy (5)
    {
      question: "What organ pumps blood throughout the human body?",
      answers: [
        { text: "Heart", correct: true },
        { text: "Lungs", correct: false },
        { text: "Liver", correct: false },
        { text: "Kidneys", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "Which vitamin is produced when the skin is exposed to sunlight?",
      answers: [
        { text: "Vitamin D", correct: true },
        { text: "Vitamin A", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B12", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "What is the common name for the medical condition 'hypertension'?",
      answers: [
        { text: "High blood pressure", correct: true },
        { text: "Low blood pressure", correct: false },
        { text: "High cholesterol", correct: false },
        { text: "Diabetes", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does a thermometer measure?",
      answers: [
        { text: "Body temperature", correct: true },
        { text: "Blood pressure", correct: false },
        { text: "Blood sugar", correct: false },
        { text: "Heart rate", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What part of the body is affected by conjunctivitis?",
      answers: [
        { text: "Eyes", correct: true },
        { text: "Ears", correct: false },
        { text: "Skin", correct: false },
        { text: "Lungs", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (7)
    {
      question: "Which blood type is known as the universal donor?",
      answers: [
        { text: "O negative", correct: true },
        { text: "AB positive", correct: false },
        { text: "A positive", correct: false },
        { text: "B negative", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is insulin primarily used to treat?",
      answers: [
        { text: "Diabetes", correct: true },
        { text: "Anemia", correct: false },
        { text: "Asthma", correct: false },
        { text: "Hypertension", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which pathogen causes tuberculosis?",
      answers: [
        { text: "Bacteria", correct: true },
        { text: "Virus", correct: false },
        { text: "Fungus", correct: false },
        { text: "Parasite", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the function of red blood cells?",
      answers: [
        { text: "To transport oxygen", correct: true },
        { text: "To fight infections", correct: false },
        { text: "To form clots", correct: false },
        { text: "To regulate hormones", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which organ is affected by hepatitis?",
      answers: [
        { text: "Liver", correct: true },
        { text: "Heart", correct: false },
        { text: "Lungs", correct: false },
        { text: "Kidneys", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "What medical imaging technique uses magnetic fields and radio waves?",
      answers: [
        { text: "MRI", correct: true },
        { text: "X-ray", correct: false },
        { text: "Ultrasound", correct: false },
        { text: "CT scan", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the name of the largest artery in the body?",
      answers: [
        { text: "Aorta", correct: true },
        { text: "Vena cava", correct: false },
        { text: "Pulmonary artery", correct: false },
        { text: "Coronary artery", correct: false },
      ],
      difficulty: "medium",
    },

    // University-Level Difficult (8)
    {
      question: "What is the role of the glomerulus in the kidney?",
      answers: [
        { text: "Filtration of blood", correct: true },
        { text: "Secretion of hormones", correct: false },
        { text: "Production of urine", correct: false },
        { text: "Reabsorption of water", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "Which cranial nerve is responsible for facial expressions?",
      answers: [
        { text: "Facial nerve (VII)", correct: true },
        { text: "Trigeminal nerve (V)", correct: false },
        { text: "Vagus nerve (X)", correct: false },
        { text: "Optic nerve (II)", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What type of tissue lines the respiratory tract?",
      answers: [
        { text: "Ciliated columnar epithelium", correct: true },
        { text: "Simple squamous epithelium", correct: false },
        { text: "Stratified squamous epithelium", correct: false },
        { text: "Cuboidal epithelium", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which enzyme is responsible for breaking down proteins in the stomach?",
      answers: [
        { text: "Pepsin", correct: true },
        { text: "Amylase", correct: false },
        { text: "Lipase", correct: false },
        { text: "Trypsin", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "What condition results from the autoimmune destruction of insulin-producing beta cells?",
      answers: [
        { text: "Type 1 diabetes", correct: true },
        { text: "Type 2 diabetes", correct: false },
        { text: "Hyperthyroidism", correct: false },
        { text: "Addison’s disease", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "Which clotting factor is missing in Hemophilia A?",
      answers: [
        { text: "Factor VIII", correct: true },
        { text: "Factor IX", correct: false },
        { text: "Factor X", correct: false },
        { text: "Fibrinogen", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What is the function of surfactant in the lungs?",
      answers: [
        {
          text: "To reduce surface tension and prevent alveolar collapse",
          correct: true,
        },
        { text: "To increase lung compliance", correct: false },
        { text: "To trap dust and microbes", correct: false },
        { text: "To lubricate the pleural cavity", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which part of the brain regulates hormonal output of the pituitary gland?",
      answers: [
        { text: "Hypothalamus", correct: true },
        { text: "Thalamus", correct: false },
        { text: "Medulla", correct: false },
        { text: "Cerebellum", correct: false },
      ],
      difficulty: "difficult",
    },
  ],

  // Geography
  geography: [
    // Easy (5)
    {
      question: "What is the largest country in the world by land area?",
      answers: [
        { text: "United States", correct: false },
        { text: "Canada", correct: false },
        { text: "Russia", correct: true },
        { text: "China", correct: false },
      ],
    },
    {
      question: "Which continent is Australia part of?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Oceania", correct: true },
        { text: "Africa", correct: false },
        { text: "Europe", correct: false },
      ],
    },
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "Which ocean is the largest?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon River", correct: false },
        { text: "Nile River", correct: true },
        { text: "Yangtze River", correct: false },
        { text: "Mississippi River", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "South Korea", correct: false },
        { text: "Japan", correct: true },
        { text: "Thailand", correct: false },
      ],
    },
    {
      question: "Which country has the most pyramids in the world?",
      answers: [
        { text: "Mexico", correct: false },
        { text: "Egypt", correct: false },
        { text: "Sudan", correct: true },
        { text: "Peru", correct: false },
      ],
    },
    {
      question: "Which city is known as the Big Apple?",
      answers: [
        { text: "Los Angeles", correct: false },
        { text: "New York City", correct: true },
        { text: "Chicago", correct: false },
        { text: "San Francisco", correct: false },
      ],
    },
    {
      question: "Which desert is the largest in the world?",
      answers: [
        { text: "Sahara", correct: true },
        { text: "Arabian Desert", correct: false },
        { text: "Kalahari Desert", correct: false },
        { text: "Gobi Desert", correct: false },
      ],
    },
    {
      question: "Which country has the most islands in the world?",
      answers: [
        { text: "Indonesia", correct: false },
        { text: "Sweden", correct: true },
        { text: "Philippines", correct: false },
        { text: "Canada", correct: false },
      ],
    },
    {
      question: "Which country is home to the Great Barrier Reef?",
      answers: [
        { text: "South Africa", correct: false },
        { text: "Australia", correct: true },
        { text: "India", correct: false },
        { text: "New Zealand", correct: false },
      ],
    },
    {
      question: "Which mountain range separates Europe from Asia?",
      answers: [
        { text: "Himalayas", correct: false },
        { text: "Andes", correct: false },
        { text: "Ural Mountains", correct: true },
        { text: "Rockies", correct: false },
      ],
    },

    // University-level Difficult (8)
    {
      question: "What is the deepest point on Earth's surface?",
      answers: [
        { text: "Mariana Trench", correct: true },
        { text: "Great Barrier Reef", correct: false },
        { text: "Death Valley", correct: false },
        { text: "Lake Baikal", correct: false },
      ],
    },
    {
      question: "Which country has the largest population in the world?",
      answers: [
        { text: "United States", correct: false },
        { text: "India", correct: false },
        { text: "China", correct: true },
        { text: "Indonesia", correct: false },
      ],
    },
    {
      question: "Which country is the largest producer of oil?",
      answers: [
        { text: "Russia", correct: false },
        { text: "Saudi Arabia", correct: true },
        { text: "United States", correct: false },
        { text: "Canada", correct: false },
      ],
    },
    {
      question:
        "What is the second-largest continent in the world by land area?",
      answers: [
        { text: "Africa", correct: true },
        { text: "Asia", correct: false },
        { text: "North America", correct: false },
        { text: "Europe", correct: false },
      ],
    },
    {
      question:
        "Which two countries share the longest international border in the world?",
      answers: [
        { text: "Canada and the United States", correct: true },
        { text: "India and China", correct: false },
        { text: "Russia and China", correct: false },
        { text: "Brazil and Argentina", correct: false },
      ],
    },
    {
      question: "Which country is home to the ancient city of Petra?",
      answers: [
        { text: "Egypt", correct: false },
        { text: "Jordan", correct: true },
        { text: "Iraq", correct: false },
        { text: "Syria", correct: false },
      ],
    },
    {
      question: "What is the name of the longest river in South America?",
      answers: [
        { text: "Amazon River", correct: true },
        { text: "Paraná River", correct: false },
        { text: "Orinoco River", correct: false },
        { text: "São Francisco River", correct: false },
      ],
    },
    {
      question: "Which country has the highest average elevation?",
      answers: [
        { text: "Nepal", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Switzerland", correct: false },
        { text: "Tibet", correct: false },
      ],
    },
  ],

  // Information Technology
  informationTechnology: [
    // Easy (5)
    {
      question: "What does CPU stand for?",
      answers: [
        { text: "Central Processing Unit", correct: true },
        { text: "Central Print Unit", correct: false },
        { text: "Control Panel Unit", correct: false },
        { text: "Central Program Utility", correct: false },
      ],
    },
    {
      question: "Which of these is an output device?",
      answers: [
        { text: "Mouse", correct: false },
        { text: "Keyboard", correct: false },
        { text: "Monitor", correct: true },
        { text: "Scanner", correct: false },
      ],
    },
    {
      question: "What is the primary purpose of an operating system?",
      answers: [
        { text: "Designing graphics", correct: false },
        { text: "Browsing the web", correct: false },
        { text: "Managing computer hardware and software", correct: true },
        { text: "Writing code", correct: false },
      ],
    },
    {
      question: "Which of the following is a programming language?",
      answers: [
        { text: "HTML", correct: false },
        { text: "Java", correct: true },
        { text: "HTTP", correct: false },
        { text: "USB", correct: false },
      ],
    },
    {
      question: "Which device stores data permanently?",
      answers: [
        { text: "RAM", correct: false },
        { text: "Hard Drive", correct: true },
        { text: "Cache", correct: false },
        { text: "Register", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "What does HTTP stand for?",
      answers: [
        { text: "HyperText Transfer Protocol", correct: true },
        { text: "HyperText Transport Program", correct: false },
        { text: "Host Transfer Text Protocol", correct: false },
        { text: "High Transfer Type Protocol", correct: false },
      ],
    },
    {
      question:
        "Which of the following is used to uniquely identify a device on a network?",
      answers: [
        { text: "IP Address", correct: true },
        { text: "MAC Address", correct: false },
        { text: "Domain Name", correct: false },
        { text: "Subnet Mask", correct: false },
      ],
    },
    {
      question: "What type of memory is volatile?",
      answers: [
        { text: "ROM", correct: false },
        { text: "Flash Memory", correct: false },
        { text: "Hard Drive", correct: false },
        { text: "RAM", correct: true },
      ],
    },
    {
      question: "Which company developed the Windows operating system?",
      answers: [
        { text: "Google", correct: false },
        { text: "Microsoft", correct: true },
        { text: "Apple", correct: false },
        { text: "IBM", correct: false },
      ],
    },
    {
      question:
        "What is the name of the database language used to query and modify data?",
      answers: [
        { text: "SQL", correct: true },
        { text: "Python", correct: false },
        { text: "C++", correct: false },
        { text: "XML", correct: false },
      ],
    },
    {
      question:
        "Which device converts digital signals into analog signals and vice versa?",
      answers: [
        { text: "Router", correct: false },
        { text: "Switch", correct: false },
        { text: "Modem", correct: true },
        { text: "Hub", correct: false },
      ],
    },
    {
      question: "Which one is *not* an operating system?",
      answers: [
        { text: "Linux", correct: false },
        { text: "Windows", correct: false },
        { text: "MacOS", correct: false },
        { text: "Google Chrome", correct: true },
      ],
    },

    // Difficult (8)
    {
      question:
        "Which layer of the OSI model is responsible for routing and forwarding?",
      answers: [
        { text: "Transport Layer", correct: false },
        { text: "Data Link Layer", correct: false },
        { text: "Network Layer", correct: true },
        { text: "Application Layer", correct: false },
      ],
    },
    {
      question: "What does RAID stand for in computer storage systems?",
      answers: [
        { text: "Redundant Array of Independent Disks", correct: true },
        { text: "Random Access Integrated Data", correct: false },
        { text: "Rapid Access Independent Disks", correct: false },
        { text: "Read And Integrated Device", correct: false },
      ],
    },
    {
      question: "In binary, what is the result of 1011 + 1101?",
      answers: [
        { text: "11000", correct: true },
        { text: "10110", correct: false },
        { text: "11100", correct: false },
        { text: "10010", correct: false },
      ],
    },
    {
      question:
        "Which sorting algorithm has the best average-case time complexity?",
      answers: [
        { text: "Bubble Sort", correct: false },
        { text: "Merge Sort", correct: true },
        { text: "Selection Sort", correct: false },
        { text: "Insertion Sort", correct: false },
      ],
    },
    {
      question: "Which port number is used by HTTPS by default?",
      answers: [
        { text: "80", correct: false },
        { text: "443", correct: true },
        { text: "22", correct: false },
        { text: "21", correct: false },
      ],
    },
    {
      question: "Which data structure uses LIFO (Last In First Out)?",
      answers: [
        { text: "Queue", correct: false },
        { text: "Stack", correct: true },
        { text: "Linked List", correct: false },
        { text: "Array", correct: false },
      ],
    },
    {
      question: "Which protocol is used for sending email?",
      answers: [
        { text: "SMTP", correct: true },
        { text: "FTP", correct: false },
        { text: "HTTP", correct: false },
        { text: "SNMP", correct: false },
      ],
    },
    {
      question: "Which hashing algorithm is commonly used in cryptography?",
      answers: [
        { text: "SHA-256", correct: true },
        { text: "SSL", correct: false },
        { text: "HTTPS", correct: false },
        { text: "AES", correct: false },
      ],
    },
  ],

  // Business and Economics
  businessAndEconomics: [
    // Easy (5)
    {
      question: "What is the basic unit of a country's economy?",
      answers: [
        { text: "Company", correct: false },
        { text: "Consumer", correct: true },
        { text: "Bank", correct: false },
        { text: "Government", correct: false },
      ],
    },
    {
      question:
        "Which of the following is considered a need rather than a want?",
      answers: [
        { text: "Smartphone", correct: false },
        { text: "Luxury Car", correct: false },
        { text: "Food", correct: true },
        { text: "Designer Shoes", correct: false },
      ],
    },
    {
      question: "What is the purpose of a business plan?",
      answers: [
        { text: "To entertain customers", correct: false },
        { text: "To guide business operations", correct: true },
        { text: "To train employees", correct: false },
        { text: "To create marketing posters", correct: false },
      ],
    },
    {
      question: "What is revenue?",
      answers: [
        { text: "The amount of money spent by a company", correct: false },
        { text: "The total income from sales", correct: true },
        { text: "The profit after costs", correct: false },
        { text: "The cost of production", correct: false },
      ],
    },
    {
      question: "What does GDP stand for?",
      answers: [
        { text: "Gross Domestic Product", correct: true },
        { text: "Global Development Plan", correct: false },
        { text: "General Debt Policy", correct: false },
        { text: "Gross Development Potential", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "Which economic system allows the most government control?",
      answers: [
        { text: "Capitalism", correct: false },
        { text: "Socialism", correct: false },
        { text: "Mixed Economy", correct: false },
        { text: "Command Economy", correct: true },
      ],
    },
    {
      question: "What is inflation?",
      answers: [
        { text: "A decrease in money supply", correct: false },
        {
          text: "A rise in the overall price level of goods and services",
          correct: true,
        },
        { text: "An increase in production", correct: false },
        { text: "The growth of businesses", correct: false },
      ],
    },
    {
      question: "What is the main goal of marketing?",
      answers: [
        { text: "To manage employees", correct: false },
        { text: "To reduce costs", correct: false },
        { text: "To satisfy customer needs profitably", correct: true },
        { text: "To make products look expensive", correct: false },
      ],
    },
    {
      question: "What is the term for the amount of goods available?",
      answers: [
        { text: "Demand", correct: false },
        { text: "Inventory", correct: false },
        { text: "Supply", correct: true },
        { text: "Capacity", correct: false },
      ],
    },
    {
      question:
        "Which financial statement shows a company's income and expenses?",
      answers: [
        { text: "Balance Sheet", correct: false },
        { text: "Cash Flow Statement", correct: false },
        { text: "Income Statement", correct: true },
        { text: "Statement of Retained Earnings", correct: false },
      ],
    },
    {
      question: "What is a monopoly?",
      answers: [
        { text: "A market with many sellers", correct: false },
        { text: "A market with one seller", correct: true },
        { text: "A market with few buyers", correct: false },
        { text: "A market with one buyer", correct: false },
      ],
    },
    {
      question: "What does ROI stand for in business?",
      answers: [
        { text: "Rate of Income", correct: false },
        { text: "Return on Investment", correct: true },
        { text: "Revenue of Industry", correct: false },
        { text: "Results of Innovation", correct: false },
      ],
    },

    // Difficult/University Level (8)
    {
      question: "In economics, what does the 'invisible hand' refer to?",
      answers: [
        { text: "Government control of markets", correct: false },
        { text: "Self-regulation of the free market", correct: true },
        { text: "Illegal trade influences", correct: false },
        { text: "Centralized planning", correct: false },
      ],
    },
    {
      question: "What is the opportunity cost of an action?",
      answers: [
        { text: "The cost of supplies", correct: false },
        { text: "The next best alternative foregone", correct: true },
        { text: "The total cost of production", correct: false },
        { text: "The amount paid for labor", correct: false },
      ],
    },
    {
      question: "What does the Phillips Curve show?",
      answers: [
        { text: "Relationship between GDP and inflation", correct: false },
        {
          text: "Relationship between inflation and unemployment",
          correct: true,
        },
        {
          text: "Relationship between interest rates and stock prices",
          correct: false,
        },
        { text: "Relationship between wages and prices", correct: false },
      ],
    },
    {
      question:
        "What is the main tool used by central banks to control inflation?",
      answers: [
        { text: "Setting tax rates", correct: false },
        { text: "Government spending", correct: false },
        { text: "Interest rate policy", correct: true },
        { text: "Issuing government bonds", correct: false },
      ],
    },
    {
      question: "What is a fiscal deficit?",
      answers: [
        { text: "A surplus in government budget", correct: false },
        { text: "Government expenses exceed revenue", correct: true },
        { text: "When tax income increases", correct: false },
        { text: "An increase in national income", correct: false },
      ],
    },
    {
      question: "In business, what does SWOT stand for?",
      answers: [
        { text: "Stock, Wealth, Options, Trades", correct: false },
        {
          text: "Strengths, Weaknesses, Opportunities, Threats",
          correct: true,
        },
        { text: "Sales, Wages, Output, Trends", correct: false },
        { text: "Strategies, Workflows, Operations, Targets", correct: false },
      ],
    },
    {
      question:
        "Which curve illustrates the trade-off between tax rates and tax revenue?",
      answers: [
        { text: "Phillips Curve", correct: false },
        { text: "IS-LM Curve", correct: false },
        { text: "Laffer Curve", correct: true },
        { text: "Lorenz Curve", correct: false },
      ],
    },
    {
      question: "What does elasticity of demand measure?",
      answers: [
        { text: "Quantity change due to income", correct: false },
        {
          text: "Change in quantity demanded due to price change",
          correct: true,
        },
        { text: "Supply chain flexibility", correct: false },
        { text: "Profitability based on price", correct: false },
      ],
    },
  ],
  // Chemistry
  chemistry: [
    // Easy (5)
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "WO", correct: false },
        { text: "HO", correct: false },
        { text: "H2O", correct: true },
        { text: "H2O2", correct: false },
      ],
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      question:
        "What state of matter has a definite volume but no definite shape?",
      answers: [
        { text: "Solid", correct: false },
        { text: "Liquid", correct: true },
        { text: "Gas", correct: false },
        { text: "Plasma", correct: false },
      ],
    },
    {
      question: "Which element is represented by the symbol 'O'?",
      answers: [
        { text: "Osmium", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Oxide", correct: false },
        { text: "Organium", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT a metal?",
      answers: [
        { text: "Copper", correct: false },
        { text: "Iron", correct: false },
        { text: "Sulfur", correct: true },
        { text: "Aluminum", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "Which of the following is a noble gas?",
      answers: [
        { text: "Hydrogen", correct: false },
        { text: "Chlorine", correct: false },
        { text: "Neon", correct: true },
        { text: "Oxygen", correct: false },
      ],
    },
    {
      question: "What is the pH of a neutral solution?",
      answers: [
        { text: "0", correct: false },
        { text: "7", correct: true },
        { text: "14", correct: false },
        { text: "3", correct: false },
      ],
    },
    {
      question: "What type of bond involves the sharing of electron pairs?",
      answers: [
        { text: "Ionic", correct: false },
        { text: "Covalent", correct: true },
        { text: "Hydrogen", correct: false },
        { text: "Metallic", correct: false },
      ],
    },
    {
      question: "Which of these elements is most reactive?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Fluorine", correct: true },
        { text: "Helium", correct: false },
        { text: "Silver", correct: false },
      ],
    },
    {
      question: "What is the main component of natural gas?",
      answers: [
        { text: "Ethane", correct: false },
        { text: "Butane", correct: false },
        { text: "Methane", correct: true },
        { text: "Propane", correct: false },
      ],
    },
    {
      question: "What is the molar mass of water (H₂O)?",
      answers: [
        { text: "10 g/mol", correct: false },
        { text: "18 g/mol", correct: true },
        { text: "20 g/mol", correct: false },
        { text: "12 g/mol", correct: false },
      ],
    },
    {
      question: "What is formed when an acid reacts with a base?",
      answers: [
        { text: "Water and salt", correct: true },
        { text: "Only water", correct: false },
        { text: "Gas and acid", correct: false },
        { text: "Metal", correct: false },
      ],
    },

    // Difficult (8)
    {
      question:
        "Which orbital has the highest energy in the ground state of an atom?",
      answers: [
        { text: "2s", correct: false },
        { text: "3p", correct: false },
        { text: "3d", correct: true },
        { text: "1s", correct: false },
      ],
    },
    {
      question: "What is the coordination number in a complex [Cu(NH3)4]²⁺?",
      answers: [
        { text: "2", correct: false },
        { text: "4", correct: true },
        { text: "6", correct: false },
        { text: "3", correct: false },
      ],
    },
    {
      question:
        "Which law states that equal volumes of gases at the same temperature and pressure contain the same number of molecules?",
      answers: [
        { text: "Boyle’s Law", correct: false },
        { text: "Avogadro’s Law", correct: true },
        { text: "Charles’s Law", correct: false },
        { text: "Dalton’s Law", correct: false },
      ],
    },
    {
      question: "Which of the following compounds is aromatic?",
      answers: [
        { text: "Cyclohexane", correct: false },
        { text: "Benzene", correct: true },
        { text: "Butane", correct: false },
        { text: "Methanol", correct: false },
      ],
    },
    {
      question: "What is the hybridization of carbon in methane (CH₄)?",
      answers: [
        { text: "sp", correct: false },
        { text: "sp²", correct: false },
        { text: "sp³", correct: true },
        { text: "dsp²", correct: false },
      ],
    },
    {
      question: "Which acid is used in car batteries?",
      answers: [
        { text: "Hydrochloric acid", correct: false },
        { text: "Sulfuric acid", correct: true },
        { text: "Nitric acid", correct: false },
        { text: "Acetic acid", correct: false },
      ],
    },
    {
      question: "Which element has the highest electronegativity?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Chlorine", correct: false },
        { text: "Fluorine", correct: true },
        { text: "Nitrogen", correct: false },
      ],
    },
    {
      question: "What is the role of a catalyst in a chemical reaction?",
      answers: [
        { text: "Increases activation energy", correct: false },
        { text: "Changes product yield", correct: false },
        { text: "Speeds up reaction without being consumed", correct: true },
        { text: "Adds energy to the system", correct: false },
      ],
    },
  ],

  // Physics
  physics: [
    // Easy (5)
    {
      question: "What is the SI unit of force?",
      answers: [
        { text: "Watt", correct: false },
        { text: "Newton", correct: true },
        { text: "Joule", correct: false },
        { text: "Pascal", correct: false },
      ],
    },
    {
      question: "Which of the following is a vector quantity?",
      answers: [
        { text: "Speed", correct: false },
        { text: "Distance", correct: false },
        { text: "Velocity", correct: true },
        { text: "Mass", correct: false },
      ],
    },
    {
      question: "What is the speed of light in a vacuum?",
      answers: [
        { text: "3 × 10⁸ m/s", correct: true },
        { text: "3 × 10⁶ m/s", correct: false },
        { text: "3 × 10³ m/s", correct: false },
        { text: "3 × 10⁵ m/s", correct: false },
      ],
    },
    {
      question: "Which of these is not a simple machine?",
      answers: [
        { text: "Lever", correct: false },
        { text: "Pulley", correct: false },
        { text: "Screwdriver", correct: false },
        { text: "Car", correct: true },
      ],
    },
    {
      question: "Which force keeps planets in orbit around the sun?",
      answers: [
        { text: "Magnetic force", correct: false },
        { text: "Friction", correct: false },
        { text: "Gravitational force", correct: true },
        { text: "Nuclear force", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "What type of lens is used to correct short-sightedness?",
      answers: [
        { text: "Convex", correct: false },
        { text: "Concave", correct: true },
        { text: "Cylindrical", correct: false },
        { text: "Plano-convex", correct: false },
      ],
    },
    {
      question:
        "Which law states that current is directly proportional to voltage?",
      answers: [
        { text: "Newton’s Law", correct: false },
        { text: "Ohm’s Law", correct: true },
        { text: "Coulomb’s Law", correct: false },
        { text: "Faraday’s Law", correct: false },
      ],
    },
    {
      question: "What is the unit of electrical resistance?",
      answers: [
        { text: "Ampere", correct: false },
        { text: "Ohm", correct: true },
        { text: "Volt", correct: false },
        { text: "Watt", correct: false },
      ],
    },
    {
      question: "Which subatomic particle has a positive charge?",
      answers: [
        { text: "Electron", correct: false },
        { text: "Neutron", correct: false },
        { text: "Proton", correct: true },
        { text: "Photon", correct: false },
      ],
    },
    {
      question: "What is the acceleration due to gravity on Earth?",
      answers: [
        { text: "8.9 m/s²", correct: false },
        { text: "10 m/s²", correct: false },
        { text: "9.8 m/s²", correct: true },
        { text: "11.2 m/s²", correct: false },
      ],
    },
    {
      question: "In which direction does heat flow?",
      answers: [
        { text: "Cold to hot", correct: false },
        { text: "Randomly", correct: false },
        { text: "Hot to cold", correct: true },
        { text: "Upward only", correct: false },
      ],
    },
    {
      question: "Which property of a wave is related to its loudness?",
      answers: [
        { text: "Wavelength", correct: false },
        { text: "Amplitude", correct: true },
        { text: "Frequency", correct: false },
        { text: "Speed", correct: false },
      ],
    },

    // Difficult / University Level (8)
    {
      question: "What is the energy of a photon with frequency f?",
      answers: [
        { text: "hf", correct: true },
        { text: "hf²", correct: false },
        { text: "h/f", correct: false },
        { text: "f/h", correct: false },
      ],
    },
    {
      question:
        "Which equation expresses the Heisenberg Uncertainty Principle?",
      answers: [
        { text: "ΔxΔp ≥ ħ/2", correct: true },
        { text: "E = mc²", correct: false },
        { text: "F = ma", correct: false },
        { text: "V = IR", correct: false },
      ],
    },
    {
      question: "Which law explains electromagnetic induction?",
      answers: [
        { text: "Faraday’s Law", correct: true },
        { text: "Kirchhoff’s Law", correct: false },
        { text: "Lenz’s Law", correct: false },
        { text: "Ampère’s Law", correct: false },
      ],
    },
    {
      question: "What type of decay emits an electron?",
      answers: [
        { text: "Alpha decay", correct: false },
        { text: "Gamma decay", correct: false },
        { text: "Beta-minus decay", correct: true },
        { text: "Beta-plus decay", correct: false },
      ],
    },
    {
      question:
        "Which thermodynamic law states that entropy of a perfect crystal at absolute zero is zero?",
      answers: [
        { text: "First Law", correct: false },
        { text: "Second Law", correct: false },
        { text: "Third Law", correct: true },
        { text: "Zeroth Law", correct: false },
      ],
    },
    {
      question: "What is the time dilation formula in special relativity?",
      answers: [
        { text: "t = t₀ / √(1 - v²/c²)", correct: true },
        { text: "t = t₀ × √(1 - v²/c²)", correct: false },
        { text: "t = vt / c", correct: false },
        { text: "t = mc²", correct: false },
      ],
    },
    {
      question:
        "Which equation represents the wave function in quantum mechanics?",
      answers: [
        { text: "Schrödinger’s Equation", correct: true },
        { text: "Maxwell’s Equation", correct: false },
        { text: "Planck’s Equation", correct: false },
        { text: "Bohr’s Equation", correct: false },
      ],
    },
    {
      question: "What is the main source of energy in stars like our sun?",
      answers: [
        { text: "Fission", correct: false },
        { text: "Fusion of hydrogen into helium", correct: true },
        { text: "Combustion", correct: false },
        { text: "Radiation", correct: false },
      ],
    },
  ],

  // Engineering and Built Environment
  engineeringAndBuiltEnv: [
    // Easy (5)
    {
      question: "What material is commonly used to make concrete?",
      answers: [
        { text: "Sand only", correct: false },
        { text: "Cement, sand, and gravel", correct: true },
        { text: "Clay", correct: false },
        { text: "Steel", correct: false },
      ],
    },
    {
      question: "Which unit is used to measure electric current?",
      answers: [
        { text: "Volt", correct: false },
        { text: "Watt", correct: false },
        { text: "Ampere", correct: true },
        { text: "Ohm", correct: false },
      ],
    },
    {
      question: "What type of engineer designs bridges and highways?",
      answers: [
        { text: "Mechanical engineer", correct: false },
        { text: "Chemical engineer", correct: false },
        { text: "Civil engineer", correct: true },
        { text: "Software engineer", correct: false },
      ],
    },
    {
      question: "Which tool is used to measure angles?",
      answers: [
        { text: "Caliper", correct: false },
        { text: "Protractor", correct: true },
        { text: "Ruler", correct: false },
        { text: "Compass", correct: false },
      ],
    },
    {
      question: "What is the main function of a beam in construction?",
      answers: [
        { text: "To transfer vertical loads", correct: true },
        { text: "To insulate walls", correct: false },
        { text: "To decorate a building", correct: false },
        { text: "To pump water", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "Which material has the highest tensile strength?",
      answers: [
        { text: "Aluminum", correct: false },
        { text: "Steel", correct: true },
        { text: "Concrete", correct: false },
        { text: "Wood", correct: false },
      ],
    },
    {
      question: "What is AutoCAD mainly used for?",
      answers: [
        { text: "Accounting", correct: false },
        { text: "Computer programming", correct: false },
        { text: "Engineering drawing and design", correct: true },
        { text: "Video editing", correct: false },
      ],
    },
    {
      question: "Which of the following is a sustainable building material?",
      answers: [
        { text: "Plastic", correct: false },
        { text: "Bamboo", correct: true },
        { text: "Concrete", correct: false },
        { text: "Asbestos", correct: false },
      ],
    },
    {
      question: "In HVAC systems, what does the 'V' stand for?",
      answers: [
        { text: "Ventilation", correct: true },
        { text: "Voltage", correct: false },
        { text: "Vacuum", correct: false },
        { text: "Volume", correct: false },
      ],
    },
    {
      question: "Which structure resists both vertical and lateral loads?",
      answers: [
        { text: "Beam", correct: false },
        { text: "Truss", correct: false },
        { text: "Shear wall", correct: true },
        { text: "Slab", correct: false },
      ],
    },
    {
      question: "What is the primary cause of structural failure?",
      answers: [
        { text: "Good maintenance", correct: false },
        { text: "Proper design", correct: false },
        { text: "Overloading and poor materials", correct: true },
        { text: "Strong foundation", correct: false },
      ],
    },
    {
      question: "What is the function of rebar in reinforced concrete?",
      answers: [
        { text: "Adds color", correct: false },
        { text: "Provides strength in tension", correct: true },
        { text: "Acts as insulation", correct: false },
        { text: "Reduces weight", correct: false },
      ],
    },

    // Difficult / University-level (8)
    {
      question:
        "What is the moment of inertia of a rectangular section (bh³/12) used for?",
      answers: [
        { text: "Calculating electrical resistance", correct: false },
        { text: "Estimating fluid flow", correct: false },
        { text: "Structural bending analysis", correct: true },
        { text: "Thermal insulation", correct: false },
      ],
    },
    {
      question:
        "Which software is commonly used for finite element analysis (FEA)?",
      answers: [
        { text: "Photoshop", correct: false },
        { text: "ANSYS", correct: true },
        { text: "Excel", correct: false },
        { text: "Premiere Pro", correct: false },
      ],
    },
    {
      question: "What is Poisson’s ratio?",
      answers: [
        { text: "Ratio of stress to strain", correct: false },
        { text: "Lateral strain to axial strain", correct: true },
        { text: "Axial load to area", correct: false },
        { text: "Volume change to area", correct: false },
      ],
    },
    {
      question: "Which test determines the compressive strength of concrete?",
      answers: [
        { text: "Slump test", correct: false },
        { text: "Cube test", correct: true },
        { text: "Tensile test", correct: false },
        { text: "Impact test", correct: false },
      ],
    },
    {
      question:
        "Which principle is used in structural analysis of indeterminate structures?",
      answers: [
        { text: "Newton’s Law", correct: false },
        { text: "Principle of superposition", correct: true },
        { text: "Archimedes' Principle", correct: false },
        { text: "Snell's Law", correct: false },
      ],
    },
    {
      question:
        "Which method is used to calculate water flow in open channels?",
      answers: [
        { text: "Manning’s equation", correct: true },
        { text: "Bernoulli’s equation", correct: false },
        { text: "Poiseuille’s equation", correct: false },
        { text: "Continuity equation", correct: false },
      ],
    },
    {
      question: "What does a high modulus of elasticity mean in a material?",
      answers: [
        { text: "It is brittle", correct: false },
        { text: "It is highly flexible", correct: false },
        { text: "It resists deformation", correct: true },
        { text: "It melts easily", correct: false },
      ],
    },
    {
      question:
        "What type of foundation is suitable for weak soil with high water table?",
      answers: [
        { text: "Isolated footing", correct: false },
        { text: "Raft foundation", correct: true },
        { text: "Strip footing", correct: false },
        { text: "Combined footing", correct: false },
      ],
    },
  ],

  // Theology
  theology: [
    // Easy (5)
    {
      question: "Who led the Israelites out of Egypt?",
      answers: [
        { text: "Moses", correct: true },
        { text: "David", correct: false },
        { text: "Abraham", correct: false },
        { text: "Solomon", correct: false },
      ],
    },
    {
      question: "Which religious text contains the Four Gospels?",
      answers: [
        { text: "Torah", correct: false },
        { text: "Qur'an", correct: false },
        { text: "Bible", correct: true },
        { text: "Bhagavad Gita", correct: false },
      ],
    },
    {
      question: "What is the first book of the Bible?",
      answers: [
        { text: "Exodus", correct: false },
        { text: "Psalms", correct: false },
        { text: "Genesis", correct: true },
        { text: "Matthew", correct: false },
      ],
    },
    {
      question: "Which religion is based on the teachings of Jesus Christ?",
      answers: [
        { text: "Islam", correct: false },
        { text: "Judaism", correct: false },
        { text: "Christianity", correct: true },
        { text: "Hinduism", correct: false },
      ],
    },
    {
      question: "Who betrayed Jesus for 30 pieces of silver?",
      answers: [
        { text: "Peter", correct: false },
        { text: "Judas Iscariot", correct: true },
        { text: "Paul", correct: false },
        { text: "John", correct: false },
      ],
    },

    // Medium (7)
    {
      question: "What is the Islamic declaration of faith called?",
      answers: [
        { text: "Salah", correct: false },
        { text: "Zakat", correct: false },
        { text: "Shahada", correct: true },
        { text: "Hajj", correct: false },
      ],
    },
    {
      question:
        "Which major branch of Christianity includes the Pope as its head?",
      answers: [
        { text: "Protestantism", correct: false },
        { text: "Eastern Orthodoxy", correct: false },
        { text: "Catholicism", correct: true },
        { text: "Pentecostalism", correct: false },
      ],
    },
    {
      question: "What is the central text of Judaism?",
      answers: [
        { text: "Qur'an", correct: false },
        { text: "Torah", correct: true },
        { text: "New Testament", correct: false },
        { text: "Book of Mormon", correct: false },
      ],
    },
    {
      question: "What term describes the belief in multiple gods?",
      answers: [
        { text: "Atheism", correct: false },
        { text: "Polytheism", correct: true },
        { text: "Monotheism", correct: false },
        { text: "Pantheism", correct: false },
      ],
    },
    {
      question: "Which Hindu deity is known as the destroyer?",
      answers: [
        { text: "Vishnu", correct: false },
        { text: "Shiva", correct: true },
        { text: "Brahma", correct: false },
        { text: "Ganesha", correct: false },
      ],
    },
    {
      question: "In which religion is Nirvana the ultimate goal?",
      answers: [
        { text: "Christianity", correct: false },
        { text: "Buddhism", correct: true },
        { text: "Islam", correct: false },
        { text: "Judaism", correct: false },
      ],
    },
    {
      question:
        "What is the term for the study of religious truth, God, and divine things?",
      answers: [
        { text: "Philosophy", correct: false },
        { text: "Theology", correct: true },
        { text: "Anthropology", correct: false },
        { text: "Cosmology", correct: false },
      ],
    },

    // University-Level (8)
    {
      question:
        "Which council in 325 AD affirmed the divinity of Jesus Christ?",
      answers: [
        { text: "Council of Trent", correct: false },
        { text: "Council of Nicaea", correct: true },
        { text: "Second Vatican Council", correct: false },
        { text: "Council of Jerusalem", correct: false },
      ],
    },
    {
      question: "What does 'exegesis' refer to in theology?",
      answers: [
        { text: "Worship ritual", correct: false },
        { text: "Interpretation of scripture", correct: true },
        { text: "Religious law", correct: false },
        { text: "Sacramental blessing", correct: false },
      ],
    },
    {
      question:
        "Which doctrine teaches that God predestines some people to salvation?",
      answers: [
        { text: "Pelagianism", correct: false },
        { text: "Arianism", correct: false },
        { text: "Calvinism", correct: true },
        { text: "Universalism", correct: false },
      ],
    },
    {
      question: "In Christian theology, what does 'hypostatic union' mean?",
      answers: [
        { text: "Unity of the church", correct: false },
        { text: "Dual nature of Christ", correct: true },
        { text: "Holy Spirit's power", correct: false },
        { text: "Trinitarian love", correct: false },
      ],
    },
    {
      question:
        "What is the term for a defense of the faith using reasoned arguments?",
      answers: [
        { text: "Homiletics", correct: false },
        { text: "Apologetics", correct: true },
        { text: "Hermeneutics", correct: false },
        { text: "Exorcism", correct: false },
      ],
    },
    {
      question: "Which philosopher/theologian wrote 'Summa Theologica'?",
      answers: [
        { text: "Martin Luther", correct: false },
        { text: "Thomas Aquinas", correct: true },
        { text: "John Calvin", correct: false },
        { text: "Augustine", correct: false },
      ],
    },
    {
      question: "In Islam, what does 'Tawhid' refer to?",
      answers: [
        { text: "Prophethood", correct: false },
        { text: "Oneness of God", correct: true },
        { text: "Fasting", correct: false },
        { text: "Charity", correct: false },
      ],
    },
    {
      question:
        "Which religious movement emphasized sola scriptura and salvation by faith alone?",
      answers: [
        { text: "Reformation", correct: true },
        { text: "Crusades", correct: false },
        { text: "Ecumenical movement", correct: false },
        { text: "Catholicism", correct: false },
      ],
    },
  ],

  // Philosophy
  philosophy: [
    // Easy (5)
    {
      question: "Who is considered the father of Western philosophy?",
      answers: [
        { text: "Socrates", correct: true },
        { text: "Plato", correct: false },
        { text: "Aristotle", correct: false },
        { text: "Descartes", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which philosopher wrote 'The Republic'?",
      answers: [
        { text: "Plato", correct: true },
        { text: "Kant", correct: false },
        { text: "Nietzsche", correct: false },
        { text: "Hume", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is the term for the study of knowledge?",
      answers: [
        { text: "Epistemology", correct: true },
        { text: "Ontology", correct: false },
        { text: "Aesthetics", correct: false },
        { text: "Ethics", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What branch of philosophy deals with moral principles?",
      answers: [
        { text: "Ethics", correct: true },
        { text: "Metaphysics", correct: false },
        { text: "Logic", correct: false },
        { text: "Aesthetics", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which philosopher stated 'I think, therefore I am'?",
      answers: [
        { text: "René Descartes", correct: true },
        { text: "David Hume", correct: false },
        { text: "John Locke", correct: false },
        { text: "Bertrand Russell", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (7)
    {
      question: "Who is the author of 'Being and Time'?",
      answers: [
        { text: "Martin Heidegger", correct: true },
        { text: "Sartre", correct: false },
        { text: "Camus", correct: false },
        { text: "Nietzsche", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the main idea of utilitarianism?",
      answers: [
        {
          text: "The greatest happiness for the greatest number",
          correct: true,
        },
        { text: "Act based on duty", correct: false },
        { text: "Question everything", correct: false },
        { text: "Follow natural law", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does 'tabula rasa' refer to in philosophy?",
      answers: [
        { text: "The mind as a blank slate", correct: true },
        { text: "Innate ideas", correct: false },
        { text: "Divine inspiration", correct: false },
        { text: "The subconscious", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who developed the concept of the 'categorical imperative'?",
      answers: [
        { text: "Immanuel Kant", correct: true },
        { text: "Jeremy Bentham", correct: false },
        { text: "John Stuart Mill", correct: false },
        { text: "Hobbes", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which ancient philosopher taught Aristotle?",
      answers: [
        { text: "Plato", correct: true },
        { text: "Socrates", correct: false },
        { text: "Epicurus", correct: false },
        { text: "Heraclitus", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which philosopher is known for the 'will to power' idea?",
      answers: [
        { text: "Friedrich Nietzsche", correct: true },
        { text: "Karl Marx", correct: false },
        { text: "David Hume", correct: false },
        { text: "Ludwig Wittgenstein", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is phenomenology primarily concerned with?",
      answers: [
        { text: "Conscious experience", correct: true },
        { text: "Economic systems", correct: false },
        { text: "Mathematics", correct: false },
        { text: "Evolution", correct: false },
      ],
      difficulty: "medium",
    },

    // Difficult/University Level (8)
    {
      question: "What is Hegel's dialectic composed of?",
      answers: [
        { text: "Thesis, Antithesis, Synthesis", correct: true },
        { text: "Cause, Effect, Reaction", correct: false },
        { text: "Idea, Concept, Realization", correct: false },
        { text: "Logic, Ethic, Aesthetic", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "What is the central concern of Wittgenstein's 'Tractatus Logico-Philosophicus'?",
      answers: [
        {
          text: "The relationship between language and reality",
          correct: true,
        },
        { text: "Existential dread", correct: false },
        { text: "Moral relativism", correct: false },
        { text: "Human rights", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What does 'Dasein' mean in Heidegger's philosophy?",
      answers: [
        { text: "Being-there", correct: true },
        { text: "Nothingness", correct: false },
        { text: "Eternal soul", correct: false },
        { text: "Free will", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "Which philosopher emphasized 'existence precedes essence'?",
      answers: [
        { text: "Jean-Paul Sartre", correct: true },
        { text: "Simone de Beauvoir", correct: false },
        { text: "Albert Camus", correct: false },
        { text: "Kierkegaard", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What does 'aporia' mean in philosophical discourse?",
      answers: [
        { text: "A state of puzzlement or impasse", correct: true },
        { text: "Enlightenment", correct: false },
        { text: "Moral certainty", correct: false },
        { text: "Divine reason", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What is the 'trolley problem' designed to illustrate?",
      answers: [
        { text: "Ethical decision-making under duress", correct: true },
        { text: "Logic paradoxes", correct: false },
        { text: "Economic scarcity", correct: false },
        { text: "Kantian logic", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which philosopher introduced the idea of the 'veil of ignorance'?",
      answers: [
        { text: "John Rawls", correct: true },
        { text: "Robert Nozick", correct: false },
        { text: "Foucault", correct: false },
        { text: "Nietzsche", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "In Plato's 'Allegory of the Cave', what do the shadows represent?",
      answers: [
        { text: "Perceived reality", correct: true },
        { text: "Truth", correct: false },
        { text: "Logic", correct: false },
        { text: "Enlightenment", correct: false },
      ],
      difficulty: "difficult",
    },
  ],

  // Arts and Culture
  artsAndCulture: [
    // Easy (5)
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Claude Monet", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which musical instrument has 88 keys?",
      answers: [
        { text: "Piano", correct: true },
        { text: "Violin", correct: false },
        { text: "Guitar", correct: false },
        { text: "Drums", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is the main material used in sculpting statues?",
      answers: [
        { text: "Wood", correct: false },
        { text: "Stone", correct: true },
        { text: "Plastic", correct: false },
        { text: "Glass", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Hemingway", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "What is the famous painting of a woman with a mysterious smile?",
      answers: [
        { text: "The Starry Night", correct: false },
        { text: "The Scream", correct: false },
        { text: "Mona Lisa", correct: true },
        { text: "Guernica", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (7)
    {
      question:
        "Which artist is famous for the abstract expressionist movement?",
      answers: [
        { text: "Salvador Dalí", correct: false },
        { text: "Jackson Pollock", correct: true },
        { text: "Andy Warhol", correct: false },
        { text: "Claude Monet", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who is known for composing 'Symphony No. 5'?",
      answers: [
        { text: "Beethoven", correct: true },
        { text: "Mozart", correct: false },
        { text: "Bach", correct: false },
        { text: "Chopin", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "In which country was the painting 'The Birth of Venus' created?",
      answers: [
        { text: "France", correct: false },
        { text: "Italy", correct: true },
        { text: "Spain", correct: false },
        { text: "Germany", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which type of painting is characterized by using dots of color?",
      answers: [
        { text: "Cubism", correct: false },
        { text: "Pointillism", correct: true },
        { text: "Impressionism", correct: false },
        { text: "Surrealism", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who created the famous sculpture 'David'?",
      answers: [
        { text: "Michelangelo", correct: true },
        { text: "Donatello", correct: false },
        { text: "Raphael", correct: false },
        { text: "Leonardo da Vinci", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which city is home to the Louvre Museum?",
      answers: [
        { text: "Rome", correct: false },
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "New York", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which artistic movement is Salvador Dalí associated with?",
      answers: [
        { text: "Surrealism", correct: true },
        { text: "Expressionism", correct: false },
        { text: "Impressionism", correct: false },
        { text: "Renaissance", correct: false },
      ],
      difficulty: "medium",
    },

    // University-Level Difficult (8)
    {
      question:
        "What is the term used for the technique of applying layers of paint in a controlled way to achieve the desired effect in oil painting?",
      answers: [
        { text: "Chiaroscuro", correct: false },
        { text: "Impasto", correct: true },
        { text: "Sfumato", correct: false },
        { text: "Tenebrism", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "Which movement did Andy Warhol pioneer?",
      answers: [
        { text: "Cubism", correct: false },
        { text: "Pop Art", correct: true },
        { text: "Dadaism", correct: false },
        { text: "Fauvism", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What is the principle of perspective in visual arts?",
      answers: [
        {
          text: "A method to create the illusion of depth and volume",
          correct: true,
        },
        { text: "The use of light and shadow", correct: false },
        { text: "A style focusing on geometric shapes", correct: false },
        { text: "The inclusion of unusual subject matter", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "What technique did Pablo Picasso and Georges Braque develop?",
      answers: [
        { text: "Impressionism", correct: false },
        { text: "Cubism", correct: true },
        { text: "Expressionism", correct: false },
        { text: "Realism", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Who was the famous architect behind the design of the Guggenheim Museum in New York?",
      answers: [
        { text: "Frank Lloyd Wright", correct: true },
        { text: "Le Corbusier", correct: false },
        { text: "Ludwig Mies van der Rohe", correct: false },
        { text: "Zaha Hadid", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which art form uses live performers to tell a story or convey emotions?",
      answers: [
        { text: "Theater", correct: true },
        { text: "Photography", correct: false },
        { text: "Sculpture", correct: false },
        { text: "Painting", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which term refers to the delicate gradation of light and shadow in painting, especially associated with Leonardo da Vinci?",
      answers: [
        { text: "Sfumato", correct: true },
        { text: "Chiaroscuro", correct: false },
        { text: "Tenebrism", correct: false },
        { text: "Contrapposto", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which surrealist artist is famous for his melting clocks in the painting 'The Persistence of Memory'?",
      answers: [
        { text: "Salvador Dalí", correct: true },
        { text: "René Magritte", correct: false },
        { text: "Max Ernst", correct: false },
        { text: "Frida Kahlo", correct: false },
      ],
      difficulty: "difficult",
    },
  ],

  // Literature
  literature: [
    // Easy (5)
    {
      question: "Who wrote 'Harry Potter and the Sorcerer's Stone'?",
      answers: [
        { text: "J.R.R. Tolkien", correct: false },
        { text: "J.K. Rowling", correct: true },
        { text: "George R.R. Martin", correct: false },
        { text: "C.S. Lewis", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which novel begins with the line, 'Call me Ishmael.'?",
      answers: [
        { text: "Moby-Dick", correct: true },
        { text: "The Great Gatsby", correct: false },
        { text: "Pride and Prejudice", correct: false },
        { text: "1984", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Who wrote the play 'Macbeth'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Christopher Marlowe", correct: false },
        { text: "Oscar Wilde", correct: false },
        { text: "John Milton", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "What is the title of the first book in the 'Chronicles of Narnia' series?",
      answers: [
        { text: "The Lion, the Witch and the Wardrobe", correct: true },
        { text: "Prince Caspian", correct: false },
        { text: "The Silver Chair", correct: false },
        { text: "The Horse and His Boy", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Who wrote 'The Catcher in the Rye'?",
      answers: [
        { text: "F. Scott Fitzgerald", correct: false },
        { text: "J.D. Salinger", correct: true },
        { text: "Ernest Hemingway", correct: false },
        { text: "John Steinbeck", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (7)
    {
      question: "In which novel does the character Gatsby appear?",
      answers: [
        { text: "The Great Gatsby", correct: true },
        { text: "A Tale of Two Cities", correct: false },
        { text: "Brave New World", correct: false },
        { text: "Crime and Punishment", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What genre does 'Frankenstein' belong to?",
      answers: [
        { text: "Science Fiction", correct: true },
        { text: "Fantasy", correct: false },
        { text: "Romance", correct: false },
        { text: "Historical Fiction", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who is the author of 'The Odyssey'?",
      answers: [
        { text: "Homer", correct: true },
        { text: "Virgil", correct: false },
        { text: "Sophocles", correct: false },
        { text: "Aeschylus", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which novel tells the story of a dystopian future controlled by 'Big Brother'?",
      answers: [
        { text: "1984", correct: true },
        { text: "Brave New World", correct: false },
        { text: "Fahrenheit 451", correct: false },
        { text: "Animal Farm", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who wrote the novel 'The Picture of Dorian Gray'?",
      answers: [
        { text: "Oscar Wilde", correct: true },
        { text: "Mark Twain", correct: false },
        { text: "Charles Dickens", correct: false },
        { text: "George Orwell", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which author wrote 'One Hundred Years of Solitude'?",
      answers: [
        { text: "Gabriel García Márquez", correct: true },
        { text: "Mario Vargas Llosa", correct: false },
        { text: "Carlos Fuentes", correct: false },
        { text: "Jorge Luis Borges", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the name of the narrator of 'To Kill a Mockingbird'?",
      answers: [
        { text: "Scout Finch", correct: true },
        { text: "Jem Finch", correct: false },
        { text: "Atticus Finch", correct: false },
        { text: "Tom Robinson", correct: false },
      ],
      difficulty: "medium",
    },

    // University-Level Difficult (8)
    {
      question:
        "Which epic poem is credited with the beginning of Western literature?",
      answers: [
        { text: "The Iliad", correct: true },
        { text: "The Aeneid", correct: false },
        { text: "Beowulf", correct: false },
        { text: "The Divine Comedy", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which 20th-century author is known for the concept of the 'Stream of Consciousness' technique?",
      answers: [
        { text: "Virginia Woolf", correct: true },
        { text: "James Joyce", correct: false },
        { text: "William Faulkner", correct: false },
        { text: "D.H. Lawrence", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "Who wrote the modernist novel 'Ulysses'?",
      answers: [
        { text: "William Faulkner", correct: false },
        { text: "James Joyce", correct: true },
        { text: "Ernest Hemingway", correct: false },
        { text: "T.S. Eliot", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "In which novel would you find the character of the 'White Whale'?",
      answers: [
        { text: "Moby-Dick", correct: true },
        { text: "The Old Man and the Sea", correct: false },
        { text: "The Call of the Wild", correct: false },
        { text: "Heart of Darkness", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which writer is known for his works on absurdism, including 'The Stranger'?",
      answers: [
        { text: "Albert Camus", correct: true },
        { text: "Jean-Paul Sartre", correct: false },
        { text: "Simone de Beauvoir", correct: false },
        { text: "Friedrich Nietzsche", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question: "Which literary work introduced the character of Don Quixote?",
      answers: [
        { text: "Don Quixote", correct: true },
        { text: "The Divine Comedy", correct: false },
        { text: "The Odyssey", correct: false },
        { text: "Paradise Lost", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which famous work was written by Fyodor Dostoevsky and explores themes of guilt and redemption?",
      answers: [
        { text: "Crime and Punishment", correct: true },
        { text: "The Brothers Karamazov", correct: false },
        { text: "The Idiot", correct: false },
        { text: "Notes from Underground", correct: false },
      ],
      difficulty: "difficult",
    },
    {
      question:
        "Which author is famous for writing the gothic novel 'Frankenstein'?",
      answers: [
        { text: "Mary Shelley", correct: true },
        { text: "Bram Stoker", correct: false },
        { text: "Edgar Allan Poe", correct: false },
        { text: "Charlotte Brontë", correct: false },
      ],
      difficulty: "difficult",
    },
  ],

  // History
  history: [
    // Easy (11)
    {
      question: "Who was the first President of the United States?",
      answers: [
        { text: "George Washington", correct: true },
        { text: "Abraham Lincoln", correct: false },
        { text: "Thomas Jefferson", correct: false },
        { text: "John Adams", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "In which year did World War II end?",
      answers: [
        { text: "1945", correct: true },
        { text: "1940", correct: false },
        { text: "1918", correct: false },
        { text: "1939", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which country was formerly known as Persia?",
      answers: [
        { text: "Iran", correct: true },
        { text: "Iraq", correct: false },
        { text: "Afghanistan", correct: false },
        { text: "Turkey", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Who was the first man to walk on the moon?",
      answers: [
        { text: "Neil Armstrong", correct: true },
        { text: "Yuri Gagarin", correct: false },
        { text: "Buzz Aldrin", correct: false },
        { text: "Michael Collins", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which empire was ruled by Julius Caesar?",
      answers: [
        { text: "Roman Empire", correct: true },
        { text: "Ottoman Empire", correct: false },
        { text: "Byzantine Empire", correct: false },
        { text: "Mongol Empire", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      answers: [
        { text: "Joseph Stalin", correct: true },
        { text: "Leon Trotsky", correct: false },
        { text: "Nikita Khrushchev", correct: false },
        { text: "Vladimir Lenin", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "What was the name of the ship that brought the Pilgrims to America in 1620?",
      answers: [
        { text: "The Mayflower", correct: true },
        { text: "The Santa Maria", correct: false },
        { text: "The Nina", correct: false },
        { text: "The Victory", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which civilization built the Pyramids of Giza?",
      answers: [
        { text: "Ancient Egyptians", correct: true },
        { text: "Romans", correct: false },
        { text: "Maya", correct: false },
        { text: "Greeks", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What was the main language spoken in Ancient Rome?",
      answers: [
        { text: "Latin", correct: true },
        { text: "Greek", correct: false },
        { text: "Aramaic", correct: false },
        { text: "Hebrew", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which city was the capital of the Inca Empire?",
      answers: [
        { text: "Cusco", correct: true },
        { text: "Tenochtitlan", correct: false },
        { text: "Machu Picchu", correct: false },
        { text: "Chichen Itza", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "Who was the first female Prime Minister of the United Kingdom?",
      answers: [
        { text: "Margaret Thatcher", correct: true },
        { text: "Elizabeth II", correct: false },
        { text: "Theresa May", correct: false },
        { text: "Ellen Johnson Sirleaf", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (16)
    {
      question: "Who was the leader of the Indian independence movement?",
      answers: [
        { text: "Mahatma Gandhi", correct: true },
        { text: "Jawaharlal Nehru", correct: false },
        { text: "Sukarno", correct: false },
        { text: "Nehru", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which country was formerly known as Ceylon?",
      answers: [
        { text: "Sri Lanka", correct: true },
        { text: "Thailand", correct: false },
        { text: "Myanmar", correct: false },
        { text: "Indonesia", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What event triggered World War I?",
      answers: [
        {
          text: "The assassination of Archduke Franz Ferdinand",
          correct: true,
        },
        { text: "The invasion of Poland", correct: false },
        { text: "The Russian Revolution", correct: false },
        { text: "The bombing of Pearl Harbor", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which leader was responsible for the Cuban Revolution?",
      answers: [
        { text: "Fidel Castro", correct: true },
        { text: "Che Guevara", correct: false },
        { text: "Raul Castro", correct: false },
        { text: "Augusto Pinochet", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which African leader is known for leading South Africa out of apartheid?",
      answers: [
        { text: "Nelson Mandela", correct: true },
        { text: "Desmond Tutu", correct: false },
        { text: "Thabo Mbeki", correct: false },
        { text: "Julius Malema", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which country was the first to grant women the right to vote?",
      answers: [
        { text: "New Zealand", correct: true },
        { text: "Australia", correct: false },
        { text: "Finland", correct: false },
        { text: "Sweden", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "What was the name of the first artificial satellite launched by the Soviet Union?",
      answers: [
        { text: "Sputnik 1", correct: true },
        { text: "Apollo 11", correct: false },
        { text: "Vostok 1", correct: false },
        { text: "Explorer 1", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which war was fought between the North and South regions of the United States?",
      answers: [
        { text: "The American Civil War", correct: true },
        { text: "The Revolutionary War", correct: false },
        { text: "The War of 1812", correct: false },
        { text: "The Spanish-American War", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Who was the first Emperor of China?",
      answers: [
        { text: "Qin Shi Huang", correct: true },
        { text: "Li Shimin", correct: false },
        { text: "Tang Taizong", correct: false },
        { text: "Genghis Khan", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which was the first country to gain independence from the British Empire in 1947?",
      answers: [
        { text: "India", correct: true },
        { text: "Pakistan", correct: false },
        { text: "Sri Lanka", correct: false },
        { text: "Myanmar", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which treaty ended World War I?",
      answers: [
        { text: "Treaty of Versailles", correct: true },
        { text: "Treaty of Paris", correct: false },
        { text: "Treaty of Tordesillas", correct: false },
        { text: "Treaty of Brest-Litovsk", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "In which year did the Berlin Wall fall?",
      answers: [
        { text: "1989", correct: true },
        { text: "1991", correct: false },
        { text: "1987", correct: false },
        { text: "1990", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which country was divided by the Berlin Wall during the Cold War?",
      answers: [
        { text: "Germany", correct: true },
        { text: "Korea", correct: false },
        { text: "Vietnam", correct: false },
        { text: "China", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which empire was ruled by Emperor Augustus?",
      answers: [
        { text: "Roman Empire", correct: true },
        { text: "Ottoman Empire", correct: false },
        { text: "Mongol Empire", correct: false },
        { text: "Byzantine Empire", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which major world event took place in 2001, marking a pivotal moment in global politics?",
      answers: [
        { text: "9/11 Attacks", correct: true },
        { text: "Iraq War", correct: false },
        { text: "End of the Soviet Union", correct: false },
        { text: "Global Financial Crisis", correct: false },
      ],
      difficulty: "medium",
    },

    // Hard (23)
    {
      question: "Who led the Haitian Revolution against French colonial rule?",
      answers: [
        { text: "Toussaint L'Ouverture", correct: true },
        { text: "Napoleon Bonaparte", correct: false },
        { text: "Jean-Jacques Dessalines", correct: false },
        { text: "Simón Bolívar", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which empire controlled much of Eastern Europe before World War I?",
      answers: [
        { text: "Austro-Hungarian Empire", correct: true },
        { text: "Ottoman Empire", correct: false },
        { text: "Russian Empire", correct: false },
        { text: "German Empire", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Who was the first President of South Africa after the end of apartheid?",
      answers: [
        { text: "Nelson Mandela", correct: true },
        { text: "Thabo Mbeki", correct: false },
        { text: "F.W. de Klerk", correct: false },
        { text: "Jacob Zuma", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What was the purpose of the Marshall Plan after World War II?",
      answers: [
        { text: "To aid European reconstruction", correct: true },
        { text: "To prevent the spread of communism", correct: false },
        { text: "To create NATO", correct: false },
        { text: "To rebuild Japan", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which leader was known for his role in the Russian Revolution and the formation of the Soviet Union?",
      answers: [
        { text: "Vladimir Lenin", correct: true },
        { text: "Joseph Stalin", correct: false },
        { text: "Leon Trotsky", correct: false },
        { text: "Nikita Khrushchev", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which war did the United States enter following the attack on Pearl Harbor in 1941?",
      answers: [
        { text: "World War II", correct: true },
        { text: "Korean War", correct: false },
        { text: "Vietnam War", correct: false },
        { text: "World War I", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What was the primary cause of the collapse of the Soviet Union in 1991?",
      answers: [
        { text: "Economic problems and political instability", correct: true },
        { text: "The rise of democracy", correct: false },
        { text: "World War III", correct: false },
        { text: "Collapse of the economy", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What is the name of the 1947 partition plan that divided British India into two countries?",
      answers: [
        { text: "The Mountbatten Plan", correct: true },
        { text: "The Tordesillas Agreement", correct: false },
        { text: "The Treaty of Versailles", correct: false },
        { text: "The Balfour Declaration", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Who was the Prime Minister of the United Kingdom during the Falklands War?",
      answers: [
        { text: "Margaret Thatcher", correct: true },
        { text: "Tony Blair", correct: false },
        { text: "Harold Wilson", correct: false },
        { text: "Edward Heath", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What country did Israel invade in 1967, triggering the Six-Day War?",
      answers: [
        { text: "Egypt", correct: true },
        { text: "Syria", correct: false },
        { text: "Jordan", correct: false },
        { text: "Lebanon", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What was the result of the 1989 Tiananmen Square protests in China?",
      answers: [
        { text: "Violent crackdown by the government", correct: true },
        { text: "Democratic reforms", correct: false },
        { text: "The end of communist rule", correct: false },
        { text: "Peaceful resolution", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "Which war is associated with the Battle of Stalingrad?",
      answers: [
        { text: "World War II", correct: true },
        { text: "World War I", correct: false },
        { text: "Korean War", correct: false },
        { text: "Vietnam War", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "Which 1994 event marked the end of apartheid in South Africa?",
      answers: [
        { text: "The election of Nelson Mandela", correct: true },
        { text: "The Sharpeville Massacre", correct: false },
        { text: "The Soweto Uprising", correct: false },
        { text: "The Boer War", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What triggered the Russian invasion of Ukraine in 2022?",
      answers: [
        {
          text: "Annexation of Crimea and tensions over NATO expansion",
          correct: true,
        },
        { text: "Internal revolution in Ukraine", correct: false },
        { text: "Economic sanctions on Russia", correct: false },
        { text: "The 2014 Euromaidan Revolution", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What was the codename for the Allied invasion of Nazi-occupied France during World War II?",
      answers: [
        { text: "Operation Torch", correct: false },
        { text: "Operation Barbarossa", correct: false },
        { text: "Operation Overlord", correct: true },
        { text: "Operation Neptune", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What was the codename for the Allied invasion of Nazi-occupied France during World War II?",
      answers: [
        { text: "Operation Torch", correct: false },
        { text: "Operation Barbarossa", correct: false },
        { text: "Operation Overlord", correct: true },
        { text: "Operation Neptune", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which African country was never formally colonized by a European power?",
      answers: [
        { text: "Liberia", correct: false },
        { text: "Ethiopia", correct: true },
        { text: "Kenya", correct: false },
        { text: "Morocco", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What was the main ideology of the Khmer Rouge under Pol Pot in Cambodia?",
      answers: [
        { text: "Religious theocracy", correct: false },
        { text: "Communism", correct: true },
        { text: "Monarchism", correct: false },
        { text: "Fascism", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "In which year did India gain independence from British colonial rule?",
      answers: [
        { text: "1945", correct: false },
        { text: "1947", correct: true },
        { text: "1950", correct: false },
        { text: "1939", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Who led the Haitian Revolution that resulted in the first Black republic?",
      answers: [
        { text: "Toussaint Louverture", correct: true },
        { text: "Marcus Garvey", correct: false },
        { text: "Jean-Jacques Dessalines", correct: false },
        { text: "Boukman Dutty", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which international trial prosecuted high-ranking Nazi officials after World War II?",
      answers: [
        { text: "Hague Trials", correct: false },
        { text: "Geneva Hearings", correct: false },
        { text: "Nuremberg Trials", correct: true },
        { text: "Versailles Council", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which Chinese dynasty built most of the Great Wall as it stands today?",
      answers: [
        { text: "Tang Dynasty", correct: false },
        { text: "Yuan Dynasty", correct: false },
        { text: "Ming Dynasty", correct: true },
        { text: "Han Dynasty", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "The Balfour Declaration of 1917 supported the establishment of a national home for which people?",
      answers: [
        { text: "Kurds", correct: false },
        { text: "Jews", correct: true },
        { text: "Palestinians", correct: false },
        { text: "Armenians", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What empire was ruled by Mansa Musa, one of the richest individuals in history?",
      answers: [
        { text: "Ghana Empire", correct: false },
        { text: "Mali Empire", correct: true },
        { text: "Songhai Empire", correct: false },
        { text: "Benin Kingdom", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which treaty marked the end of the Thirty Years' War in Europe in 1648?",
      answers: [
        { text: "Treaty of Versailles", correct: false },
        { text: "Treaty of Tordesillas", correct: false },
        { text: "Peace of Westphalia", correct: true },
        { text: "Treaty of Utrecht", correct: false },
      ],
      difficulty: "hard",
    },
  ],

  //Entertainment and Pop Culture
  entertainmentPopCulture: [
    // Easy (5)
    {
      question: "Who played the character of Harry Potter in the movie series?",
      answers: [
        { text: "Daniel Radcliffe", correct: true },
        { text: "Rupert Grint", correct: false },
        { text: "Matthew Lewis", correct: false },
        { text: "Eddie Redmayne", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "Which animated movie features a young wooden boy named Pinocchio?",
      answers: [
        { text: "Pinocchio", correct: true },
        { text: "The Lion King", correct: false },
        { text: "Aladdin", correct: false },
        { text: "Cinderella", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question:
        "What is the name of the fictional country in the movie *Black Panther*?",
      answers: [
        { text: "Wakanda", correct: true },
        { text: "Zamunda", correct: false },
        { text: "Genovia", correct: false },
        { text: "Elbonia", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which TV show featured the character 'The Fonz'?",
      answers: [
        { text: "Happy Days", correct: true },
        { text: "Friends", correct: false },
        { text: "The Simpsons", correct: false },
        { text: "Seinfeld", correct: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Who sang the hit song 'Shape of You'?",
      answers: [
        { text: "Ed Sheeran", correct: true },
        { text: "Justin Bieber", correct: false },
        { text: "Sam Smith", correct: false },
        { text: "Shawn Mendes", correct: false },
      ],
      difficulty: "easy",
    },

    // Medium (7)
    {
      question: "Which film won the Academy Award for Best Picture in 1994?",
      answers: [
        { text: "Forrest Gump", correct: true },
        { text: "Pulp Fiction", correct: false },
        { text: "The Shawshank Redemption", correct: false },
        { text: "The Lion King", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which TV show features a high school chemistry teacher turned drug kingpin?",
      answers: [
        { text: "Breaking Bad", correct: true },
        { text: "The Sopranos", correct: false },
        { text: "Narcos", correct: false },
        { text: "Better Call Saul", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "In the Marvel Cinematic Universe, who is the main antagonist of *Avengers: Infinity War*?",
      answers: [
        { text: "Thanos", correct: true },
        { text: "Loki", correct: false },
        { text: "Ultron", correct: false },
        { text: "Hela", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which famous singer starred in the 2018 remake of *A Star Is Born*?",
      answers: [
        { text: "Lady Gaga", correct: true },
        { text: "Beyoncé", correct: false },
        { text: "Taylor Swift", correct: false },
        { text: "Rihanna", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which TV show features the characters Rick and Morty?",
      answers: [
        { text: "Rick and Morty", correct: true },
        { text: "Family Guy", correct: false },
        { text: "The Simpsons", correct: false },
        { text: "South Park", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question:
        "Which film franchise is set in a dystopian future where people fight for survival in a deadly televised competition?",
      answers: [
        { text: "The Hunger Games", correct: true },
        { text: "The Maze Runner", correct: false },
        { text: "Divergent", correct: false },
        { text: "The Twilight Saga", correct: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which famous actor starred as the Joker in *The Dark Knight*?",
      answers: [
        { text: "Heath Ledger", correct: true },
        { text: "Jared Leto", correct: false },
        { text: "Jack Nicholson", correct: false },
        { text: "Christian Bale", correct: false },
      ],
      difficulty: "medium",
    },

    // Difficult (8)
    {
      question:
        "Which TV show is set in the fictional town of Hawkins, Indiana, and revolves around supernatural occurrences?",
      answers: [
        { text: "Stranger Things", correct: true },
        { text: "Dark", correct: false },
        { text: "The X-Files", correct: false },
        { text: "Twin Peaks", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "Who was the director of the 1994 movie *Pulp Fiction*?",
      answers: [
        { text: "Quentin Tarantino", correct: true },
        { text: "Martin Scorsese", correct: false },
        { text: "Francis Ford Coppola", correct: false },
        { text: "Steven Spielberg", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "What is the name of the fictional country in *Game of Thrones* where Daenerys Targaryen was born?",
      answers: [
        { text: "Essos", correct: true },
        { text: "Westeros", correct: false },
        { text: "Sothoryos", correct: false },
        { text: "Dorne", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which artist’s 2020 album *Future Nostalgia* was a major commercial success?",
      answers: [
        { text: "Dua Lipa", correct: true },
        { text: "Ariana Grande", correct: false },
        { text: "Billie Eilish", correct: false },
        { text: "Taylor Swift", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "Which movie won the Academy Award for Best Picture in 2020?",
      answers: [
        { text: "Parasite", correct: true },
        { text: "Once Upon a Time in Hollywood", correct: false },
        { text: "1917", correct: false },
        { text: "Joker", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Who is the creator of the popular TV series *The Office* (US version)?",
      answers: [
        { text: "Greg Daniels", correct: true },
        { text: "Ricky Gervais", correct: false },
        { text: "Mindy Kaling", correct: false },
        { text: "Steve Carell", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question: "Which video game franchise features the character of Mario?",
      answers: [
        { text: "Super Mario", correct: true },
        { text: "The Legend of Zelda", correct: false },
        { text: "Pokemon", correct: false },
        { text: "Sonic the Hedgehog", correct: false },
      ],
      difficulty: "hard",
    },
    {
      question:
        "Which Netflix series follows a young girl’s journey to becoming a chess champion?",
      answers: [
        { text: "The Queen's Gambit", correct: true },
        { text: "The Crown", correct: false },
        { text: "Narcos", correct: false },
        { text: "Stranger Things", correct: false },
      ],
      difficulty: "hard",
    },
  ],
};
