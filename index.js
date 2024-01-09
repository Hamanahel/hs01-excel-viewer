const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
if(url.length > 0) {
	ej.base.registerLicense('MzAyNjQxOUAzMjMxMmUzMTJlMzMzN1RtaEVIRjVodjUxTnJmRGROU0M1WWJFOGt4OWNEeFdiL2JIbEFQRWhOVlk9;MzAyNjQyMEAzMjMxMmUzMTJlMzMzN0NKck1WWTF1S2p0OVBuZ0hUdlRzSEVzeThjQXNGZy84T0g1YzJZbzhYL3M9;Mgo+DSMBaFt+QHFqVkFrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRbQlxjQH5UdUdnX31deHc=;Mgo+DSMBPh8sVXJ1S0d+X1ZPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9nSX9Tf0VkWn1adnZQQmA=;ORg4AjUWIQA/Gnt2VFhhQlJDfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5SdkxjXnxcdHJXQWBa;NRAiBiAaIQQuGjN/V0d+XU9HcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3pTd0VqWXhdcnBTRGdcVw==;MzAyNjQyNUAzMjMxMmUzMTJlMzMzN1pBazRjSktNblVZVno3ejhMR0I2ZmVQVHk1Z0dXbUh3L2N4d200Mko2b2c9;MzAyNjQyNkAzMjMxMmUzMTJlMzMzN1oydUZwcmRnQlJnVGxpaTlCSmxQNHV2Vzh2dXNZeW5JS2FFNkpXZnZxVU09;Mgo+DSMBMAY9C3t2VFhhQlJDfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5SdkxjXnxcdHJWQGRY;MzAyNjQyOEAzMjMxMmUzMTJlMzMzN0UzeXk1a0ZyaVBIUmRMR2VLTE5CdGN2VjFqKzJRMzhaNGxRTkt2ZzUxNlk9;MzAyNjQyOUAzMjMxMmUzMTJlMzMzN2IveEpVWnppQUpHSG9hNG5odUxWY0t4VUEyK1pXLzNmdUhoRXZqQytXcTA9;MzAyNjQzMEAzMjMxMmUzMTJlMzMzN1pBazRjSktNblVZVno3ejhMR0I2ZmVQVHk1Z0dXbUh3L2N4d200Mko2b2c9');
	var spreadsheet = new ej.spreadsheet.Spreadsheet({
		allowOpen: true,
		openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
		saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
		created: function () {
			fetch(url)
				.then((response) => {
					response.blob().then((fileBlob) => {
						var file = new File([fileBlob], "Report.xlsx");
						spreadsheet.open({ file: file });
					})
				})
		}
	});
	spreadsheet.appendTo('#spreadsheet');
}