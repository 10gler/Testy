import schemathesis


SCHEMA_URL = "http://localhost:5252/swagger/v1/swagger.json"
schema = schemathesis.openapi.from_url(SCHEMA_URL)


@schema.parametrize()
def test_api(case):
	response = case.call()
	case.validate_response(response)
