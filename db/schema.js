db.trials.insert( 
  { _id: 1, 
    status: "Recruiting",
    name: "Phase 2 Tolerability and Effects of ALK-001 on Stargardt Disease",
    conditionsDisease: [
      "Stargardt Disease",
      "Stargardt Macular Degeneration", 
      "Stargardt Macular Dystrophy",
      "Autosomal Recessive Stargardt Disease 1 (ABCA4-related)"
      ], 
    interventions: "Drug: ALK-001|Drug: Placebo", 
    url: "https://ClinicalTrials.gov/show/NCT02402660",
    min_age_req: 12,
    max_age_req: 60,
    questions: {
    
        one: "Can you provide a genetic report indicating at least two ABCA4 disease-causing mutations? (When only one ABCA4 disease-causing mutation is reported, sponsors permission will be required.)?",
        
        answer_one: "Y",
     
      
        two: "Is at least one eye (called the primary study eye) must have at least one well-demarcated area of significantly reduced autofluorescence as imaged by fundus autofluorescence (FAF)?",
        
        answer_two: "Y",
      
      
        three: "Primary study eye must have clear ocular media and adequate pupillary dilation, including no allergy to dilating eyedrops, to permit good quality retinal imaging. Can you provide good quality retinal imaging?",
        
        answer_three: "Y",
      
      
        "four": "Some studies require you to be healthy as judged by an investigator. Do you feel you will pass this test?",
        
        answer_four: "Y",
      
      
        five: "Are you able and willing to comply with study requirements, restrictions and instructions? For example, some studies are 24-month studies.",
        
        answer_five: "Y",
      
      
        six: "Some studies require a female of childbearing potential to sign the informed consent about birth defects or attestation on contraception requirements. Are you able to sign informed consent?",
        
        answer_six: "Y"
    },  
  } 
)
db.trials.insert(
  {
  _id: 2,
  status: "Recruiting",
  name: "Phase I/IIa Study of SAR422459 in Patients With Stargardt\"s Macular Degeneration",
  conditionsDisease: [
    "Stargardt Disease"
    ], 
  interventions: "Drug: SAR422459", 
  url: "https://ClinicalTrials.gov/show/NCT01367444",
  min_age_req: 6,
  max_age_req: 150,
  questions: {

      one: "Some studies require Women of childbearing potential must have a negative pregnancy test at Day 1, and agree to use an effective form of contraception for at least three months, or be surgically sterile or postmenopausal, with the last menstrual period being over two years prior to enrollment. Select Yes if you will agree.",
      
      answer_one: "Y",
   
      two: "Some studies require males to agree with their partner to use two forms of contraception for at least three months following SAR422459 administration. Select Yes if you will agree.",
      
      answer_two: "Y",
    
      three: "If you will be enrolling in France, Are you affiliated to or benefit from a social security regimen?",
      
      answer_three: "Y",
    
      four: "Is your Visual acuity ≤20/200 or ≤20/100 in the worst eye?",
      
      answer_four: "Y",
    
      five: "Do you have Severe cone-rod dysfunction with no detectable or severely abnormal full-field electroretinogram responses?",
      
      answer_five: "Y",
    
      six: "Do you have Abnormal full-field electroretinogram responses?",
      
      answer_six: "N",
    
      seven: "Have you ever participated in an ocular gene transfer therapy study? no excludes?",
      
      answer_seven: "N",
    
      eight: "Do you have a past medical history of human immunodeficiency virus (HIV) or hepatitis A, B, or C infection?",
      
      answer_eight: "N"
    }, 
  }
)
db.trials.insert(
  {
    _id: 3,
    status: "Recruiting",
    name: "Clinical Study of Subretinal Transplantation of Human Embryo Stem Cell Derived Retinal Pigment Epitheliums in Treatment of Macular Degeneration Diseases",
    conditionsDisease: [
      "Macular Degeneration",
      "Stargardt\"s Macular Dystrophy"
      ], 
    interventions: "Procedure: Subretinal transplantation", 
    url: "https://ClinicalTrials.gov/show/NCT02749734",
    min_age_req: 18,
    max_age_req: 75,
    questions: {
        
      one: "Certain studies require that your disease not be effectively treated with conventional therapies. Are you not being effectively treated with conventional therapies?",
      
      answer_one: "Y",
    
      two: "Is your best corrected visual acuity scores between 19 and 73 letter of the ETDRs (early treatment diabetic retinopathy ) eye chart, including 19 and 73, (or the equivalent of Snellen eyesight from 20/400 to 20/40)?",
      
      answer_two: "Y",
    
      three: "Do you have visual loss caused by macular degeneration diseases?",
      
      answer_three: "Y"
    },
  }
)
db.trials.insert(
  {
    _id: 4,
    status: "Recruiting",
    name: "Inherited Retinal Degenerative Disease Registry Recruiting",
    conditionsDisease: [
      "Eye Diseases Hereditary",
      "Retinal Disease",
      "Achromatopsia",
      "Bardet-Biedl Syndrome",
      "Bassen-Kornzweig Syndrome",
      "Batten Disease",
      "Best Disease",
      "Choroidal Dystrophy",
      "Choroideremia",
      "Cone Dystrophy",
      "Cone-Rod Dystrophy",
      "Congenital Stationary Night Blindness",
      "Enhanced S-Cone Syndrome",
      "Fundus Albipunctatus",
      "Goldmann-Favre Syndrome",
      "Gyrate Atrophy",
      "Juvenile Macular Degeneration",
      "Kearns-Sayre Syndrome",
      "Leber Congenital Amaurosis",
      "Refsum Syndrome",
      "Retinitis Pigmentosa",
      "Retinitis Punctata Albescens",
      "Retinoschisis",
      "Rod-Cone Dystrophy",
      "Rod Dystrophy",
      "Rod Monochromacy",
      "Stargardt Disease",
      "Usher Syndrome",
      ], 
    interventions: null, 
    url: "https://ClinicalTrials.gov/show/NCT02435940",
    min_age_req: 0,
    max_age_req: 150,
    questions: {
        
        one: "Have you been Diagnosed with an inherited retinal degenerative disease OR are you Genetically-related to a person diagnosed with an inherited retinal degenerative disease?",
        
        answer_one: "Y"
    },
  }
)

