import json
import pandas as pd
import math

# Read the Excel file
file_path = "For Discussion - CRS Relevant Data, Applications, and Tools from WRI.xlsx"

all_data = {}

excel_file = pd.ExcelFile(file_path)

for sheet_name in excel_file.sheet_names:
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    
    # Convert to dict
    data = df.to_dict('records')
    
    # Clean up NaN values
    for record in data:
        for key, value in record.items():
            if isinstance(value, float) and math.isnan(value):
                record[key] = None
    
    all_data[sheet_name] = data
    print(f"Sheet '{sheet_name}': {len(data)} records, columns: {list(df.columns)[:5]}...")

# Save all data
with open('all_datasets.json', 'w', encoding='utf-8') as f:
    json.dump(all_data, f, indent=2, ensure_ascii=False)

print(f"\nSaved all sheets to all_datasets.json")