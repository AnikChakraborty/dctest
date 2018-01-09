---
permalink: api/tutorials/plot-discontinuous-data.html
title: Plot Discontinuous Data | FusionCharts
description: FusionCharts XT lets you do this very easily, just leaving the value attribute blank will do the trick.
heading: Plot Discontinuous Data
chartPresent: true
layout: page
---

You might often want to plot charts with incomplete data points - that is, missing data. For example, when plotting a monthly sales chart, you might not have data for all the months.

You might just want to indicate the missing data with a blank space on the chart, not plotting anything at that particular place.

FusionCharts XT lets you do this very easily, just leaving the value attribute blank will do the trick.

This is how a chart with discontinuous data would look like:

{% embed_chart plot-discontinuous-data-example-1.js %}
The data structure of the above chart is shown here:

<ul class='code-tabs'>
    <li class='active'><a data-toggle='json'>JSON</a></li>
    <li><a data-toggle='xml'>XML</a></li>
</ul>
<div class='tab-content'>
    <div class='tab json-tab active'>
```json
       	{
		    "chart": {
		        "caption": "Harry's SuperMart",
		        "subCaption": "Monthly revenue for last year",
		        "xAxisName": "Month",
		        "yAxisName": "Amount",
		        "numberPrefix": "$",
		        "theme": "fint",
		        "rotateValues": "1"
		    },
		    "data": [
		        {
		            "label": "Jan",
		            "value": "420000"
		        },
		        {
		            "label": "Feb",
		            "value": "810000"
		        },
		        {
		            "label": "Mar",
		            "value": "720000"
		        },
		        {
		            "label": "Apr",
		            "value": "550000"
		        },
		        {
		            "label": "May"
		        },
		        {
		            "label": "Jun"
		        },
		        {
		            "label": "Jul",
		            "value": "680000"
		        },
		        {
		            "label": "Aug",
		            "value": "620000"
		        },
		        {
		            "label": "Sep",
		            "value": "610000"
		        },
		        {
		            "label": "Oct",
		            "value": "490000"
		        },
		        {
		            "label": "Nov",
		            "value": "900000"
		        },
		        {
		            "label": "Dec",
		            "value": "730000"
		        }
		    ]
		}
        ```
    </div>
    <div class='tab xml-tab'>
```xml
        <chart caption="Harry&#39;s SuperMart" subcaption="Monthly revenue for last year" xaxisname="Month" yaxisname="Amount" numberprefix="$" theme="fint" rotatevalues="1">
		    <set label="Jan" value="420000" />
		    <set label="Feb" value="810000" />
		    <set label="Mar" value="720000" />
		    <set label="Apr" value="550000" />
		    <set label="May" />
		    <set label="Jun" />
		    <set label="Jul" value="680000" />
		    <set label="Aug" value="620000" />
		    <set label="Sep" value="610000" />
		    <set label="Oct" value="490000" />
		    <set label="Nov" value="900000" />
		    <set label="Dec" value="730000" />
		</chart>
        ```
    </div>
</div>

## Connecting Null Data
In our above Line chart, we were showing a break for the months of May and June. If you do not want to show this break for May and Jun, and want April to directly connect to July, you can do so using the `connectNullData` attribute.

This is how a chart with null data connected looks like:

{% embed_chart plot-discontinuous-data-example-2.js %}
The data structure of the above chart is shown here:

<ul class='code-tabs'>
    <li class='active'><a data-toggle='json'>JSON</a></li>
    <li><a data-toggle='xml'>XML</a></li>
</ul>
<div class='tab-content'>
    <div class='tab json-tab active'>
```javascript
       {
		    "chart": {
		        "caption": "Harry's SuperMart",
		        "subCaption": "Monthly revenue for last year",
		        "xAxisName": "Month",
		        "yAxisName": "Amount",
		        "numberPrefix": "$",
		        "theme": "fint",
		        "rotateValues": "1",
		        "connectNullData": "1"
		    },
		    "data": [
		        {
		            "label": "Jan",
		            "value": "420000"
		        },
		        {
		            "label": "Feb",
		            "value": "810000"
		        },
		        {
		            "label": "Mar",
		            "value": "720000"
		        },
		        {
		            "label": "Apr",
		            "value": "550000",
		            "dashed": "1"
		        },
		        {
		            "label": "May"
		        },
		        {
		            "label": "Jun"
		        },
		        {
		            "label": "Jul",
		            "value": "680000"
		        },
		        {
		            "label": "Aug",
		            "value": "620000"
		        },
		        {
		            "label": "Sep",
		            "value": "610000"
		        },
		        {
		            "label": "Oct",
		            "value": "490000"
		        },
		        {
		            "label": "Nov",
		            "value": "900000"
		        },
		        {
		            "label": "Dec",
		            "value": "730000"
		        }
		    ]
		}
        ```
    </div>
    <div class='tab xml-tab'>
```xml
        <chart caption="Harry&#39;s SuperMart" subcaption="Monthly revenue for last year" xaxisname="Month" yaxisname="Amount" numberprefix="$" theme="fint" rotatevalues="1" connectnulldata="1">
		    <set label="Jan" value="420000" />
		    <set label="Feb" value="810000" />
		    <set label="Mar" value="720000" />
		    <set label="Apr" value="550000" dashed="1" />
		    <set label="May" />
		    <set label="Jun" />
		    <set label="Jul" value="680000" />
		    <set label="Aug" value="620000" />
		    <set label="Sep" value="610000" />
		    <set label="Oct" value="490000" />
		    <set label="Nov" value="900000" />
		    <set label="Dec" value="730000" />
		</chart>
        ```
    </div>
</div>

Here we make use of the `dashed` attribute to differentiate between continuous data and the disconnected points.

The `dashed` attribute must be specified just before the discontinuity starts.

