export default {
  id:2,
  category: "health",
  categoryTitle: "Ton état de santé",
  currentQuestion:0,

  questions:[{
      id:1,
      label: "Combien de café bois-tu par jour",
      multiple:false,
      previousAnswer:[],
      previousComment:"",
      answers:[{
        id:1,
        label:"de un à trois cafés"
      },{
        id:2,
        label:"de trois à quatre cafés"
      },{
        id:3,
        label:"plus de quatre cafés"
      }]
  }, {
      id:2,
      label: "Est ce que tu fumes?",
      multiple:true,
      previousAnswer:[],
      previousComment:"",
      answers:[{
        id:4,
        label:"je ne fume pas"
      },{
        id:5,
        label:"de une à quatre cigarettes par jours"
      },{
        id:6,
        label:"plus de quatre cigarettes par jours"
      }]
  }]
}
