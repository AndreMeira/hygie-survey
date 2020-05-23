export default {
  id:1,
  category: "food",
  categoryTitle: "Tes habitudes alimentaires",
  currentQuestion:0,

  questions:[{
      id:1,
      label: "Est ce que tu manges du poisson",
      multiple:false,
      response:[],
      comment:"",
      previousAnswer:[],
      previousComment:"",
      answers:[{
        id:1,
        label:"jamais"
      },{
        id:2,
        label:"de trois à quatre fois par semaine"
      },{
        id:3,
        label:"plus de quatre fois par semaine"
      }]
  }, {
      id:2,
      label: "Est ce que tu manges des carottes?",
      response:[],
      multiple:true,
      previousAnswer:[],
      previousComment:"",
      answers:[{
        id:4,
        label:"jamais"
      },{
        id:5,
        label:"de une à quatre fois par semaine"
      },{
        id:6,
        label:"plus de quatre fois par semaine"
      }]
  }]
}
