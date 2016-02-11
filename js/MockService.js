var FieldService = {
	getFieldMetaDataJSON: function (fieldId)
	{
		// in real life, this would call an API
		return '{
		  "label": "Sales region",
		  "required": false,
		  "choices": [
			"Asia",
			"Australia",
			"Western Europe",
			"North America",
			"Eastern Europe",
			"Latin America",
			"Middle East and Africa"
		  ],
		  "displayAlpha": true,
		  "default": "North America"
		}';
	}
}