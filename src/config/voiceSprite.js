const sprites = {
  intro_intro_advice: [0, 20000],
  detection_center_advice: [21000, 3850], // end: 24850
  detection_center_errors: [26000, 5200], // end: 31200
  detection_center_success: [32000, 1300], // end: 33300
  detection_right_advice: [34000, 1600], // end: 35600
  detection_right_errorTooMuch: [38000, 4400], // end: 42400
  detection_right_errorOpposite: [36000, 1300], // end: 37300
  detection_left_advice: [43000, 2300], // end: 45300
  detection_left_errorTooMuch: [38000, 4400], // end: 42400
  detection_left_errorOpposite: [46000, 1200], // end: 47200
  detection_normal_advice: [48000, 3400], // end: 51400
  detection_normal_success: [53000, 6000], // end: 59000
  avatarPersonnalisation_advice: [60000, 68800], // end: 68800
  backgroundPersonnalisation_park_advice: [70000, 6300], // end: 76300
  backgroundPersonnalisation_park_error: [86000, 2500], // end: 88500
  backgroundPersonnalisation_mountain_advice: [90000, 5700], // end: 95700
  backgroundPersonnalisation_mountain_error: [97000, 2300], // end: 99300
  backgroundPersonnalisation_museum_advice: [100000, 5800], // end: 105800
  backgroundPersonnalisation_museum_error: [107000, 2800], // end: 109800
  backgroundPersonnalisation_eiffelTower_advice: [111000, 3500], // end: 114500
  backgroundPersonnalisation_eiffelTower_error: [115000, 2400], // end: 117400
  backgroundPersonnalisation_bathroom_advice: [118000, 3500], // end: 121500
  backgroundPersonnalisation_bathroom_error: [122000, 2600], // end: 124600
  backgroundPersonnalisation_cocooning_advice: [126000, 5000], // end: 131000
  backgroundPersonnalisation_cocooning_error: [132000, 2400], // end: 134400
  backgroundPersonnalisation_beach_advice: [174000, 3400], // end: 177400
  backgroundPersonnalisation_beach_error: [178000, 6400], // end: 184400
  backgroundPersonnalisation_errorsLevel1: [135000, 2700], // end: 137700
  backgroundPersonnalisation_errorsLevel2_1: [139000, 2400], // end: 141400
  backgroundPersonnalisation_errorsLevel2_2: [143000, 3600], // end: 146600
  backgroundPersonnalisation_errorsLevel2_3: [148000, 4000], // end: 152000
  backgroundPersonnalisation_errorsLevel2_4: [153000, 5200], // end: 158200
  backgroundPersonnalisation_errorsLevel2_5: [159000, 3300], // end: 162300
  backgroundPersonnalisation_errorsLevel3: [163000, 5700], // end: 168700
  backgroundPersonnalisation_errorsLevel4: [170000, 1200], // end: 171200
  backgroundPersonnalisation_errorsLevel5: [172000, 900], // end: 172900
  experience_rotationLeft_advice: [185000, 2900], // end: 187900
  experience_rotationLeft_errorTooMuch_1: [191000, 700], // end: 191700
  experience_rotationLeft_errorTooMuch_2: [192000, 1000], // end: 193000
  experience_rotationLeft_errorOpposite: [189000, 1200], // end: 190200
  experience_rotationLeft_errorsNotEnough_1: [194000, 1000], // end: 195000
  experience_rotationLeft_errorsNotEnough_2: [196000, 1100], // end: 197100
  experience_rotationRight_advice: [198000, 4000], // end: 202000
  experience_rotationRight_errorTooMuch_1: [191000, 700], // end: 191700
  experience_rotationRight_errorTooMuch_2: [192000, 1000], // end: 193000
  experience_rotationRight_errorOpposite: [189000, 1200], // end: 190200
  experience_rotationRight_errorsNotEnough_1: [194000, 1000], // end: 195000
  experience_rotationRight_errorsNotEnough_2: [196000, 1100], // end: 197100
  experience_rotationRight_success: [203000, 2100], // end: 205100
  experience_smile_advice: [206000, 1100], // end: 207100
  experience_smile_errorsNotEnough: [208000, 1300], // end: 209300
  experience_smile_success: [203000, 2100], // end: 205100
  experience_teeth_advice: [212000, 1200], // end: 213200
  experience_teeth_errorsNotEnough: [215000, 1500], // end: 216500
  experience_teeth_success: [218000, 2500], // end: 220500
  experience_tiltRight_advice: [226000, 1700], // end: 227700
  experience_tiltRight_errorTooMuch_1: [191000, 700], // end: 191700
  experience_tiltRight_errorTooMuch_2: [192000, 1000], // end: 193000
  experience_tiltRight_errorsNotEnough_1: [194000, 1000], // end: 195000
  experience_tiltRight_errorsNotEnough_2: [196000, 1100], // end: 197100
  experience_tiltRight_success: [229000, 2400], // end: 231400
  experience_rotationUp_advice: [232000, 2800], // end: 234800
  experience_rotationUp_errorTooMuch_1: [191000, 700], // end: 191700
  experience_rotationUp_errorTooMuch_2: [192000, 1000], // end: 193000
  experience_rotationUp_errorsNotEnough_1: [194000, 1000], // end: 195000
  experience_rotationUp_errorsNotEnough_2: [196000, 1100], // end: 197100
  experience_rotationDown_advice: [236000, 1800], // end: 237800
  experience_rotationDown_errorTooMuch_1: [191000, 700], // end: 191700
  experience_rotationDown_errorTooMuch_2: [192000, 1000], // end: 193000
  experience_rotationDown_errorsNotEnough_1: [194000, 1000], // end: 195000
  experience_rotationDown_errorsNotEnough_2: [196000, 1100], // end: 197100
  experience_rotationDown_success: [229000, 2400], // end: 231400
  experience_eyeBrowUp_advice: [240000, 2400], // end: 242400
  experience_eyeBrowUp_errorsNotEnough_1: [194000, 1000], // end: 195000
  experience_eyeBrowUp_errorsNotEnough_2: [196000, 1000], // end: 197100
  experience_eyeBrowUp_success: [243000, 1500], // end: 244500
  experience_smileLeft_advice: [246000, 1700], // end: 247700
  experience_smileLeft_errorsNotEnough_1: [249000, 3600], // end: 252600
  experience_smileLeft_errorsNotEnough_2: [196000, 1000], // end: 197100
  experience_eyeLeftClose_advice: [254000, 3800], // end: 257800
  experience_eyeLeftClose_errorsNotEnough_1: [259000, 3300], // end: 262300
  experience_eyeLeftClose_errorsNotEnough_2: [263000, 1600], // end: 264600
  application_lostPosing_error: [270000, 4100] // end: 274100
}

export default sprites
