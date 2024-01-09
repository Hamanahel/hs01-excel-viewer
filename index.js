const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
ej.base.registerLicense('Mgo+DSMBaFt/QHNqVVhlXlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS39Rd0diXH9cc3NRTw==;Mgo+DSMBPh8sVXJ0S0V+XE9BdFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdERhWH1fdXRXQmFfVQ==;ORg4AjUWIQA/Gnt2VVhjQlFac11JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdiW35ccXFVRGRfUU0=;MTExNDYyNEAzMjMwMmUzMzJlMzBKT3JsTUROWTkydURzU053eHhHQlc5dG8xMWk5N1QwQ0wrQ0tmczY5WUpZPQ==;MTExNDYyNUAzMjMwMmUzMzJlMzBXdU0ycFR0TzF3bU5zRlgwS2FuS29pMlI1Z1BMeVRtMlBJYkgwQ0lIKzZNPQ==;NRAiBiAaIQQuGjN/V0Z+X09EaFpAVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWH1fcnVQRmJZUEJy;MTExNDYyN0AzMjMwMmUzMzJlMzBNRUNkamV3Ti9mS1FFQ3N0ZS9Gb0ppczNtTWtnRm9LUGtKdWwwVnRmakdrPQ==;MTExNDYyOEAzMjMwMmUzMzJlMzBlbWMzdUR5SGlGdUhaelBEMGM0RlRkbGZyVW1IQUk4a3ZQRHJKM3hkYXlJPQ==;Mgo+DSMBMAY9C3t2VVhjQlFac11JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdiW35ccXFVRGVVWE0=;MTExNDYzMEAzMjMwMmUzMzJlMzBacGxpT3Q1RVhKVC9CemRhVUxvK3dITEFBVFh6VVcvOUtUQ01SckR5VFpFPQ==;MTExNDYzMUAzMjMwMmUzMzJlMzBCSzJsUjdybUNHTFAvSXBhYS9uT3FabUdLRjl3KzNUY28vWFNyQTVTY000PQ==;MTExNDYzMkAzMjMwMmUzMzJlMzBNRUNkamV3Ti9mS1FFQ3N0ZS9Gb0ppczNtTWtnRm9LUGtKdWwwVnRmakdrPQ==');
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowOpen: true,
    openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
	created: function () {
		fetch(url)
			.then((response) => {
				response.blob().then((fileBlob) => {
					var file = new File([fileBlob], "Sample.xlsx");
					spreadsheet.open({ file: file });
				})
			})
	}
});
spreadsheet.appendTo('#spreadsheet');