import schemathesis


SCHEMA_URL = "https://webapifortesting20261019143850-hdg6ajbra0d6g2gk.westeurope-01.azurewebsites.net/swagger/v1/swagger.json"
schema = schemathesis.openapi.from_url(SCHEMA_URL)


@schema.parametrize()
def test_api(case):
	response = case.call()
	case.validate_response(response)
