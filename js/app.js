'use strict'; 
let keywordArray = [];
let objectArray1 = [];
let objectArray2 = [];

var Horns = function (index) {
  this.title = index.title;
  this.keyword = index.keyword;
  this.horns = index.horns;
  this.description = index.description;
  this.image_url = index.image_url;
  objectArray.push(this);
}

let templateId = '#photoTemplate';

Horns.prototype.toHtml = function(){
    let template = $(templateId).html();
    let html = Mustache.render(template, this);
    $('main').append(html);
}
//render all keywords in dom
var renderKeyword = function (value) {
  let $keyWordClone = $('#keyword').clone();
  $keyWordClone.attr('value', value);
  $keyWordClone.text(value);
  $('select').append($keyWordClone);
}
// Horns.prototype.render = function () {
//   let $hornsClone = $('#photo-template').clone();
//   console.log($hornsClone.html());
//   $('main').append($hornsClone);
//   $hornsClone.find('h2').text(this.title);
//   $hornsClone.find('img').attr('src', this.image_url);
//   $hornsClone.find('p').text(this.description);
//   $hornsClone.attr('id', this.title);
// }
Horns.readJson = () => {
  const ajaxsettings = {
    method: 'get',
    dataType: 'json',
  }
  $.ajax('data/page-1.json', ajaxsettings)
    .then(data => {
      let tempArray = [];
      data.forEach(item => {
        let horns = value.toMustacheTemplate();
        $('main').appendh
        tempArray.push(horns.keyword);
        horns.toHtml();
        // horns.render();
        // horns.renderKeyword();
      })
      tempArray.forEach(index =>{
        if(!keywordArray.includes(index)){
          keywordArray.push(index);
        }
      })
      console.log(objectArray);
      console.log('KeywordArray',keywordArray);
      keywordArray.forEach(index =>{
        renderKeyword(index);
      })
    })
}
$(() => Horns.readJson())