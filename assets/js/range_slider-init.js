$(function () {
   // first one initialize
   $("#slider-3").slider({
      range: true,
      min: 0,
      max: 500,
      values: [35, 200],
      slide: function (event, ui) {
         $("#slider-3 .ui-slider-handle:first-of-type").attr("data-val", ui.values[0]);
         $("#slider-3 .ui-slider-handle:last-of-type").attr("data-val", ui.values[1]);
      }
   });
   $("#slider-3 .ui-slider-handle:first-of-type").attr("data-val", "35");
   $("#slider-3 .ui-slider-handle:last-of-type").attr("data-val", "200");

   
   // second one initialize


   $("#slider-2").slider({
      range: true,
      min: 0,
      max: 500,
      values: [52, 99],
      slide: function (event, ui) {
         $("#slider-2 .ui-slider-handle:first-of-type").attr("data-val", ui.values[0]);
         $("#slider-2 .ui-slider-handle:last-of-type").attr("data-val", ui.values[1]);

      }
   });
   $("#slider-2 .ui-slider-handle:first-of-type").attr("data-val", "52");
   $("#slider-2 .ui-slider-handle:last-of-type").attr("data-val", "99");
});