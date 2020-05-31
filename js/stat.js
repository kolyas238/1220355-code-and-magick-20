'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 20;
var barHeight = CLOUD_HEIGHT - GAP * GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + BAR_WIDTH + BAR_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y * (TEXT_WIDTH / CLOUD_Y) + BAR_WIDTH);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + CLOUD_X * i, CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime) - GAP);
    ctx.fillText(players[i], CLOUD_X + TEXT_WIDTH + CLOUD_X * i, CLOUD_HEIGHT - BAR_WIDTH);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.round(Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + TEXT_WIDTH + CLOUD_X * i, CLOUD_HEIGHT - (BAR_WIDTH * (BAR_WIDTH / GAP)), CLOUD_Y * (TEXT_WIDTH / GAP), -((barHeight * times[i]) / maxTime) + TEXT_WIDTH);
  }
};
