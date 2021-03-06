{
    type: 'column2d',
    id: 'wh-chart',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "zune",
            "rotateValues": "1"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    },
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for width & height controls
            var controls = document.createElement('div');
            controls.setAttribute('class', 'action-elements');
            controls.innerHTML = '<label>Width:</label><span class="btn-group"><input type="button" class="btn" value="+" id="wplus" /><input type="button" class="btn" value="-" id="wminus" /></span><label>Height:</label><span class="btn-group"><input type="button" class="btn" value="+" id="hplus" /><input type="button" value="-" class="btn" id="hminus" /></span>';

            args.container.appendChild(controls);

            // set css style for "span" elements in control div
            var span = controls.getElementsByTagName('span');
            for (var i = 0; i < span.length; i++) {
                span[i].style.cssText = 'font-size: 11px;';
            }

            // set css styles for "input" elements in controls div
            var input = controls.getElementsByTagName('input');
            for (i = 0; i < input.length; i++) {
                input[i].style.cssText = 'font-size: 11px;';
            }
        },
        'renderComplete': function() {
            // Get chart object
            var revenueChart = FusionCharts.items['wh-chart'];

            // resize the chart by attaching functions to buttons that increase or
            // decrease chart dimensions              
            document.getElementById("wplus").onclick = function() {
                revenueChart.resizeTo((parseInt(revenueChart.width, 10) + 20) + "%");
            };

            document.getElementById("wminus").onclick = function() {
                revenueChart.resizeTo((parseInt(revenueChart.width, 10) - 20) + "%");
            };

            document.getElementById("hplus").onclick = function() {
                revenueChart.resizeTo(undefined, Number(revenueChart.height) + 20);
            };

            document.getElementById("hminus").onclick = function() {
                revenueChart.resizeTo(undefined, Number(revenueChart.height) - 20);
            };
        }
    }
}