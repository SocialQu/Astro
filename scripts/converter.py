import json
import csv
from json import encoder


# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
	data = []
	
	# Open a csv reader called DictReader
	with open(csvFilePath, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)
		
		# Convert each row into a dictionary
		# and add it to data
		for rows in csvReader:
			data.append(rows)

	# Open a json writer, and use the json.dumps()
	# function to dump data
	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=4, ensure_ascii=False))
		
# Driver Code

# Decide the two file paths according to your
# computer system
csvFilePath = r'data/users.csv'
jsonFilePath = r'data/users.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)