db.trials.insert(
 {
    _id: 5,
    status: "Recruiting",
    name: "Rod and Cone Mediated Function in Retinal Disease",
    conditionsDisease: [
      "Retinal Degeneration",
      "Retinitis Pigmentosa",
      "Stargardt\"s Disease"
      ], 
    interventions: "Procedure: Subretinal transplantation", 
    url: "https://ClinicalTrials.gov/show/NCT02617966",
    min_age_req: 5,
    max_age_req: 150,
    questions: {

        one: "Do you have changes in pre-retinal media sufficient to obscure a view of the retina?",
        
        answer_one: "Y"
    },
  }
)
db.trials.insert(
  {
  _id: 6,
  status: "Recruiting",
  name: "High Resolution Retinal Imaging Recruiting",
  conditionsDisease: [
    "Stargardts",
    "Retinitis Pigmentosa",
    "Age-related Macular Degeneration",
    "Choroideremia",
    "Geographic Atrophy"
    ], 
  interventions: "Procedure: Retinal imaging", 
  url: "https://ClinicalTrials.gov/show/NCT01866371",
  min_age_req: 7,
  max_age_req: 150,
  questions: null
  }
)
db.trials.insert(
  {
  _id: 7,
  status: "Recruiting",
  name: "Stem Cell Ophthalmology Treatment Study",
  conditionsDisease: [
    "Optic Nerve Disease",
    "Hereditary Retinal Dystrophy",
    "Age-related Macular Degeneration",
    "Macular Degeneration",
    "Retinal Disease",
    "Glaucoma"
    ], 
  interventions: "Procedure: IV (Intravenous)|Procedure: IVIT (Intravitreal)|Procedure: IO (Intraocular)", 
  url: "https://ClinicalTrials.gov/show/NCT01920867",
  min_age_req: 18,
  max_age_req: 150,
  questions: {
      
      one: "Do you have less than or equal to 20/40 best corrected central visual acuity in one or both eyes AND/OR an abnormal visual field in one or both eyes?",
      
      answer_one: "Y",
    
      two: " Have you been at least 3 months post-surgical treatment intended to treat any ophthalmologic disease AND are you stable?",
      
      answer_two: "Y",
    
      three: "Are you under current medical therapy (pharmacologic treatment) for a retinal or optic nerve disease?",
      
      answer_three: "Y",
    
      four: "Do you feel you have the potential for improvement with Bone Marrow Stem Cell treatment AND be at minimal risk of any potential harm from the procedure?",
      
      answer_four: "Y",
    
      five: "Are you medically stable and able to be medically cleared by your primary care physician OR a licensed primary care practitioner for the procedure? (Medical clearance means that in the estimation of the primary care practitioner, the patient can reasonably be expected to undergo the procedure without significant medical risk to health.)?",
      
      answer_five: "Y"
    },
  }
)
db.trials.insert(
  {
  _id: 8,
  status: "Recruiting",
  name: "Natural History of Eye Diseases Related to ABCA4 Mutations",
  conditionsDisease: [
    "Retinal Degeneration",
    "ABCA4-Related Retinopathies"
    ], 
  interventions: "Procedure: IV (Intravenous)|Procedure: IVIT (Intravitreal)|Procedure: IO (Intraocular)", 
  url: "https://ClinicalTrials.gov/show/NCT01736293",
  min_age_req: 12,
  max_age_req: 150,
  questions: 
    {
      one: "Participant must be able to cooperate with detailed psychophysics and electrophysiology testing. Are you able to do this?",
      
      answer_one: "Y",
    
      two:  "Participant must be able to provide a blood sample. Are you able to provide a blood sample?",
      
      answer_two: "Y",
    
      three: "Do you have two (or more) clear mutations in the ABCA4 gene (ascertained with CLIA-certified testing) that are known to be associated with retinal disease OR one clear mutation in ABCA4 associated with a classic presentation of fundus flavimaculatus/Stargardt macular dystrophy (e.g., flecks, macular atrophy) OR one clear mutation in ABCA4, a cone-rod degeneration, AND no mutation in the ELOV4 or RDS genes?",
      
      answer_three: "Y"
    },
  }
)